import {AntlrParser} from 'antlr4-helper';
import {AntlrEditor} from '../../';
import {CodeMirrorEditor} from './codemirror-editor';


export function createEditor(parser: AntlrParser, domElement?: HTMLElement): AntlrEditor {
    return new CodeMirrorEditor(parser, domElement);
}
