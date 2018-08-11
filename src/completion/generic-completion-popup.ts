import {AntlrEditor} from '../editor/antlr-editor';
import {Completion} from './completion';
import * as dom from '../util/dom';
import * as _ from 'lodash';
import {CompletionPopup} from './completion-popup';

export class GenericCompletionPopup implements CompletionPopup {
    private relativeInputElement: HTMLElement;
    private currentFocus = 0;
    private completionDomElements: HTMLElement[] = [];

    completionsElement: HTMLElement;
    singleCompletionCssClass: string;
    activeCompletionCssClass: string;
    completionsCssClass: string;

    onSelected: (completion: Completion) => void;
    afterSelection: (completion: Completion) => void;
    onCancel: () => void;

    constructor(private readonly relativeRootElement: HTMLElement, private editor: AntlrEditor) {
        this.onCancel = () => null;
        this.onSelected = (___) => null;
        this.afterSelection = (___) => null;
    }

    hasHints(): boolean {
        return this.completionDomElements.length > 0;
    }

    removeCompletions() {
        this.completionDomElements.forEach((el) => {
            el.parentNode.removeChild(el);
        });

        this.completionDomElements = [];

        if (!_.isNil(this.completionsElement)) {
            dom.removeElement(this.completionsElement);
        }
    }

    choosePrevCompletion() {
        this.currentFocus--;
        this.renderActive();
    }

    chooseNextCompletion() {
        this.currentFocus++;
        this.renderActive();
    }

    removeCurrentFocus() {
        this.currentFocus = -1;
        this.removeActive();
    }

    cancel() {
        this.removeCompletions();
        this.onCancel();
    }

    select(): boolean {
        const hintEl = this.completionDomElements[this.currentFocus];

        if (hintEl) {
            hintEl.click();
            return true;
        }

        return false;
    }

    showHints(inputElement: HTMLElement, completions: Completion[]): void {
        if (!completions) {
            return;
        }

        this.relativeInputElement = inputElement;
        this.removeCompletions();

        this.completionsElement = dom.createElement('ul', `${this.completionsCssClass} antlr__search-hints`);

        this.relativeRootElement.appendChild(this.completionsElement);

        completions.forEach((completion) => {
            const el = document.createElement('li');
            el.className = this.singleCompletionCssClass;

            el.addEventListener('click', (evt) => {
                evt.preventDefault();
                // evt.stopPropagation();

                this.onSelected(completion);
                this.removeCompletions();

                if (completion.range && completion.text) {
                    this.editor.replaceRange(completion.range, completion.text);

                    _.each(completion.placeholderFactoryMethods, (func, varName) => {
                        completion.placeholders[varName] = func();
                    });
                }

                this.afterSelection(completion);
            });

            this.completionDomElements.push(el);
            this.completionsElement.appendChild(el);

            if (completion.onRender) {
                completion.onRender(el);
                return;
            }

            if (completion.displayText) {
                el.innerText = completion.displayText;
                return;
            }

            el.innerText = completion.text;
        }, true);

        this.renderActive();
        this.positionHintsElement();
    }

    private positionHintsElement(): void {
        if (this.relativeInputElement) {
            const position = dom.getPosition(this.relativeInputElement, this.relativeRootElement);
            dom.setPosition(this.completionsElement, position);
        }
    }

    private renderActive(): void {
        this.removeActive();
        this.adjustCurrentFocus();

        if (this.completionDomElements.length > 0) {
            const el = this.completionDomElements[this.currentFocus];
            if (!_.isNil(el)) {
                dom.addClass(el, this.activeCompletionCssClass);
            }
        }
    }

    private removeActive(): void {
        this.completionDomElements.forEach((el) => {
            dom.removeClass(el, this.activeCompletionCssClass);
        });
    }

    private adjustCurrentFocus() {
        if (this.currentFocus >= this.completionDomElements.length) {
            this.currentFocus = 0;
        }
        if (this.currentFocus < 0) {
            this.currentFocus = this.completionDomElements.length - 1;
        }
    }
}
