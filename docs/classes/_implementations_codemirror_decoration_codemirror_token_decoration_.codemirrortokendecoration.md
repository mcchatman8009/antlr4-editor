[antlr4-editor](../README.md) > ["implementations/codemirror/decoration/codemirror-token-decoration"](../modules/_implementations_codemirror_decoration_codemirror_token_decoration_.md) > [CodeMirrorTokenDecoration](../classes/_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md)

# Class: CodeMirrorTokenDecoration

## Hierarchy

**CodeMirrorTokenDecoration**

## Implements

* [TokenDecoration](../interfaces/_decoration_token_decoration_.tokendecoration.md)

## Index

### Constructors

* [constructor](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#constructor)

### Properties

* [changeEventFunction](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#changeeventfunction)
* [clearOnEnter](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#clearonenter)
* [cursorActivityFunction](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#cursoractivityfunction)
* [domElement](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#domelement)
* [editor](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#editor)
* [hidden](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#hidden)
* [mark](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#mark)
* [toggleOnExit](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#toggleonexit)
* [token](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#token)

### Methods

* [getDomElement](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#getdomelement)
* [getToken](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#gettoken)
* [handleRuleWhenWithin](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#handlerulewhenwithin)
* [hide](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#hide)
* [isHidden](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#ishidden)
* [remove](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#remove)
* [show](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md#show)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CodeMirrorTokenDecoration**(editor: *[CodeMirrorEditor](_implementations_codemirror_codemirror_editor_.codemirroreditor.md)*, token: *`AntlrTokenWrapper`*, domElement: *`HTMLElement`*): [CodeMirrorTokenDecoration](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| editor | [CodeMirrorEditor](_implementations_codemirror_codemirror_editor_.codemirroreditor.md) |
| token | `AntlrTokenWrapper` |
| domElement | `HTMLElement` |

**Returns:** [CodeMirrorTokenDecoration](_implementations_codemirror_decoration_codemirror_token_decoration_.codemirrortokendecoration.md)

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

**● editor**: *[CodeMirrorEditor](_implementations_codemirror_codemirror_editor_.codemirroreditor.md)*

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

