(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{454:function(s,n,a){"use strict";a.r(n);var t=a(25),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[s._v("#")]),s._v(" NPM")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("h2",{attrs:{id:"配置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置代理"}},[s._v("#")]),s._v(" 配置代理")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置代理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" proxy http://127.0.0.1:1080\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" https-proxy http://127.0.0.1:1080\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除代理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config delete proxy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成 package.json 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init -y\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看全局包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" list -g —depth "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装并保存 npm 包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("package"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" —save-dev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -D\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局安装 npm 包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("package"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -g\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载 npm 包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("package"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 换源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry http://registry.npm.taobao.org/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npmjs.org/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" proxy http://127.0.0.1:1080\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" https-proxy http://127.0.0.1:1080\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config delete proxy\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config delete https-proxy\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开全局配置 .npmrc 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config edit\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看缓存目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get cache\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看全局包安装路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get prefix\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h2",{attrs:{id:"npx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npx"}},[s._v("#")]),s._v(" npx")]),s._v(" "),a("h2",{attrs:{id:"npm-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-script"}},[s._v("#")]),s._v(" NPM Script")]),s._v(" "),a("p",[a("code",[s._v("package.json")]),s._v(" 文件中, 可以使用 "),a("code",[s._v("scripts")]),s._v(" 定义一些脚本, 然后使用以下命令执行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行脚本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run scriptName\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" scriptName\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" run scriptName\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看脚本列表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" run\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("code",[s._v("NPM Script")]),s._v(" 有以下特点")]),s._v(" "),a("ol",[a("li",[s._v("可以执行所有 "),a("code",[s._v("Shell")]),s._v(" 脚本")]),s._v(" "),a("li",[s._v("自动添加当前目录下的 "),a("code",[s._v("node_modules/.bin")]),s._v(" 目录到环境变量, 结束后回复原样")]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("--")]),s._v("  可以向 "),a("code",[s._v("npm")]),s._v(" 脚本传递参数"),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run lint -- --reporter checkstyle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" checkstyle.xml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("并行执行使用 "),a("code",[s._v("&")]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run script1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run script2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("继发执行使用 "),a("code",[s._v("&&")]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run script1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run script2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("或者使用 "),a("code",[s._v("node")]),s._v(" 的任务管理模块 "),a("code",[s._v("script-runner")]),s._v("、"),a("code",[s._v("npm-run-all")]),s._v("、"),a("code",[s._v("redrun")])])]),s._v(" "),a("h3",{attrs:{id:"如何传参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何传参"}},[s._v("#")]),s._v(" 如何传参")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("package.json")]),s._v(" 添加如下代码"),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"changelog"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"conventional-changelog -p angular -i CHANGELOG_${version}.md -s"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[s._v("使用如下命令传递 "),a("code",[s._v("version")]),s._v(" 参数"),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run changelog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"常用全局-npm-包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用全局-npm-包"}},[s._v("#")]),s._v(" 常用全局 npm 包")]),s._v(" "),a("ol",[a("li",[s._v("yarn")]),s._v(" "),a("li",[s._v("commotizen: 标准化 git commit 信息的工具")]),s._v(" "),a("li",[s._v("cz-conventional-changelog: commitizen 的构建标准")]),s._v(" "),a("li",[s._v("conventional-changelog-cli: 自动生成 CHANGELOG")]),s._v(" "),a("li",[s._v("cowsay")]),s._v(" "),a("li",[s._v("ssr-helper")]),s._v(" "),a("li",[s._v("eslint")]),s._v(" "),a("li",[s._v("babel-cli")]),s._v(" "),a("li",[s._v("vue-cli")]),s._v(" "),a("li",[s._v("create-react-app")]),s._v(" "),a("li",[s._v("cross-env")])]),s._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/wujindong/p/12130189.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("NVM安装nodejs的方法实用步骤"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm scripts 使用指南"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=e.exports}}]);