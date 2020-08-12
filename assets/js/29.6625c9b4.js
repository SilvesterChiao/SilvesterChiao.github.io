(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{383:function(s,a,t){"use strict";t.r(a);var n=t(25),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),t("p",[s._v("慕课网 mysql 教程 笔记")]),s._v(" "),t("h2",{attrs:{id:"基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[s._v("#")]),s._v(" 基础")]),s._v(" "),t("p",[s._v("MySQL 最早由瑞典 MySQL AB 公司开发, 被 Oracle 公司收购"),t("br"),s._v("\nMySQL 是一个开源的关系型数据库管理系统, 分为社区版和企业版")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("MSI 安装")]),s._v(" "),t("p",[s._v("典型安装 自定义安装 完全安装")]),s._v(" "),t("p",[s._v("ZIP 安装")]),s._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("root/bin/MySQLInstanceconfig")]),s._v(" "),t("p",[s._v("详细配置")]),s._v(" "),t("p",[s._v("标准配置")]),s._v(" "),t("p",[s._v("是否安装为 Windows 服务(开机启动)"),t("br"),s._v("\n是否添加到环境变量")]),s._v(" "),t("p",[s._v("目录\nbin: 存储可执行文件"),t("br"),s._v("\ndata: 存储数据文件"),t("br"),s._v("\ndocs: 文档"),t("br"),s._v("\ninclude: 存储包含的头文件"),t("br"),s._v("\nlib: 存储库文件"),t("br"),s._v("\nshare: 错误信息和字符集文件")]),s._v(" "),t("p",[s._v("my.ini"),t("br"),s._v("\n[mysql]"),t("br"),s._v("\ndefault-character-set=utf8"),t("br"),s._v("\n[mysqld]"),t("br"),s._v("\ncharacter-set-server=utf8"),t("br"),s._v("\n[client]"),t("br"),s._v("\npert=3306")]),s._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("ol",[t("li",[s._v("关闭/启动服务器")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("net stop mysql\nnet start mysql\n/etc/init.d/mysql start\n/etc/init.d/mysql restart\n/etc/init.d/mysql stop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("登录/退出")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("cls\nmysql -V\nmysql -uroot -p123 -P3306 -h127.0.0.1\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\nquit\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("q\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("参数:")]),s._v(" "),t("ul",[t("li",[s._v("-D(--database=name): 打开指定数据库")]),s._v(" "),t("li",[s._v("--delimiter=name: 指定分隔符")]),s._v(" "),t("li",[s._v("-h(--host=name)服务器名称")]),s._v(" "),t("li",[s._v("-p(--password[=name]): 密码")]),s._v(" "),t("li",[s._v("-P(--port=#): 端口号")]),s._v(" "),t("li",[s._v("--prompt: 提示符")]),s._v(" "),t("li",[s._v("-u(--user=name): 用户名")]),s._v(" "),t("li",[s._v("-V(--version): 版本信息")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("修改提示符")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("PROMPT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("u@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("h "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("\\h: 服务器名称")]),s._v(" "),t("li",[s._v("\\D: 完整的日期")]),s._v(" "),t("li",[s._v("\\d: 当前的数据库")]),s._v(" "),t("li",[s._v("\\u: 当前用户名")])]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("常用命令")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("SELECT VERSION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nSELECT NOW"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nSELECT "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nSHOW databases"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nUSE datanasename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nSHOW tables"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDESC tablename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("语法规范")])]),s._v(" "),t("p",[s._v("关键字, 函数名称全部大写"),t("br"),s._v("\n数据库名称, 表名称, 字段名称全部小写"),t("br"),s._v("\nSQL 语句必须以分号结尾")]),s._v(" "),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),t("p",[s._v("1.忘记密码如何处理")]),s._v(" "),t("p",[s._v("skip-grant-tables")]),s._v(" "),t("div",{staticClass:"language-base line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo chmod 777 mysqld.cnf\nsudo chmod 644 mysqld.cnf\nflush privileges\n/etc/init.d/mysql restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://www.runoob.com/mysql/mysql-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 教程"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);