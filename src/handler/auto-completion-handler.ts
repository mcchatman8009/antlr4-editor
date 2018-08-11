import {AntlrEditor} from '../editor/antlr-editor';
import {AntlrRuleWrapper} from 'antlr4-helper';
import {AutoCompleteEvent} from '../event/auto-complete-event';

export class AutoCompletionHandler {
    constructor(private editor: AntlrEditor) {
    }

    processEvents() {
        this.editor.addChangeListener((event) => {
            if (event.hasInsertEditChange()) {
                const rule = this.getRuleHint();

                if (rule) {
                    const stack = [rule];

                    while (stack.length > 0) {
                        const root = stack.pop();
                        const event = new AutoCompleteEvent(root, this.editor);
                        this.editor.triggerAutoCompletionEvent(event);

                        if (event.allowChildrenToConsumeEvent) {
                            root.getChildren()
                                .forEach((child) => {
                                    stack.push(child);
                                });
                        }
                    }
                }
            }
        });
    }

    private getErrorRuleHint(): AntlrRuleWrapper {
        const parser = this.editor.getParser();

        if (parser.hasErrors()) {
            const cursorPosition = this.editor.getCursorPosition();
            let colStart = Math.max(0, cursorPosition.column - 1);

            for (let i = cursorPosition.line; i >= 0; i--) {
                for (let j = colStart; j >= 0; j--) {
                    const rule = parser.getErrorRuleAt(j, i);
                    if (rule) {
                        return rule;
                    }
                }

                colStart = Math.max(0, parser.getColumnCount(i - 1) - 1);
            }

        }
        return undefined;
    }

    private getRuleHint(): AntlrRuleWrapper {
        const errorRuleHint = this.getErrorRuleHint();
        const cursorPosition = this.editor.getCursorPosition();
        const parser = this.editor.getParser();
        let ruleLookup = null;

        let colStart = Math.max(0, cursorPosition.column - 1);

        for (let i = cursorPosition.line; i >= 0; i--) {
            for (let j = colStart; j >= 0; j--) {
                const rule = parser.getRuleAt(j, i);
                if (rule) {
                    ruleLookup = rule;
                    break;
                }
            }
            if (ruleLookup) {
                break;
            }
            colStart = Math.max(0, parser.getColumnCount(i - 1) - 1);
        }

        if (errorRuleHint && ruleLookup) {
            const errorPriority = this.computeRulePriority(errorRuleHint);
            const rulePriority = this.computeRulePriority(ruleLookup);
            if (errorPriority > rulePriority) {
                return errorRuleHint;
            } else {
                return ruleLookup;
            }
        } else if (errorRuleHint) {
            return errorRuleHint;
        } else if (ruleLookup) {
            return ruleLookup;
        }

        return undefined;
    }

    computeRulePriority(ruleWrapper: AntlrRuleWrapper): number {
        const rule = ruleWrapper.getRule();
        return rule.depth() * rule.invokingState;
    }
}
