(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{177:function(e,t,r){},179:function(e,t,r){"use strict";var n=r(177);r.n(n).a},186:function(e,t,r){"use strict";r.r(t);var n={name:"flexContainer",data:function(){return{itemNumber:5,styleSelect:{flexDirection:{current:"row",options:["row","row-reverse","column","column-reverse"]},flexWrap:{current:"nowrap",options:["nowrap","wrap","wrap-reverse"]},justifyContent:{current:"flex-start",options:["flex-start","flex-end","center","space-between","space-around"]},alignItems:{current:"flex-start",options:["flex-start","flex-end","center","baseline","stretch"]},alignContent:{current:"stretch",options:["flex-start","flex-end","center","space-between","space-around","stretch"]}}}},computed:{containerStyle:function(){var e={};for(var t in this.styleSelect)e[t]=this.styleSelect[t].current;return e}}},l=(r(179),r(1)),s=Object(l.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("div",{staticClass:"container",style:e.containerStyle},e._l(e.itemNumber,function(t){return r("div",{key:t,staticClass:"item"},[e._v(e._s(t))])})),r("div",{staticClass:"selectgroup"},[r("el-form",{attrs:{"label-position":"left","label-width":"100px",model:e.styleSelect}},[r("el-form-item",{attrs:{label:"数量"}},[r("el-input-number",{attrs:{size:"small",min:1,max:9,label:"描述文字"},model:{value:e.itemNumber,callback:function(t){e.itemNumber=t},expression:"itemNumber"}})],1),e._l(e.styleSelect,function(t,n){return[r("el-form-item",{key:n,attrs:{label:n}},[r("el-select",{attrs:{placeholder:"请选择",size:"small"},model:{value:t.current,callback:function(r){e.$set(t,"current",r)},expression:"value.current"}},e._l(t.options,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}))],1)]})],2)],1)])},[],!1,null,"25a3e268",null);t.default=s.exports}}]);