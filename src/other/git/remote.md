<!--
 * @Author: SilvesterChiao
 * @Date: 2020-04-07 11:31:12
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-08-07 11:43:50
 -->

# 远程分支

远程操作

## 相关命令

1. git remote
1. git checkout
1. git pull
1. git push
1. git fetch

```bash
# 查看远程仓库列表
git remote -v
git remote show
# 查看远程仓库详细信息
git remote show origin
# 添加远程分支
git remote add origin https://github.com/SilvesterChiao/ouroboros.git
# 拉取远程分支并同时创建对应的本地分支
git checkout -b localBranchName origin/originBranchName
# 拉取远程分支代码
git pull origin master
# 拉取所有分支代码
git pull --all
# 推送本地分支到远程仓库
git push origin localBranchName
# 删除远程分支
git push origin :originBranchName
# 将本地分支与远程保持同步
git fetch
# 同步远程分支
git fetch origin
# 将本地所有分支与远程保持同步
git fetch --all
```
