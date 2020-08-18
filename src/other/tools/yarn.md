# Yarn

## 安装

- 下载 `msi` 文件双击安装
- 使用 `npm` 全局安装 `yarn`
    ```bash
    npm install -g yarn
    ```

## 命令

```bash
# 查看版本号
yarn --version
# 初始化项目
yarn init
# 配置
yarn config
# 缓存
yarn cache
# 安装依赖包
yarn add [package] --dev
yarn add [package]@[version] --peer
yarn add [package]@[tag] --optional
# 升级依赖包
yarn upgrade [package]
# 移除依赖包
yarn remove [package]
# 安装项目的全部依赖
yarn
yarn install
# 全局安装
yarn global add [package]
# 查看全局包列表
yarn global list
# 查看任务列表
yarn run
# 执行任务
yarn dev
yarn run dev
# 登录
yarn login
# 退出
yarn logout
# 发布
yarn publish
# 换源
yarn config set registry http://registry.npm.taobao.org/
yarn config set registry https://registry.npmjs.org/
# 代理
yarn config set proxy http://127.0.0.1:1080
yarn config set https-proxy http://127.0.0.1:1080
yarn config delete proxy
yarn config delete https-proxy
```

## 常见问题

1. 全局安装包命令无效

```bash
# 查看环境变量
echo $PATH
# 查看 `yarn bin` 目录
yarn global bin
# 输入或者在 `.bashrc` 中添加如下命令
export PATH=$PATH:/the/path/to/.yarn/global/bin/
```

## 参考文档

1. [Yarn](https://yarnpkg.com/)
1. [Yarn 中文文档](https://yarn.bootcss.com/)
1. [Yarn文档](https://classic.yarnpkg.com/zh-Hans/)
1. [Yarn命令详解](https://www.cnblogs.com/Jimc/p/10108821.html)
1. [yarn使用手册](https://www.jianshu.com/p/59e990b90483)
