import {AntlrParser, AntlrRuleError, AntlrRuleWrapper, AntlrTokenWrapper} from 'antlr4-helper';

//
// CodeMirror addons
//
require('codemirror/addon/lint/lint');
require('codemirror/addon/selection/active-line');
require('codemirror/addon/display/placeholder');
require('codemirror/addon/runmode/runmode');
require('codemirror/keymap/vim');
require('codemirror/addon/display/autorefresh');

export const ACTIVE_HINT_CLASS = 'CodeMirror-hint-active';
export const HINT_CLASS = 'CodeMirror-hint';
export const HINTS_CLASS = 'CodeMirror-hints';

import * as CodeMirror from 'codemirror';
import * as _ from 'lodash';
import {Editor, EditorChange} from 'codemirror';
import {AntlrEditor} from '../../editor/antlr-editor';
import {RuleDecoration} from '../../decoration/rule-decoration';
import {KeyMapping} from '../../key-mapping/key-mapping';
import {TokenDecoration} from '../../decoration/token-decoration';
import {EditorPosition} from '../../types';
import {Subject} from 'rxjs/index';
import {CodeMirrorRuleDecoration} from './decoration/codemirror-rule-decoration';
import {ParserRuleContext, Token} from 'antlr4';
import {CodeMirrorTokenDecoration} from './decoration/codemirror-token-decoration';
import {AutoCompleteEvent} from '../../event/auto-complete-event';
import {filter} from 'rxjs/internal/operators';
import {Completion} from '../../completion/completion';
import {AutoCompletionHandler} from '../../handler/auto-completion-handler';
import {CompletionPopup} from '../../completion/completion-popup';
import {GenericCompletionPopup} from '../../completion/generic-completion-popup';
import {EditorChangeEvent} from '../../event/editor-change-event';
import {CodeMirrorChangeEvent} from './event/codemirror-change-event';
import {Placeholder} from '../../placeholder/placeholder';
import {CodeMirrorPlaceholder} from './placeholder/codemirror-placeholder';
import {BookmarkDecoration} from '../../bookmark/bookmark';
import {CodeMirrorBookmark} from './bookmark/codemirror-bookmark';
import {removeElement} from '../../util/dom';

export class CodeMirrorEditor implements AntlrEditor {
    editorImplementation: Editor;

    private defaultTokenStyles: { [tokenName: string]: string };
    private defaultRuleStyles: { [ruleName: string]: string };
    private cursorPosition: EditorPosition;
    private displaySingleError: boolean;
    private changeSubject: Subject<EditorChangeEvent>;
    private ruleDecorations: Map<ParserRuleContext, RuleDecoration>;
    private placeholdersRendered: Set<Placeholder>;
    private bookmarkDecorations: Set<BookmarkDecoration>;
    private tokenDecorations: Map<Token, TokenDecoration>;
    private ruleErrorMessageHandlers: Map<string, (err: AntlrRuleError) => string>;
    private autoCompleteSubject: Subject<AutoCompleteEvent>;
    private displayDecorations: boolean;
    private autoCompletionHandler: AutoCompletionHandler;
    private currentCompletionPopup: CompletionPopup;
    private lastChangeEvent: EditorChangeEvent;
    private defaultHintMapping: KeyMapping;
    private selections: Set<[EditorPosition, EditorPosition]>;
    autoCompleteContainer: HTMLElement;
    private customErrors: Set<AntlrRuleError>;
    private validators: Set<(rule: AntlrRuleWrapper) => AntlrRuleError>;
    private setValueEvent: boolean;
    private defaultCursorBlinkingRate: boolean;

