import {AntlrParser} from 'antlr4-helper';
import {AntlrEditor} from '../';

const {CodeMirrorEditor} = require('./codemirror/codemirror-editor');

export function createEditor(parser: AntlrParser, editorPlatform?: string, domElement?: HTMLElement): AntlrEditor {
    switch (editorPlatform) {
        case 'codemirror':
        default:
            return new CodeMirrorEditor(parser, domElement);
    }
}
