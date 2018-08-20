import {CommonTokenStream, Parser, ParserRuleContext, Token} from 'antlr4';
import {TerminalNode} from 'antlr4/tree/Tree';


export declare class ProgramContext extends ParserRuleContext {
    
}

export declare class StatementContext extends ParserRuleContext {
    
    paren_expr(): Paren_exprContext;
    
    expr(): ExprContext;
    
}

export declare class Paren_exprContext extends ParserRuleContext {
    
    expr(): ExprContext;
    
}

export declare class ExprContext extends ParserRuleContext {
    
    test(): TestContext;
    
    id(): IdContext;
    
    expr(): ExprContext;
    
}

export declare class TestContext extends ParserRuleContext {
    
}

export declare class SumContext extends ParserRuleContext {
    
    term(): TermContext;
    
    sum(): SumContext;
    
}

export declare class TermContext extends ParserRuleContext {
    
    id(): IdContext;
    
    integer(): IntegerContext;
    
    paren_expr(): Paren_exprContext;
    
}

export declare class IdContext extends ParserRuleContext {
    
    STRING(): TerminalNode;
    
}

export declare class IntegerContext extends ParserRuleContext {
    
    INT(): TerminalNode;
    
}


export declare class TinycParser extends Parser {
    readonly ruleNames: string[];
    readonly literalNames: string[];
    readonly symbolicNames: string[];

    constructor(input: CommonTokenStream);
    
}
