[antlr4-editor](../README.md) > ["cli/templates/index"](../modules/_cli_templates_index_.md)

# External module: "cli/templates/index"

## Index

### Variables

* [ejs](_cli_templates_index_.md#ejs)
* [templates](_cli_templates_index_.md#templates)

---

## Variables

<a id="ejs"></a>

### `<Const>` ejs

**● ejs**: *`any`* =  require('ejs')

___
<a id="templates"></a>

### `<Const>` templates

**● templates**: *`object`* =  {
    index: fs.readFileSync(__dirname + '/index.js.ejs').toString(),
    indexTs: fs.readFileSync(__dirname + '/index.d.ts.ejs').toString(),
    indexHtml: fs.readFileSync(__dirname + '/index.html.ejs').toString(),
    test: fs.readFileSync(__dirname + '/test.js.ejs').toString(),
    app: fs.readFileSync(__dirname + '/app.js.ejs').toString(),
    editor: fs.readFileSync(__dirname + '/editor.js.ejs').toString()
} as { [name: string]: string }

#### Type declaration

[name: `string`]: `string`

___

