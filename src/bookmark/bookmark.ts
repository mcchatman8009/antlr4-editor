import {EditorPosition} from '../types';

export interface BookmarkDecoration {
    getDomElement(): HTMLElement;

    getPosition(): EditorPosition;

    isHidden(): boolean;

    show(): void;

    hide(): void;

    remove(): void;
}
