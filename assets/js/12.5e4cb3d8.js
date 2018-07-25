(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{179:function(t,e,i){},180:function(t,e,i){},184:function(t,e,i){"use strict";var n=i(179);i.n(n).a},185:function(t,e,i){"use strict";var n=i(180);i.n(n).a},186:function(t,e,i){"use strict";i.r(e);var n={data:function(){return{fontSize:{current:"16px",options:["16px","20px","30px","40px"]}}}},s=(i(184),i(185),i(1)),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),[i("div",[t._v("\n    字体大小：\n    "),i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.fontSize.current,callback:function(e){t.$set(t.fontSize,"current",e)},expression:"fontSize.current"}},t._l(t.fontSize.options,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})})),i("div",{staticClass:"demo"},[i("div",{staticClass:"box",style:{fontSize:t.fontSize.current}},[t._v("\n            中文字符\n            "),i("i",{staticClass:"icon-arrow"})]),i("div",{staticClass:"box",style:{fontSize:t.fontSize.current}},[t._v("\n            English\n            "),i("i",{staticClass:"icon-arrow"})])])],1)],t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),[t._m(10)],t._m(11),t._m(12)],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"css世界"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css世界","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS世界")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5-1-1ex-对齐的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-1ex-对齐的问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.1 1ex 对齐的问题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("ex 是小写 x 字符的高度单位，因为内联元素默认基线对齐，然后设置图标高 1ex,同时图片居中，文字和图片就天然居中了")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("demo:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5-2-line-height"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-line-height","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.2 line-height")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("对于非替换元素的纯内联元素，其可视高度完全由 line-height 决定")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_6-3-bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-bfc","aria-hidden":"true"}},[this._v("#")]),this._v(" 6.3 BFC")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("block formatting context “块级格式化上下文”")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[t._v("触发 BFC 的条件：")]),i("ul",[i("li",[t._v("<html>根元素;")]),i("li",[t._v("float 的值不为 none;")]),i("li",[t._v("overflow 的值为 auto、scroll 或 "),i("strong",[t._v("hidden")]),t._v(";")]),i("li",[t._v("display 的值为 "),i("strong",[t._v("table-cell")]),t._v("、table-caption 和 inline-block 中的任何一个;")]),i("li",[t._v("position 的值不为 relative 和 static。")])])]),i("li",[i("p",[t._v("最后，我们可以提炼出两套 IE7 及以上版本浏览器适配的自适应解决方案。")]),i("ul",[i("li",[t._v("借助 overflow 属性，如下:")])]),i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v(".lbf-content { overflow: hidden; }\n")])]),i("ul",[i("li",[t._v("融合 display:table-cell 和 display:inline-block，如下:")])]),i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v(".lbf-content {\n    display: table-cell; width: 9999px; \n    /* 如果不需要兼容 IE7，下面样式可以省略 */ \n    *display: inline-block; *width: auto;\n}\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("demo:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bfc"},[e("span",{staticClass:"float-box"},[this._v("float")]),e("div",{staticClass:"bfc-box"},[e("div",{staticClass:"word-break"},[this._v("\n            这个 DEMO 还附带了一个 word-break 的样式类来解决英文过长不能自动换行的的问题\n            sadfasdfasdfasdgadsfgkjadfkgjdofngofdngodfingaodfingodfingodfngodfi\n        ")]),e("div",{staticClass:"outer-box"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_6-4-overflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-overflow","aria-hidden":"true"}},[this._v("#")]),this._v(" 6.4 overflow")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[t._v("overflow 剪裁界线 border box，即如果容器有padding，会被当做容器内的对象一样剪裁掉")])]),i("li",[i("p",[t._v("overflow: auto，有个兼容问题：chrome下，滚动容器的padding-bottom会算在滚动尺寸内")])]),i("li",[i("p",[t._v("除非 overflow-x 和 overflow-y 的属性值都是 visible，否则 visible 会当成 auto 来 解析。")])]),i("li",[i("p",[t._v("单行文字溢出点点点效果")]),i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v(".ell {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n")])])]),i("li",[i("p",[t._v("返回顶部："),i("code",[t._v('<a href="#">返回顶部></a>')])])]),i("li",[i("p",[t._v("元素设置了 overflow: hidden 声明，里面内容高度溢出的时候，滚 动依然存在，仅仅滚动条不存在!")])]),i("li",[i("p",[i("em",[t._v("6.4.5 ?")])])])])}],!1,null,null,null);e.default=a.exports}}]);