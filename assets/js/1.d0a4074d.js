(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{175:function(t,e,l){},176:function(t,e,l){"use strict";var a=l(175);l.n(a).a},182:function(t,e,l){"use strict";l.r(e);var a={data:function(){return{itemNumber:5,styleSelect:{alignContent:{current:"stretch",options:["flex-start","flex-end","center","space-between","space-around","stretch"]},flexDirection:{current:"row",options:["row","row-reverse","column","column-reverse"]},flexWrap:{current:"nowrap",options:["nowrap","wrap","wrap-reverse"]},justifyContent:{current:"flex-start",options:["flex-start","flex-end","center","space-between","space-around"]},alignItems:{current:"flex-start",options:["flex-start","flex-end","center","baseline","stretch"]}}}},computed:{containerStyle:function(){var t={};for(var e in this.styleSelect)t[e]=this.styleSelect[e].current;return t}}},i=(l(176),l(1)),s=Object(i.a)(a,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"content"},[t._m(0),t._m(1),l("p",[t._v("轴线概念：主轴，副轴")]),t._m(2),t._m(3),l("p",[t._v("缩写：flex-flow: flex-direction flex-wrap")]),[l("div",{staticClass:"wrap"},[l("div",{staticClass:"container",style:t.containerStyle},t._l(t.itemNumber,function(e){return l("div",{key:e,staticClass:"item"},[t._v(t._s(e))])})),l("div",{staticClass:"selectgroup"},[l("el-form",{attrs:{"label-position":"left","label-width":"100px",model:t.styleSelect}},[l("el-form-item",{attrs:{label:"数量"}},[l("el-input-number",{attrs:{size:"small",min:1,max:9,label:"描述文字"},model:{value:t.itemNumber,callback:function(e){t.itemNumber=e},expression:"itemNumber"}})],1),t._l(t.styleSelect,function(e,a){return[l("el-form-item",{key:a,attrs:{label:a}},[l("el-select",{attrs:{placeholder:"请选择",size:"small"},model:{value:e.current,callback:function(l){t.$set(e,"current",l)},expression:"value.current"}},t._l(e.options,function(t){return l("el-option",{key:t,attrs:{label:t,value:t}})}))],1)]})],2)],1)])],t._m(4),t._m(5),l("p",[t._v("缩写：flex: flex-grow flex-shrink flex-basis")]),l("p",[t._v("常见的几种：")]),t._m(6),l("p",[t._v("可以理解为，如果是一个数字，则依次赋值，如果是带单位或百分比则赋值给 flex-basis")]),t._m(7),l("p",[t._v("规定的是子元素的基准值")]),l("p",[t._v("auto：主尺寸 | content")]),l("p",[t._v("content：px | auto")]),l("p",[t._v("百分比：相对于父容器 | auto")]),t._m(8),t._m(9)],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"flex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex","aria-hidden":"true"}},[this._v("#")]),this._v(" Flex")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/a75caef7gy1frc2u8ymlsj20fn0993z4.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"容器属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 容器属性")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),l("th",{staticStyle:{"text-align":"left"}},[t._v("flex-direction")]),l("th",{staticStyle:{"text-align":"left"}},[t._v("flex-wrap")]),l("th",{staticStyle:{"text-align":"left"}},[t._v("justify-content")]),l("th",{staticStyle:{"text-align":"left"}},[t._v("align-items")]),l("th",{staticStyle:{"text-align":"left"}},[t._v("align-content")])])]),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("理解")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("主轴方向")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("换行")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("主轴对齐")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("副轴对齐")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("多轴对齐")])]),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("默认")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("row")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("nowrap")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("flex-start")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("flex-start")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("stretch")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"子项属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#子项属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 子项属性")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),l("th",{staticStyle:{"text-align":"left"}},[t._v("order")]),l("th",{staticStyle:{"text-align":"left"}},[t._v("flex-grow")]),l("th",{staticStyle:{"text-align":"left"}},[t._v("flex-shrink")]),l("th",{staticStyle:{"text-align":"left"}},[t._v("flex-basis")]),l("th",{staticStyle:{"text-align":"left"}},[t._v("align-self")])])]),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("理解")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("顺序")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("放大比例")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("缩小比例")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("自身大小")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("自身对齐")])]),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("默认")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("auto")]),l("td",{staticStyle:{"text-align":"left"}},[t._v("继承")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("flex: none => 0 0")]),e("li",[this._v("flex: auto => 1 1 auto")]),e("li",[this._v("flex: 1 => 1 1 0%")]),e("li",[this._v("flex: 24px => 1 1 24px")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"对-flex-basis-的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对-flex-basis-的理解","aria-hidden":"true"}},[this._v("#")]),this._v(" 对 flex-basis 的理解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25303493",target:"_blank",rel:"noopener noreferrer"}},[this._v("30 分钟学会 Flex 布局")])])}],!1,null,"7a89bdfb",null);e.default=s.exports}}]);