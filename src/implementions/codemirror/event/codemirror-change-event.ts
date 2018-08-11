import {EditorChangeEvent} from '../../../event/editor-change-event';
import {CodeMirrorEditor} from '../codemirror-editor';
import * as CodeMirror from 'codemirror';
import * as _ from 'lodash';

export class CodeMirrorChangeEvent implements EditorChangeEvent {
    constructor(private editor: CodeMirrorEditor, private changeEvent: CodeMirror.EditorChangeLinkedList) {

    }

    hasDeleteEditChange(): boolean {
        const removedText = this.changeEvent.removed.join('').trim();

        return (this.changeEvent.origin === '+delete' && !_.isEmpty(removedText));
    }

    hasInsertEditChange(): boolean {
        const changedText = this.changeEvent.text.join('').trim();
        return (this.changeEvent.origin === '+input' && !_.isEmpty(changedText));
    }
}
