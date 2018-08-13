[antlr4-editor](../README.md) > ["completion/completion-popup"](../modules/_completion_completion_popup_.md) > [CompletionPopup](../interfaces/_completion_completion_popup_.completionpopup.md)

# Interface: CompletionPopup

## Hierarchy

**CompletionPopup**

## Implemented by

* [GenericCompletionPopup](../classes/_completion_generic_completion_popup_.genericcompletionpopup.md)

## Index

### Properties

* [activeCompletionCssClass](_completion_completion_popup_.completionpopup.md#activecompletioncssclass)
* [afterSelection](_completion_completion_popup_.completionpopup.md#afterselection)
* [completionsCssClass](_completion_completion_popup_.completionpopup.md#completionscssclass)
* [completionsElement](_completion_completion_popup_.completionpopup.md#completionselement)
* [onCancel](_completion_completion_popup_.completionpopup.md#oncancel)
* [onSelected](_completion_completion_popup_.completionpopup.md#onselected)
* [singleCompletionCssClass](_completion_completion_popup_.completionpopup.md#singlecompletioncssclass)

### Methods

* [cancel](_completion_completion_popup_.completionpopup.md#cancel)
* [chooseNextCompletion](_completion_completion_popup_.completionpopup.md#choosenextcompletion)
* [choosePrevCompletion](_completion_completion_popup_.completionpopup.md#chooseprevcompletion)
* [hasHints](_completion_completion_popup_.completionpopup.md#hashints)
* [removeCompletions](_completion_completion_popup_.completionpopup.md#removecompletions)
* [removeCurrentFocus](_completion_completion_popup_.completionpopup.md#removecurrentfocus)
* [select](_completion_completion_popup_.completionpopup.md#select)
* [showHints](_completion_completion_popup_.completionpopup.md#showhints)

---

## Properties

<a id="activecompletioncssclass"></a>

###  activeCompletionCssClass

**● activeCompletionCssClass**: *`string`*

___
<a id="afterselection"></a>

###  afterSelection

**● afterSelection**: *`function`*

#### Type declaration
▸(completion: *[Completion](_completion_completion_.completion.md)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| completion | [Completion](_completion_completion_.completion.md) |

**Returns:** `void`

___
<a id="completionscssclass"></a>

###  completionsCssClass

**● completionsCssClass**: *`string`*

___
<a id="completionselement"></a>

###  completionsElement

**● completionsElement**: *`HTMLElement`*

___
<a id="oncancel"></a>

###  onCancel

**● onCancel**: *`function`*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="onselected"></a>

###  onSelected

**● onSelected**: *`function`*

#### Type declaration
▸(completion: *[Completion](_completion_completion_.completion.md)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| completion | [Completion](_completion_completion_.completion.md) |

**Returns:** `void`

___
<a id="singlecompletioncssclass"></a>

###  singleCompletionCssClass

**● singleCompletionCssClass**: *`string`*

___

## Methods

<a id="cancel"></a>

###  cancel

▸ **cancel**(): `void`

**Returns:** `void`

___
<a id="choosenextcompletion"></a>

###  chooseNextCompletion

▸ **chooseNextCompletion**(): `void`

**Returns:** `void`

___
<a id="chooseprevcompletion"></a>

###  choosePrevCompletion

▸ **choosePrevCompletion**(): `void`

**Returns:** `void`

___
<a id="hashints"></a>

###  hasHints

▸ **hasHints**(): `boolean`

**Returns:** `boolean`

___
<a id="removecompletions"></a>

###  removeCompletions

▸ **removeCompletions**(): `void`

**Returns:** `void`

___
<a id="removecurrentfocus"></a>

###  removeCurrentFocus

▸ **removeCurrentFocus**(): `void`

**Returns:** `void`

___
<a id="select"></a>

###  select

▸ **select**(): `boolean`

**Returns:** `boolean`

___
<a id="showhints"></a>

###  showHints

▸ **showHints**(container: *`HTMLElement`*, completions: *[Completion](_completion_completion_.completion.md)[]*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| container | `HTMLElement` |
| completions | [Completion](_completion_completion_.completion.md)[] |

**Returns:** `void`

___

