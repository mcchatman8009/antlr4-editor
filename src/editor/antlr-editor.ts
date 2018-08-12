import {AntlrParser, AntlrRuleError, AntlrRuleWrapper, AntlrTokenWrapper} from 'antlr4-helper';
import {RuleDecoration} from '../decoration/rule-decoration';
import {KeyMapping} from '../key-mapping/key-mapping';
import {TokenDecoration} from '../decoration/token-decoration';
import {EditorPosition} from '../types';
import {AutoCompleteEvent} from '../event/auto-complete-event';
import {Completion} from '../completion/completion';
import {CompletionPopup} from '../completion/completion-popup';
import {EditorChangeEvent} from '../event/editor-change-event';
import {Placeholder} from '../placeholder/placeholder';
import {BookmarkDecoration} from '../bookmark/bookmark';

export interface AntlrEditor {

    hasSelections(): boolean;

    addTokenSelection(token: AntlrTokenWrapper): void;

    addRuleSelection(rule: AntlrRuleWrapper): void;

    addSelection(range: [EditorPosition, EditorPosition]): void;

    getSelections(): Array<[EditorPosition, EditorPosition]>;

    createBookmarkDecoration(start: EditorPosition, dom: HTMLElement, insertLeft?: boolean): BookmarkDecoration;

    hasRenderedPlaceholders(): boolean;

    replaceRange(range: [EditorPosition, EditorPosition], text: string): [EditorPosition, EditorPosition];

    setDisplayDecorations(display: boolean): void;

    getDisplayDecorations(): boolean;

    defineErrorMessage(ruleOrMessage: string, messageHandler: (error: AntlrRuleError) => string): void

    getRelevantEditorError(): AntlrRuleError;

    getEditorErrors(): AntlrRuleError[];

    setText(text: string): void;

    getText(): string;

    getParser(): AntlrParser;

    setParser(parser: AntlrParser): void;

    setTheme(theme: string): void;

    getTheme(): string;

    createRuleDecoration(rule: AntlrRuleWrapper, domElement: HTMLElement): RuleDecoration;

    createPlaceholder(range: [EditorPosition, EditorPosition]): Placeholder;

    createRulePlaceholder(rule: AntlrRuleWrapper): Placeholder;

    getRuleDecoration(rule: AntlrRuleWrapper): RuleDecoration | undefined;

    createTokenDecoration(token: AntlrTokenWrapper, domElement: HTMLElement): TokenDecoration;

    getTokenDecoration(token: AntlrTokenWrapper): TokenDecoration | undefined;

    getDomElement(): HTMLElement;

    addKeyMapping(mapping: KeyMapping): void;

    removeKeyMapping(mapping: KeyMapping): void;

    setDefaultRuleStyles(styles: { [ruleName: string]: string }): void;

    setDefaultTokenStyles(styles: { [tokenName: string]: string }): void;

    addStyleToRule(rule: AntlrRuleWrapper, css: string): void;

    addClassToRule(rule: AntlrRuleWrapper, cssClass: string): void;

    addStyleToToken(rule: AntlrTokenWrapper, css: string): void;

    addClassToToken(rule: AntlrTokenWrapper, cssClass: string): void;

    addChangeListener(listener: (event: EditorChangeEvent) => void): void;

    addAutoCompleteListener(rule: string, listener: (event: AutoCompleteEvent) => void): void;

    getCursorPosition(): EditorPosition;

    setCursorPosition(position: EditorPosition): void;

    setShowLineNumbers(show: boolean): void;

    getShowLineNumbers(): boolean;

    setDisplayOnlyRelevantEditorErrors(display: boolean): void;

    getDisplayOnlyRelevantEditorErrors(): boolean;

    setDisplayEditorErrors(display: boolean): void;

    getDisplayEditorErrors(): boolean;

    setEditorPlaceholderText(text: string): void;

    setEnableVim(enable: boolean): void;

    getEnableVim(): boolean;

    getEditorPlaceholderText(): string;

    update(): void;

    focus(): void;

    showCompletions(completions: Completion[]): CompletionPopup;

    createRuleCompletion(completion: Completion, rule: AntlrRuleWrapper): Completion;

    triggerAutoCompletionEvent(event: AutoCompleteEvent): void;

    getRuleByName(ruleName: string): AntlrRuleWrapper;

    getRulesByName(ruleName: string): AntlrRuleWrapper[];

    addEditorValidator(validator: (rule: AntlrRuleWrapper) => AntlrRuleError): void;

    hasErrors(): boolean;

    createRuleError(rule?: AntlrRuleWrapper): AntlrRuleError;

    validate(): void;

    getAllRules(): AntlrRuleWrapper[];

    getAllTokens(): AntlrTokenWrapper[];
}
