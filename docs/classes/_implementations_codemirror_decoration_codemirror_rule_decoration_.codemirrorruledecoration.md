[antlr4-editor](../README.md) > ["implementations/codemirror/decoration/codemirror-rule-decoration"](../modules/_implementations_codemirror_decoration_codemirror_rule_decoration_.md) > [CodeMirrorRuleDecoration](../classes/_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md)

# Class: CodeMirrorRuleDecoration

## Hierarchy

**CodeMirrorRuleDecoration**

## Implements

* [RuleDecoration](../interfaces/_decoration_rule_decoration_.ruledecoration.md)

## Index

### Constructors

* [constructor](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#constructor)

### Properties

* [changeEventFunction](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#changeeventfunction)
* [clearOnEnter](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#clearonenter)
* [cursorActivityFunction](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#cursoractivityfunction)
* [domElement](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#domelement)
* [editor](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#editor)
* [hidden](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#hidden)
* [mark](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#mark)
* [rule](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#rule)
* [toggleOnExit](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#toggleonexit)

### Methods

* [getDomElement](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#getdomelement)
* [getRule](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#getrule)
* [handleRuleWhenWithin](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#handlerulewhenwithin)
* [hide](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#hide)
* [isHidden](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#ishidden)
* [remove](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#remove)
* [show](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md#show)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CodeMirrorRuleDecoration**(editor: *[CodeMirrorEditor](_implementations_codemirror_codemirror_editor_.codemirroreditor.md)*, rule: *`AntlrRuleWrapper`*, domElement: *`HTMLElement`*): [CodeMirrorRuleDecoration](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| editor | [CodeMirrorEditor](_implementations_codemirror_codemirror_editor_.codemirroreditor.md) |
| rule | `AntlrRuleWrapper` |
| domElement | `HTMLElement` |

**Returns:** [CodeMirrorRuleDecoration](_implementations_codemirror_decoration_codemirror_rule_decoration_.codemirrorruledecoration.md)

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
<a id="rule"></a>

### `<Private>` rule

**● rule**: *`AntlrRuleWrapper`*

___
<a id="toggleonexit"></a>

###  toggleOnExit

**● toggleOnExit**: *`boolean`* = true

___

## Methods

<a id="getdomelement"></a>

###  getDomElement

▸ **getDomElement**(): `HTMLElement`

**Returns:** `HTMLElement`

___
<a id="getrule"></a>

###  getRule

▸ **getRule**(): `AntlrRuleWrapper`

**Returns:** `AntlrRuleWrapper`

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

