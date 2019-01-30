# Git

Git 是目前世界上最先进的分布式版本控制系统, 由 Linus 开发.

```bash
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
git branch [-d] [dev]
git merge [--no-ff -m "commit描述"] dev dev
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
分支策略: master -- dev -- dev-sil