    constructor(private parser: AntlrParser, private domContainer?: HTMLElement) {
        const mode = _.uniqueId('antlrGrammarMode');

        this.displayDecorations = true;
        this.customErrors = new Set<AntlrRuleError>();
        this.changeSubject = new Subject<EditorChangeEvent>();
        this.validators = new Set<(rule: AntlrRuleWrapper) => AntlrRuleError>();
        this.setValueEvent = false;

        this.ruleErrorMessageHandlers = new Map<string, (err: AntlrRuleError) => string>();
        this.autoCompleteSubject = new Subject<AutoCompleteEvent>();
        this.defaultTokenStyles = {};
        this.defaultRuleStyles = {};
        this.ruleDecorations = new Map<ParserRuleContext, RuleDecoration>();
        this.tokenDecorations = new Map<Token, TokenDecoration>();
        this.autoCompletionHandler = new AutoCompletionHandler(this);
        this.placeholdersRendered = new Set<Placeholder>();
        this.bookmarkDecorations = new Set<BookmarkDecoration>();
        this.selections = new Set<[EditorPosition, EditorPosition]>();

        if (this.domContainer === undefined) {
            this.domContainer = document.createElement('div');
        }

        this.domContainer.classList.add('antlr-editor');
        this.autoCompleteContainer = this.domContainer;

        this.editorImplementation = CodeMirror(this.domContainer, {});
        this.editorImplementation.getDoc().getMode().name = mode;

        this.editorImplementation.setOption('autoRefresh', true);
        this.defaultCursorBlinkingRate = this.editorImplementation.getOption('cursorBlinkRate');

        this.attachBasicEvents();
        this.autoCompletionHandler.processEvents();
        this.updateCursorPosition();

        CodeMirror.registerHelper('lint', mode, () => {
            if (!this.displaySingleError) {
                const parserErrors = this.getEditorErrors();
                return parserErrors.map((err) => this.mapParseErrorToCodeMirrorError(err));
            } else {
                if (this.hasErrors()) {
                    return [this.mapParseErrorToCodeMirrorError(this.getRelevantEditorError())];
                }

                return [];
            }
        });

        parser.addParserStartListener(() => {
            Array.from(this.tokenDecorations.values())
                .forEach((decoration) => decoration.remove());

            Array.from(this.ruleDecorations.values())
                .forEach((decoration) => decoration.remove());

            Array.from(this.bookmarkDecorations.values())
                .forEach((decoration) => decoration.remove());

            this.selections.clear();
            this.ruleDecorations.clear();
            this.bookmarkDecorations.clear();
            this.tokenDecorations.clear();
            this.placeholdersRendered.clear();
            this.customErrors.clear();
        });

        parser.addParserCompleteListener(() => {
            this.clearAllCompletions();

            this.editorImplementation.operation(() => {
                this.executeDefaultStyling();
            });

            if (this.lastChangeEvent) {
                this.changeSubject.next(this.lastChangeEvent);
                this.lastChangeEvent = undefined;
            }
        });
    }

    setAutoCompleteContainer(el: HTMLElement): void {
        this.autoCompleteContainer = el;
    }

    replaceRange(range: [EditorPosition, EditorPosition], text: string): [EditorPosition, EditorPosition] {
        const newRange = this.parser.replaceRange(range, text);

        this.cursorPosition = newRange[1];
        this.setValueEvent = true;

        const change = {
            from: {ch: newRange[0].column, line: newRange[0].line},
            to: {ch: newRange[0].column, line: newRange[0].line},
            text: [text],
            removed: [],
            origin: 'setValue'
        } as EditorChange;

        this.lastChangeEvent = new CodeMirrorChangeEvent(this, [change]);
        this.editorImplementation.getDoc().setCursor({ch: this.cursorPosition.column, line: this.cursorPosition.line});

        this.editorImplementation.setValue(this.parser.getText());

        this.parser.reparse();

        this.editorImplementation.refresh();

        return newRange;
    }

    setText(text: string): void {
        if (!this.willValueChange(text)) {
            return;
        }

        this.updateCursorPosition();
        this.setValueEvent = true;
        this.editorImplementation.setValue(text);

        this.parser.parse(text);
    }

    update(): void {
        const text = this.parser.getText();
        if (!this.willValueChange(text)) {
            return;
        }

        this.updateCursorPosition();
        this.setValueEvent = true;
        this.editorImplementation.setValue(text);
        this.parser.reparse();
    }

    getText(): string {
        return this.parser.getText();
    }

    getParser(): AntlrParser {
        return this.parser;
    }

    setParser(parser: AntlrParser): void {
        this.parser = parser;
    }

