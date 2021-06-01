(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{420:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"原理篇-简单属性编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理篇-简单属性编辑器"}},[t._v("#")]),t._v(" 原理篇:简单属性编辑器")]),t._v(" "),a("blockquote",[a("p",[t._v("自定义组件/插件/Plugin 原理概览")])]),t._v(" "),a("h2",{attrs:{id:"鲁班h5-按钮组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鲁班h5-按钮组件"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/luban-h5-components/lbc-button",target:"_blank",rel:"noopener noreferrer"}},[t._v("鲁班H5 按钮组件"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("这个组件本质上就是一个 vue 组件")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/luban-h5-components/lbc-button/blob/master/src/component/entry.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("核心代码"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("p",[t._v("可以看出来，核心代码其实非常简单，和大家平时写按钮组件差不多，基本上是配置一些 props，比如颜色、字体、内容、背景色、前景色、border 等")])]),t._v(" "),a("li",[a("p",[t._v("以 color 为例：\n"),a("img",{attrs:{src:"https://user-images.githubusercontent.com/12668546/73135438-f8a66c00-407c-11ea-9f7c-1b110ea3b2b3.png",alt:"image"}})]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意，根据 MDN 文档，颜色选择器的 value 只能是：# + 6个16进制字符串")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color#Value")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The value of an <input> element of type color is always a DOMString which contains a 7-character string specifying an RGB color in hexadecimal format.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#000000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    editor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'el-color-picker'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'文字颜色'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// !#zh 为编辑组件指定 prop")]),t._v("\n      prop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mini'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        showAlpha"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      require"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("可以看到相对于平时我们写的 Vue 或者 React 组件，这里的 color 的 prop 多了一个 key: "),a("code",[t._v("editor")])]),t._v(" "),a("li",[t._v("这个 "),a("code",[t._v("color.editor")]),t._v(" 就是 颜色的"),a("code",[t._v("属性编辑器")]),t._v("了，因为鲁班默认集成了 element-ui 的颜色选择器组件，因此我们可以直接使用 "),a("code",[t._v("'el-color-picker'")]),t._v(" 来作为颜色属性的自定义编辑器")]),t._v(" "),a("li",[t._v("当然，鲁班也集成了 ant-design-vue 的全部组件，但因为 ant-design-vue 的颜色选择器目前功能上没有 element-ui 的颜色选择器强大（不支持透明度），因此我们选择了 element-ui 的颜色选择器")])])]),t._v(" "),a("li",[a("p",[t._v("在把"),a("code",[t._v("按钮")]),t._v(" 从左侧"),a("code",[t._v("拖拽放置")]),t._v("到 "),a("code",[t._v("编辑器")]),t._v("中间的画布上的时候，鲁班会自动执行如下代码：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("遍历"),a("code",[t._v("按钮组件")]),t._v("的"),a("code",[t._v("props")])])]),t._v(" "),a("li",[a("p",[t._v("构造 pluginProps 对象，作为画布中按钮元素的描述信息（也是数据库中存储的信息）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// init prop of plugin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDefaultPluginProps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pluginProps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    uuid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uuid "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// uuid 用于在组件树中定位组件")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" defaultValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n    pluginProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" defaultValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" defaultValue\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pluginProps\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("得到的结果大致如下，也就代表着，按钮在画布上的颜色、文字、边框、对齐、字体等信息如下")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("pluginProps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uuid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1580038843434")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"按钮"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vertical"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"backgroundColor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rgba(255, 255, 255, 0.2)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"color"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fontSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lineHeight"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"borderWidth"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"borderRadius"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"borderColor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ced4da"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"textAlign"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"center"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])])])]),t._v(" "),a("h2",{attrs:{id:"简单属性编辑器小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单属性编辑器小结"}},[t._v("#")]),t._v(" 简单属性编辑器小结")]),t._v(" "),a("p",[t._v("如果组件的某些属性比较简单，比如文本、数字，则可以使用 "),a("a",{attrs:{href:"https://www.antdv.com/docs/vue/introduce-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ant-design-vue"),a("OutboundLink")],1),t._v(" 组件来配置组件的属性")]),t._v(" "),a("p",[t._v("举个例子：图片的 imgSrc 配置，"),a("a",{attrs:{href:"https://user-images.githubusercontent.com/12668546/69001390-42096b00-0918-11ea-85b4-0ec868e44769.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片演示"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imgSrc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    defualt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    editor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a-input'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 ant-design-vue 的 input(输入框) 组件来配置 imgSrc，直接复制粘贴图片的链接即可")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图片演示：https://user-images.githubusercontent.com/12668546/69001390-42096b00-0918-11ea-85b4-0ec868e44769.png")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这样比较简单，但是有时候，用户可能希望编辑图片的时候，可以自己上传 或 从图片库中选择图片")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图片演示：https://user-images.githubusercontent.com/12668546/69001396-6a916500-0918-11ea-8f39-5e27a688d2fe.png")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这时候，简单的 input(输入框) 就无法满足需求了，这时候给组件属性配置自定义编辑器就有了用武之地了，具体请往下看。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);