(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{10:function(t,e,n){"use strict";function a(t,e,n,a,r,s,i,l){var o,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),i?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=o):r&&(o=l?function(){r.call(this,this.$root.$options.shadowRoot)}:r),o)if(c.functional){c._injectStyles=o;var p=c.render;c.render=function(t,e){return o.call(e),p(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,o):[o]}return{exports:t,options:c}}n.d(e,"a",function(){return a})},250:function(t,e,n){"use strict";n.r(e);var a=n(10),r=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"emmet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#emmet","aria-hidden":"true"}},[t._v("#")]),t._v(" Emmet")]),t._v(" "),n("blockquote",[n("p",[t._v("Emmet(前身为 Zen Coding)是一个前端编码工具"),n("br"),t._v(" "),n("a",{attrs:{href:"https://www.w3cplus.com/tools/emmet-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端开发必备！Emmet 使用手册"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://www.emmet.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://docs.emmet.io/cheat-sheet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),n("h3",{attrs:{id:"后代"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后代","aria-hidden":"true"}},[t._v("#")]),t._v(" 后代: >")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("nav "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ul "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" li"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"兄弟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#兄弟","aria-hidden":"true"}},[t._v("#")]),t._v(" 兄弟: +")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("div+p+bq\n")])])]),n("h3",{attrs:{id:"上级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#上级","aria-hidden":"true"}},[t._v("#")]),t._v(" 上级: ^")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("div+div>p>span+em^bq\ndiv+div>p>span+em^^bq\n")])])]),n("h3",{attrs:{id:"分组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分组","aria-hidden":"true"}},[t._v("#")]),t._v(" 分组: ()")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("div>(header>ul>li*2>a)+footer>p\n(div>dl>(dt+dd)*3)+footer>p\n")])])]),n("h3",{attrs:{id:"乘法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#乘法","aria-hidden":"true"}},[t._v("#")]),t._v(" 乘法: *")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ul>li*5\n")])])]),n("h3",{attrs:{id:"自增符号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自增符号","aria-hidden":"true"}},[t._v("#")]),t._v(" 自增符号: $")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ul>li.item$*5\nh$[title=item$]{Header $}*3\nul>li.item$$$*5\nul>li.item$@-*5\nul>li.item$@3*5\n")])])]),n("h3",{attrs:{id:"id-和类属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#id-和类属性","aria-hidden":"true"}},[t._v("#")]),t._v(" ID 和类属性: #, .")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("#header\n.title\nform#search.wide\np.class1.class2.class3\n")])])]),n("h3",{attrs:{id:"自定义属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义属性: []")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('p[title="Hello world"]\ntd[rowspan=2 colspan=3 title]\n[a=\'value1\' b="value2"]\n')])])]),n("h3",{attrs:{id:"文本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文本","aria-hidden":"true"}},[t._v("#")]),t._v(" 文本: {}")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("a{Click me}\np>{Click }+a{here}+{ to continue}\n")])])]),n("h3",{attrs:{id:"隐式标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#隐式标签","aria-hidden":"true"}},[t._v("#")]),t._v(" 隐式标签")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".className\nem>.className\nul>.className\ntable>.row>.col\n")])])]),n("h3",{attrs:{id:"html"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("!\na\na:link\na:mail\nabbr\nacronym\nbase\nbasefont\nbr\nframe\nhr\nbdo\nbod:r\nbdo:l\ncol\nlink\nlink:css\nlink:print\nlink:favicon\nlink:touch\nlink:rss\nlink:atom\nmeta\nmeta:utf\nmeta:win\nmeta:vp\nmeta:compat\nstyle\nscript\nscript:src\nimg\niframe\nembed\nobject\nparam\nmap\narea\narea:d\narea:c\narea:r\narea:p\nform\nform:get\nform:pose\nlabel\ninput\ninp\ninput:hidden\ninput[type=hidden name]\ninput:h\ninput[type:hidden]\ninput:text, input:t\ninp\ninput:search\ninput[type=search]\ninput:emial\ninp[type=email]\ninput:url\ninp[type=url]\ninput:password\ninp[type=password]\ninput:datetime\ninp[type=datetime]\ninput:date\ninp[type=date]\ninput:datetime-local\ninp[type=datetime-local]\ninput:month\ninp[type=month]\ninput:week\ninp[type=week]\ninput:time\ninp[type=time]\ninput:number\ninp[type=number]\ninput:color\ninp[type=color]\ninput:checkbox\ninput:c\ninput:radio\ninput:r\ninput:range\ninput:file\ninput:f\ninput:submit\ninput:s\ninput:image\ninput:i\ninput:button\ninput:b\nisindex\ninput:reset\nselect\noption\ntextarea\nmenu:context\nmenu:c\nmenu:t\nvideo\naudio\nhtml:xml\nkeygen\ncommand\nbq\nacr\nfig\nfigc\nifr\nemb\nobj\nsrc\ncap\ncolg\nfst, fset\nbtn\nbtn:b\nbtn:r\nbtn:s\n")])])])])},[],!1,null,null,null);e.default=r.exports}}]);