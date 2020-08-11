<!--
 * @Author: SilvesterChiao
 * @Date: 2020-04-07 11:30:07
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-08-07 16:21:31
 -->
# Git 分支

分支操作

## 相关命令

1. git branch
1. git checkout
1. git merge
1. git rebase

```bash
# 查看本地分支
git branch
# 查看所有分支
git branch -a
# 查看远程分支
git branch -r
# 新建分支
git branch newBranch
# 新建并切换分支
git branch -c newBranch
# 切换分支
git checkout branchName
# 删除分支
git branch -d branchName
# 强制删除本地分支
git branch -D branchName
# 合并分支
git merge <commit>
# 变基
# rebase
# 回滚到某次提交
git reset --hard commit-id
# 回滚最近三次的提交
git reset --hard HEAD~3
```
