# 命令

## 常用命令

```bash
docker version
```

## 镜像

```bash
docker build -t silvesterblog:latest .
docker images
docker rmi id/name
```

## 容器

```bash
docker run -p 3009:8080 -d --rm --name silvesterBlog silvesterblog
docker ps -aq
docker start id/name
docker restart id/name
docker stop id/name
docker kill id/name
docker rm id/name
docker rm $(docker ps -aq --filter 'name=silvester')
```