    addKeyMapping(mapping: KeyMapping): void {
        this.editorImplementation.addKeyMap(mapping);
    }

    removeKeyMapping(mapping: KeyMapping): void {
        this.editorImplementation.removeKeyMap(mapping);

    }

    focus(): void {
        this.editorImplementation.focus();
    }

    createRuleDecoration(rule: AntlrRuleWrapper, domElement: HTMLElement): RuleDecoration {
        const decoration = new CodeMirrorRuleDecoration(this, rule, domElement);

        this.ruleDecorations.set(rule.getRule(), decoration);

        return decoration;
    }

    getRuleDecoration(rule: AntlrRuleWrapper): RuleDecoration | undefined {
        return this.ruleDecorations.get(rule.getRule());
    }

    createTokenDecoration(token: AntlrTokenWrapper, domElement: HTMLElement): TokenDecoration {
        const decoration = new CodeMirrorTokenDecoration(this, token, domElement);
        this.tokenDecorations.set(token.getToken(), decoration);
        return decoration;
    }

    getTokenDecoration(token: AntlrTokenWrapper): TokenDecoration | undefined {
        return this.tokenDecorations.get(token.getToken());
    }

    getDomElement(): HTMLElement {
        return this.domContainer;
    }

    setTheme(theme: string): void {
        this.editorImplementation.setOption('theme', theme);
    }

    getTheme(): string {
        return this.editorImplementation.getOption('theme');
    }

    setDefaultTokenStyles(styles: { [tokenName: string]: string }): void {
        this.defaultTokenStyles = styles;
    }

    setDefaultRuleStyles(styles: { [ruleName: string]: string }) {
        this.defaultRuleStyles = styles;
    }

    updateCursorPosition() {
        const cursor = this.editorImplementation.getDoc().getCursor();
        this.cursorPosition = {column: cursor.ch, line: cursor.line};
    }

    setDisplayEditorErrors(display: boolean): void {
        this.editorImplementation.setOption('lint', display);
    }

    getDisplayEditorErrors(): boolean {
        return this.editorImplementation.getOption('lint');
    }

    setEditorPlaceholderText(text: string): void {
        this.editorImplementation.setOption('placeholder', text);
    }

    setReadOnly(readOnly: boolean): void {
        if (readOnly) {
            this.editorImplementation.setOption('cursorBlinkRate', -100);
            this.editorImplementation.setOption('readOnly', readOnly);
        } else {

            this.editorImplementation.setOption('cursorBlinkRate', this.defaultCursorBlinkingRate);
            this.editorImplementation.setOption('readOnly', readOnly);
        }
    }

    getReadOnly(): boolean {
        return !!this.editorImplementation.getOption('readOnly');
    }

    setStyleActiveLine(styleActiveLine: boolean): void {
        this.editorImplementation.setOption('styleActiveLine', styleActiveLine);
    }

    getStyleActiveLine(): boolean {
        return !!this.editorImplementation.getOption('styleActiveLine');
    }

    setLineWrapping(lineWrapping: boolean): void {
        this.editorImplementation.setOption('lineWrapping', lineWrapping);
    }

    getLineWrapping(): boolean {
        return !!this.editorImplementation.getOption('lineWrapping');
    }

    getEditorPlaceholderText(): string {
        return this.editorImplementation.getOption('placeholder');
    }

    setDisplayOnlyRelevantEditorErrors(display: boolean): void {
        this.displaySingleError = display;
    }

    getDisplayOnlyRelevantEditorErrors(): boolean {
        return this.displaySingleError;
    }

    setShowLineNumbers(show: boolean): void {
        this.editorImplementation.setOption('lineNumbers', show);
    }

    getShowLineNumbers(): boolean {
        return this.editorImplementation.getOption('lineNumbers');
    }

    addStyleToRule(rule: AntlrRuleWrapper, css: string): void {
        const ruleRange = rule.getRange();
        this.editorImplementation.getDoc().markText({ch: ruleRange[0].column, line: ruleRange[0].line}, {
            ch: ruleRange[1].column,
            line: ruleRange[1].line
        }, {css: css});
    }

