(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{523:function(t,n,s){"use strict";s.r(n);var a=s(25),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),s("p",[t._v("Git 是目前世界上最先进的分布式版本控制系统, 由 Linus 开发.")]),t._v(" "),s("ol",[s("li",[s("RouterLink",{attrs:{to:"/other/git/config.html"}},[t._v("配置")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/other/git/commit.html"}},[t._v("提交")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/other/git/branch.html"}},[t._v("分支")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/other/git/remote.html"}},[t._v("远程")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/other/git/stash.html"}},[t._v("暂存")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/other/git/log.html"}},[t._v("日志")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/other/git/tag.html"}},[t._v("标签")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/other/git/ignore.html"}},[t._v("ignore文件")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/other/git/workflow.html"}},[t._v("工作流")])],1)]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git常用命令")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Email"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --all/fillname\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'备注'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" filename\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--graph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--abbrev-commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^/commit "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --filename\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD filename\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" filename\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:UserName/RepositoryName.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:UserName/RepositoryName.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--no-ff -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit描述"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dev dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("apply"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("drop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("pop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b feature-vulcan\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b dev origin/dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream-to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin/dev dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v1.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"标签备注"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tagname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tagname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --tags\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :refs/tags/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tagname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global color.ui "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br")])]),s("p",[t._v("版本库/仓库(repository)"),s("br"),t._v("\n版本/提交/快照(commit)"),s("br"),t._v("\n当前版本(HEAD), 上一个版本(HEAD^), 上上一个版本(HEAD^^), 前 100 个版本(HEAD~100)"),s("br"),t._v("\n时间线"),s("br"),t._v("\n版本回退"),s("br"),t._v("\n工作区(working tree)"),s("br"),t._v("\n暂存区(stage/index)"),s("br"),t._v("\n分支(branch)"),s("br"),t._v("\nHEAD->master(当前分支)"),s("br"),t._v("\n创建->切换->工作->->切换->合并->删除"),s("br"),t._v("\n分支策略\n开发分支: master -- dev -- dev-sil"),s("br"),t._v("\nBug 分支: master -- issue101\n暂存/恢复工作区"),s("br"),t._v("\nFeature 分支: 从 dev 创建 feature 分支, 开发试验功能, 完成则合并到 dev 分支, 取消则强制删除"),s("br"),t._v("\n多人协作:"),s("br"),t._v("\n远程库:"),s("br"),t._v("\n配置: .gitconfig"),s("br"),t._v("\n.gitignore 文件"),s("br"),t._v("\n配置别名"),s("br"),t._v("\n搭建服务器")]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("ol",[s("li",[t._v("无法push到远程仓库"),s("br"),t._v("\nhttps模式时添加远程仓库使用git协议，origin修改为https地址即可")])]),t._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/csj731742019/article/details/82773581",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 创建远程分支并提交代码到远程分支"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qq827245563/article/details/82466521",target:"_blank",rel:"noopener noreferrer"}},[t._v("git push 本地项目推送到远程分支 git 命令版"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/a27e9761ecf3",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo 博客分支教训"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/q/1010000007913675?_ea=1490992",target:"_blank",rel:"noopener noreferrer"}},[t._v("想把 master 分支下的 dist 文件夹推送到 gh-pages 分支 有什么简洁的方法吗？"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/142865174",target:"_blank",rel:"noopener noreferrer"}},[t._v("工作流一目了然，看小姐姐用动图展示 10 大 Git 命令"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/bd5fc88f6119",target:"_blank",rel:"noopener noreferrer"}},[t._v("「Git」使用笔记 「Git」指令大全 「Git」命令5分钟入门"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/96631135",target:"_blank",rel:"noopener noreferrer"}},[t._v("这才是真正的Git——Git内部原理揭秘！"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/147356242",target:"_blank",rel:"noopener noreferrer"}},[t._v("惊艳！小姐姐用动画图解 Git 的 10 大命令，这也太秀了吧！"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.zhihu.com/question/20866683",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何优雅地使用Git？"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/98679880",target:"_blank",rel:"noopener noreferrer"}},[t._v("手撕Git，告别盲目记忆"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/6844903890295455751",target:"_blank",rel:"noopener noreferrer"}},[t._v("git rebase VS git merge？ 更优雅的 git 合并方式值得拥有"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-GitWeb",target:"_blank",rel:"noopener noreferrer"}},[t._v("4.7 服务器上的 Git - GitWeb"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://learngitbranching.js.org/?locale=zh_CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("learnGitBranching"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=r.exports}}]);