<!--
 * @Author: SilvesterChiao
 * @Date: 2020-04-07 16:25:23
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-08-05 15:53:59
 -->
# 提交

对提交进行操作

```bash
# 查看
git status
# 添加
git add --all
# 提交
git commit -m 'message'
# 合并到上次提交
git commit --amend
# 挑选提交
git cherry-pick commit-id
# 回滚
git reset --hard commit-id
# 回滚并保留工作区, git commit 逆操作
git reset --soft HEAD^
# 回滚文件
git reset HEAD <file>
# 撤销修改, git add 逆操作, 丢弃工作区中的修改
# 暂存区为空则恢复到版本库
# 暂存区不为空则恢复到暂存区
git checkout -- file

# 还原, 保留提交记录
git revert commit-id

# 撤销所有暂存, 保留修改
git reset --mixed
# 
git reset HEAD .
# 放弃左右修改
git checkout .
```
