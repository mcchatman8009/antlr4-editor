import {CommonTokenStream, Parser, ParserRuleContext, Token} from 'antlr4';
import {TerminalNode} from 'antlr4/tree/Tree';


export declare class ProgramContext extends ParserRuleContext {
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}

export declare class StatementContext extends ParserRuleContext {
    
    paren_expr(): Paren_exprContext;
    
    expr(): ExprContext;
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}

export declare class Paren_exprContext extends ParserRuleContext {
    
    expr(): ExprContext;
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}

export declare class ExprContext extends ParserRuleContext {
    
    test(): TestContext;
    
    id(): IdContext;
    
    expr(): ExprContext;
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}

export declare class TestContext extends ParserRuleContext {
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}

export declare class SumContext extends ParserRuleContext {
    
    term(): TermContext;
    
    sum(): SumContext;
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}

export declare class TermContext extends ParserRuleContext {
    
    id(): IdContext;
    
    integer(): IntegerContext;
    
    paren_expr(): Paren_exprContext;
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}

export declare class IdContext extends ParserRuleContext {
    
    STRING(): TerminalNode;
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}

export declare class IntegerContext extends ParserRuleContext {
    
    INT(): TerminalNode;
    
    removeLastChild(): any;
    
    getChildCount(): any;
    
    getSourceInterval(): any;
    
    isEmpty(): any;
    
    getRuleContext(): any;
    
    getPayload(): any;
    
    getText(): any;
    
    getAltNumber(): any;
    
}


export declare class TinycParser extends Parser {
    readonly ruleNames: string[];
    readonly literalNames: string[];
    readonly symbolicNames: string[];

    constructor(input: CommonTokenStream);
    
    program(): ProgramContext;

    statement(): StatementContext;

    paren_expr(): Paren_exprContext;

    expr(): ExprContext;

    test(): TestContext;

    term(): TermContext;

    id(): IdContext;

    integer(): IntegerContext;

    reset(): any;

    matchWildcard(): any;

    getParseListeners(): any;

    removeParseListeners(): any;

    triggerEnterRuleEvent(): any;

    triggerExitRuleEvent(): any;

    getTokenFactory(): any;

    getATNWithBypassAlts(): any;

    getInputStream(): any;

    getTokenStream(): any;

    getCurrentToken(): any;

    consume(): any;

    addContextToParseTree(): any;

    exitRule(): any;

    getPrecedence(): any;

    getExpectedTokens(): any;

    getExpectedTokensWithinCurrentRule(): any;

    getDFAStrings(): any;

    dumpDFA(): any;

    getSourceName(): any;

    removeErrorListeners(): any;

    getTokenTypeMap(): any;

    getRuleIndexMap(): any;

    getErrorListenerDispatch(): any;

}
