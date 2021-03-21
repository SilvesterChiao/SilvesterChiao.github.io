(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{503:function(s,e,t){"use strict";t.r(e);var n=t(25),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vimrc-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vimrc-文件"}},[s._v("#")]),s._v(" vimrc 文件")]),s._v(" "),t("h2",{attrs:{id:"vimrc-文件备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vimrc-文件备份"}},[s._v("#")]),s._v(" vimrc 文件备份")]),s._v(" "),t("div",{staticClass:"language-vimrc line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('" Setting some decent VIM settings for programming\n" This source file comes from git-for-windows build-extra repository (git-extra/vimrc)\n\nru! defaults.vim                " Use Enhanced Vim defaults\nset mouse=                      " Reset the mouse setting from defaults\naug vimStartup | au! | aug END  " Revert last positioned jump, as it is defined below\nlet g:skip_defaults_vim = 1     " Do not source defaults.vim again (after loading this system vimrc)\n\nset ai                          " set auto-indenting on for programming\nset showmatch                   " automatically show matching brackets. works like it does in bbedit.\nset vb                          " turn on the "visual bell" - which is much quieter than the "audio blink"\nset laststatus=2                " make the last line where the status is two lines deep so you can see status always\nset showmode                    " show the current mode\nset clipboard=unnamed           " set clipboard to unnamed to access the system clipboard under windows\nset wildmode=list:longest,longest:full   " Better command line completion\n\n" Show EOL type and last modified timestamp, right after the filename\n" Set the statusline\nset statusline=%f               " filename relative to current $PWD\nset statusline+=%h              " help file flag\nset statusline+=%m              " modified flag\nset statusline+=%r              " readonly flag\nset statusline+=\\ [%{&ff}]      " Fileformat [unix]/[dos] etc...\nset statusline+=\\ (%{strftime(\\"%H:%M\\ %d/%m/%Y\\",getftime(expand(\\"%:p\\")))})  " last modified timestamp\nset statusline+=%=              " Rest: right align\nset statusline+=%l,%c%V         " Position in buffer: linenumber, column, virtual column\nset statusline+=\\ %P            " Position in buffer: Percentage\n\nif &term =~ \'xterm-256color\'    " mintty identifies itself as xterm-compatible\n  if &t_Co == 8\n    set t_Co = 256              " Use at least 256 colors\n  endif\n  " set termguicolors           " Uncomment to allow truecolors on mintty\nendif\n"------------------------------------------------------------------------------\n" Only do this part when compiled with support for autocommands.\nif has("autocmd")\n    " Set UTF-8 as the default encoding for commit messages\n    autocmd BufReadPre COMMIT_EDITMSG,MERGE_MSG,git-rebase-todo setlocal fileencodings=utf-8\n\n    " Remember the positions in files with some git-specific exceptions"\n    autocmd BufReadPost *\n      \\ if line("\'\\"") > 0 && line("\'\\"") <= line("$")\n      \\           && &filetype !~# \'commit\\|gitrebase\'\n      \\           && expand("%") !~ "ADD_EDIT.patch"\n      \\           && expand("%") !~ "addp-hunk-edit.diff" |\n      \\   exe "normal g`\\"" |\n      \\ endif\n\n      autocmd BufNewFile,BufRead *.patch set filetype=diff\n\n      autocmd Filetype diff\n      \\ highlight WhiteSpaceEOL ctermbg=red |\n      \\ match WhiteSpaceEOL /\\(^+.*\\)\\@<=\\s\\+$/\nendif " has("autocmd")\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br")])]),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/qq_42138566/article/details/82800451",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu18.04 下 VIM 安装及配置"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.chenshaowen.com/blog/vim-installation-and-configuration-on-windows-os.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows 下 Vim 安装与配置"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://c.biancheng.net/view/3024.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vim 配置文件（.vimrc），Vim 配置教程"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/d01b7b378266",target:"_blank",rel:"noopener noreferrer"}},[s._v("【进击的 Vimmer】vim 配置与 vimrc 文件详解"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/kumufengchun/p/10239660.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("window git bash客户端vimrc设置tab缩进"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.chenshaowen.com/blog/vim-installation-and-configuration-on-windows-os.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows 下 Vim 安装与配置"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/a0b452f8f720",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vim配置、插件和使用技巧"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);