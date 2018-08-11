// Generated from Tinyc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TinycListener = require('./TinycListener').TinycListener;
var TinycVisitor = require('./TinycVisitor').TinycVisitor;

var grammarFileName = "Tinyc.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0012e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0006\u0002\u0016\n\u0002",
    "\r\u0002\u000e\u0002\u0017\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u00030\n\u0003\f\u0003\u000e\u00033\u000b\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003:\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005E\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006L\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007W\n\u0007\f\u0007\u000e",
    "\u0007Z\u000b\u0007\u0003\b\u0003\b\u0003\b\u0005\b_\n\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0002\u0003\f\u000b\u0002\u0004\u0006\b\n",
    "\f\u000e\u0010\u0012\u0002\u0002\u0002i\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u00049\u0003\u0002\u0002\u0002\u0006;\u0003\u0002\u0002\u0002",
    "\bD\u0003\u0002\u0002\u0002\nK\u0003\u0002\u0002\u0002\fM\u0003\u0002",
    "\u0002\u0002\u000e^\u0003\u0002\u0002\u0002\u0010`\u0003\u0002\u0002",
    "\u0002\u0012b\u0003\u0002\u0002\u0002\u0014\u0016\u0005\u0004\u0003",
    "\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016\u0017\u0003\u0002\u0002",
    "\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002",
    "\u0002\u0018\u0003\u0003\u0002\u0002\u0002\u0019\u001a\u0007\u0003\u0002",
    "\u0002\u001a\u001b\u0005\u0006\u0004\u0002\u001b\u001c\u0005\u0004\u0003",
    "\u0002\u001c:\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u0003\u0002",
    "\u0002\u001e\u001f\u0005\u0006\u0004\u0002\u001f \u0005\u0004\u0003",
    "\u0002 !\u0007\u0004\u0002\u0002!\"\u0005\u0004\u0003\u0002\":\u0003",
    "\u0002\u0002\u0002#$\u0007\u0005\u0002\u0002$%\u0005\u0006\u0004\u0002",
    "%&\u0005\u0004\u0003\u0002&:\u0003\u0002\u0002\u0002\'(\u0007\u0006",
    "\u0002\u0002()\u0005\u0004\u0003\u0002)*\u0007\u0005\u0002\u0002*+\u0005",
    "\u0006\u0004\u0002+,\u0007\u0007\u0002\u0002,:\u0003\u0002\u0002\u0002",
    "-1\u0007\b\u0002\u0002.0\u0005\u0004\u0003\u0002/.\u0003\u0002\u0002",
    "\u000203\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002",
    "\u0002\u000224\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u00024:\u0007",
    "\t\u0002\u000256\u0005\b\u0005\u000267\u0007\u0007\u0002\u00027:\u0003",
    "\u0002\u0002\u00028:\u0007\u0007\u0002\u00029\u0019\u0003\u0002\u0002",
    "\u00029\u001d\u0003\u0002\u0002\u00029#\u0003\u0002\u0002\u00029\'\u0003",
    "\u0002\u0002\u00029-\u0003\u0002\u0002\u000295\u0003\u0002\u0002\u0002",
    "98\u0003\u0002\u0002\u0002:\u0005\u0003\u0002\u0002\u0002;<\u0007\n",
    "\u0002\u0002<=\u0005\b\u0005\u0002=>\u0007\u000b\u0002\u0002>\u0007",
    "\u0003\u0002\u0002\u0002?E\u0005\n\u0006\u0002@A\u0005\u0010\t\u0002",
    "AB\u0007\f\u0002\u0002BC\u0005\b\u0005\u0002CE\u0003\u0002\u0002\u0002",
    "D?\u0003\u0002\u0002\u0002D@\u0003\u0002\u0002\u0002E\t\u0003\u0002",
    "\u0002\u0002FL\u0005\f\u0007\u0002GH\u0005\f\u0007\u0002HI\u0007\r\u0002",
    "\u0002IJ\u0005\f\u0007\u0002JL\u0003\u0002\u0002\u0002KF\u0003\u0002",
    "\u0002\u0002KG\u0003\u0002\u0002\u0002L\u000b\u0003\u0002\u0002\u0002",
    "MN\b\u0007\u0001\u0002NO\u0005\u000e\b\u0002OX\u0003\u0002\u0002\u0002",
    "PQ\f\u0004\u0002\u0002QR\u0007\u000e\u0002\u0002RW\u0005\u000e\b\u0002",
    "ST\f\u0003\u0002\u0002TU\u0007\u000f\u0002\u0002UW\u0005\u000e\b\u0002",
    "VP\u0003\u0002\u0002\u0002VS\u0003\u0002\u0002\u0002WZ\u0003\u0002\u0002",
    "\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y\r\u0003",
    "\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002[_\u0005\u0010\t\u0002\\",
    "_\u0005\u0012\n\u0002]_\u0005\u0006\u0004\u0002^[\u0003\u0002\u0002",
    "\u0002^\\\u0003\u0002\u0002\u0002^]\u0003\u0002\u0002\u0002_\u000f\u0003",
    "\u0002\u0002\u0002`a\u0007\u0010\u0002\u0002a\u0011\u0003\u0002\u0002",
    "\u0002bc\u0007\u0011\u0002\u0002c\u0013\u0003\u0002\u0002\u0002\n\u0017",
    "19DKVX^"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'if'", "'else'", "'while'", "'do'", "';'", "'{'", 
                     "'}'", "'('", "')'", "'='", "'<'", "'+'", "'-'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "STRING", "INT", "WS" ];