    addClassToRule(rule: AntlrRuleWrapper, cssClass: string): void {
        const ruleRange = rule.getRange();
        this.editorImplementation.getDoc().markText({ch: ruleRange[0].column, line: ruleRange[0].line}, {
            ch: ruleRange[1].column,
            line: ruleRange[1].line
        }, {className: cssClass});
    }

    addStyleToToken(token: AntlrTokenWrapper, css: string): void {
        const tokenRange = token.getRange();
        this.editorImplementation.getDoc().markText({ch: tokenRange[0].column, line: tokenRange[0].line}, {
            ch: tokenRange[1].column,
            line: tokenRange[1].line
        }, {css: css});
    }

    addClassToToken(token: AntlrTokenWrapper, cssClass: string): void {
        const tokenRange = token.getRange();

        this.editorImplementation.getDoc().markText({ch: tokenRange[0].column, line: tokenRange[0].line}, {
            ch: tokenRange[1].column,
            line: tokenRange[1].line
        }, {className: cssClass});
    }

    addAutoCompleteListener(rule: string, listener: (event: AutoCompleteEvent) => void): void {
        this.autoCompleteSubject
            .pipe(filter((event) => event.rule.getName() === rule))
            .subscribe(listener);
    }

    addChangeListener(listener: (event: EditorChangeEvent) => void): void {
        this.changeSubject.asObservable().subscribe(listener);
    }

    setCursorPosition(position: EditorPosition): void {
        this.cursorPosition = position;
        this.editorImplementation
            .getDoc()
            .setCursor({ch: position.column, line: position.line});

    }

    getCursorPosition(): EditorPosition {
        return this.cursorPosition;
    }

    defineErrorMessage(ruleOrMessage: string, handler: (error: AntlrRuleError) => string): void {
        this.ruleErrorMessageHandlers.set(ruleOrMessage, handler);
    }

    getEditorErrors(): AntlrRuleError[] {
        const errors = _.concat(Array.from(this.customErrors), this.parser.getErrors());

        return errors.map((err) => {
            const newErr = _.clone(err);

            if (this.ruleErrorMessageHandlers.has(err.message)) {
                const func = this.ruleErrorMessageHandlers.get(err.message);
                const message = func(err);
                newErr.message = message;
            } else if (err.ruleWrapper && err.ruleWrapper) {
                if (this.ruleErrorMessageHandlers.has(err.ruleWrapper.getName())) {
                    const func = this.ruleErrorMessageHandlers.get(err.ruleWrapper.getName());
                    const message = func(err);
                    newErr.message = message;
                }
            }

            return newErr;
        });
    }

    getRelevantEditorError(): AntlrRuleError {
        const errors = this.getEditorErrors();
        if (errors.length > 0) {
            return _.last(errors);
        }

        return undefined;
    }

    setDisplayDecorations(display: boolean): void {
        this.displayDecorations = display;
        if (display) {
            this.showAllDecorations();
        } else {
            this.hideAllDecorations();
        }
    }

    getDisplayDecorations(): boolean {
        return this.displayDecorations;
    }

    showCompletions(completions: Completion[]): CompletionPopup {
        this.clearAllCompletions();
        this.addKeyMapping(this.defaultHintMapping);

        const popup = new GenericCompletionPopup(this.autoCompleteContainer, this);
        this.currentCompletionPopup = popup;

        setTimeout(() => {
            const cursorEl = this.domContainer.getElementsByClassName('CodeMirror-cursor').item(0) as HTMLElement;

            popup.singleCompletionCssClass = HINT_CLASS;
            popup.completionsCssClass = HINTS_CLASS;
            popup.activeCompletionCssClass = ACTIVE_HINT_CLASS;

            popup.showHints(cursorEl, completions);
        });

        return popup;
    }

    createRuleCompletion(baseCompletion: Completion, rule: AntlrRuleWrapper): Completion {
        const newCompletion = _.clone(baseCompletion) as any;
        newCompletion.range = rule.getRange();
        return newCompletion;
    }

    triggerAutoCompletionEvent(event: AutoCompleteEvent): void {
        this.autoCompleteSubject.next(event);
    }

