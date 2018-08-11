import {CommonTokenStream, ParserRuleContext, Token} from 'antlr4';
import {ErrorNode, ParseTreeListener, TerminalNode} from 'antlr4/tree/Tree';

import {ProgramContext} from './TinycParser';

import {StatementContext} from './TinycParser';

import {Paren_exprContext} from './TinycParser';

import {ExprContext} from './TinycParser';

import {TestContext} from './TinycParser';

import {SumContext} from './TinycParser';

import {TermContext} from './TinycParser';

import {IdContext} from './TinycParser';

import {IntegerContext} from './TinycParser';


export declare class TinycListener implements ParseTreeListener {
    constructor();
    
    programEnter(ctx: ProgramContext): void;
    
    programExit(ctx: ProgramContext): void;
    
    statementEnter(ctx: StatementContext): void;
    
    statementExit(ctx: StatementContext): void;
    
    paren_exprEnter(ctx: Paren_exprContext): void;
    
    paren_exprExit(ctx: Paren_exprContext): void;
    
    exprEnter(ctx: ExprContext): void;
    
    exprExit(ctx: ExprContext): void;
    
    testEnter(ctx: TestContext): void;
    
    testExit(ctx: TestContext): void;
    
    sumEnter(ctx: SumContext): void;
    
    sumExit(ctx: SumContext): void;
    
    termEnter(ctx: TermContext): void;
    
    termExit(ctx: TermContext): void;
    
    idEnter(ctx: IdContext): void;
    
    idExit(ctx: IdContext): void;
    
    integerEnter(ctx: IntegerContext): void;
    
    integerExit(ctx: IntegerContext): void;
    
    visitTerminal(node: TerminalNode): void;

    visitErrorNode(node: ErrorNode): void;

    enterEveryRule(node: ParserRuleContext): void;

    exitEveryRule(node: ParserRuleContext): void;
}
