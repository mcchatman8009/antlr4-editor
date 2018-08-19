[antlr4-editor](../README.md) > ["implementations/codemirror/placeholder/codemirror-placeholder"](../modules/_implementations_codemirror_placeholder_codemirror_placeholder_.md) > [CodeMirrorPlaceholder](../classes/_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md)

# Class: CodeMirrorPlaceholder

## Hierarchy

**CodeMirrorPlaceholder**

## Implements

* [Placeholder](../interfaces/_placeholder_placeholder_.placeholder.md)

## Index

### Constructors

* [constructor](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#constructor)

### Properties

* [currentCompletionPopup](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#currentcompletionpopup)
* [domContainer](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#domcontainer)
* [editor](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#editor)
* [inputElement](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#inputelement)
* [mark](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#mark)
* [placeHolderText](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#placeholdertext)
* [range](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#range)

### Methods

* [addChangeListener](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#addchangelistener)
* [chooseNextCompletion](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#choosenextcompletion)
* [choosePrevCompletion](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#chooseprevcompletion)
* [clearCompletions](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#clearcompletions)
* [clearMark](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#clearmark)
* [enableDefaultKeyEventHandlers](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#enabledefaultkeyeventhandlers)
* [exists](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#exists)
* [focus](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#focus)
* [getDomElement](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#getdomelement)
* [getInputElement](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#getinputelement)
* [getPlaceHolderText](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#getplaceholdertext)
* [getTextRange](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#gettextrange)
* [setPlaceHolderText](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#setplaceholdertext)
* [setRangeWithText](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#setrangewithtext)
* [showCompletions](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md#showcompletions)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CodeMirrorPlaceholder**(editor: *[CodeMirrorEditor](_implementations_codemirror_codemirror_editor_.codemirroreditor.md)*, domContainer: *`HTMLElement`*, range: *[[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)]*): [CodeMirrorPlaceholder](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| editor | [CodeMirrorEditor](_implementations_codemirror_codemirror_editor_.codemirroreditor.md) |
| domContainer | `HTMLElement` |
| range | [[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)] |

**Returns:** [CodeMirrorPlaceholder](_implementations_codemirror_placeholder_codemirror_placeholder_.codemirrorplaceholder.md)

___

## Properties

<a id="currentcompletionpopup"></a>

### `<Private>` currentCompletionPopup

**● currentCompletionPopup**: *[CompletionPopup](../interfaces/_completion_completion_popup_.completionpopup.md)*

___
<a id="domcontainer"></a>

### `<Private>` domContainer

**● domContainer**: *`HTMLElement`*

___
<a id="editor"></a>

### `<Private>` editor

**● editor**: *[CodeMirrorEditor](_implementations_codemirror_codemirror_editor_.codemirroreditor.md)*

___
<a id="inputelement"></a>

### `<Private>` inputElement

**● inputElement**: *`HTMLElement`*

___
<a id="mark"></a>

### `<Private>` mark

**● mark**: *`TextMarker`*

___
<a id="placeholdertext"></a>

### `<Private>` placeHolderText

**● placeHolderText**: *`string`*

___
<a id="range"></a>

### `<Private>` range

**● range**: *[[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)]*

___

## Methods

<a id="addchangelistener"></a>

###  addChangeListener

▸ **addChangeListener**(listener: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| listener | `function` |

**Returns:** `void`

___
<a id="choosenextcompletion"></a>

### `<Private>` chooseNextCompletion

▸ **chooseNextCompletion**(): `void`

**Returns:** `void`

___
<a id="chooseprevcompletion"></a>

### `<Private>` choosePrevCompletion

▸ **choosePrevCompletion**(): `void`

**Returns:** `void`

___
<a id="clearcompletions"></a>

### `<Private>` clearCompletions

▸ **clearCompletions**(): `void`

**Returns:** `void`

___
<a id="clearmark"></a>

### `<Private>` clearMark

▸ **clearMark**(): `void`

**Returns:** `void`

___
<a id="enabledefaultkeyeventhandlers"></a>

###  enableDefaultKeyEventHandlers

▸ **enableDefaultKeyEventHandlers**(): `void`

**Returns:** `void`

___
<a id="exists"></a>

###  exists

▸ **exists**(): `boolean`

**Returns:** `boolean`

___
<a id="focus"></a>

###  focus

▸ **focus**(): `void`

**Returns:** `void`

___
<a id="getdomelement"></a>

###  getDomElement

▸ **getDomElement**(): `HTMLElement`

**Returns:** `HTMLElement`

___
<a id="getinputelement"></a>

###  getInputElement

▸ **getInputElement**(): `HTMLElement`

**Returns:** `HTMLElement`

___
<a id="getplaceholdertext"></a>

###  getPlaceHolderText

▸ **getPlaceHolderText**(): `string`

**Returns:** `string`

___
<a id="gettextrange"></a>

###  getTextRange

▸ **getTextRange**(): [[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)]

**Returns:** [[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)]

___
<a id="setplaceholdertext"></a>

###  setPlaceHolderText

▸ **setPlaceHolderText**(text: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `void`

___
<a id="setrangewithtext"></a>

###  setRangeWithText

▸ **setRangeWithText**(text: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `void`

___
<a id="showcompletions"></a>

###  showCompletions

▸ **showCompletions**(completions: *[Completion](../interfaces/_completion_completion_.completion.md)[]*): [CompletionPopup](../interfaces/_completion_completion_popup_.completionpopup.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| completions | [Completion](../interfaces/_completion_completion_.completion.md)[] |

**Returns:** [CompletionPopup](../interfaces/_completion_completion_popup_.completionpopup.md)

___

