import {AntlrRuleWrapper} from 'antlr4-helper';
import {Completion} from '../completion/completion';
import {AntlrEditor} from '../editor/antlr-editor';
import {CompletionPopup} from '../completion/completion-popup';

export class AutoCompleteEvent {
    private _allowChildrenToConsumeEvent = true;

    constructor(public readonly rule: AntlrRuleWrapper, private editor: AntlrEditor) {
    }

    stopPropagation(): void {
        this._allowChildrenToConsumeEvent = false;
    }

    showCompletions(completions: Completion[]): CompletionPopup {

        completions = completions.map((completion) => {
            return this.editor.createRuleCompletion(completion, this.rule);
        });

        return this.editor.showCompletions(completions);
    }

    get allowChildrenToConsumeEvent(): boolean {
        return this._allowChildrenToConsumeEvent;
    }
}
