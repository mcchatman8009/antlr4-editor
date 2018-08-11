import {Completion} from '../completion/completion';
import {CompletionPopup} from '../completion/completion-popup';
import {Placeholder} from '../placeholder/placeholder';
import * as _ from 'lodash';

export class PlaceHolderAutoCompleteEvent {

    constructor(public readonly placeHolder: Placeholder, public readonly inputValue: string) {
    }

    showCompletions(completions: Completion[]): CompletionPopup {
        completions = completions.map((completion) => {
            const newCompletion = (_.clone(completion) as any);
            newCompletion.range = this.placeHolder.getTextRange();

            return newCompletion;
        });

        return this.placeHolder.showCompletions(completions);
    }
}
