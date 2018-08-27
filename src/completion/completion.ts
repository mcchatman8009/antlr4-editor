import {EditorPosition} from '../types';
import {PlaceholderVar} from './placeholder-var';
import {Placeholder} from '../placeholder/placeholder';

export interface Completion {
    text: string;
    className?: string;
    displayText?: string;
    range?: [EditorPosition, EditorPosition];
    onRender?: (completionContainer: HTMLElement) => void;
    placeholders?: { [varName: string]: Placeholder };
    placeholderVariables?: { [varName: string]: PlaceholderVar };
    placeholderFactoryMethods?: { [varName: string]: () => Placeholder };
}