var ruleNames =  [ "program", "statement", "paren_expr", "expr", "test", 
                   "sum", "term", "id", "integer" ];

function TinycParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TinycParser.prototype = Object.create(antlr4.Parser.prototype);
TinycParser.prototype.constructor = TinycParser;

Object.defineProperty(TinycParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TinycParser.EOF = antlr4.Token.EOF;
TinycParser.T__0 = 1;
TinycParser.T__1 = 2;
TinycParser.T__2 = 3;
TinycParser.T__3 = 4;
TinycParser.T__4 = 5;
TinycParser.T__5 = 6;
TinycParser.T__6 = 7;
TinycParser.T__7 = 8;
TinycParser.T__8 = 9;
TinycParser.T__9 = 10;
TinycParser.T__10 = 11;
TinycParser.T__11 = 12;
TinycParser.T__12 = 13;
TinycParser.STRING = 14;
TinycParser.INT = 15;
TinycParser.WS = 16;

TinycParser.RULE_program = 0;
TinycParser.RULE_statement = 1;
TinycParser.RULE_paren_expr = 2;
TinycParser.RULE_expr = 3;
TinycParser.RULE_test = 4;
TinycParser.RULE_sum = 5;
TinycParser.RULE_term = 6;
TinycParser.RULE_id = 7;
TinycParser.RULE_integer = 8;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TinycParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TinycVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TinycParser.ProgramContext = ProgramContext;

TinycParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TinycParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 18;
            this.statement();
            this.state = 21; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TinycParser.T__0) | (1 << TinycParser.T__2) | (1 << TinycParser.T__3) | (1 << TinycParser.T__4) | (1 << TinycParser.T__5) | (1 << TinycParser.T__7) | (1 << TinycParser.STRING) | (1 << TinycParser.INT))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TinycParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.paren_expr = function() {
    return this.getTypedRuleContext(Paren_exprContext,0);
};

StatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TinycVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TinycParser.StatementContext = StatementContext;

TinycParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TinycParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 55;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 23;
            this.match(TinycParser.T__0);
            this.state = 24;
            this.paren_expr();
            this.state = 25;
            this.statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 27;
            this.match(TinycParser.T__0);
            this.state = 28;
            this.paren_expr();
            this.state = 29;
            this.statement();
            this.state = 30;
            this.match(TinycParser.T__1);
            this.state = 31;
            this.statement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 33;
            this.match(TinycParser.T__2);
            this.state = 34;
            this.paren_expr();
            this.state = 35;
            this.statement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 37;
            this.match(TinycParser.T__3);
            this.state = 38;
            this.statement();
            this.state = 39;
            this.match(TinycParser.T__2);
            this.state = 40;
            this.paren_expr();
            this.state = 41;
            this.match(TinycParser.T__4);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 43;
            this.match(TinycParser.T__5);
            this.state = 47;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TinycParser.T__0) | (1 << TinycParser.T__2) | (1 << TinycParser.T__3) | (1 << TinycParser.T__4) | (1 << TinycParser.T__5) | (1 << TinycParser.T__7) | (1 << TinycParser.STRING) | (1 << TinycParser.INT))) !== 0)) {
                this.state = 44;
                this.statement();
                this.state = 49;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 50;
            this.match(TinycParser.T__6);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 51;
            this.expr();
            this.state = 52;
            this.match(TinycParser.T__4);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 54;
            this.match(TinycParser.T__4);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Paren_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TinycParser.RULE_paren_expr;
    return this;
}

Paren_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Paren_exprContext.prototype.constructor = Paren_exprContext;

Paren_exprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Paren_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.enterParen_expr(this);
	}
};

Paren_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.exitParen_expr(this);
	}
};

Paren_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TinycVisitor ) {
        return visitor.visitParen_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TinycParser.Paren_exprContext = Paren_exprContext;

TinycParser.prototype.paren_expr = function() {

    var localctx = new Paren_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, TinycParser.RULE_paren_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.match(TinycParser.T__7);
        this.state = 58;
        this.expr();
        this.state = 59;
        this.match(TinycParser.T__8);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TinycParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.test = function() {
    return this.getTypedRuleContext(TestContext,0);
};

ExprContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

ExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TinycVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TinycParser.ExprContext = ExprContext;

TinycParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TinycParser.RULE_expr);
    try {
        this.state = 66;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 61;
            this.test();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 62;
            this.id();
            this.state = 63;
            this.match(TinycParser.T__9);
            this.state = 64;
            this.expr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TinycParser.RULE_test;
    return this;
}

TestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TestContext.prototype.constructor = TestContext;

TestContext.prototype.sum = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SumContext);
    } else {
        return this.getTypedRuleContext(SumContext,i);
    }
};

