(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{374:function(t,n,e){"use strict";e.r(n);var a=e(30),r=e(48),u=new(function(){function t(){Object(a.a)(this,t),this.data=[]}return Object(r.a)(t,[{key:"push",value:function(t){this.data.push(t)}},{key:"pop",value:function(){return 0!==this.data.length?this.data.pop:new Error("栈为空")}},{key:"peek",value:function(){return 0!==this.data.length?this.data[this.data.length-1]:new Error("栈为空")}},{key:"isEmpty",value:function(){return 0===this.data.length}},{key:"length",get:function(){return this.data.length},set:function(t){console.error(new Error("不能设置栈的 length"))}}]),t}());u.push(1),u.push(2),console.log(u.peek()),console.log(u.isEmpty()),console.log(u.length);var o={data:function(){return{data:u.data}}},l=e(25),i=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",[t._v("栈")]),t._v(" "),e("ul",t._l(t.data,(function(n){return e("li",[t._v(t._s(n))])})),0)])}),[],!1,null,null,null);n.default=i.exports}}]);