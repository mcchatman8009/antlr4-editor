// Generated from Tinyc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TinycParser.
function TinycListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

TinycListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TinycListener.prototype.constructor = TinycListener;

// Enter a parse tree produced by TinycParser#program.
TinycListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by TinycParser#program.
TinycListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by TinycParser#statement.
TinycListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by TinycParser#statement.
TinycListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by TinycParser#paren_expr.
TinycListener.prototype.enterParen_expr = function(ctx) {
};

// Exit a parse tree produced by TinycParser#paren_expr.
TinycListener.prototype.exitParen_expr = function(ctx) {
};


// Enter a parse tree produced by TinycParser#expr.
TinycListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by TinycParser#expr.
TinycListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by TinycParser#test.
TinycListener.prototype.enterTest = function(ctx) {
};

// Exit a parse tree produced by TinycParser#test.
TinycListener.prototype.exitTest = function(ctx) {
};


// Enter a parse tree produced by TinycParser#sum.
TinycListener.prototype.enterSum = function(ctx) {
};

// Exit a parse tree produced by TinycParser#sum.
TinycListener.prototype.exitSum = function(ctx) {
};


// Enter a parse tree produced by TinycParser#term.
TinycListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by TinycParser#term.
TinycListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by TinycParser#id.
TinycListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by TinycParser#id.
TinycListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by TinycParser#integer.
TinycListener.prototype.enterInteger = function(ctx) {
};

// Exit a parse tree produced by TinycParser#integer.
TinycListener.prototype.exitInteger = function(ctx) {
};



exports.TinycListener = TinycListener;