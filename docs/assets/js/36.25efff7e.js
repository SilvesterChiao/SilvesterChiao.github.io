(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{10:function(n,t,s){"use strict";function e(n,t,s,e,a,r,o,i){var c,_="function"==typeof n?n.options:n;if(t&&(_.render=t,_.staticRenderFns=s,_._compiled=!0),e&&(_.functional=!0),r&&(_._scopeId="data-v-"+r),o?(c=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),a&&a.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(o)},_._ssrRegister=c):a&&(c=i?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(_.functional){_._injectStyles=c;var p=_.render;_.render=function(n,t){return c.call(t),p(n,t)}}else{var v=_.beforeCreate;_.beforeCreate=v?[].concat(v,c):[c]}return{exports:n,options:_}}s.d(t,"a",function(){return e})},208:function(n,t,s){"use strict";s.r(t);var e=s(10),a=Object(e.a)({},function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[n._v("#")]),n._v(" Nginx")]),n._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[n._v("#")]),n._v(" 安装")]),n._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[n._v("#")]),n._v(" 配置")]),n._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[n._v("#")]),n._v(" 使用")]),n._v(" "),s("p",[n._v("start nginx\nnginx -c fileName\nnginx -t\nnginx -v\nnginx -V\nnginx -s stop\nnginx -s quit\nnginx -s reload\nnginx -s reopen")]),n._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 获取root权限")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("su")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 重启")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" /usr/sbin/nginx restart\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("chmod")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("777")]),n._v(" default\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("chmod")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("644")]),n._v(" default\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("which")]),n._v(" nginx\n/etc/init.d/nginx reload\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("vim")]),n._v(" /etc/nginx/sites-enabled/default\n/etc/init.d/nginx start\n/etc/init.d/nginx stop\n/etc/init.d/nginx restart\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("ps")]),n._v(" -ef "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" supervison\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("ps")]),n._v(" -ef "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" nginx\n")])])])])},[],!1,null,null,null);t.default=a.exports}}]);