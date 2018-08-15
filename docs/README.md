
Antlr4 Editor
=============

Overview
--------

The goal of this project/library is to provide developers with a simple to use API to develop web compatible code editors, using only Antlr4 Grammars. Allowing for the creation of the editor and language to be more unified during the development process.

**(Currently the only fully supported editor platform is codemirror at the moment)**

Getting Started
---------------

```bash
npm install -S antlr4-editor
```

### Example Generating An Editor

Generate the source files for creating a C Editor.

```javascript
antlr4-editor -o src/editor -r compilationUnit samples/c/C.g4
```

Example Output ![Output Example](./images/output.png)

Run the Test Editor Application

```javascript
node ./src/editor/test-editor-app.js
```

### Javascript Code of a Simple C Editor

Given that you've generated editor source code, the following code creates a simple C language code editor.

```javascript
const createEditor = require('./editor').createEditor;

const editor = createEditor();
editor.setEditorPlaceholderText('Enter your code here...');

editor.setShowLineNumbers(true);
editor.setDisplayEditorErrors(true);
editor.focus();

const el = editor.getDomElement();

// Render the editor
document.body.appendChild(el);
```

### TODOS

*   \[ \] Improve API Documentation
*   \[ \] Add Ace Editor Support
*   \[ \] Add Monaco Editor Support
*   \[ \] Create Sample Editors
*   \[ \] Publish Sample Editors
*   \[ \] Create Tutorials
*   \[X\] Add CodeMirror Support
*   \[ \] Provide CLI Support

## Index

### External modules

* ["bookmark/bookmark"](modules/_bookmark_bookmark_.md)
* ["cli/app"](modules/_cli_app_.md)
* ["cli/cli"](modules/_cli_cli_.md)
* ["cli/file-generator"](modules/_cli_file_generator_.md)
* ["cli/templates/index"](modules/_cli_templates_index_.md)
* ["completion/completion"](modules/_completion_completion_.md)
* ["completion/completion-popup"](modules/_completion_completion_popup_.md)
* ["completion/generic-completion-popup"](modules/_completion_generic_completion_popup_.md)
* ["completion/placeholder-var"](modules/_completion_placeholder_var_.md)
* ["decoration/rule-decoration"](modules/_decoration_rule_decoration_.md)
* ["decoration/token-decoration"](modules/_decoration_token_decoration_.md)
* ["editor/antlr-editor"](modules/_editor_antlr_editor_.md)
* ["event/auto-complete-event"](modules/_event_auto_complete_event_.md)
* ["event/editor-change-event"](modules/_event_editor_change_event_.md)
* ["event/placeholder-auto-complete-event"](modules/_event_placeholder_auto_complete_event_.md)
* ["handler/auto-completion-handler"](modules/_handler_auto_completion_handler_.md)
* ["handler/completion-template-handler"](modules/_handler_completion_template_handler_.md)
* ["implementions/codemirror/bookmark/codemirror-bookmark"](modules/_implementions_codemirror_bookmark_codemirror_bookmark_.md)
* ["implementions/codemirror/codemirror-editor"](modules/_implementions_codemirror_codemirror_editor_.md)
* ["implementions/codemirror/decoration/codemirror-rule-decoration"](modules/_implementions_codemirror_decoration_codemirror_rule_decoration_.md)
* ["implementions/codemirror/decoration/codemirror-token-decoration"](modules/_implementions_codemirror_decoration_codemirror_token_decoration_.md)
* ["implementions/codemirror/event/codemirror-change-event"](modules/_implementions_codemirror_event_codemirror_change_event_.md)
* ["implementions/codemirror/placeholder/codemirror-placeholder"](modules/_implementions_codemirror_placeholder_codemirror_placeholder_.md)
* ["implementions/index"](modules/_implementions_index_.md)
* ["index"](modules/_index_.md)
* ["key-mapping/key-mapping"](modules/_key_mapping_key_mapping_.md)
* ["placeholder/placeholder"](modules/_placeholder_placeholder_.md)
* ["toolbar/simple-toolbar"](modules/_toolbar_simple_toolbar_.md)
* ["types"](modules/_types_.md)
* ["util/dom"](modules/_util_dom_.md)
* ["util/rule"](modules/_util_rule_.md)

---