    hasRenderedPlaceholders(): boolean {
        const list = Array.from(this.placeholdersRendered).filter((placeholder) => placeholder.exists());

        return list.length > 0;
    }

    createPlaceholder(range: [EditorPosition, EditorPosition]): Placeholder {
        const el = document.createElement('span');
        const placeholder = new CodeMirrorPlaceholder(this, el, range);
        this.clearAllCompletions();

        this.placeholdersRendered.add(placeholder);

        return placeholder;
    }

    createRulePlaceholder(rule: AntlrRuleWrapper): Placeholder {
        const placeHolder = this.createPlaceholder(rule.getRange());
        placeHolder.setPlaceHolderText(rule.getName());

        this.placeholdersRendered.add(placeHolder);

        return placeHolder;
    }

    createBookmarkDecoration(start: EditorPosition, dom: HTMLElement, insertLeft?: boolean): BookmarkDecoration {
        const bookmark = new CodeMirrorBookmark(this, start, dom, insertLeft);
        this.bookmarkDecorations.add(bookmark);
        return bookmark;
    }

    hasSelections(): boolean {
        return this.editorImplementation.getDoc().somethingSelected();
    }

    addTokenSelection(token: AntlrTokenWrapper): void {
        this.addSelection(token.getRange());
    }

    addRuleSelection(rule: AntlrRuleWrapper): void {
        this.addSelection(rule.getRange());
    }

    addSelection(range: [EditorPosition, EditorPosition]): void {
        const anchor = {ch: range[0].column, line: range[0].line};
        const head = {ch: range[1].column, line: range[1].line};

        this.selections.add(range);

        (this.editorImplementation.getDoc() as any).addSelection(anchor, head);
    }

    getSelections(): Array<[EditorPosition, EditorPosition]> {
        return Array.from(this.selections);
    }

    setEnableVim(enable: boolean): void {
        if (enable) {
            this.editorImplementation.setOption('keyMap', 'vim');
        } else {
            this.editorImplementation.setOption('keyMap', 'default');
        }
    }

    getEnableVim(): boolean {
        return this.editorImplementation.getOption('keyMap') === 'vim';
    }

    getRuleByName(ruleName: string): AntlrRuleWrapper {
        return this.parser.findRuleByName(ruleName);
    }

    getRulesByName(ruleName: string): AntlrRuleWrapper[] {
        return this.parser.findRulesByName(ruleName);
    }

    getAllRules(): AntlrRuleWrapper[] {
        return this.parser.getAllRules();
    }

    getAllTokens(): AntlrTokenWrapper[] {
        return this.parser.getAllTokens();
    }

    addEditorValidator(validator: (rule: AntlrRuleWrapper) => AntlrRuleError): void {
        this.validators.add(validator);
    }

    hasErrors(): boolean {
        return this.getEditorErrors().length > 0;
    }

    createRuleError(rule?: AntlrRuleWrapper): AntlrRuleError {
        if (rule) {
            return this.parser.createRuleError(rule.getRule());
        } else {
            return {
                start: {column: 0, line: 0},
                end: {column: 0, line: 0},
                message: '',
                exception: undefined,
                severity: 'error',
                rule: undefined,
                ruleWrapper: undefined
            };
        }
    }

    validate(): void {
        Array.from(this.validators).forEach((validator) => {
            this.getAllRules().forEach((rule) => {
                const res = validator(rule);

                if (!_.isNil(res)) {
                    this.customErrors.add(res);
                }
            });
        });

        (this.editorImplementation as any).performLint();
    }

    clearAllCompletions(): void {
        if (!_.isNil(this.currentCompletionPopup)) {
            this.currentCompletionPopup.removeCompletions();
            this.removeKeyMapping(this.defaultHintMapping);
            const el = document.getElementsByClassName('CodeMirror-hints');
            const n = el.length;

            _.range(n).forEach((i) => {
                removeElement(el.item(i) as HTMLElement);
            });
        }
    }

