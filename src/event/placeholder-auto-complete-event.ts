import {Completion} from '../completion/completion';
import {CompletionPopup} from '../completion/completion-popup';
import {Placeholder} from '../placeholder/placeholder';
import * as _ from 'lodash';
import {CompletionTemplateHandler} from '../handler/completion-template-handler';
import {AntlrEditor} from '../editor/antlr-editor';

export class PlaceHolderAutoCompleteEvent {
    private completionTemplateHandler: CompletionTemplateHandler;

    constructor(public readonly placeHolder: Placeholder, public readonly inputValue: string, private editor: AntlrEditor) {
        this.completionTemplateHandler = new CompletionTemplateHandler(this.editor);
    }

    showCompletions(completions: Completion[]): CompletionPopup {
        completions = completions.map((completion) => {
            const newCompletion = (_.clone(completion) as any);
            newCompletion.range = this.placeHolder.getTextRange();

            return this.completionTemplateHandler.processCompletion(newCompletion);
        });

        return this.placeHolder.showCompletions(completions);
    }
}
