# NVM

## 安装

```bash
# 通过 curl 安装
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/0.35.3/install.sh | bash
# 通过 wget 安装
wget -o- https://raw.githubusercontent.com/nvm-sh/nvm/0.35.3/install.sh | bash
# 通过 git 安装
git clone https://github.com/nvm-sh/nvm.git .nvm
cd .nvm
git checkout v0.35.3
. nvm.sh
```

## 常用命令

1. nvm —version
1. nvm ls
1. nvm ls-remote
1. nvm install v12.16.3
1. nvm uninstall v10.0.0
1. nvm alias default v12.16.3

## 常见问题

1. 安装成功之后命令无效

在 `.bashrc` 文件中添加一下代码
```
source ~/.nvm/nvm.sh
```
执行
```bash
source ~/.bashrc
```

## 参考文档

1. [nvm github仓库](https://github.com/nvm-sh/nvm)