    private styleToken(token: AntlrTokenWrapper, styleClass?: string): void {
        const tokenRange = token.getRange();
        const tokenClass = (token.getName()) ? `antlr-token-${token.getName()}` : 'antlr-token';

        this.editorImplementation.getDoc().markText({ch: tokenRange[0].column, line: tokenRange[0].line}, {
            ch: tokenRange[1].column,
            line: tokenRange[1].line
        }, {className: `${tokenClass} ${styleClass ? styleClass : ''}`});
    }

    private styleRule(rule: AntlrRuleWrapper, styleClass?: string): void {
        const ruleRange = rule.getRange();
        const ruleClass = `antlr-rule-${rule.getName()}`;

        this.editorImplementation.getDoc().markText({ch: ruleRange[0].column, line: ruleRange[0].line}, {
            ch: ruleRange[1].column,
            line: ruleRange[1].line
        }, {className: `${ruleClass} ${styleClass ? styleClass : ''}`});
    }

    private mapParseErrorToCodeMirrorError(err: AntlrRuleError) {
        return {
            from: {ch: err.start.column, line: err.start.line},
            to: {ch: err.end.column, line: err.end.line},
            message: err.message,
            severity: err.severity
        };
    }

    private attachBasicEvents() {

        this.defaultHintMapping = {
            Up: () => this.currentCompletionPopup.choosePrevCompletion(),
            Enter: () => this.currentCompletionPopup.select(),
            Esc: () => this.currentCompletionPopup.cancel(),
            Down: () => this.currentCompletionPopup.chooseNextCompletion(),
        };

        window.addEventListener('blur', () => this.clearAllCompletions());

        this.editorImplementation.on('changes', (___, changes) => {
            this.lastChangeEvent = new CodeMirrorChangeEvent(this, changes);

            if (this.setValueEvent) {
                //
                // Set the cursor the the last know position found.
                // If we see a direct change made to the editor.
                //
                // Typically done after the parsing  is complete.
                //
                this.editorImplementation.getDoc()
                    .setCursor({
                        ch: this.cursorPosition.column,
                        line: this.cursorPosition.line
                    });
                this.setValueEvent = false;
            } else if (changes.length >= 1) {
                ///
                // Only need to change the parser text on a editor change.
                //
                this.parser.parse(this.editorImplementation.getValue());
            }
        });

        this.editorImplementation.on('cursorActivity', () => {
            if (!this.setValueEvent) {
                console.log(this.editorImplementation.getDoc().getCursor());
                this.updateCursorPosition();
                return;
            }
        });

    }

    private hideAllDecorations() {
        Array.from(this.ruleDecorations.values()).forEach((decoration) => {
            decoration.hide();
        });
        Array.from(this.tokenDecorations.values()).forEach((decoration) => {
            decoration.hide();
        });
    }

    private showAllDecorations() {
        Array.from(this.ruleDecorations.values()).forEach((decoration) => {
            decoration.show();
        });
        Array.from(this.tokenDecorations.values()).forEach((decoration) => {
            decoration.show();
        });
    }

    private executeDefaultStyling() {
        if (this.defaultRuleStyles) {
            const rules = this.parser.getAllRules();
            const numberOfRules = rules.length;

            for (let i = 0; i < numberOfRules; i++) {
                const rule = rules[i];

                if (rule.exists()) {
                    const ruleName = rule.getName();

                    if (!_.isNil(this.defaultRuleStyles[ruleName])) {
                        const style = this.defaultRuleStyles[ruleName];
                        if (style) {
                            this.styleRule(rule, style);
                        }
                    }
                }
            }
        }

        if (this.defaultTokenStyles) {
            const tokens = this.parser.getAllTokens();
            const numberOfTokens = tokens.length;

            for (let i = 0; i < numberOfTokens; i++) {
                const token = tokens[i];

                if (token.exists()) {
                    const text = token.getText();
                    let style = this.defaultTokenStyles[text];

                    if (style) {
                        this.styleToken(token, style);
                        continue;
                    }

                    const name = token.getName();
                    style = this.defaultTokenStyles[name];

                    if (style) {
                        this.styleToken(token, style);
                    }
                }
            }
        }
    }

    private willValueChange(newValue: string) {
        const oldValue = this.editorImplementation.getValue();

        return oldValue !== newValue;
    }
}