TestContext.prototype.enterRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.enterTest(this);
	}
};

TestContext.prototype.exitRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.exitTest(this);
	}
};

TestContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TinycVisitor ) {
        return visitor.visitTest(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TinycParser.TestContext = TestContext;

TinycParser.prototype.test = function() {

    var localctx = new TestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TinycParser.RULE_test);
    try {
        this.state = 73;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 68;
            this.sum(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 69;
            this.sum(0);
            this.state = 70;
            this.match(TinycParser.T__10);
            this.state = 71;
            this.sum(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TinycParser.RULE_sum;
    return this;
}

SumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SumContext.prototype.constructor = SumContext;

SumContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

SumContext.prototype.sum = function() {
    return this.getTypedRuleContext(SumContext,0);
};

SumContext.prototype.enterRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.enterSum(this);
	}
};

SumContext.prototype.exitRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.exitSum(this);
	}
};

SumContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TinycVisitor ) {
        return visitor.visitSum(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TinycParser.prototype.sum = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SumContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, TinycParser.RULE_sum, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.term();
        this._ctx.stop = this._input.LT(-1);
        this.state = 86;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 84;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TinycParser.RULE_sum);
                    this.state = 78;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 79;
                    this.match(TinycParser.T__11);
                    this.state = 80;
                    this.term();
                    break;

                case 2:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TinycParser.RULE_sum);
                    this.state = 81;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 82;
                    this.match(TinycParser.T__12);
                    this.state = 83;
                    this.term();
                    break;

                } 
            }
            this.state = 88;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TinycParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

TermContext.prototype.integer = function() {
    return this.getTypedRuleContext(IntegerContext,0);
};

TermContext.prototype.paren_expr = function() {
    return this.getTypedRuleContext(Paren_exprContext,0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.exitTerm(this);
	}
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TinycVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TinycParser.TermContext = TermContext;

TinycParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, TinycParser.RULE_term);
    try {
        this.state = 92;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TinycParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 89;
            this.id();
            break;
        case TinycParser.INT:
            this.enterOuterAlt(localctx, 2);
            this.state = 90;
            this.integer();
            break;
        case TinycParser.T__7:
            this.enterOuterAlt(localctx, 3);
            this.state = 91;
            this.paren_expr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TinycParser.RULE_id;
    return this;
}

IdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdContext.prototype.constructor = IdContext;

IdContext.prototype.STRING = function() {
    return this.getToken(TinycParser.STRING, 0);
};

IdContext.prototype.enterRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.enterId(this);
	}
};

IdContext.prototype.exitRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.exitId(this);
	}
};

IdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TinycVisitor ) {
        return visitor.visitId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TinycParser.IdContext = IdContext;

TinycParser.prototype.id = function() {

    var localctx = new IdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, TinycParser.RULE_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(TinycParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntegerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TinycParser.RULE_integer;
    return this;
}

IntegerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntegerContext.prototype.constructor = IntegerContext;

IntegerContext.prototype.INT = function() {
    return this.getToken(TinycParser.INT, 0);
};

IntegerContext.prototype.enterRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.enterInteger(this);
	}
};

IntegerContext.prototype.exitRule = function(listener) {
    if(listener instanceof TinycListener ) {
        listener.exitInteger(this);
	}
};

IntegerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TinycVisitor ) {
        return visitor.visitInteger(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TinycParser.IntegerContext = IntegerContext;

TinycParser.prototype.integer = function() {

    var localctx = new IntegerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, TinycParser.RULE_integer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.match(TinycParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


TinycParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 5:
			return this.sum_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

TinycParser.prototype.sum_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.TinycParser = TinycParser;
exports.ProgramContext = ProgramContext;
TinycParser.ProgramContext = ProgramContext;
exports.StatementContext = StatementContext;
TinycParser.StatementContext = StatementContext;
exports.Paren_exprContext = Paren_exprContext;
TinycParser.Paren_exprContext = Paren_exprContext;
exports.ExprContext = ExprContext;
TinycParser.ExprContext = ExprContext;
exports.TestContext = TestContext;
TinycParser.TestContext = TestContext;
exports.SumContext = SumContext;
TinycParser.SumContext = SumContext;
exports.TermContext = TermContext;
TinycParser.TermContext = TermContext;
exports.IdContext = IdContext;
TinycParser.IdContext = IdContext;
exports.IntegerContext = IntegerContext;
TinycParser.IntegerContext = IntegerContext;
