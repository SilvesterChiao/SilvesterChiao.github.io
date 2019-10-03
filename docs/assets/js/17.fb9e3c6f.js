(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{10:function(t,n,s){"use strict";function a(t,n,s,a,e,r,o,p){var i,v="function"==typeof t?t.options:t;if(n&&(v.render=n,v.staticRenderFns=s,v._compiled=!0),a&&(v.functional=!0),r&&(v._scopeId="data-v-"+r),o?(i=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},v._ssrRegister=i):e&&(i=p?function(){e.call(this,this.$root.$options.shadowRoot)}:e),i)if(v.functional){v._injectStyles=i;var _=v.render;v.render=function(t,n){return i.call(n),_(t,n)}}else{var c=v.beforeCreate;v.beforeCreate=c?[].concat(c,i):[i]}return{exports:t,options:v}}s.d(n,"a",function(){return a})},238:function(t,n,s){"use strict";s.r(n);var a=s(10),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[t._v("#")]),t._v(" Git")]),t._v(" "),s("p",[t._v("Git 是目前世界上最先进的分布式版本控制系统, 由 Linus 开发.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Email"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --all/fillname\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'备注'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" filename\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--graph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--abbrev-commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^/commit "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --filename\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD filename\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" filename\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:UserName/RepositoryName.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:UserName/RepositoryName.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--no-ff -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit描述"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dev dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("apply"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("drop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("pop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b feature-vulcan\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b dev origin/dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream-to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin/dev dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v1.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"标签备注"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tagname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tagname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --tags\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :refs/tags/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tagname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global color.ui "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("版本库/仓库(repository)"),s("br"),t._v("\n版本/提交/快照(commit)"),s("br"),t._v("\n当前版本(HEAD), 上一个版本(HEAD^), 上上一个版本(HEAD^^), 前 100 个版本(HEAD~100)"),s("br"),t._v("\n时间线"),s("br"),t._v("\n版本回退"),s("br"),t._v("\n工作区(working tree)"),s("br"),t._v("\n暂存区(stage/index)"),s("br"),t._v("\n分支(branch)"),s("br"),t._v("\nHEAD->master(当前分支)"),s("br"),t._v("\n创建->切换->工作->->切换->合并->删除"),s("br"),t._v("\n分支策略\n开发分支: master -- dev -- dev-sil"),s("br"),t._v("\nBug 分支: master -- issue101\n暂存/恢复工作区"),s("br"),t._v("\nFeature 分支: 从 dev 创建 feature 分支, 开发试验功能, 完成则合并到 dev 分支, 取消则强制删除"),s("br"),t._v("\n多人协作:"),s("br"),t._v("\n远程库:"),s("br"),t._v("\n配置: .gitconfig"),s("br"),t._v("\n.gitignore 文件"),s("br"),t._v("\n配置别名"),s("br"),t._v("\n搭建服务器")]),t._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/csj731742019/article/details/82773581",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 创建远程分支并提交代码到远程分支"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qq827245563/article/details/82466521",target:"_blank",rel:"noopener noreferrer"}},[t._v("git push 本地项目推送到远程分支 git 命令版"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/a27e9761ecf3",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo 博客分支教训"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/q/1010000007913675?_ea=1490992",target:"_blank",rel:"noopener noreferrer"}},[t._v("想把 master 分支下的 dist 文件夹推送到 gh-pages 分支 有什么简洁的方法吗？"),s("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=e.exports}}]);