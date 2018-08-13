import {AntlrParser} from 'antlr4-helper';
import {CodeMirrorEditor} from './codemirror/codemirror-editor';

export function createEditor(parser: AntlrParser, editorPlatform?: string, domElement?: HTMLElement) {
    switch (editorPlatform) {
        case 'codemirror':
        default:
            return new CodeMirrorEditor(parser, domElement);
    }
}
