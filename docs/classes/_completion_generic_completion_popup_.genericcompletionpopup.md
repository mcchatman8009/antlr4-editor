[antlr4-editor](../README.md) > ["completion/generic-completion-popup"](../modules/_completion_generic_completion_popup_.md) > [GenericCompletionPopup](../classes/_completion_generic_completion_popup_.genericcompletionpopup.md)

# Class: GenericCompletionPopup

## Hierarchy

**GenericCompletionPopup**

## Implements

* [CompletionPopup](../interfaces/_completion_completion_popup_.completionpopup.md)

## Index

### Constructors

* [constructor](_completion_generic_completion_popup_.genericcompletionpopup.md#constructor)

### Properties

* [activeCompletionCssClass](_completion_generic_completion_popup_.genericcompletionpopup.md#activecompletioncssclass)
* [afterSelection](_completion_generic_completion_popup_.genericcompletionpopup.md#afterselection)
* [completionDomElements](_completion_generic_completion_popup_.genericcompletionpopup.md#completiondomelements)
* [completionsCssClass](_completion_generic_completion_popup_.genericcompletionpopup.md#completionscssclass)
* [completionsElement](_completion_generic_completion_popup_.genericcompletionpopup.md#completionselement)
* [currentFocus](_completion_generic_completion_popup_.genericcompletionpopup.md#currentfocus)
* [editor](_completion_generic_completion_popup_.genericcompletionpopup.md#editor)
* [onCancel](_completion_generic_completion_popup_.genericcompletionpopup.md#oncancel)
* [onSelected](_completion_generic_completion_popup_.genericcompletionpopup.md#onselected)
* [relativeInputElement](_completion_generic_completion_popup_.genericcompletionpopup.md#relativeinputelement)
* [relativeRootElement](_completion_generic_completion_popup_.genericcompletionpopup.md#relativerootelement)
* [singleCompletionCssClass](_completion_generic_completion_popup_.genericcompletionpopup.md#singlecompletioncssclass)

### Methods

* [adjustCurrentFocus](_completion_generic_completion_popup_.genericcompletionpopup.md#adjustcurrentfocus)
* [cancel](_completion_generic_completion_popup_.genericcompletionpopup.md#cancel)
* [chooseNextCompletion](_completion_generic_completion_popup_.genericcompletionpopup.md#choosenextcompletion)
* [choosePrevCompletion](_completion_generic_completion_popup_.genericcompletionpopup.md#chooseprevcompletion)
* [hasHints](_completion_generic_completion_popup_.genericcompletionpopup.md#hashints)
* [positionHintsElement](_completion_generic_completion_popup_.genericcompletionpopup.md#positionhintselement)
* [removeActive](_completion_generic_completion_popup_.genericcompletionpopup.md#removeactive)
* [removeCompletions](_completion_generic_completion_popup_.genericcompletionpopup.md#removecompletions)
* [removeCurrentFocus](_completion_generic_completion_popup_.genericcompletionpopup.md#removecurrentfocus)
* [renderActive](_completion_generic_completion_popup_.genericcompletionpopup.md#renderactive)
* [select](_completion_generic_completion_popup_.genericcompletionpopup.md#select)
* [showHints](_completion_generic_completion_popup_.genericcompletionpopup.md#showhints)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new GenericCompletionPopup**(relativeRootElement: *`HTMLElement`*, editor: *[AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md)*): [GenericCompletionPopup](_completion_generic_completion_popup_.genericcompletionpopup.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| relativeRootElement | `HTMLElement` |
| editor | [AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md) |

**Returns:** [GenericCompletionPopup](_completion_generic_completion_popup_.genericcompletionpopup.md)

___

## Properties

<a id="activecompletioncssclass"></a>

###  activeCompletionCssClass

**● activeCompletionCssClass**: *`string`*

___
<a id="afterselection"></a>

###  afterSelection

**● afterSelection**: *`function`*

#### Type declaration
▸(completion: *[Completion](../interfaces/_completion_completion_.completion.md)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| completion | [Completion](../interfaces/_completion_completion_.completion.md) |

**Returns:** `void`

___
<a id="completiondomelements"></a>

### `<Private>` completionDomElements

**● completionDomElements**: *`HTMLElement`[]* =  []

___
<a id="completionscssclass"></a>

###  completionsCssClass

**● completionsCssClass**: *`string`*

___
<a id="completionselement"></a>

###  completionsElement

**● completionsElement**: *`HTMLElement`*

___
<a id="currentfocus"></a>

### `<Private>` currentFocus

**● currentFocus**: *`number`* = 0

___
<a id="editor"></a>

### `<Private>` editor

**● editor**: *[AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md)*

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
▸(completion: *[Completion](../interfaces/_completion_completion_.completion.md)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| completion | [Completion](../interfaces/_completion_completion_.completion.md) |

**Returns:** `void`

___
<a id="relativeinputelement"></a>

### `<Private>` relativeInputElement

**● relativeInputElement**: *`HTMLElement`*

___
<a id="relativerootelement"></a>

### `<Private>` relativeRootElement

**● relativeRootElement**: *`HTMLElement`*

___
<a id="singlecompletioncssclass"></a>

###  singleCompletionCssClass

**● singleCompletionCssClass**: *`string`*

___

## Methods

<a id="adjustcurrentfocus"></a>

### `<Private>` adjustCurrentFocus

▸ **adjustCurrentFocus**(): `void`

**Returns:** `void`

___
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
<a id="positionhintselement"></a>

### `<Private>` positionHintsElement

▸ **positionHintsElement**(): `void`

**Returns:** `void`

___
<a id="removeactive"></a>

### `<Private>` removeActive

▸ **removeActive**(): `void`

**Returns:** `void`

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
<a id="renderactive"></a>

### `<Private>` renderActive

▸ **renderActive**(): `void`

**Returns:** `void`

___
<a id="select"></a>

###  select

▸ **select**(): `boolean`

**Returns:** `boolean`

___
<a id="showhints"></a>

###  showHints

▸ **showHints**(inputElement: *`HTMLElement`*, completions: *[Completion](../interfaces/_completion_completion_.completion.md)[]*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| inputElement | `HTMLElement` |
| completions | [Completion](../interfaces/_completion_completion_.completion.md)[] |

**Returns:** `void`

___

