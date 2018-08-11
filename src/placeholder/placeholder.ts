import {EditorPosition} from '../types';
import {CompletionPopup} from '../completion/completion-popup';
import {Completion} from '../completion/completion';

export interface Placeholder {
    getTextRange(): [EditorPosition, EditorPosition];

    showCompletions(completions: Completion[]): CompletionPopup;

    getDomElement(): HTMLElement;

    getInputElement(): HTMLElement;

    setRangeWithText(text: string): void;

    setPlaceHolderText(text: string): void;

    getPlaceHolderText(): string;

    enableDefaultKeyEventHandlers(): void;

    focus(): void;

    exists(): boolean;
}
