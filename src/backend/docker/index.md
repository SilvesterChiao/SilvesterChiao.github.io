# Docker

## 介绍

![Yeoman](../../../assets/images/yeoman.png)

## 安装

### Linux

```bash
sudo apt-get update
sudo apt-get install -y docker.io
```

### Windows

## 概念

### 镜像

### 容器

### 仓库

## 启动

```bash
docker version
sudo service start docker
```

## 命令

```bash
docker version
docker info
docker ps
# docker run [OPTIONS] IMAGE[:TAG] [COMMAND] [ARG...]
docker run -dP nginx
docker run -d -p 8080:80 nginx
# docker images [OPTIONS] [REPOSITORY[:TAG]]
docker images
# docker pull [OPTIONS] NAME[:TAG]
docker pull nginx
docker build -t jpress:latest .
# docker exec 
docker exec -it nginx bash
docker stop f9
```

## Dockerfile

由命令语句组成，支持以 `#` 开头的注释行，Dockerfile分为四部分

1. 基础镜像信息
1. 维护者信息
1. 镜像操作指令
1. 容器启动时执行指令

### 指令

1. FROM：必须是第一个，可使用多个
1. MAINTAINER：维护者信息
1. RUN：在镜像中执行的命令(shell/exec)，命令较长时可以使用 `\` 换行
    RUN <command> 或 RUN ["executable", "param1", "param2"]
    前者等同于RUN ["/bin/bash", "-c", "echo hello"]
1. COPY：
1. ADD：将复制指定的 `<src>` 到容器中的 `<dest>`，`<src>` 可以是Dockerfile所在目录的一个相对路径，也可以是一个URL，或者一个tar文件（自动解压为目录）。
    ADD <src> <dest>
1. CMD：只执行一条CMD，指定多条后边的会覆盖前边的，如果运行容器时指定了运行的命令会覆盖CMD命令，有三种格式
    CMD ["executable","param1","param2"] 使用 exec 执行，推荐方式；
    CMD command param1 param2 在 /bin/sh 中执行，提供给需要交互的应用；
    CMD command param1 param2 在 /bin/sh 中执行，提供给需要交互的应用；
1. ENTERPOINT：
1. ENV：指定一个环境变量，会被后续 `RUN` 指令使用，并在容器运行时保持。
    ENV <key> <value>
1. ARG：
1. VOLUME：
1. EXPOSE：暴露端口，在启动容器时需要通过 -P，Docker 主机会自动分配一个端口转发到指定的端口。
    EXPOSE <port> [<port>...]
1. WORKDIR：
1. USER：
1. HEALTHCHECK：
1. ONBUILD：

## Docker Compose

## 参考文献
