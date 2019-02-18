(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{183:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),e("p",[t._v("我们必须要先知道，变量 "),e("code",[t._v("_toString")]),t._v(" 表示 "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Object.prototype.toString()")]),e("OutboundLink")],1),t._v(" 方法，它是在顶级作用域下声明的，并在多个函数里用到：")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),e("p",[t._v("毫无疑问了，检测的是 props 是否是一个纯粹的 JavaScript 对象。（注：即直接继承自 Object 构造函数）。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/21-the-toRawType-function.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("下一篇"),e("OutboundLink")],1),t._v("，我们将学习下 "),e("code",[t._v("toRawType")]),t._v(" 这个工具函数。")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"isplainobject-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isplainobject-函数","aria-hidden":"true"}},[this._v("#")]),this._v(" isPlainObject 函数")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Strict object type check. Only returns true\n * for plain JavaScript objects.\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPlainObject")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _toString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[object Object]'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" _toString "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toString\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("函数 "),e("code",[t._v("isPlainObject")]),t._v(" 接收一个参数，返回的是一个布尔值。返回语句检查了参数 "),e("code",[t._v("obj")]),t._v(" 调用 "),e("code",[t._v("Object.prototype.toString()")]),t._v(" 方法后的返回值是否严格等于 "),e("code",[t._v("[object Object]")]),t._v("。如果严格等于，确定了 "),e("code",[t._v("obj")]),t._v(" 是一个纯粹的 JavaScript 对象（plain JavaScript object）。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("那么在之前的文章里，"),a("code",[this._v("normalizeProps")]),this._v(" 函数里包含了一下代码：")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPlainObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n")])])])}],!1,null,null,null);a.default=n.exports}}]);