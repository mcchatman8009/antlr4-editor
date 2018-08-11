import {Completion} from '../completion/completion';
import * as _ from 'lodash';
import {renderTemplateExpressions} from 'expressive-template';
import {AntlrEditor} from '../editor/antlr-editor';
import {AntlrRange} from 'antlr4-helper';
import {EditorPosition} from '../types';

export class CompletionTemplateHandler {
    constructor(private editor: AntlrEditor) {
    }

    processCompletion(completion: Completion): Completion {
        completion = _.clone(completion);

        if (_.isNil(completion.placeholderVariables)) {
            completion.placeholderVariables = {};
        }

        const text = completion.text;
        const ctx = completion.placeholderVariables;
        const templateRes = renderTemplateExpressions(text, (varName) => {
            if (ctx[varName]) {
                const placeholderVar = ctx[varName];

                if (placeholderVar.defaultValue) {
                    return placeholderVar.defaultValue;
                }
            }

            return ' ';
        });

        completion.text = templateRes.text;
        completion.placeholderFactoryMethods = {};
        completion.placeholders = {};

        templateRes.expressions
            .forEach((expr) => {
                const range = expr.getCurrentRange();
                const newRange = [] as EditorPosition[];

                newRange[0] = {
                    column: range[0].column + completion.range[0].column,
                    line: range[0].line + completion.range[0].line
                };

                newRange[1] = {
                    column: range[1].column + completion.range[0].column,
                    line: range[1].line + completion.range[0].line
                };

                const name = expr.getVariableName();
                completion.placeholderFactoryMethods[name] = () => {
                    const placeholder = this.editor.createPlaceholder(newRange as AntlrRange);
                    const placeholderVar = ctx[name];

                    placeholderVar.enableDefaultKeyEventHandlers = (_.isNil(placeholderVar.enableDefaultKeyEventHandlers)) ? true : placeholderVar.enableDefaultKeyEventHandlers;
                    placeholderVar.applyFocus = (_.isNil(placeholderVar.applyFocus)) ? true : placeholderVar.applyFocus;

                    if (placeholderVar && placeholderVar.placeHolderText) {
                        placeholder.setPlaceHolderText(ctx[name].placeHolderText);
                    } else {
                        placeholder.setPlaceHolderText(name);
                    }

                    if (placeholderVar.enableDefaultKeyEventHandlers) {
                        placeholder.enableDefaultKeyEventHandlers();
                    }

                    if (placeholderVar.applyFocus) {
                        placeholder.focus();
                    }

                    return placeholder;
                };
            });

        return completion;
    }

}
