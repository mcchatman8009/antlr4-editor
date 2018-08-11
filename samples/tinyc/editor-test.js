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

editor.defineErrorMessage('statement', (error) => 'Please add a semicolon \';\'');
editor.addAutoCompleteListener('id', (event) => {
    console.log(event.rule.getName());
    console.log(event.rule.getText());

    event.showCompletions([{
        text: 'a = {{ b }}',
        displayText: 'a = val',
        placeholderVariables: {b: {defaultValue: 'value'}}
    }, {text: 'vartwo'}]);
});

// editor.addAutoCompleteListener('expr', (event) => {
//     console.log(event.rule.getName());
//     console.log(event.rule.getText());
//     // event.stopPropagation();
//
//     return;
// });
//
// editor.addAutoCompleteListener('statement', (event) => {
//     console.log(event.rule.getName());
//     console.log(event.rule.getText());
//
//     return;
// });


editor.setShowLineNumbers(true);
editor.setEditorPlaceholderText('Enter Your Code Here...');
editor.setTheme('idea');
// editor.setDefaultTokenStyles({STRING: 'cm-keyword', ';': 'cm-keyword', 'INT': 'cm-number'});
editor.setDefaultRuleStyles({'statement': 'cm-keyword'});
editor.setDisplayEditorErrors(true);
editor.setDisplayOnlyRelevantEditorErrors(true);
editor.update();

const el = editor.getDomElement();

document.body.appendChild(el);
editor.focus();
editor.setText('\n\tvar = a;');

const rule = parser.findRulesByName('id')[1];

const placeholder = editor.createRulePlaceholder(rule);
placeholder.focus();
placeholder.enableDefaultKeyEventHandlers();
placeholder.addChangeListener((event) => {
    event.showCompletions([{
        text: 'a = {{ b }}',
        displayText: 'a = val',
        placeholderVariables: {b: {defaultValue: 'value'}}
    }, {text: 'vartwo'}]);
});

editor.addChangeListener(() => {
    // console.log(parser.findRuleByName('program').getText());
    // console.log(parser.findRuleByName('statement').getText());


});

