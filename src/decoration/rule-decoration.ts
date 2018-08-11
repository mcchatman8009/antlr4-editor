import {AntlrRuleWrapper} from 'antlr4-helper';

export interface RuleDecoration {
    clearOnEnter: boolean;
    toggleOnExit: boolean;

    getRule(): AntlrRuleWrapper;

    getDomElement(): HTMLElement;

    isHidden(): boolean;

    show(): void;

    hide(): void;

    remove(): void;
}
