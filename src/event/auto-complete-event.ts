import {AntlrRuleWrapper} from 'antlr4-helper';
import {Completion} from '../completion/completion';
import {AntlrEditor} from '../editor/antlr-editor';
import {CompletionPopup} from '../completion/completion-popup';
import {CompletionTemplateHandler} from '../handler/completion-template-handler';

export class AutoCompleteEvent {
    private _allowChildrenToConsumeEvent = true;
    private completionTemplateHandler: CompletionTemplateHandler;

    constructor(public readonly rule: AntlrRuleWrapper, private editor: AntlrEditor) {
        this.completionTemplateHandler = new CompletionTemplateHandler(this.editor);
    }

    stopPropagation(): void {
        this._allowChildrenToConsumeEvent = false;
    }

    showCompletions(completions: Completion[]): CompletionPopup {

        completions = completions.map((completion) => {
            if (completion.range === undefined) {
                const newCompletion = this.editor.createRuleCompletion(completion, this.rule);
                return this.completionTemplateHandler.processCompletion(this.editor.createRuleCompletion(completion, this.rule));
            } else {
                return this.completionTemplateHandler.processCompletion(completion);
            }
        });

        return this.editor.showCompletions(completions);
    }

    get allowChildrenToConsumeEvent(): boolean {
        return this._allowChildrenToConsumeEvent;
    }
}
