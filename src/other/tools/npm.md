# NPM

## 安装

## 配置代理

```bash
# 设置代理
npm config set proxy http://127.0.0.1:1080
npm config set https-proxy http://127.0.0.1:1080
# 删除代理
npm config delete proxy
```

## 常用命令

```bash
# 生成 package.json 文件
npm init -y
# 查看全局包
npm list -g —depth 0
# 安装并保存 npm 包
npm install [package] —save-dev | -D
# 全局安装 npm 包
npm install [package] -g
# 卸载 npm 包
npm uninstall [package]
# 换源
npm config set registry http://registry.npm.taobao.org/
npm config set registry https://registry.npmjs.org/
# 代理
npm config set proxy http://127.0.0.1:1080
npm config set https-proxy http://127.0.0.1:1080
npm config delete proxy
npm config delete https-proxy
# 打开全局配置 .npmrc 文件
npm config edit
npm config ls -l
# 查看缓存目录
npm config get cache
# 查看全局包安装路径
npm config get prefix
```

## npx

## NPM Script

`package.json` 文件中, 可以使用 `scripts` 定义一些脚本, 然后使用以下命令执行

```bash
# 执行脚本
npm run scriptName
# 或
yarn scriptName
# 或
yarn run scriptName
# 查看脚本列表
npm run
# 或
yarn run
```

`NPM Script` 有以下特点

1. 可以执行所有 `Shell` 脚本
1. 自动添加当前目录下的 `node_modules/.bin` 目录到环境变量, 结束后回复原样
1. 使用 `--`  可以向 `npm` 脚本传递参数
    ```bash
    npm run lint -- --reporter checkstyle > checkstyle.xml
    ```
1. 并行执行使用 `&`
    ```bash
    npm run script1 & npm run script2
    ```
1. 继发执行使用 `&&`
    ```bash
    npm run script1 && npm run script2
    ```
1. 或者使用 `node` 的任务管理模块 `script-runner`、`npm-run-all`、`redrun`

### 如何传参

1. `package.json` 添加如下代码
    ```json
      "scripts": {
        "changelog": "conventional-changelog -p angular -i CHANGELOG_${version}.md -s"
      }
    ```
2. 使用如下命令传递 `version` 参数
    ```bash
      version=1.0.0 npm run changelog
    ```

## 常用全局 npm 包

1. yarn
1. commotizen: 标准化 git commit 信息的工具
1. cz-conventional-changelog: commitizen 的构建标准
1. conventional-changelog-cli: 自动生成 CHANGELOG
1. cowsay
1. ssr-helper
1. eslint
1. babel-cli
1. vue-cli
1. create-react-app
1. cross-env

## 参考链接

1. [NVM安装nodejs的方法实用步骤](https://www.cnblogs.com/wujindong/p/12130189.html)
1. [npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
