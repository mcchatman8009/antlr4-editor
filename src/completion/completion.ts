import {EditorPosition} from '../types';

export interface Completion {
    text: string;
    className?: string;
    displayText?: string;
    readonly range: [EditorPosition, EditorPosition];
    onRender?: (completionContainer: HTMLElement) => void;
    templateContext?: any;
}
