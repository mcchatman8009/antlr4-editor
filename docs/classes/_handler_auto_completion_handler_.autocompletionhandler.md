[antlr4-editor](../README.md) > ["handler/auto-completion-handler"](../modules/_handler_auto_completion_handler_.md) > [AutoCompletionHandler](../classes/_handler_auto_completion_handler_.autocompletionhandler.md)

# Class: AutoCompletionHandler

## Hierarchy

**AutoCompletionHandler**

## Index

### Constructors

* [constructor](_handler_auto_completion_handler_.autocompletionhandler.md#constructor)

### Properties

* [editor](_handler_auto_completion_handler_.autocompletionhandler.md#editor)

### Methods

* [computeRulePriority](_handler_auto_completion_handler_.autocompletionhandler.md#computerulepriority)
* [getErrorRuleHint](_handler_auto_completion_handler_.autocompletionhandler.md#geterrorrulehint)
* [getRuleHint](_handler_auto_completion_handler_.autocompletionhandler.md#getrulehint)
* [processEvents](_handler_auto_completion_handler_.autocompletionhandler.md#processevents)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AutoCompletionHandler**(editor: *[AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md)*): [AutoCompletionHandler](_handler_auto_completion_handler_.autocompletionhandler.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| editor | [AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md) |

**Returns:** [AutoCompletionHandler](_handler_auto_completion_handler_.autocompletionhandler.md)

___

## Properties

<a id="editor"></a>

### `<Private>` editor

**● editor**: *[AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md)*

___

## Methods

<a id="computerulepriority"></a>

###  computeRulePriority

▸ **computeRulePriority**(ruleWrapper: *`AntlrRuleWrapper`*): `number`

**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleWrapper | `AntlrRuleWrapper` |

**Returns:** `number`

___
<a id="geterrorrulehint"></a>

### `<Private>` getErrorRuleHint

▸ **getErrorRuleHint**(): `AntlrRuleWrapper`

**Returns:** `AntlrRuleWrapper`

___
<a id="getrulehint"></a>

### `<Private>` getRuleHint

▸ **getRuleHint**(): `AntlrRuleWrapper`

**Returns:** `AntlrRuleWrapper`

___
<a id="processevents"></a>

###  processEvents

▸ **processEvents**(): `void`

**Returns:** `void`

___

