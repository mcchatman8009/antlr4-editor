import {AntlrTokenWrapper} from 'antlr4-helper';

export interface TokenDecoration {
    clearOnEnter: boolean;
    toggleOnExit: boolean;

    getToken(): AntlrTokenWrapper;

    getDomElement(): HTMLElement;

    isHidden(): boolean;

    show(): void;

    hide(): void;

    remove(): void;
}
