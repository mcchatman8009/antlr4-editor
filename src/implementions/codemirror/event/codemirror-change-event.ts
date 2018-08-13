import {EditorChangeEvent} from '../../../event/editor-change-event';
import {CodeMirrorEditor} from '../codemirror-editor';
import * as CodeMirror from 'codemirror';
import * as _ from 'lodash';

export class CodeMirrorChangeEvent implements EditorChangeEvent {
    constructor(private editor: CodeMirrorEditor, private changeEvents: CodeMirror.EditorChangeLinkedList[]) {

    }

    hasDeleteEditChange(): boolean {
        const removedText = _.flatten(this.changeEvents.filter((evt) => evt.origin !== 'setValue').map((ev) => ev.removed)).join('').trim();

        return (!_.isEmpty(removedText));
    }

    hasInsertEditChange(): boolean {
        const changedText = _.flatten(this.changeEvents.filter((evt) => evt.origin !== 'setValue').map((ev) => ev.text)).join('').trim();
        return (!_.isEmpty(changedText));
    }
}
