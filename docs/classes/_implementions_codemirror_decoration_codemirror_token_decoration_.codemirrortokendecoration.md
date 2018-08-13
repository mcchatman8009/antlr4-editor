[antlr4-editor](../README.md) > ["implementions/codemirror/decoration/codemirror-token-decoration"](../modules/_implementions_codemirror_decoration_codemirror_token_decoration_.md) > [CodeMirrorTokenDecoration](../classes/_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md)

# Class: CodeMirrorTokenDecoration

## Hierarchy

**CodeMirrorTokenDecoration**

## Implements

* [TokenDecoration](../interfaces/_decoration_token_decoration_.tokendecoration.md)

## Index

### Constructors

* [constructor](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#constructor)

### Properties

* [changeEventFunction](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#changeeventfunction)
* [clearOnEnter](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#clearonenter)
* [cursorActivityFunction](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#cursoractivityfunction)
* [domElement](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#domelement)
* [editor](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#editor)
* [hidden](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#hidden)
* [mark](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#mark)
* [toggleOnExit](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#toggleonexit)
* [token](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#token)

### Methods

* [getDomElement](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#getdomelement)
* [getToken](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#gettoken)
* [handleRuleWhenWithin](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#handlerulewhenwithin)
* [hide](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#hide)
* [isHidden](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#ishidden)
* [remove](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#remove)
* [show](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#show)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CodeMirrorTokenDecoration**(editor: *[CodeMirrorEditor](_implementions_codemirror_codemirror_editor_.codemirroreditor.md)*, token: *`AntlrTokenWrapper`*, domElement: *`HTMLElement`*): [CodeMirrorTokenDecoration](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| editor | [CodeMirrorEditor](_implementions_codemirror_codemirror_editor_.codemirroreditor.md) |
| token | `AntlrTokenWrapper` |
| domElement | `HTMLElement` |

**Returns:** [CodeMirrorTokenDecoration](_implementions_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md)

___

## Properties

<a id="changeeventfunction"></a>

### `<Private>` changeEventFunction

**● changeEventFunction**: *`function`*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="clearonenter"></a>

###  clearOnEnter

**● clearOnEnter**: *`boolean`* = true

___
<a id="cursoractivityfunction"></a>

### `<Private>` cursorActivityFunction

**● cursorActivityFunction**: *`function`*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="domelement"></a>

### `<Private>` domElement

**● domElement**: *`HTMLElement`*

___
<a id="editor"></a>

### `<Private>` editor

**● editor**: *[CodeMirrorEditor](_implementions_codemirror_codemirror_editor_.codemirroreditor.md)*

___
<a id="hidden"></a>

### `<Private>` hidden

**● hidden**: *`boolean`* = false

___
<a id="mark"></a>

### `<Private>` mark

**● mark**: *`TextMarker`*

___
<a id="toggleonexit"></a>

###  toggleOnExit

**● toggleOnExit**: *`boolean`* = true

___
<a id="token"></a>

### `<Private>` token

**● token**: *`AntlrTokenWrapper`*

___

## Methods

<a id="getdomelement"></a>

###  getDomElement

▸ **getDomElement**(): `HTMLElement`

**Returns:** `HTMLElement`

___
<a id="gettoken"></a>

###  getToken

▸ **getToken**(): `AntlrTokenWrapper`

**Returns:** `AntlrTokenWrapper`

___
<a id="handlerulewhenwithin"></a>

### `<Private>` handleRuleWhenWithin

▸ **handleRuleWhenWithin**(): `void`

**Returns:** `void`

___
<a id="hide"></a>

###  hide

▸ **hide**(): `void`

**Returns:** `void`

___
<a id="ishidden"></a>

###  isHidden

▸ **isHidden**(): `boolean`

**Returns:** `boolean`

___
<a id="remove"></a>

###  remove

▸ **remove**(): `void`

**Returns:** `void`

___
<a id="show"></a>

###  show

▸ **show**(): `void`

**Returns:** `void`

___

