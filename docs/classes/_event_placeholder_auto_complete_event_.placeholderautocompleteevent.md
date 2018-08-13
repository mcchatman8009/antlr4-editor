[antlr4-editor](../README.md) > ["event/placeholder-auto-complete-event"](../modules/_event_placeholder_auto_complete_event_.md) > [PlaceHolderAutoCompleteEvent](../classes/_event_placeholder_auto_complete_event_.placeholderautocompleteevent.md)

# Class: PlaceHolderAutoCompleteEvent

## Hierarchy

**PlaceHolderAutoCompleteEvent**

## Index

### Constructors

* [constructor](_event_placeholder_auto_complete_event_.placeholderautocompleteevent.md#constructor)

### Properties

* [completionTemplateHandler](_event_placeholder_auto_complete_event_.placeholderautocompleteevent.md#completiontemplatehandler)
* [editor](_event_placeholder_auto_complete_event_.placeholderautocompleteevent.md#editor)
* [inputValue](_event_placeholder_auto_complete_event_.placeholderautocompleteevent.md#inputvalue)
* [placeHolder](_event_placeholder_auto_complete_event_.placeholderautocompleteevent.md#placeholder)

### Methods

* [showCompletions](_event_placeholder_auto_complete_event_.placeholderautocompleteevent.md#showcompletions)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PlaceHolderAutoCompleteEvent**(placeHolder: *[Placeholder](../interfaces/_placeholder_placeholder_.placeholder.md)*, inputValue: *`string`*, editor: *[AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md)*): [PlaceHolderAutoCompleteEvent](_event_placeholder_auto_complete_event_.placeholderautocompleteevent.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| placeHolder | [Placeholder](../interfaces/_placeholder_placeholder_.placeholder.md) |
| inputValue | `string` |
| editor | [AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md) |

**Returns:** [PlaceHolderAutoCompleteEvent](_event_placeholder_auto_complete_event_.placeholderautocompleteevent.md)

___

## Properties

<a id="completiontemplatehandler"></a>

### `<Private>` completionTemplateHandler

**● completionTemplateHandler**: *[CompletionTemplateHandler](_handler_completion_template_handler_.completiontemplatehandler.md)*

___
<a id="editor"></a>

### `<Private>` editor

**● editor**: *[AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md)*

___
<a id="inputvalue"></a>

###  inputValue

**● inputValue**: *`string`*

___
<a id="placeholder"></a>

###  placeHolder

**● placeHolder**: *[Placeholder](../interfaces/_placeholder_placeholder_.placeholder.md)*

___

## Methods

<a id="showcompletions"></a>

###  showCompletions

▸ **showCompletions**(completions: *[Completion](../interfaces/_completion_completion_.completion.md)[]*): [CompletionPopup](../interfaces/_completion_completion_popup_.completionpopup.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| completions | [Completion](../interfaces/_completion_completion_.completion.md)[] |

**Returns:** [CompletionPopup](../interfaces/_completion_completion_popup_.completionpopup.md)

___

