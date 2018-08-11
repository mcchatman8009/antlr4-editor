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
import {Editor} from 'codemirror';
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

export class CodeMirrorEditor implements AntlrEditor {
    editorImplementation: Editor;
    private defaultTokenStyles: { [tokenName: string]: string };
    private defaultRuleStyles: { [ruleName: string]: string };
    private cursorPosition: EditorPosition;
    private displaySingleError: boolean;
    private changeSubject: Subject<EditorChangeEvent>;
    private ruleDecorations: Map<ParserRuleContext, RuleDecoration>;
    private placeholdersRendered: Set<Placeholder>;
    private tokenDecorations: Map<Token, TokenDecoration>;
    private ruleErrorMessageHandlers: Map<string, (err: AntlrRuleError) => string>;
    private autoCompleteSubject: Subject<AutoCompleteEvent>;
    private displayDecorations: boolean;
    private autoCompletionHandler: AutoCompletionHandler;
    private currentCompletionPopup: CompletionPopup;
    private lastChangeEvent: EditorChangeEvent;
    private defaultHintMapping: KeyMapping;

    constructor(private parser: AntlrParser, private domContainer?: HTMLElement) {
        const mode = _.uniqueId('antlrGrammarMode');

        this.displayDecorations = true;
        this.changeSubject = new Subject<EditorChangeEvent>();
        this.ruleErrorMessageHandlers = new Map<string, (err: AntlrRuleError) => string>();
        this.autoCompleteSubject = new Subject<AutoCompleteEvent>();
        this.defaultTokenStyles = {};
        this.defaultRuleStyles = {};
        this.ruleDecorations = new Map<ParserRuleContext, RuleDecoration>();
        this.tokenDecorations = new Map<Token, TokenDecoration>();
        this.autoCompletionHandler = new AutoCompletionHandler(this);
        this.placeholdersRendered = new Set<Placeholder>();

        if (this.domContainer === undefined) {
            this.domContainer = document.createElement('div');
        }

        this.domContainer.classList.add('antlr-editor');

        this.editorImplementation = CodeMirror(this.domContainer, {});
        this.editorImplementation.getDoc().getMode().name = mode;

        this.editorImplementation.setOption('autoRefresh', true);

        this.attachBasicEvents();
        this.autoCompletionHandler.processEvents();
        this.updateCursorPosition();

        CodeMirror.registerHelper('lint', mode, () => {
            if (!this.displaySingleError) {
                const parserErrors = this.getEditorErrors();
                return parserErrors.map((err) => this.mapParseErrorToCodeMirrorError(err));
            } else {
                if (this.parser.hasErrors()) {
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

            this.ruleDecorations.clear();
            this.tokenDecorations.clear();
            this.placeholdersRendered.clear();
        });

        parser.addParserCompleteListener(() => {
            this.clearCompletions();

            this.editorImplementation.setValue(this.parser.getText());

            parser.getAllRules().filter((rule) => rule.exists())
                .map((rule) => {
                    const ruleName = rule.getName();

                    if (!_.isNil(this.defaultRuleStyles[ruleName])) {
                        const style = this.defaultRuleStyles[ruleName];

                        this.styleRule(rule, style);
                    } else {
                        this.styleRule(rule);
                    }
                });

            parser.getAllTokens().filter((token) => token.exists())
                .forEach((token) => {
                    const name = token.getName() ? token.getName() : token.getText();
                    const style = this.defaultTokenStyles[name];

                    this.styleToken(token, style);
                });


            if (this.lastChangeEvent) {
                this.changeSubject.next(this.lastChangeEvent);
                this.lastChangeEvent = undefined;
            }
        });
    }


    setText(text: string): void {
        this.updateCursorPosition();
        this.parser.parse(text);
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

    update(): void {
        this.parser.reparse();
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
        console.log(cursor);
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
        const errors = this.parser.getErrors();

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
        this.clearCompletions();

        this.addKeyMapping(this.defaultHintMapping);


        const cursorEl = this.domContainer.getElementsByClassName('CodeMirror-cursor').item(0) as HTMLElement;
        const popup = new GenericCompletionPopup(this.domContainer, this);
        popup.singleCompletionCssClass = HINT_CLASS;
        popup.completionsCssClass = HINTS_CLASS;
        popup.activeCompletionCssClass = ACTIVE_HINT_CLASS;

        popup.showHints(cursorEl, completions);
        this.currentCompletionPopup = popup;

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

    replaceRange(range: [EditorPosition, EditorPosition], text: string): [EditorPosition, EditorPosition] {
        const newRange = this.parser.replaceRange(range, text);
        this.cursorPosition = newRange[1];
        this.update();
        return newRange;
    }

    hasRenderedPlaceholders(): boolean {
        const list = Array.from(this.placeholdersRendered).filter((placeholder) => placeholder.exists());

        return list.length > 0;
    }

    createPlaceholder(range: [EditorPosition, EditorPosition]): Placeholder {
        const el = document.createElement('span');
        const placeholder = new CodeMirrorPlaceholder(this, el, range);
        this.clearCompletions();

        this.placeholdersRendered.add(placeholder);

        return placeholder;
    }

    createRulePlaceholder(rule: AntlrRuleWrapper): Placeholder {
        const placeHolder = this.createPlaceholder(rule.getRange());
        placeHolder.setPlaceHolderText(rule.getName());

        this.placeholdersRendered.add(placeHolder);

        return placeHolder;
    }

    createBookmark(start: EditorPosition, dom: HTMLElement, insertLeft?: boolean): BookmarkDecoration {
        const bookmark = new CodeMirrorBookmark(this, start, dom, insertLeft);
        return bookmark;
    }

    private clearCompletions() {
        if (!_.isNil(this.currentCompletionPopup)) {
            this.currentCompletionPopup.removeCompletions();
            this.removeKeyMapping(this.defaultHintMapping);
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

        window.addEventListener('blur', () => {
            this.clearCompletions();
        });

        this.editorImplementation.on('change', (___, change) => {
            this.lastChangeEvent = new CodeMirrorChangeEvent(this, change);

            if (change.origin !== 'setValue') {
                this.setText(this.editorImplementation.getValue());
            } else {
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

            }
        });

        this.editorImplementation.on('cursorActivity', () => {
            this.updateCursorPosition();
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
}
