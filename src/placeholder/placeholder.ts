import {EditorPosition} from '../types';
import {CompletionPopup} from '../completion/completion-popup';
import {Completion} from '../completion/completion';
import {PlaceHolderAutoCompleteEvent} from '../';

export interface Placeholder {
    getTextRange(): [EditorPosition, EditorPosition];

    showCompletions(completions: Completion[]): CompletionPopup;

    addChangeListener(listener: (event: PlaceHolderAutoCompleteEvent) => void): void;

    getDomElement(): HTMLElement;

    getInputElement(): HTMLElement;

    setRangeWithText(text: string): void;

    setPlaceHolderText(text: string): void;

    getPlaceHolderText(): string;

    enableDefaultKeyEventHandlers(): void;

    focus(): void;

    exists(): boolean;
}
