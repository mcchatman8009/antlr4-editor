import {ParserRuleContext} from 'antlr4';

export function isRuleParent(root: ParserRuleContext, child: ParserRuleContext) {

    while (child) {
        if (child === root) {
            return true;
        }

        child = child.parentCtx;
    }

    return false;

}
