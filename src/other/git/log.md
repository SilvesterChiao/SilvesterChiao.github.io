<!--
 * @Author: SilvesterChiao
 * @Date: 2020-04-07 11:30:46
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-08-07 11:44:34
 -->
# Git 日志

日志相关

## 相关命令

1. git log

```bash
# 查看历史提交信息
git log
# 美化
git log --pretty=oneline
# 查看 dev 有 master 没有的提交
git log dev ^master
# 查看 dev 中比 master 中多提交了哪些内容
git log master..dev
# 对比两个分支
git log master...dev
# 对比并查看两个分支的不同, < 表示在 dev 分支上, > 表示在 master 分支上
git log --left-right dev...master
```

## 参考文档

1. [git 对比两个分支差异](https://blog.csdn.net/u011240877/article/details/52586664)