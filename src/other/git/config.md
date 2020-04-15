<!--
 * @Author: fu.nan
 * @Date: 2020-04-07 11:30:40
 * @LastEditors: fu.nan
 * @LastEditTime: 2020-04-07 17:09:08
 -->
# Git 配置

```bash
# 查看配置列表
git config --list
# 查看全局配置
git config --global http.proxy
# 添加全局配置
git config --global user.name "Your Name"
git config --global user.email "Your Email"
git config --global http.proxy 'http://127.0.0.1:1080'
# 删除全局配置
git config --global --unset http.proxy
```
