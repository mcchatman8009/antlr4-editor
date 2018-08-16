const {SimpleToolbar} = require("../../dist/toolbar/simple-toolbar");

const {CodeMirrorEditor} = require('../../dist/implementions/codemirror/codemirror-editor');
const antlrHelper = require('antlr4-helper');

const TinycLexer = require('./parser/TinycLexer').TinycLexer;
const TinycParser = require('./parser/TinycParser').TinycParser;

const factory = antlrHelper.createFactoryBuilder()
    .lexer((input) => new TinycLexer(input))
    .parser(tokenStream => new TinycParser(tokenStream))
    .rootRule((parser) => parser.program())
    .build();

const parser = antlrHelper.createParser(factory);
const editor = new CodeMirrorEditor(parser);

// editor.setReadOnly(true);
editor.defineErrorMessage('statement', (error) => 'Please add a semicolon \';\'');

editor.addAutoCompleteListener('id', (event) => {
    // console.log(event.rule.getName());
    // console.log(event.rule.getText());

    event.showCompletions([{
        text: 'a = {{ b }}',
        displayText: 'a = val',
        placeholderVariables: {b: {defaultValue: 'value'}}
    }, {text: 'vartwo'}]);

});

editor.setShowLineNumbers(true);
editor.setEditorPlaceholderText('Enter Your Code Here...');
editor.setTheme('idea');
editor.setDefaultRuleStyles({'statement': 'cm-keyword'});
editor.setDisplayEditorErrors(true);
editor.setDisplayOnlyRelevantEditorErrors(true);
editor.setText('a = b;');

editor.update();

const el = editor.getDomElement();
document.body.appendChild(el);

const d = document.createElement('span');
d.innerHTML = 'var';

const rule = editor.getRuleByName('id');

if (rule) {
    editor.createRuleDecoration(rule, d);
}

editor.addChangeListener(() => {

});

