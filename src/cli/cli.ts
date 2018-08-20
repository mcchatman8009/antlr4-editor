import {templates} from './templates';
// const tool = require('antlr4-tool');
import * as tool from 'antlr4-tool';

const commander = require('commander');
const ejs = require('ejs');
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const _ = require('lodash');
const parserUtil = require('antlr4-tool/dist/antlr-core/parser-util');
const mkdir = require('mkdir-recursive').mkdirSync;

let grammars: string[];

const results = commander
    .name('antlr4-editor')
    .option('-r --root-rule <rule>', 'The Root Rule of the Grammar (required)')
    .option('-o --output-path <directory>', 'The Source Output Directory', 'src/editor')
    .option('-p --editor-platform [platform]', 'The Editor Platform', 'codemirror')
    .option('-m --editor-module [module]', '', 'antlr4-editor')
    .arguments('[grammars...]')
    .action((...args: any[]) => {
        grammars = args[0];
    })
    .parse(process.argv);

if (_.isNil(results['rootRule'])) {
    console.log(chalk.red('Please specify a root rule'));
    results.help();
}

const rootRule = results['rootRule'];
const editorModule = results['editorModule'];
const editorPlatform = results['editorPlatform'];
const outputDirectory = results['outputPath'];

const compilerOpts = {
    grammarFiles: grammars,
    outputDirectory: outputDirectory,
    language: 'JavaScript'
};

const compiledResults = tool.compile(compilerOpts);

_.each(compiledResults, (files: string[], grammar: string) => {
    const parsers = _.filter(files, (file: string) => file.includes('Parser.js'));
    const lexers = _.filter(files, (file: string) => file.includes('Lexer.js'));

    files.forEach((f: string) => console.log(`Generated ${chalk.blue.underline(f)}`));

    generateFile(`${outputDirectory}/index.js`, templates.index, {});
    generateFile(`${outputDirectory}/index.d.ts`, templates.indexTs, {editorModule});
    generateFile(`${outputDirectory}/test-editor-app.js`, templates.app, {});

    if (parsers.length > 0) {
        const parser = parserUtil.readParser(grammar, parsers[0]);
        generateFile(`${outputDirectory}/editor.js`, templates.editor, createTemplateCtx(grammar, parser));

        if (lexers.length > 0) {
            const lexer = parserUtil.readLexer(grammar, lexers[0]);

            generateFile(`${outputDirectory}/test.js`, templates.test, createTemplateCtx(grammar, parser, lexer));
        }
    }

    mkdir(`${outputDirectory}/css/`);
    _.each(loadCSSFiles(editorPlatform), (content: string, css: string) => {
        const filePath = `${outputDirectory}/css/${css}`;
        fs.writeFileSync(filePath, content);
        console.log(`Generated ${chalk.blue.underline(path.resolve(filePath))}`);

    });


    {
        const ctx = createTemplateCtx(grammar);
        ctx.appPath = './test.js';
        generateFile(`${outputDirectory}/index.html`, templates.indexHtml, ctx);
    }

});

function createTemplateCtx(grammar: string, parser?: any, lexer?: any) {
    const templateContext: any = {};
    templateContext.grammar = grammar;
    templateContext.LexerClass = `${grammar}Lexer`;
    templateContext.ParserClass = `${grammar}Parser`;
    templateContext.editorModule = editorModule;
    templateContext.rootRule = rootRule;
    templateContext.editorPlatform = editorPlatform;
    templateContext['_'] = _;
    if (parser) {
        const rulesNames = _.filter(parser.ruleNames, (name: string) => name);
        templateContext.rulesNames = rulesNames;
    }
    if (lexer) {
        const rulesNames = _.filter(lexer.ruleNames, (name: string) => name);
        templateContext.lexerRulesNames = rulesNames;
    }

    return templateContext;
}

function generateFile(filePath: string, templateStr: string, ctx: any): void {
    const content = ejs.render(templateStr, ctx);
    fs.writeFileSync(filePath, content);

    console.log(`Generated ${chalk.blue.underline(path.resolve(filePath))}`);
}

function loadCSSFiles(editorImplementation: string) {
    const list = [];
    const map: any = {};

    list[0] = `${editorImplementation}-all-themes.css`;
    list[1] = `${editorImplementation}-editor.css`;
    list[2] = `${editorImplementation}-icons.css`;

    list.forEach((val) => {
        map[val] = fs.readFileSync(`${__dirname}/../css/${val}`).toString();
    });

    return map;
}
