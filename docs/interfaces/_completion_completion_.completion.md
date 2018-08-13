[antlr4-editor](../README.md) > ["completion/completion"](../modules/_completion_completion_.md) > [Completion](../interfaces/_completion_completion_.completion.md)

# Interface: Completion

## Hierarchy

**Completion**

## Index

### Properties

* [className](_completion_completion_.completion.md#classname)
* [displayText](_completion_completion_.completion.md#displaytext)
* [onRender](_completion_completion_.completion.md#onrender)
* [placeholderFactoryMethods](_completion_completion_.completion.md#placeholderfactorymethods)
* [placeholderVariables](_completion_completion_.completion.md#placeholdervariables)
* [placeholders](_completion_completion_.completion.md#placeholders)
* [range](_completion_completion_.completion.md#range)
* [text](_completion_completion_.completion.md#text)

---

## Properties

<a id="classname"></a>

### `<Optional>` className

**● className**: *`string`*

___
<a id="displaytext"></a>

### `<Optional>` displayText

**● displayText**: *`string`*

___
<a id="onrender"></a>

### `<Optional>` onRender

**● onRender**: *`function`*

#### Type declaration
▸(completionContainer: *`HTMLElement`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| completionContainer | `HTMLElement` |

**Returns:** `void`

___
<a id="placeholderfactorymethods"></a>

### `<Optional>` placeholderFactoryMethods

**● placeholderFactoryMethods**: *`object`*

#### Type declaration

[varName: `string`]: `function`

▸(): [Placeholder](_placeholder_placeholder_.placeholder.md)

**Returns:** [Placeholder](_placeholder_placeholder_.placeholder.md)

___
<a id="placeholdervariables"></a>

### `<Optional>` placeholderVariables

**● placeholderVariables**: *`object`*

#### Type declaration

[varName: `string`]: [PlaceholderVar](_completion_placeholder_var_.placeholdervar.md)

___
<a id="placeholders"></a>

### `<Optional>` placeholders

**● placeholders**: *`object`*

#### Type declaration

[varName: `string`]: [Placeholder](_placeholder_placeholder_.placeholder.md)

___
<a id="range"></a>

###  range

**● range**: *[[EditorPosition](_types_.editorposition.md), [EditorPosition](_types_.editorposition.md)]*

___
<a id="text"></a>

###  text

**● text**: *`string`*

___

