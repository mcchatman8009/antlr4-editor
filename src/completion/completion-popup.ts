import {Completion} from './completion';

export interface CompletionPopup {
    completionsElement: HTMLElement;
    singleCompletionCssClass: string;
    activeCompletionCssClass: string;
    completionsCssClass: string;

    onSelected: (completion: Completion) => void;
    afterSelection: (completion: Completion) => void;
    onCancel: () => void;

    hasHints(): boolean;

    removeCompletions(): void;

    choosePrevCompletion(): void;

    chooseNextCompletion(): void;

    removeCurrentFocus(): void;

    cancel(): void;

    select(): boolean;

    showHints(container: HTMLElement, completions: Completion[]): void;
}
