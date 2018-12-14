(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{191:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"array-数组总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array-数组总结","aria-hidden":"true"}},[t._v("#")]),t._v(" Array 数组总结")]),a("blockquote",[a("p",[t._v("尽可能的全面")])]),a("h2",{attrs:{id:"数组实例方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组实例方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 数组实例方法")]),a("p",[t._v("通过控制台"),a("code",[t._v("Object.getOwnPropertyNames(Array.prototype)")]),t._v("获得浏览器支持的方法，不同浏览器之间有些差异：")]),a("ul",[a("li",[a("p",[t._v('chrome(68.0.3440.106): 31种 "length, constructor, concat, find, findIndex, pop, push, shift, unshift, slice, splice, includes, indexOf, keys, entries, forEach, filter, map, every, some, reduce, reduceRight, toString, toLocaleString, join, reverse, sort, lastIndexOf, copyWithin, fill, values"')])]),a("li",[a("p",[t._v('firefox(61.0.2): 32种 "length, toSource, toString, toLocaleString, join, reverse, sort, push, pop, shift, unshift, splice, concat, slice, lastIndexOf, indexOf, forEach, map, filter, reduce, reduceRight, some, every, find, findIndex, copyWithin, fill, entries, keys, values, includes, constructor"')])]),a("li",[a("p",[t._v('ie11(11.0.9600.17843): 23种 "constructor, push, concat, join, pop, reverse, shift, slice, sort, splice, toLocaleString, toString, unshift, indexOf, every, filter, forEach, lastIndexOf, map, reduce, reduceRight, some, length"')])])]),a("h2",{attrs:{id:"会改变自身值的方法-斜体为es6方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#会改变自身值的方法-斜体为es6方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 会改变自身值的方法 ("),a("em",[t._v("斜体为es6方法")]),t._v(")")]),a("p",[t._v("pop, push, reverse, shift, sort, splice, unshift, "),a("em",[t._v("copyWithin")]),t._v(", "),a("em",[t._v("fill")])]),a("h3",{attrs:{id:"pop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pop","aria-hidden":"true"}},[t._v("#")]),t._v(" pop")]),a("p",[t._v("array.pop() 删除一个数组中的最后的一个元素，并且返回这个元素。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ret = 'red'      arr = ['blue']")]),t._v("\n")])]),a("h3",{attrs:{id:"push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push","aria-hidden":"true"}},[t._v("#")]),t._v(" push")]),a("p",[t._v("array.push(element1, …, elementN) 添加一个或者多个元素到数组末尾，并且返回数组新的长度。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'green'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ret = 3      arr = ['blue', 'red', 'green']")]),t._v("\n")])]),a("h3",{attrs:{id:"reverse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse","aria-hidden":"true"}},[t._v("#")]),t._v(" reverse")]),a("p",[t._v("array.reverse() 颠倒数组中元素的位置，返回数组本身")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("reverse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ret = ['red', 'blue']       ret === arr")]),t._v("\n")])]),a("h3",{attrs:{id:"shift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shift","aria-hidden":"true"}},[t._v("#")]),t._v(" shift")]),a("p",[t._v("array.shift() 删除数组中第一个元素，并且返回这个元素")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'green'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("shift")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ret = 'blue'      arr = ['red', 'green']")]),t._v("\n")])]),a("h3",{attrs:{id:"sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sort","aria-hidden":"true"}},[t._v("#")]),t._v(" sort")]),a("p",[t._v("array.sort([comparefn]) 给数组排序，并且返回数组本身")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'你'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'好'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'前'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'端'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sort")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("localeCompare")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 按照拼音排序")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v('// ret = ["端", "好", "你", "前"]     ret === arr')]),t._v("\n")])]),a("h3",{attrs:{id:"splice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#splice","aria-hidden":"true"}},[t._v("#")]),t._v(" splice")]),a("p",[t._v("array.splice(start,deleteCount[, item1[, item2[, …]]]) 用来新元素替换旧元素的方式来修改数组，返回删除元素组成的数组，或空数组")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'green'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("splice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'orange'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ret = ['red', 'green']      arr = ['blue', 'orange']")]),t._v("\n")])]),a("h3",{attrs:{id:"unshift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unshift","aria-hidden":"true"}},[t._v("#")]),t._v(" unshift")]),a("p",[t._v("array.unshift(element1, …, elementN) 在数组开始处插入一些元素(就像是栈底插入)，并返回数组新的长度")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("unshift")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'green'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ret = 3      arr = ['green', 'blue', 'red']")]),t._v("\n")])]),a("h3",{attrs:{id:"copywithin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copywithin","aria-hidden":"true"}},[t._v("#")]),a("em",[t._v("copyWithin")])]),a("p",[t._v("array.copyWithin(target, start[, end = this.length]) 组内替换，target 被替换的索引，替换元素的索引，返回本身")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'green'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("copyWithin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ret = ['red', 'red', 'green']      arr === ret")]),t._v("\n")])]),a("h3",{attrs:{id:"fill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fill","aria-hidden":"true"}},[t._v("#")]),a("em",[t._v("fill")])]),a("p",[t._v("array.fill(value, start[, end = this.length]) 替换数组某个区间的元素，返回本身")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'green'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fill")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'orange'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ret = ['orange', 'orange', 'green']       arr === ret")]),t._v("\n")])]),a("h2",{attrs:{id:"不会改变自身值的方法-斜体为es6方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不会改变自身值的方法-斜体为es6方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 不会改变自身值的方法 ("),a("em",[t._v("斜体为es6方法")]),t._v(")")]),a("p",[t._v("concat、join、slice、toString、toLocateString、indexOf、lastIndexOf、"),a("em",[t._v("includes")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Array")])]),a("p",[a("a",{attrs:{href:"http://louiszhai.github.io/2017/04/28/array/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript数组所有API全解密")])])])}],!1,null,null,null);s.default=r.exports}}]);