# Git

Git 是目前世界上最先进的分布式版本控制系统, 由 Linus 开发.

1. [配置](config.md)
1. [提交](commit.md)
1. [分支](branch.md)
1. [远程](remote.md)
1. [暂存](stash.md)
1. [日志](log.md)
1. [标签](tag.md)
1. [ignore文件](ignore.md)
1. [工作流](workflow.md)

```bash
# git常用命令
git config --list
git config --global user.name "Your Name"
git config --global user.email "Your Email"
git init
git add --all/fillname
git commit -m '备注'
git push origin master
git status
git diff filename
git log --pretty=oneline [--graph] [--abbrev-commit]
git reset --hard HEAD^/commit id
git reflog
git checkout --filename
git reset HEAD filename
git rm filename
git remote add origin git@github.com:UserName/RepositoryName.git
git push -u origin master
git clone git@github.com:UserName/RepositoryName.git
git checkout [-b] dev
git branch [-d] [-D] [dev]
git merge [--no-ff -m "commit描述"] dev dev
git stash [list|apply|drop|pop]
git checkout -b feature-vulcan
git remote [-v]
git checkout -b dev origin/dev
git branch --set-upstream-to=origin/dev dev
git rebase
git tag [-a] [-d] [v1.0] [-m "标签备注"] [commit id]
git show <tagname>
git push origin <tagname>
git push origin --tags
git push origin :refs/tags/<tagname>
git config --global color.ui true
```

版本库/仓库(repository)  
版本/提交/快照(commit)  
当前版本(HEAD), 上一个版本(HEAD^), 上上一个版本(HEAD^^), 前 100 个版本(HEAD~100)  
时间线  
版本回退  
工作区(working tree)  
暂存区(stage/index)  
分支(branch)  
HEAD->master(当前分支)  
创建->切换->工作->->切换->合并->删除  
分支策略
开发分支: master -- dev -- dev-sil  
Bug 分支: master -- issue101
暂存/恢复工作区  
Feature 分支: 从 dev 创建 feature 分支, 开发试验功能, 完成则合并到 dev 分支, 取消则强制删除  
多人协作:  
远程库:  
配置: .gitconfig  
.gitignore 文件  
配置别名  
搭建服务器

## 常见问题

1. 无法push到远程仓库  
  https模式时添加远程仓库使用git协议，origin修改为https地址即可

## 参考链接

1. [Git 创建远程分支并提交代码到远程分支](https://blog.csdn.net/csj731742019/article/details/82773581)
1. [git push 本地项目推送到远程分支 git 命令版](https://blog.csdn.net/qq827245563/article/details/82466521)
1. [hexo 博客分支教训](https://www.jianshu.com/p/a27e9761ecf3)
1. [想把 master 分支下的 dist 文件夹推送到 gh-pages 分支 有什么简洁的方法吗？](https://segmentfault.com/q/1010000007913675?_ea=1490992)
1. [工作流一目了然，看小姐姐用动图展示 10 大 Git 命令](https://zhuanlan.zhihu.com/p/142865174)
1. [「Git」使用笔记 「Git」指令大全 「Git」命令5分钟入门](https://www.jianshu.com/p/bd5fc88f6119)
