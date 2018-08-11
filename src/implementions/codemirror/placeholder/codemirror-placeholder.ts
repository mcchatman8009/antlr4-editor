import {ACTIVE_HINT_CLASS, CodeMirrorEditor, HINT_CLASS, HINTS_CLASS} from '../codemirror-editor';
import {Placeholder} from '../../../placeholder/placeholder';
import {EditorPosition} from '../../../types';
import {CompletionPopup} from '../../../completion/completion-popup';
import {Completion} from '../../../completion/completion';
import {AutoCompletionHandler} from '../../../handler/auto-completion-handler';
import * as _ from 'lodash';
import {GenericCompletionPopup} from '../../../completion/generic-completion-popup';
import {TextMarker} from 'codemirror';
import {PlaceHolderAutoCompleteEvent} from '../../../event/placeholder-auto-complete-event';

export class CodeMirrorPlaceholder implements Placeholder {
    private placeHolderText: string;
    private inputElement: HTMLElement;
    private currentCompletionPopup: CompletionPopup;
    private mark: TextMarker;

    constructor(private editor: CodeMirrorEditor, private domContainer: HTMLElement, private range: [EditorPosition, EditorPosition]) {
        const el = document.createElement('span');
        el.contentEditable = 'true';
        el.className = 'antlr-placeholder-element';

        this.inputElement = el;
        this.domContainer.appendChild(el);
        this.domContainer.style.display = 'inline-block';
        this.domContainer.style.position = 'relative';

        this.mark = this.editor.editorImplementation.getDoc()
            .markText({ch: range[0].column, line: range[0].line}, {
                ch: range[1].column,
                line: range[1].line
            }, {replacedWith: this.domContainer});
    }

    addChangeListener(listener: (event: PlaceHolderAutoCompleteEvent) => void) {
        this.inputElement.addEventListener('input', (event) => {
            event.stopPropagation();
            listener(new PlaceHolderAutoCompleteEvent(this, this.inputElement.innerText, this.editor));
        });
    }

    getTextRange(): [EditorPosition, EditorPosition] {
        return this.range;
    }

    showCompletions(completions: Completion[]): CompletionPopup {
        this.clearCompletions();

        const popup = new GenericCompletionPopup(this.domContainer, this.editor);
        popup.singleCompletionCssClass = HINT_CLASS;
        popup.completionsCssClass = HINTS_CLASS;
        popup.activeCompletionCssClass = ACTIVE_HINT_CLASS;

        popup.showHints(this.domContainer, completions);

        this.currentCompletionPopup = popup;

        popup.afterSelection = (completion) => {
            this.range = completion.range;
        };

        return popup;
    }

    getDomElement(): HTMLElement {
        return this.domContainer;
    }

    getInputElement(): HTMLElement {
        return this.inputElement;
    }

    setRangeWithText(text: string): void {
        this.range = this.editor.replaceRange(this.range, text);
    }

    setPlaceHolderText(text: string): void {
        this.placeHolderText = text;
        this.inputElement.setAttribute('placeholder', this.placeHolderText);
    }

    getPlaceHolderText(): string {
        return this.placeHolderText;
    }

    focus(): void {
        setTimeout(() => this.inputElement.focus(), 20);
    }

    enableDefaultKeyEventHandlers(): void {
        this.inputElement.addEventListener('keypress', (e) => e.which !== 13);

        this.inputElement.addEventListener('keypress', (event) => {
            event.stopImmediatePropagation();
        });

        this.inputElement.addEventListener('keyup', (event) => {
            event.stopImmediatePropagation();
        });


        this.inputElement.addEventListener('keydown', (event) => {
            event.stopImmediatePropagation();

            switch (event.code) {
                case 'Escape':
                    event.preventDefault();
                    this.clearMark();
                    this.editor.focus();
                    return;

                case  'Enter':
                    event.preventDefault();
                    if (this.currentCompletionPopup && this.currentCompletionPopup.hasHints()) {
                        this.currentCompletionPopup.select();
                    } else {
                        this.setRangeWithText(this.inputElement.innerText);
                    }
                    return;

                case 'ArrowLeft':
                    if (_.isEmpty(this.inputElement.innerText)) {
                        const cursor = this.range[0];
                        this.editor.focus();
                        this.inputElement.style.left = '';
                        this.editor.setCursorPosition(cursor);
                    }
                    return;

                case  'ArrowRight':
                    if (_.isEmpty(this.inputElement.innerText)) {
                        const position = {column: this.range[1].column, line: this.range[1].line};
                        this.editor.focus();
                        this.editor.setCursorPosition(position);
                    }
                    return;

                case  'ArrowDown':
                    this.chooseNextCompletion();
                    return;

                case  'ArrowUp':
                    this.choosePrevCompletion();
                    return;
            }
        });

    }

    private choosePrevCompletion() {
        if (this.currentCompletionPopup) {
            this.currentCompletionPopup.choosePrevCompletion();
        }
    }

    private chooseNextCompletion() {
        if (this.currentCompletionPopup) {
            this.currentCompletionPopup.chooseNextCompletion();
        }
    }

    private clearMark() {
        if (this.mark) {
            this.mark.clear();
            this.mark = undefined;
        }
    }

    private clearCompletions() {
        if (!_.isNil(this.currentCompletionPopup)) {
            this.currentCompletionPopup.removeCompletions();
        }
    }
}
