(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{366:function(s,n,a){s.exports=a.p+"assets/img/vim-vi-workmodel.dcd25a60.png"},513:function(s,n,a){"use strict";a.r(n);var t=a(25),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[s._v("#")]),s._v(" Vim")]),s._v(" "),t("h2",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),t("h2",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.vim.org//download.php/#pc",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载地址"),t("OutboundLink")],1),t("br"),s._v("\n下载 gvim81.exe")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("ul",[t("li",[s._v("gvim")]),s._v(" "),t("li",[s._v("gvim easy")]),s._v(" "),t("li",[s._v("gvim readonly")])]),s._v(" "),t("h2",{attrs:{id:"模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[s._v("#")]),s._v(" 模式")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("命令模式（Command mode）:")]),s._v(" "),t("ul",[t("li",[s._v("i 进入输入模式")]),s._v(" "),t("li",[s._v("x 删除光标所在的字符")]),s._v(" "),t("li",[s._v(": 进入底线命令模式")])])]),s._v(" "),t("li",[t("p",[s._v("输入模式（Insert mode）:")]),s._v(" "),t("ul",[t("li",[s._v("字符按键以及 Shift 组合，输入字符")]),s._v(" "),t("li",[s._v("ENTER，回车键，换行")]),s._v(" "),t("li",[s._v("BACK SPACE，退格键，删除光标前一个字符")]),s._v(" "),t("li",[s._v("DEL，删除键，删除光标后一个字符")]),s._v(" "),t("li",[s._v("方向键，在文本中移动光标")]),s._v(" "),t("li",[s._v("HOME/END，移动光标到行首/行尾")]),s._v(" "),t("li",[s._v("Page Up/Page Down，上/下翻页")]),s._v(" "),t("li",[s._v("Insert，切换光标为输入/替换模式，光标将变成竖线/下划线")]),s._v(" "),t("li",[s._v("ESC，退出输入模式，切换到命令模式")])])]),s._v(" "),t("li",[t("p",[s._v("底线命令模式（Last line mode）:")]),s._v(" "),t("ul",[t("li",[s._v("q 退出")]),s._v(" "),t("li",[s._v("w 保存")])])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(366),alt:"vim模式图解"}})]),s._v(" "),t("h2",{attrs:{id:"帮助文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#帮助文档"}},[s._v("#")]),s._v(" 帮助文档")]),s._v(" "),t("p",[s._v(":help")]),s._v(" "),t("h2",{attrs:{id:"基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[s._v("#")]),s._v(" 基本操作")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入vim")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" file1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开多个文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" file1 file2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分屏打开多个文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" -O2 file1 file2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 左右")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" -o2 file1 file2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看打开的文件")]),s._v("\n:ls\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换文件")]),s._v("\n:b1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分隔当前文件")]),s._v("\nCtrl + w s "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上下")]),s._v("\nCtrl + w "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 左右")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分割并打开新的文件")]),s._v("\n:sp file3 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上下")]),s._v("\n:vsp file3 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 左右")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换光标")]),s._v("\nCtrl + w h "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 左移")]),s._v("\nCtrl + w l "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 右移")]),s._v("\nCtrl + w j "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下移")]),s._v("\nCtrl + w k "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上移")]),s._v("\nCtrl + w H "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 向左移动当前窗口")]),s._v("\nCtrl + w L "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 向右移动当前窗口")]),s._v("\nCtrl + w J "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 向下移动当前窗口")]),s._v("\nCtrl + w K "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 向上移动当前窗口")]),s._v("\nCtrl + w c "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭当前分屏")]),s._v("\nCtrl + w q "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭当前分屏")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存")]),s._v("\n:w\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制保存")]),s._v("\n:w"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存当前的文件到file文件当中")]),s._v("\n:w "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制退出")]),s._v("\n:q"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制退出所有文件")]),s._v("\n:qa"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出并保存文件")]),s._v("\n:wq\nZZ\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出并保存")]),s._v("\n:x\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开另一个文件")]),s._v("\n:e file4\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放弃对文件的所有修改，恢复文件到上次保存的位置")]),s._v("\n:e"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 另存为")]),s._v("\n:saveas "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开多个文件时，切换文件")]),s._v("\n:bn "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下一个")]),s._v("\n:bp "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上一个")]),s._v("\n:b2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第二个")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入插入模式")]),s._v("\ni "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在光标所在字符之前")]),s._v("\nI "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在光标所在行行首")]),s._v("\na "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在光标所在字符之后")]),s._v("\nA "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在光标所在行行尾")]),s._v("\no "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在光标所在行下一行行首")]),s._v("\nO "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在光标所在行上一行行首")]),s._v("\ns "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换光标所在字符")]),s._v("\nS "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换光标所在行")]),s._v("\ncw "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除光标开始到词尾并插入字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示行号")]),s._v("\n:set nu "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示")]),s._v("\n:set nonu "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消显示")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定位到10行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字符串搜索, 输入关键字之后按回车")]),s._v("\n/关键字\nn "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下一个")]),s._v("\nN "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上一个")]),s._v("\n:set ic "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不区分大小写")]),s._v("\n:set noic "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 区分大小写")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除文本")]),s._v("\n:n1,n2d "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除n1行到n2行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文本替换")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 超多")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行Linux命令")]),s._v("\n:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("command "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行command命令，按Enter回到vim")]),s._v("\n:r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("command "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行command命令并将结果添加到光标处")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动光标")]),s._v("\nh "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 左")]),s._v("\nj "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下")]),s._v("\nk "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上")]),s._v("\nl "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 右")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到行首")]),s._v("\n^ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到本行第一个不是blank的字符")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到行尾")]),s._v("\ng_ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到本行最后一个不是blank的字符")]),s._v("\nw "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到下一个单词的开头")]),s._v("\ne "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到下一个单词的结尾")]),s._v("\nfa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到下一个a字符")]),s._v("\nnfa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到第n个a字符")]),s._v("\nFa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到上一个a字符")]),s._v("\nnFa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到向上第n个a字符")]),s._v("\nta "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到a的前一个字符")]),s._v("\nnta "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到第二个a的前一个字符")]),s._v("\nTa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到上一个a字符的前一个字符")]),s._v("\nnTa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到向上第n个a字符的前一个字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跨行移动光标")]),s._v("\nnG "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到第n行行首")]),s._v("\ngg "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到第一行行首")]),s._v("\nG "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到最后一行行首")]),s._v("\nH "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到当前屏幕的第一行行首")]),s._v("\nM "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到屏幕中间")]),s._v("\nL "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到屏幕末尾")]),s._v("\nzt "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动当前行到屏幕上方")]),s._v("\nzz "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 中间")]),s._v("\nzb "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 末尾")]),s._v("\n% "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配括号")]),s._v("\nCtrl + b "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上一页")]),s._v("\nCtrl + f "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下一页")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制粘贴")]),s._v("\nd "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除")]),s._v("\ndw "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除一个单词")]),s._v("\ndnw "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除n个单词")]),s._v("\ndfa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除光标处至下一个a字符")]),s._v("\ndnfa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除光标处至第n个a字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本行")]),s._v("\nndd "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除n行")]),s._v("\nd$ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除光标处至本行结尾")]),s._v("\ndH "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除屏幕第一行至本行")]),s._v("\ndG "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本行至结尾")]),s._v("\ny "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制")]),s._v("\nyw "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制一个单词")]),s._v("\nynw "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制n个单词")]),s._v("\nyfa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制光标至下一个a字符")]),s._v("\nynfa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制光标至第n个a字符")]),s._v("\nyy "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制本行")]),s._v("\nnyy "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制n行")]),s._v("\ny$ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制光标至本行结尾")]),s._v("\nyH "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制屏幕第一行至本行")]),s._v("\nyG "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制本行至结尾")]),s._v("\np "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 粘贴")]),s._v("\nP "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在光标前粘贴")]),s._v("\nu "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤销")]),s._v("\nCtrl + r "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 恢复")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除光标处的字符")]),s._v("\nr "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换光标处的字符")]),s._v("\nR "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("_vimrc")]),s._v(" "),t("h2",{attrs:{id:"插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[s._v("#")]),s._v(" 插件")]),s._v(" "),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/qq_42138566/article/details/82800451",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu18.04 下 VIM 安装及配置"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.chenshaowen.com/blog/vim-installation-and-configuration-on-windows-os.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows 下 Vim 安装与配置"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/68111471",target:"_blank",rel:"noopener noreferrer"}},[s._v("精通 VIM ，此文就够了"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://c.biancheng.net/view/3024.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vim 配置文件（.vimrc），Vim 配置教程"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/d01b7b378266",target:"_blank",rel:"noopener noreferrer"}},[s._v("【进击的 Vimmer】vim 配置与 vimrc 文件详解"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/kumufengchun/p/10239660.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("window git bash客户端vimrc设置tab缩进"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.chenshaowen.com/blog/vim-installation-and-configuration-on-windows-os.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows 下 Vim 安装与配置"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://segmentfault.com/q/1010000004146607",target:"_blank",rel:"noopener noreferrer"}},[s._v("在windows的git bash 中用vim怎么去配置安装vim的插件呢 ?"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=e.exports}}]);