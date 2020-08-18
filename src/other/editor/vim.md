# Vim

## Windows

## 下载

[下载地址](https://www.vim.org//download.php/#pc)  
下载 gvim81.exe

## 安装

- gvim
- gvim easy
- gvim readonly

## 模式

- 命令模式（Command mode）:

  - i 进入输入模式
  - x 删除光标所在的字符
  - : 进入底线命令模式

- 输入模式（Insert mode）:

  - 字符按键以及 Shift 组合，输入字符
  - ENTER，回车键，换行
  - BACK SPACE，退格键，删除光标前一个字符
  - DEL，删除键，删除光标后一个字符
  - 方向键，在文本中移动光标
  - HOME/END，移动光标到行首/行尾
  - Page Up/Page Down，上/下翻页
  - Insert，切换光标为输入/替换模式，光标将变成竖线/下划线
  - ESC，退出输入模式，切换到命令模式

- 底线命令模式（Last line mode）:

  - q 退出
  - w 保存

![vim模式图解](../../../assets/images/vim-vi-workmodel.png)

## 帮助文档

:help

## 基本操作

```bash
# 进入vim
vim
# 打开文件
vim file1
# 打开多个文件
vim file1 file2
# 分屏打开多个文件
vim -O2 file1 file2 # 左右
vim -o2 file1 file2 # 上下
# 查看打开的文件
:ls
# 切换文件
:b1
# 分隔当前文件
Ctrl + w s # 上下
Ctrl + w v # 左右
# 分割并打开新的文件
:sp file3 # 上下
:vsp file3 # 左右
# 切换光标
Ctrl + w h # 左移
Ctrl + w l # 右移
Ctrl + w j # 下移
Ctrl + w k # 上移
Ctrl + w H # 向左移动当前窗口
Ctrl + w L # 向右移动当前窗口
Ctrl + w J # 向下移动当前窗口
Ctrl + w K # 向上移动当前窗口
Ctrl + w c # 关闭当前分屏
Ctrl + w q # 关闭当前分屏
```

```bash
# 保存
:w
# 强制保存
:w!
# 保存当前的文件到file文件当中
:w file
# 强制退出
:q!
# 强制退出所有文件
:qa!
# 退出并保存文件
:wq
ZZ
# 退出并保存
:x
# 打开另一个文件
:e file4
# 放弃对文件的所有修改，恢复文件到上次保存的位置
:e!
# 另存为
:saveas file
# 打开多个文件时，切换文件
:bn # 下一个
:bp # 上一个
:b2 # 第二个
# 进入插入模式
i # 在光标所在字符之前
I # 在光标所在行行首
a # 在光标所在字符之后
A # 在光标所在行行尾
o # 在光标所在行下一行行首
O # 在光标所在行上一行行首
s # 替换光标所在字符
S # 替换光标所在行
cw # 删除光标开始到词尾并插入字符
# 显示行号
:set nu # 显示
:set nonu # 取消显示
# 定位到10行
: 10
# 字符串搜索, 输入关键字之后按回车
/关键字
n # 下一个
N # 上一个
:set ic # 不区分大小写
:set noic # 区分大小写
# 删除文本
:n1,n2d # 删除n1行到n2行
# 文本替换
# 超多
```

```bash
# 执行Linux命令
:!command # 执行command命令，按Enter回到vim
:r !command # 执行command命令并将结果添加到光标处
```

```bash
# 移动光标
h # 左
j # 下
k # 上
l # 右
0 # 移动到行首
^ # 移动到本行第一个不是blank的字符
$ # 移动到行尾
g_ # 移动到本行最后一个不是blank的字符
w # 移动到下一个单词的开头
e # 移动到下一个单词的结尾
fa # 移动到下一个a字符
nfa # 移动到第n个a字符
Fa # 移动到上一个a字符
nFa # 移动到向上第n个a字符
ta # 移动到a的前一个字符
nta # 移动到第二个a的前一个字符
Ta # 移动到上一个a字符的前一个字符
nTa # 移动到向上第n个a字符的前一个字符
# 跨行移动光标
nG # 移动到第n行行首
gg # 移动到第一行行首
G # 移动到最后一行行首
H # 移动到当前屏幕的第一行行首
M # 移动到屏幕中间
L # 移动到屏幕末尾
zt # 移动当前行到屏幕上方
zz # 中间
zb # 末尾
% # 匹配括号
Ctrl + b # 上一页
Ctrl + f # 下一页
```

```bash
# 复制粘贴
d # 删除
dw # 删除一个单词
dnw # 删除n个单词
dfa # 删除光标处至下一个a字符
dnfa # 删除光标处至第n个a字符
dd # 删除本行
ndd # 删除n行
d$ # 删除光标处至本行结尾
dH # 删除屏幕第一行至本行
dG # 删除本行至结尾
y # 复制
yw # 复制一个单词
ynw # 复制n个单词
yfa # 复制光标至下一个a字符
ynfa # 复制光标至第n个a字符
yy # 复制本行
nyy # 复制n行
y$ # 复制光标至本行结尾
yH # 复制屏幕第一行至本行
yG # 复制本行至结尾
p # 粘贴
P # 在光标前粘贴
u # 撤销
Ctrl + r # 恢复
x # 删除光标处的字符
r # 替换光标处的字符
R #
```

## 配置

\_vimrc

## 插件

## 参考文档

1. [Ubuntu18.04 下 VIM 安装及配置](https://blog.csdn.net/qq_42138566/article/details/82800451)
1. [Windows 下 Vim 安装与配置](https://www.chenshaowen.com/blog/vim-installation-and-configuration-on-windows-os.html)
1. [精通 VIM ，此文就够了](https://zhuanlan.zhihu.com/p/68111471)
1. [Vim 配置文件（.vimrc），Vim 配置教程](http://c.biancheng.net/view/3024.html)
1. [【进击的 Vimmer】vim 配置与 vimrc 文件详解](https://www.jianshu.com/p/d01b7b378266)
1. [window git bash客户端vimrc设置tab缩进](https://www.cnblogs.com/kumufengchun/p/10239660.html)
1. [Windows 下 Vim 安装与配置](https://www.chenshaowen.com/blog/vim-installation-and-configuration-on-windows-os.html)
1. [在windows的git bash 中用vim怎么去配置安装vim的插件呢 ?](https://segmentfault.com/q/1010000004146607)
