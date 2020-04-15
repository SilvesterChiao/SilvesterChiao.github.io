<!--
 * @Author: fu.nan
 * @Date: 2020-04-07 16:25:23
 * @LastEditors: fu.nan
 * @LastEditTime: 2020-04-07 18:29:31
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
# 撤销提交
git revert commit-id
```