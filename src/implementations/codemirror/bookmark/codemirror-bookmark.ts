import {BookmarkDecoration} from '../../../bookmark/bookmark';
import {TextMarker} from 'codemirror';
import {EditorPosition} from '../../../types';
import {CodeMirrorEditor} from '../codemirror-editor';

export class CodeMirrorBookmark implements BookmarkDecoration {
    private mark: TextMarker;
    private hidden = false;

    constructor(private editor: CodeMirrorEditor, private position: EditorPosition, private domElement: HTMLElement, private insertLeft?: boolean) {
        if (this.editor.getDisplayDecorations()) {
            this.show();
        } else {
            this.hidden = true;
        }
    }

    getPosition(): EditorPosition {
        return this.position;
    }

    getDomElement(): HTMLElement {
        return this.domElement;
    }

    isHidden(): boolean {
        return this.hidden;
    }

    show(): void {
        if (!this.mark) {
            this.createBookmarkWithDom();
            this.hidden = false;
        }
    }

    hide(): void {
        if (!this.hidden) {
            this.mark.clear();
            this.hidden = true;
            this.mark = null;
        }
    }

    remove(): void {
        if (this.mark) {
            this.hide();
        }
    }

    private createBookmarkWithDom(insertLeft?: boolean): void {
        const opts: any = {widget: this.domElement, insertLeft: this.insertLeft};
        const start = {ch: this.position.column, line: this.position.line};

        this.mark = this.editor.editorImplementation.getDoc().setBookmark(start, opts);
    }
}
