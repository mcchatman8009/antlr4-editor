// Generated from Tinyc.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by TinycParser.

function TinycVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

TinycVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
TinycVisitor.prototype.constructor = TinycVisitor;

// Visit a parse tree produced by TinycParser#program.
TinycVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TinycParser#statement.
TinycVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TinycParser#paren_expr.
TinycVisitor.prototype.visitParen_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TinycParser#expr.
TinycVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TinycParser#test.
TinycVisitor.prototype.visitTest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TinycParser#sum.
TinycVisitor.prototype.visitSum = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TinycParser#term.
TinycVisitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TinycParser#id.
TinycVisitor.prototype.visitId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TinycParser#integer.
TinycVisitor.prototype.visitInteger = function(ctx) {
  return this.visitChildren(ctx);
};



exports.TinycVisitor = TinycVisitor;