[antlr4-editor](../README.md) > ["implementions/codemirror/bookmark/codemirror-bookmark"](../modules/_implementions_codemirror_bookmark_codemirror_bookmark_.md) > [CodeMirrorBookmark](../classes/_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md)

# Class: CodeMirrorBookmark

## Hierarchy

**CodeMirrorBookmark**

## Implements

* [BookmarkDecoration](../interfaces/_bookmark_bookmark_.bookmarkdecoration.md)

## Index

### Constructors

* [constructor](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#constructor)

### Properties

* [domElement](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#domelement)
* [editor](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#editor)
* [hidden](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#hidden)
* [insertLeft](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#insertleft)
* [mark](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#mark)
* [position](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#position)

### Methods

* [createBookmarkWithDom](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#createbookmarkwithdom)
* [getDomElement](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#getdomelement)
* [getPosition](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#getposition)
* [hide](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#hide)
* [isHidden](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#ishidden)
* [remove](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#remove)
* [show](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md#show)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CodeMirrorBookmark**(editor: *[CodeMirrorEditor](_implementions_codemirror_codemirror_editor_.codemirroreditor.md)*, position: *[EditorPosition](../interfaces/_types_.editorposition.md)*, domElement: *`HTMLElement`*, insertLeft?: *`boolean`*): [CodeMirrorBookmark](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| editor | [CodeMirrorEditor](_implementions_codemirror_codemirror_editor_.codemirroreditor.md) |
| position | [EditorPosition](../interfaces/_types_.editorposition.md) |
| domElement | `HTMLElement` |
| `Optional` insertLeft | `boolean` |

**Returns:** [CodeMirrorBookmark](_implementions_codemirror_bookmark_codemirror_bookmark_.codemirrorbookmark.md)

___

## Properties

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
<a id="insertleft"></a>

### `<Private>``<Optional>` insertLeft

**● insertLeft**: *`boolean`*

___
<a id="mark"></a>

### `<Private>` mark

**● mark**: *`TextMarker`*

___
<a id="position"></a>

### `<Private>` position

**● position**: *[EditorPosition](../interfaces/_types_.editorposition.md)*

___

## Methods

<a id="createbookmarkwithdom"></a>

### `<Private>` createBookmarkWithDom

▸ **createBookmarkWithDom**(insertLeft?: *`boolean`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` insertLeft | `boolean` |

**Returns:** `void`

___
<a id="getdomelement"></a>

###  getDomElement

▸ **getDomElement**(): `HTMLElement`

**Returns:** `HTMLElement`

___
<a id="getposition"></a>

###  getPosition

▸ **getPosition**(): [EditorPosition](../interfaces/_types_.editorposition.md)

**Returns:** [EditorPosition](../interfaces/_types_.editorposition.md)

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

