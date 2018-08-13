[antlr4-editor](../README.md) > ["cli/cli"](../modules/_cli_cli_.md)

# External module: "cli/cli"

## Index

### Variables

* [_](_cli_cli_.md#_)
* [chalk](_cli_cli_.md#chalk)
* [commander](_cli_cli_.md#commander)
* [compiledResults](_cli_cli_.md#compiledresults)
* [editorModule](_cli_cli_.md#editormodule)
* [editorPlatform](_cli_cli_.md#editorplatform)
* [ejs](_cli_cli_.md#ejs)
* [fs](_cli_cli_.md#fs)
* [grammars](_cli_cli_.md#grammars)
* [mkdir](_cli_cli_.md#mkdir)
* [outputDirectory](_cli_cli_.md#outputdirectory)
* [parserUtil](_cli_cli_.md#parserutil)
* [path](_cli_cli_.md#path)
* [results](_cli_cli_.md#results)
* [rootRule](_cli_cli_.md#rootrule)
* [tool](_cli_cli_.md#tool)

### Functions

* [createTemplateCtx](_cli_cli_.md#createtemplatectx)
* [generateFile](_cli_cli_.md#generatefile)
* [loadCSSFiles](_cli_cli_.md#loadcssfiles)

### Object literals

* [compilerOpts](_cli_cli_.md#compileropts)

---

## Variables

<a id="_"></a>

### `<Const>` _

**● _**: *`any`* =  require('lodash')

___
<a id="chalk"></a>

### `<Const>` chalk

**● chalk**: *`any`* =  require('chalk')

___
<a id="commander"></a>

### `<Const>` commander

**● commander**: *`any`* =  require('commander')

___
<a id="compiledresults"></a>

### `<Const>` compiledResults

**● compiledResults**: *`any`* =  tool.compile(compilerOpts)

___
<a id="editormodule"></a>

### `<Const>` editorModule

**● editorModule**: *`any`* =  results['editorModule']

___
<a id="editorplatform"></a>

### `<Const>` editorPlatform

**● editorPlatform**: *`any`* =  results['editorPlatform']

___
<a id="ejs"></a>

### `<Const>` ejs

**● ejs**: *`any`* =  require('ejs')

___
<a id="fs"></a>

### `<Const>` fs

**● fs**: *`any`* =  require('fs')

___
<a id="grammars"></a>

### `<Let>` grammars

**● grammars**: *`string`[]*

___
<a id="mkdir"></a>

### `<Const>` mkdir

**● mkdir**: *`any`* =  require('mkdir-recursive').mkdirSync

___
<a id="outputdirectory"></a>

### `<Const>` outputDirectory

**● outputDirectory**: *`any`* =  results['outputPath']

___
<a id="parserutil"></a>

### `<Const>` parserUtil

**● parserUtil**: *`any`* =  require('antlr4-tool/dist/antlr-core/parser-util')

___
<a id="path"></a>

### `<Const>` path

**● path**: *`any`* =  require('path')

___
<a id="results"></a>

### `<Const>` results

**● results**: *`any`* =  commander
    .name('antlr4-editor')
    .option('-r --root-rule <rule>', 'The Root Rule of the Grammar (required)')
    .option('-o --output-path <directory>', 'The Source Output Directory', 'src/editor')
    .option('-p --editor-platform [platform]', 'The Editor Platform', 'codemirror')
    .option('-m --editor-module [module]', '', 'antlr4-editor')
    .arguments('[grammars...]')
    .action((...args: any[]) => {
        grammars = args[0];
    })
    .parse(process.argv)

___
<a id="rootrule"></a>

### `<Const>` rootRule

**● rootRule**: *`any`* =  results['rootRule']

___
<a id="tool"></a>

### `<Const>` tool

**● tool**: *`any`* =  require('antlr4-tool')

___

## Functions

<a id="createtemplatectx"></a>

###  createTemplateCtx

▸ **createTemplateCtx**(grammar: *`string`*, parser?: *`any`*, lexer?: *`any`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| grammar | `string` |
| `Optional` parser | `any` |
| `Optional` lexer | `any` |

**Returns:** `any`

___
<a id="generatefile"></a>

###  generateFile

▸ **generateFile**(filePath: *`string`*, templateStr: *`string`*, ctx: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| filePath | `string` |
| templateStr | `string` |
| ctx | `any` |

**Returns:** `void`

___
<a id="loadcssfiles"></a>

###  loadCSSFiles

▸ **loadCSSFiles**(editorImplementation: *`string`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| editorImplementation | `string` |

**Returns:** `any`

___

## Object literals

<a id="compileropts"></a>

### `<Const>` compilerOpts

**compilerOpts**: *`object`*

<a id="compileropts.grammarfiles"></a>

####  grammarFiles

**● grammarFiles**: *`string`[]* =  grammars

___
<a id="compileropts.language"></a>

####  language

**● language**: *`string`* = "JavaScript"

___
<a id="compileropts.outputdirectory-1"></a>

####  outputDirectory

**● outputDirectory**: *`any`* =  outputDirectory

___

___

