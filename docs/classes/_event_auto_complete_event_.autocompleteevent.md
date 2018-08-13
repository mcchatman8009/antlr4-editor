[antlr4-editor](../README.md) > ["event/auto-complete-event"](../modules/_event_auto_complete_event_.md) > [AutoCompleteEvent](../classes/_event_auto_complete_event_.autocompleteevent.md)

# Class: AutoCompleteEvent

## Hierarchy

**AutoCompleteEvent**

## Index

### Constructors

* [constructor](_event_auto_complete_event_.autocompleteevent.md#constructor)

### Properties

* [_allowChildrenToConsumeEvent](_event_auto_complete_event_.autocompleteevent.md#_allowchildrentoconsumeevent)
* [completionTemplateHandler](_event_auto_complete_event_.autocompleteevent.md#completiontemplatehandler)
* [editor](_event_auto_complete_event_.autocompleteevent.md#editor)
* [rule](_event_auto_complete_event_.autocompleteevent.md#rule)

### Accessors

* [allowChildrenToConsumeEvent](_event_auto_complete_event_.autocompleteevent.md#allowchildrentoconsumeevent)

### Methods

* [showCompletions](_event_auto_complete_event_.autocompleteevent.md#showcompletions)
* [stopPropagation](_event_auto_complete_event_.autocompleteevent.md#stoppropagation)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AutoCompleteEvent**(rule: *`AntlrRuleWrapper`*, editor: *[AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md)*): [AutoCompleteEvent](_event_auto_complete_event_.autocompleteevent.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRuleWrapper` |
| editor | [AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md) |

**Returns:** [AutoCompleteEvent](_event_auto_complete_event_.autocompleteevent.md)

___

## Properties

<a id="_allowchildrentoconsumeevent"></a>

### `<Private>` _allowChildrenToConsumeEvent

**● _allowChildrenToConsumeEvent**: *`boolean`* = true

___
<a id="completiontemplatehandler"></a>

### `<Private>` completionTemplateHandler

**● completionTemplateHandler**: *[CompletionTemplateHandler](_handler_completion_template_handler_.completiontemplatehandler.md)*

___
<a id="editor"></a>

### `<Private>` editor

**● editor**: *[AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md)*

___
<a id="rule"></a>

###  rule

**● rule**: *`AntlrRuleWrapper`*

___

## Accessors

<a id="allowchildrentoconsumeevent"></a>

###  allowChildrenToConsumeEvent

getallowChildrenToConsumeEvent(): `boolean`

**Returns:** `boolean`

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
<a id="stoppropagation"></a>

###  stopPropagation

▸ **stopPropagation**(): `void`

**Returns:** `void`

___

