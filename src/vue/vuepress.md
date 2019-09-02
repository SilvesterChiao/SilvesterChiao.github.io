# 使用 vuepress 搭建个人博客

## 简介

## 快速起步

- 安装 vuepress

```bash
npm install -g vuepress
```

- 创建 git 库,src 文件夹下存放 markdown 文件
- 创建配置文件.vuepress/config.js
- 在项目根目录下启动本地服务

```bash
vuepress dev .
```

- 生成静态文件

```bash
vuepress build .
```

默认生成 dist 文件夹,建议配置成 docs,连同 src 整个 push 到 github,在 github 本项目 Settings 中设置 gitpages,选择 source 为 master branch/docs folder,然后即可通过 https://用户名.github.io/仓库名/ 访问博客

别忘了在配置文件中加上 base: '/项目名/',不然你看到的会是 404

## 配置

## 进阶

- 自定义主题
- 发布
- 使用 vue 组件
- 多语言

## 参考文档

1. [VuePress——Vue 驱动的静态网站生成器](https://vuepress.vuejs.org/zh/)
