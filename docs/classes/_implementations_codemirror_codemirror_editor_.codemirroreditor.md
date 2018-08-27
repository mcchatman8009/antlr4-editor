[antlr4-editor](../README.md) > ["implementations/codemirror/codemirror-editor"](../modules/_implementations_codemirror_codemirror_editor_.md) > [CodeMirrorEditor](../classes/_implementations_codemirror_codemirror_editor_.codemirroreditor.md)

# Class: CodeMirrorEditor

## Hierarchy

**CodeMirrorEditor**

## Implements

* [AntlrEditor](../interfaces/_editor_antlr_editor_.antlreditor.md)

## Index

### Constructors

* [constructor](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#constructor)

### Properties

* [autoCompleteContainer](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#autocompletecontainer)
* [autoCompleteSubject](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#autocompletesubject)
* [autoCompletionHandler](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#autocompletionhandler)
* [bookmarkDecorations](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#bookmarkdecorations)
* [changeSubject](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#changesubject)
* [currentCompletionPopup](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#currentcompletionpopup)
* [cursorPosition](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#cursorposition)
* [customErrors](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#customerrors)
* [defaultCursorBlinkingRate](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#defaultcursorblinkingrate)
* [defaultHintMapping](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#defaulthintmapping)
* [defaultRuleStyles](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#defaultrulestyles)
* [defaultTokenStyles](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#defaulttokenstyles)
* [displayDecorations](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#displaydecorations)
* [displaySingleError](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#displaysingleerror)
* [domContainer](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#domcontainer)
* [editorImplementation](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#editorimplementation)
* [lastChangeEvent](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#lastchangeevent)
* [parser](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#parser)
* [placeholdersRendered](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#placeholdersrendered)
* [ruleDecorations](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#ruledecorations)
* [ruleErrorMessageHandlers](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#ruleerrormessagehandlers)
* [selections](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#selections)
* [setValueEvent](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setvalueevent)
* [tokenDecorations](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#tokendecorations)
* [validators](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#validators)

### Methods

* [addAutoCompleteListener](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#addautocompletelistener)
* [addChangeListener](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#addchangelistener)
* [addClassToRule](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#addclasstorule)
* [addClassToToken](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#addclasstotoken)
* [addEditorValidator](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#addeditorvalidator)
* [addKeyMapping](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#addkeymapping)
* [addRuleSelection](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#addruleselection)
* [addSelection](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#addselection)
* [addStyleToRule](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#addstyletorule)
* [addStyleToToken](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#addstyletotoken)
* [addTokenSelection](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#addtokenselection)
* [attachBasicEvents](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#attachbasicevents)
* [clearAllCompletions](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#clearallcompletions)
* [createBookmarkDecoration](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#createbookmarkdecoration)
* [createPlaceholder](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#createplaceholder)
* [createRuleCompletion](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#createrulecompletion)
* [createRuleDecoration](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#createruledecoration)
* [createRuleError](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#createruleerror)
* [createRulePlaceholder](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#createruleplaceholder)
* [createTokenDecoration](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#createtokendecoration)
* [defineErrorMessage](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#defineerrormessage)
* [executeDefaultStyling](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#executedefaultstyling)
* [focus](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#focus)
* [getAllRules](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getallrules)
* [getAllTokens](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getalltokens)
* [getCursorPosition](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getcursorposition)
* [getDisplayDecorations](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getdisplaydecorations)
* [getDisplayEditorErrors](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getdisplayeditorerrors)
* [getDisplayOnlyRelevantEditorErrors](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getdisplayonlyrelevanteditorerrors)
* [getDomElement](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getdomelement)
* [getEditorErrors](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#geteditorerrors)
* [getEditorPlaceholderText](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#geteditorplaceholdertext)
* [getEnableVim](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getenablevim)
* [getLineWrapping](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getlinewrapping)
* [getParser](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getparser)
* [getReadOnly](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getreadonly)
* [getRelevantEditorError](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getrelevanteditorerror)
* [getRuleByName](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getrulebyname)
* [getRuleDecoration](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getruledecoration)
* [getRulesByName](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getrulesbyname)
* [getSelections](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getselections)
* [getShowLineNumbers](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getshowlinenumbers)
* [getStyleActiveLine](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#getstyleactiveline)
* [getText](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#gettext)
* [getTheme](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#gettheme)
* [getTokenDecoration](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#gettokendecoration)
* [hasErrors](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#haserrors)
* [hasRenderedPlaceholders](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#hasrenderedplaceholders)
* [hasSelections](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#hasselections)
* [hideAllDecorations](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#hidealldecorations)
* [mapParseErrorToCodeMirrorError](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#mapparseerrortocodemirrorerror)
* [removeKeyMapping](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#removekeymapping)
* [replaceRange](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#replacerange)
* [setAutoCompleteContainer](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setautocompletecontainer)
* [setCursorPosition](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setcursorposition)
* [setDefaultRuleStyles](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setdefaultrulestyles)
* [setDefaultTokenStyles](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setdefaulttokenstyles)
* [setDisplayDecorations](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setdisplaydecorations)
* [setDisplayEditorErrors](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setdisplayeditorerrors)
* [setDisplayOnlyRelevantEditorErrors](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setdisplayonlyrelevanteditorerrors)
* [setEditorPlaceholderText](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#seteditorplaceholdertext)
* [setEnableVim](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setenablevim)
* [setLineWrapping](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setlinewrapping)
* [setParser](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setparser)
* [setReadOnly](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setreadonly)
* [setShowLineNumbers](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setshowlinenumbers)
* [setStyleActiveLine](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#setstyleactiveline)
* [setText](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#settext)
* [setTheme](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#settheme)
* [showAllDecorations](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#showalldecorations)
* [showCompletions](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#showcompletions)
* [styleRule](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#stylerule)
* [styleToken](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#styletoken)
* [triggerAutoCompletionEvent](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#triggerautocompletionevent)
* [update](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#update)
* [updateCursorPosition](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#updatecursorposition)
* [validate](_implementations_codemirror_codemirror_editor_.codemirroreditor.md#validate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CodeMirrorEditor**(parser: *`AntlrParser`*, domContainer?: *`HTMLElement`*): [CodeMirrorEditor](_implementations_codemirror_codemirror_editor_.codemirroreditor.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| parser | `AntlrParser` |
| `Optional` domContainer | `HTMLElement` |

**Returns:** [CodeMirrorEditor](_implementations_codemirror_codemirror_editor_.codemirroreditor.md)

___

## Properties

<a id="autocompletecontainer"></a>

###  autoCompleteContainer

**● autoCompleteContainer**: *`HTMLElement`*

___
<a id="autocompletesubject"></a>

### `<Private>` autoCompleteSubject

**● autoCompleteSubject**: *`Subject`<[AutoCompleteEvent](_event_auto_complete_event_.autocompleteevent.md)>*

___
<a id="autocompletionhandler"></a>

### `<Private>` autoCompletionHandler

**● autoCompletionHandler**: *[AutoCompletionHandler](_handler_auto_completion_handler_.autocompletionhandler.md)*

___
<a id="bookmarkdecorations"></a>

### `<Private>` bookmarkDecorations

**● bookmarkDecorations**: *`Set`<[BookmarkDecoration](../interfaces/_bookmark_bookmark_.bookmarkdecoration.md)>*

___
<a id="changesubject"></a>

### `<Private>` changeSubject

**● changeSubject**: *`Subject`<[EditorChangeEvent](../interfaces/_event_editor_change_event_.editorchangeevent.md)>*

___
<a id="currentcompletionpopup"></a>

### `<Private>` currentCompletionPopup

**● currentCompletionPopup**: *[CompletionPopup](../interfaces/_completion_completion_popup_.completionpopup.md)*

___
<a id="cursorposition"></a>

### `<Private>` cursorPosition

**● cursorPosition**: *[EditorPosition](../interfaces/_types_.editorposition.md)*

___
<a id="customerrors"></a>

### `<Private>` customErrors

**● customErrors**: *`Set`<`AntlrRuleError`>*

___
<a id="defaultcursorblinkingrate"></a>

### `<Private>` defaultCursorBlinkingRate

**● defaultCursorBlinkingRate**: *`boolean`*

___
<a id="defaulthintmapping"></a>

### `<Private>` defaultHintMapping

**● defaultHintMapping**: *[KeyMapping](../interfaces/_key_mapping_key_mapping_.keymapping.md)*

___
<a id="defaultrulestyles"></a>

### `<Private>` defaultRuleStyles

**● defaultRuleStyles**: *`object`*

#### Type declaration

[ruleName: `string`]: `string`

___
<a id="defaulttokenstyles"></a>

### `<Private>` defaultTokenStyles

**● defaultTokenStyles**: *`object`*

#### Type declaration

[tokenName: `string`]: `string`

___
<a id="displaydecorations"></a>

### `<Private>` displayDecorations

**● displayDecorations**: *`boolean`*

___
<a id="displaysingleerror"></a>

### `<Private>` displaySingleError

**● displaySingleError**: *`boolean`*

___
<a id="domcontainer"></a>

### `<Private>``<Optional>` domContainer

**● domContainer**: *`HTMLElement`*

___
<a id="editorimplementation"></a>

###  editorImplementation

**● editorImplementation**: *`Editor`*

___
<a id="lastchangeevent"></a>

### `<Private>` lastChangeEvent

**● lastChangeEvent**: *[EditorChangeEvent](../interfaces/_event_editor_change_event_.editorchangeevent.md)*

___
<a id="parser"></a>

### `<Private>` parser

**● parser**: *`AntlrParser`*

___
<a id="placeholdersrendered"></a>

### `<Private>` placeholdersRendered

**● placeholdersRendered**: *`Set`<[Placeholder](../interfaces/_placeholder_placeholder_.placeholder.md)>*

___
<a id="ruledecorations"></a>

### `<Private>` ruleDecorations

**● ruleDecorations**: *`Map`<`ParserRuleContext`, [RuleDecoration](../interfaces/_decoration_rule_decoration_.ruledecoration.md)>*

___
<a id="ruleerrormessagehandlers"></a>

### `<Private>` ruleErrorMessageHandlers

**● ruleErrorMessageHandlers**: *`Map`<`string`, `function`>*

___
<a id="selections"></a>

### `<Private>` selections

**● selections**: *`Set`<[[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)]>*

___
<a id="setvalueevent"></a>

### `<Private>` setValueEvent

**● setValueEvent**: *`boolean`*

___
<a id="tokendecorations"></a>

### `<Private>` tokenDecorations

**● tokenDecorations**: *`Map`<`Token`, [TokenDecoration](../interfaces/_decoration_token_decoration_.tokendecoration.md)>*

___
<a id="validators"></a>

### `<Private>` validators

**● validators**: *`Set`<`function`>*

___

## Methods

<a id="addautocompletelistener"></a>

###  addAutoCompleteListener

▸ **addAutoCompleteListener**(rule: *`string`*, listener: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `string` |
| listener | `function` |

**Returns:** `void`

___
<a id="addchangelistener"></a>

###  addChangeListener

▸ **addChangeListener**(listener: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| listener | `function` |

**Returns:** `void`

___
<a id="addclasstorule"></a>

###  addClassToRule

▸ **addClassToRule**(rule: *`AntlrRuleWrapper`*, cssClass: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRuleWrapper` |
| cssClass | `string` |

**Returns:** `void`

___
<a id="addclasstotoken"></a>

###  addClassToToken

▸ **addClassToToken**(token: *`AntlrTokenWrapper`*, cssClass: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `AntlrTokenWrapper` |
| cssClass | `string` |

**Returns:** `void`

___
<a id="addeditorvalidator"></a>

###  addEditorValidator

▸ **addEditorValidator**(validator: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| validator | `function` |

**Returns:** `void`

___
<a id="addkeymapping"></a>

###  addKeyMapping

▸ **addKeyMapping**(mapping: *[KeyMapping](../interfaces/_key_mapping_key_mapping_.keymapping.md)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| mapping | [KeyMapping](../interfaces/_key_mapping_key_mapping_.keymapping.md) |

**Returns:** `void`

___
<a id="addruleselection"></a>

###  addRuleSelection

▸ **addRuleSelection**(rule: *`AntlrRuleWrapper`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRuleWrapper` |

**Returns:** `void`

___
<a id="addselection"></a>

###  addSelection

▸ **addSelection**(range: *[[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)]*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| range | [[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)] |

**Returns:** `void`

___
<a id="addstyletorule"></a>

###  addStyleToRule

▸ **addStyleToRule**(rule: *`AntlrRuleWrapper`*, css: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRuleWrapper` |
| css | `string` |

**Returns:** `void`

___
<a id="addstyletotoken"></a>

###  addStyleToToken

▸ **addStyleToToken**(token: *`AntlrTokenWrapper`*, css: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `AntlrTokenWrapper` |
| css | `string` |

**Returns:** `void`

___
<a id="addtokenselection"></a>

###  addTokenSelection

▸ **addTokenSelection**(token: *`AntlrTokenWrapper`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `AntlrTokenWrapper` |

**Returns:** `void`

___
<a id="attachbasicevents"></a>

### `<Private>` attachBasicEvents

▸ **attachBasicEvents**(): `void`

**Returns:** `void`

___
<a id="clearallcompletions"></a>

###  clearAllCompletions

▸ **clearAllCompletions**(): `void`

**Returns:** `void`

___
<a id="createbookmarkdecoration"></a>

###  createBookmarkDecoration

▸ **createBookmarkDecoration**(start: *[EditorPosition](../interfaces/_types_.editorposition.md)*, dom: *`HTMLElement`*, insertLeft?: *`boolean`*): [BookmarkDecoration](../interfaces/_bookmark_bookmark_.bookmarkdecoration.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| start | [EditorPosition](../interfaces/_types_.editorposition.md) |
| dom | `HTMLElement` |
| `Optional` insertLeft | `boolean` |

**Returns:** [BookmarkDecoration](../interfaces/_bookmark_bookmark_.bookmarkdecoration.md)

___
<a id="createplaceholder"></a>

###  createPlaceholder

▸ **createPlaceholder**(range: *[[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)]*): [Placeholder](../interfaces/_placeholder_placeholder_.placeholder.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| range | [[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)] |

**Returns:** [Placeholder](../interfaces/_placeholder_placeholder_.placeholder.md)

___
<a id="createrulecompletion"></a>

###  createRuleCompletion

▸ **createRuleCompletion**(baseCompletion: *[Completion](../interfaces/_completion_completion_.completion.md)*, rule: *`AntlrRuleWrapper`*): [Completion](../interfaces/_completion_completion_.completion.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| baseCompletion | [Completion](../interfaces/_completion_completion_.completion.md) |
| rule | `AntlrRuleWrapper` |

**Returns:** [Completion](../interfaces/_completion_completion_.completion.md)

___
<a id="createruledecoration"></a>

###  createRuleDecoration

▸ **createRuleDecoration**(rule: *`AntlrRuleWrapper`*, domElement: *`HTMLElement`*): [RuleDecoration](../interfaces/_decoration_rule_decoration_.ruledecoration.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRuleWrapper` |
| domElement | `HTMLElement` |

**Returns:** [RuleDecoration](../interfaces/_decoration_rule_decoration_.ruledecoration.md)

___
<a id="createruleerror"></a>

###  createRuleError

▸ **createRuleError**(rule?: *`AntlrRuleWrapper`*): `AntlrRuleError`

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` rule | `AntlrRuleWrapper` |

**Returns:** `AntlrRuleError`

___
<a id="createruleplaceholder"></a>

###  createRulePlaceholder

▸ **createRulePlaceholder**(rule: *`AntlrRuleWrapper`*): [Placeholder](../interfaces/_placeholder_placeholder_.placeholder.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRuleWrapper` |

**Returns:** [Placeholder](../interfaces/_placeholder_placeholder_.placeholder.md)

___
<a id="createtokendecoration"></a>

###  createTokenDecoration

▸ **createTokenDecoration**(token: *`AntlrTokenWrapper`*, domElement: *`HTMLElement`*): [TokenDecoration](../interfaces/_decoration_token_decoration_.tokendecoration.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `AntlrTokenWrapper` |
| domElement | `HTMLElement` |

**Returns:** [TokenDecoration](../interfaces/_decoration_token_decoration_.tokendecoration.md)

___
<a id="defineerrormessage"></a>

###  defineErrorMessage

▸ **defineErrorMessage**(ruleOrMessage: *`string`*, handler: *`function`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleOrMessage | `string` |
| handler | `function` |

**Returns:** `void`

___
<a id="executedefaultstyling"></a>

### `<Private>` executeDefaultStyling

▸ **executeDefaultStyling**(): `void`

**Returns:** `void`

___
<a id="focus"></a>

###  focus

▸ **focus**(): `void`

**Returns:** `void`

___
<a id="getallrules"></a>

###  getAllRules

▸ **getAllRules**(): `AntlrRuleWrapper`[]

**Returns:** `AntlrRuleWrapper`[]

___
<a id="getalltokens"></a>

###  getAllTokens

▸ **getAllTokens**(): `AntlrTokenWrapper`[]

**Returns:** `AntlrTokenWrapper`[]

___
<a id="getcursorposition"></a>

###  getCursorPosition

▸ **getCursorPosition**(): [EditorPosition](../interfaces/_types_.editorposition.md)

**Returns:** [EditorPosition](../interfaces/_types_.editorposition.md)

___
<a id="getdisplaydecorations"></a>

###  getDisplayDecorations

▸ **getDisplayDecorations**(): `boolean`

**Returns:** `boolean`

___
<a id="getdisplayeditorerrors"></a>

###  getDisplayEditorErrors

▸ **getDisplayEditorErrors**(): `boolean`

**Returns:** `boolean`

___
<a id="getdisplayonlyrelevanteditorerrors"></a>

###  getDisplayOnlyRelevantEditorErrors

▸ **getDisplayOnlyRelevantEditorErrors**(): `boolean`

**Returns:** `boolean`

___
<a id="getdomelement"></a>

###  getDomElement

▸ **getDomElement**(): `HTMLElement`

**Returns:** `HTMLElement`

___
<a id="geteditorerrors"></a>

###  getEditorErrors

▸ **getEditorErrors**(): `AntlrRuleError`[]

**Returns:** `AntlrRuleError`[]

___
<a id="geteditorplaceholdertext"></a>

###  getEditorPlaceholderText

▸ **getEditorPlaceholderText**(): `string`

**Returns:** `string`

___
<a id="getenablevim"></a>

###  getEnableVim

▸ **getEnableVim**(): `boolean`

**Returns:** `boolean`

___
<a id="getlinewrapping"></a>

###  getLineWrapping

▸ **getLineWrapping**(): `boolean`

**Returns:** `boolean`

___
<a id="getparser"></a>

###  getParser

▸ **getParser**(): `AntlrParser`

**Returns:** `AntlrParser`

___
<a id="getreadonly"></a>

###  getReadOnly

▸ **getReadOnly**(): `boolean`

**Returns:** `boolean`

___
<a id="getrelevanteditorerror"></a>

###  getRelevantEditorError

▸ **getRelevantEditorError**(): `AntlrRuleError`

**Returns:** `AntlrRuleError`

___
<a id="getrulebyname"></a>

###  getRuleByName

▸ **getRuleByName**(ruleName: *`string`*): `AntlrRuleWrapper`

**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleName | `string` |

**Returns:** `AntlrRuleWrapper`

___
<a id="getruledecoration"></a>

###  getRuleDecoration

▸ **getRuleDecoration**(rule: *`AntlrRuleWrapper`*):  [RuleDecoration](../interfaces/_decoration_rule_decoration_.ruledecoration.md) &#124; `undefined`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRuleWrapper` |

**Returns:**  [RuleDecoration](../interfaces/_decoration_rule_decoration_.ruledecoration.md) &#124; `undefined`

___
<a id="getrulesbyname"></a>

###  getRulesByName

▸ **getRulesByName**(ruleName: *`string`*): `AntlrRuleWrapper`[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| ruleName | `string` |

**Returns:** `AntlrRuleWrapper`[]

___
<a id="getselections"></a>

###  getSelections

▸ **getSelections**(): `Array`<[[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)]>

**Returns:** `Array`<[[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)]>

___
<a id="getshowlinenumbers"></a>

###  getShowLineNumbers

▸ **getShowLineNumbers**(): `boolean`

**Returns:** `boolean`

___
<a id="getstyleactiveline"></a>

###  getStyleActiveLine

▸ **getStyleActiveLine**(): `boolean`

**Returns:** `boolean`

___
<a id="gettext"></a>

###  getText

▸ **getText**(): `string`

**Returns:** `string`

___
<a id="gettheme"></a>

###  getTheme

▸ **getTheme**(): `string`

**Returns:** `string`

___
<a id="gettokendecoration"></a>

###  getTokenDecoration

▸ **getTokenDecoration**(token: *`AntlrTokenWrapper`*):  [TokenDecoration](../interfaces/_decoration_token_decoration_.tokendecoration.md) &#124; `undefined`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `AntlrTokenWrapper` |

**Returns:**  [TokenDecoration](../interfaces/_decoration_token_decoration_.tokendecoration.md) &#124; `undefined`

___
<a id="haserrors"></a>

###  hasErrors

▸ **hasErrors**(): `boolean`

**Returns:** `boolean`

___
<a id="hasrenderedplaceholders"></a>

###  hasRenderedPlaceholders

▸ **hasRenderedPlaceholders**(): `boolean`

**Returns:** `boolean`

___
<a id="hasselections"></a>

###  hasSelections

▸ **hasSelections**(): `boolean`

**Returns:** `boolean`

___
<a id="hidealldecorations"></a>

### `<Private>` hideAllDecorations

▸ **hideAllDecorations**(): `void`

**Returns:** `void`

___
<a id="mapparseerrortocodemirrorerror"></a>

### `<Private>` mapParseErrorToCodeMirrorError

▸ **mapParseErrorToCodeMirrorError**(err: *`AntlrRuleError`*): `object`

**Parameters:**

| Param | Type |
| ------ | ------ |
| err | `AntlrRuleError` |

**Returns:** `object`

___
<a id="removekeymapping"></a>

###  removeKeyMapping

▸ **removeKeyMapping**(mapping: *[KeyMapping](../interfaces/_key_mapping_key_mapping_.keymapping.md)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| mapping | [KeyMapping](../interfaces/_key_mapping_key_mapping_.keymapping.md) |

**Returns:** `void`

___
<a id="replacerange"></a>

###  replaceRange

▸ **replaceRange**(range: *[[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)]*, text: *`string`*): [[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)]

**Parameters:**

| Param | Type |
| ------ | ------ |
| range | [[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)] |
| text | `string` |

**Returns:** [[EditorPosition](../interfaces/_types_.editorposition.md), [EditorPosition](../interfaces/_types_.editorposition.md)]

___
<a id="setautocompletecontainer"></a>

###  setAutoCompleteContainer

▸ **setAutoCompleteContainer**(el: *`HTMLElement`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| el | `HTMLElement` |

**Returns:** `void`

___
<a id="setcursorposition"></a>

###  setCursorPosition

▸ **setCursorPosition**(position: *[EditorPosition](../interfaces/_types_.editorposition.md)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| position | [EditorPosition](../interfaces/_types_.editorposition.md) |

**Returns:** `void`

___
<a id="setdefaultrulestyles"></a>

###  setDefaultRuleStyles

▸ **setDefaultRuleStyles**(styles: *`object`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| styles | `object` |

**Returns:** `void`

___
<a id="setdefaulttokenstyles"></a>

###  setDefaultTokenStyles

▸ **setDefaultTokenStyles**(styles: *`object`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| styles | `object` |

**Returns:** `void`

___
<a id="setdisplaydecorations"></a>

###  setDisplayDecorations

▸ **setDisplayDecorations**(display: *`boolean`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| display | `boolean` |

**Returns:** `void`

___
<a id="setdisplayeditorerrors"></a>

###  setDisplayEditorErrors

▸ **setDisplayEditorErrors**(display: *`boolean`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| display | `boolean` |

**Returns:** `void`

___
<a id="setdisplayonlyrelevanteditorerrors"></a>

###  setDisplayOnlyRelevantEditorErrors

▸ **setDisplayOnlyRelevantEditorErrors**(display: *`boolean`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| display | `boolean` |

**Returns:** `void`

___
<a id="seteditorplaceholdertext"></a>

###  setEditorPlaceholderText

▸ **setEditorPlaceholderText**(text: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `void`

___
<a id="setenablevim"></a>

###  setEnableVim

▸ **setEnableVim**(enable: *`boolean`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| enable | `boolean` |

**Returns:** `void`

___
<a id="setlinewrapping"></a>

###  setLineWrapping

▸ **setLineWrapping**(lineWrapping: *`boolean`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| lineWrapping | `boolean` |

**Returns:** `void`

___
<a id="setparser"></a>

###  setParser

▸ **setParser**(parser: *`AntlrParser`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| parser | `AntlrParser` |

**Returns:** `void`

___
<a id="setreadonly"></a>

###  setReadOnly

▸ **setReadOnly**(readOnly: *`boolean`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| readOnly | `boolean` |

**Returns:** `void`

___
<a id="setshowlinenumbers"></a>

###  setShowLineNumbers

▸ **setShowLineNumbers**(show: *`boolean`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| show | `boolean` |

**Returns:** `void`

___
<a id="setstyleactiveline"></a>

###  setStyleActiveLine

▸ **setStyleActiveLine**(styleActiveLine: *`boolean`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| styleActiveLine | `boolean` |

**Returns:** `void`

___
<a id="settext"></a>

###  setText

▸ **setText**(text: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `void`

___
<a id="settheme"></a>

###  setTheme

▸ **setTheme**(theme: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| theme | `string` |

**Returns:** `void`

___
<a id="showalldecorations"></a>

### `<Private>` showAllDecorations

▸ **showAllDecorations**(): `void`

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
<a id="stylerule"></a>

### `<Private>` styleRule

▸ **styleRule**(rule: *`AntlrRuleWrapper`*, styleClass?: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| rule | `AntlrRuleWrapper` |
| `Optional` styleClass | `string` |

**Returns:** `void`

___
<a id="styletoken"></a>

### `<Private>` styleToken

▸ **styleToken**(token: *`AntlrTokenWrapper`*, styleClass?: *`string`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `AntlrTokenWrapper` |
| `Optional` styleClass | `string` |

**Returns:** `void`

___
<a id="triggerautocompletionevent"></a>

###  triggerAutoCompletionEvent

▸ **triggerAutoCompletionEvent**(event: *[AutoCompleteEvent](_event_auto_complete_event_.autocompleteevent.md)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| event | [AutoCompleteEvent](_event_auto_complete_event_.autocompleteevent.md) |

**Returns:** `void`

___
<a id="update"></a>

###  update

▸ **update**(): `void`

**Returns:** `void`

___
<a id="updatecursorposition"></a>

###  updateCursorPosition

▸ **updateCursorPosition**(): `void`

**Returns:** `void`

___
<a id="validate"></a>

###  validate

▸ **validate**(): `void`

**Returns:** `void`

___

