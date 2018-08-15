import {RuleDecoration} from '../../../decoration/rule-decoration';
import {AntlrRuleWrapper} from 'antlr4-helper';
import {CodeMirrorEditor} from '../codemirror-editor';
import {TextMarker} from 'codemirror';

export class CodeMirrorRuleDecoration implements RuleDecoration {
    clearOnEnter = true;
    toggleOnExit = true;

    private mark: TextMarker;
    private hidden = false;
    private cursorActivityFunction: () => void;
    private changeEventFunction: () => void;

    constructor(private editor: CodeMirrorEditor, private rule: AntlrRuleWrapper, private domElement: HTMLElement) {
        let changed = false;

        this.cursorActivityFunction = () => {
            if (changed) {
                changed = false;
            } else if (this.rule.exists()) {
                const pos = this.editor.getCursorPosition();
                const range = this.rule.getRange();

                if (this.rule.inRange(pos) || (range[1].line === pos.line && range[1].column === pos.column)) {
                    this.handleRuleWhenWithin();
                } else {
                    if (this.hidden && this.toggleOnExit) {
                        this.show();
                    }
                }
            }
        };

        this.changeEventFunction = () => {
            changed = true;
        };

        //
        // Make sure the rule exists, before defaulting on a show
        //
        if (this.editor.getDisplayDecorations()) {
            this.show();
            this.cursorActivityFunction();
        } else {
            this.hidden = true;
        }
    }

    getRule(): AntlrRuleWrapper {
        return this.rule;
    }

    getDomElement(): HTMLElement {
        return this.domElement;
    }

    isHidden(): boolean {
        return this.hidden;
    }

    show(): void {
        if (!this.mark) {
            const ruleRange = this.rule.getRange();

            this.mark = this.editor.editorImplementation.getDoc()
                .markText({ch: ruleRange[0].column, line: ruleRange[0].line}, {
                    ch: ruleRange[1].column,
                    line: ruleRange[1].line
                }, {replacedWith: this.domElement});

            this.hidden = false;
            this.editor.editorImplementation.on('change', this.changeEventFunction);
            this.editor.editorImplementation.on('cursorActivity', this.cursorActivityFunction);
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
            this.editor.editorImplementation.off('change', this.changeEventFunction);
            this.editor.editorImplementation.off('cursorActivity', this.cursorActivityFunction);
        }
    }

    private handleRuleWhenWithin() {
        if (this.clearOnEnter && this.mark) {
            this.hide();
        }
    }
}
