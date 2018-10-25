# MySQL

## 基础

MySQL 最早由瑞典 MySQL AB 公司开发, 被 Oracle 公司收购  
MySQL 是一个开源的关系型数据库管理系统, 分为社区版和企业版

## 安装

MSI 安装

典型安装 自定义安装 完全安装

ZIP 安装

## 配置

root/bin/MySQLInstanceconfig

详细配置

标准配置

是否安装为 Windows 服务(开机启动)  
是否添加到环境变量

目录
bin: 存储可执行文件  
data: 存储数据文件  
docs: 文档  
include: 存储包含的头文件  
lib: 存储库文件  
share: 错误信息和字符集文件

my.ini  
[mysql]  
default-character-set=utf8  
[mysqld]  
character-set-server=utf8  
[client]  
pert=3306

## 使用

1. 关闭/启动服务器

```bash
net stop mysql
net start mysql
```

2. 登录/退出

```bash
cls
mysql -V
mysql -uroot -p123 -P3306 -h127.0.0.1
exit
quit
\q
```

参数:

-   -D(--database=name): 打开指定数据库
-   --delimiter=name: 指定分隔符
-   -h(--host=name)服务器名称
-   -p(--password[=name]): 密码
-   -P(--port=#): 端口号
-   --prompt: 提示符
-   -u(--user=name): 用户名
-   -V(--version): 版本信息

3. 修改提示符

```bash
PROMPT \u@\h \d>
```

-   \h: 服务器名称
-   \D: 完整的日期
-   \d: 当前的数据库
-   \u: 当前用户名

4. 常用命令

```bash
SELECT VERSION();
SELECT NOW();
SELECT USER();
```

5. 语法规范

关键字, 函数名称全部大写  
数据库名称, 表名称, 字段名称全部小写  
SQL 语句必须以分号结尾
