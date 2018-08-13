[antlr4-editor](../README.md) > ["implementions/codemirror/event/codemirror-change-event"](../modules/_implementions_codemirror_event_codemirror_change_event_.md) > [CodeMirrorChangeEvent](../classes/_implementions_codemirror_event_codemirror_change_event_.codemirrorchangeevent.md)

# Class: CodeMirrorChangeEvent

## Hierarchy

**CodeMirrorChangeEvent**

## Implements

* [EditorChangeEvent](../interfaces/_event_editor_change_event_.editorchangeevent.md)

## Index

### Constructors

* [constructor](_implementions_codemirror_event_codemirror_change_event_.codemirrorchangeevent.md#constructor)

### Properties

* [changeEvents](_implementions_codemirror_event_codemirror_change_event_.codemirrorchangeevent.md#changeevents)
* [editor](_implementions_codemirror_event_codemirror_change_event_.codemirrorchangeevent.md#editor)

### Methods

* [hasDeleteEditChange](_implementions_codemirror_event_codemirror_change_event_.codemirrorchangeevent.md#hasdeleteeditchange)
* [hasInsertEditChange](_implementions_codemirror_event_codemirror_change_event_.codemirrorchangeevent.md#hasinserteditchange)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CodeMirrorChangeEvent**(editor: *[CodeMirrorEditor](_implementions_codemirror_codemirror_editor_.codemirroreditor.md)*, changeEvents: *`EditorChangeLinkedList`[]*): [CodeMirrorChangeEvent](_implementions_codemirror_event_codemirror_change_event_.codemirrorchangeevent.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| editor | [CodeMirrorEditor](_implementions_codemirror_codemirror_editor_.codemirroreditor.md) |
| changeEvents | `EditorChangeLinkedList`[] |

**Returns:** [CodeMirrorChangeEvent](_implementions_codemirror_event_codemirror_change_event_.codemirrorchangeevent.md)

___

## Properties

<a id="changeevents"></a>

### `<Private>` changeEvents

**● changeEvents**: *`EditorChangeLinkedList`[]*

___
<a id="editor"></a>

### `<Private>` editor

**● editor**: *[CodeMirrorEditor](_implementions_codemirror_codemirror_editor_.codemirroreditor.md)*

___

## Methods

<a id="hasdeleteeditchange"></a>

###  hasDeleteEditChange

▸ **hasDeleteEditChange**(): `boolean`

**Returns:** `boolean`

___
<a id="hasinserteditchange"></a>

###  hasInsertEditChange

▸ **hasInsertEditChange**(): `boolean`

**Returns:** `boolean`

___

