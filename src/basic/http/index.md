# HTTP

图解 HTTP 读书笔记

## TCP/IP

### 应用层

- HTTP
- DNS
- FTP

### 传输层

- TCP
- UDP

### 网络层

- IP

### 链路层

硬件

## HTTP 首部

报文首部

1. 通用首部字段
2. 请求首部字段
3. 响应首部字段
4. 实体首部字段

HTTP1.1 47 种首部字段

通用首部字段

| 首部字段名        | 说明                       |
| ----------------- | -------------------------- |
| Cache-Control     | 控制缓存的行为             |
| Connection        | 逐跳首部、连接的管理       |
| Date              | 创建报文的日期时间         |
| Pragma            | 报文指令                   |
| Trailer           | 报文末端的首部一览         |
| Transfer-Encoding | 指定报文主体的传输编码方式 |
| Upgrade           | 升级为其他协议             |
| Via               | 代理服务器的相关信息       |
| Warning           | 错误通知                   |

请求首部字段

| 首部字段名          | 说明                                          |
| ------------------- | --------------------------------------------- |
| Accept              | 用户代理可处理的媒体类型                      |
| Accept-Charset      | 优先的字符集                                  |
| Accept-Encoding     | 优先的内容编码                                |
| Accept-Language     | 优先的语言(自然语言)                          |
| Authorization       | Web 认证信息                                  |
| Expect              | 期待服务器的特定行为                          |
| From                | 用户的电子邮箱地址                            |
| Host                | 请求资源所在服务器                            |
| If-Match            | 比较实体标记(ETag)                            |
| If-Modified-Since   | 比较资源的更新时间                            |
| If-None-Match       | 比较实体标记(与 If-Match 相反)                |
| If-Range            | 资源未更新时发送实体 Byte 的范围请求          |
| If-Unmodified-Since | 比较资源的更新时间(与 If-Modified-Since 相反) |
| Max-Forwards        | 最大传输逐跳数                                |
| Proxy-Authorization | 代理服务器要求客户端的认证信息                |
| Range               | 实体的字节范围请求                            |
| Referer             | 对请求中 URI 的原始获取方                     |
| TE                  | 传输编码的优先级                              |
| User-Agent          | HTTP 客户端程序的信息                         |

响应首部字段

| 首部字段名         | 说明                         |
| ------------------ | ---------------------------- |
| Accept-Ranges      | 是否接受字节范围请求         |
| Age                | 推算资源创建经过时间         |
| ETag               | 资源的匹配信息               |
| Location           | 令客户端重定向至指定 URI     |
| Proxy-Authenticate | 代理服务器对客户端的认证信息 |
| Retry-After        | 对再次发起请求的时机要求     |
| Server             | HTTP 服务器的安装信息        |
| Vary               | 代理服务器缓存的管理信息     |
| WWW-Authenticate   | 服务器对客户端的认证信息     |

实体首部字段

| 首部字段名       | 说明                       |
| ---------------- | -------------------------- |
| Allow            | 资源可支持的 HTTP 方法     |
| Content-Encoding | 实体主体适用的编码方式     |
| Content-Language | 实体主体的自然语言         |
| Content-Length   | 实体主体的大小(单位: 字节) |
| Content-Location | 替代对应资源的 URI         |
| Content-MD5      | 实体主体的报文摘要         |
| Content-Range    | 实体主体的位置范围         |
| Content-Type     | 实体主体的媒体类型         |
| Expires          | 实体主体过期的日期时间     |
| Last-Modified    | 资源的最后修改日期时间     |

状态码

1. 信息相应(100-199)
  - 100: Continue
  - 101: Switching Protocol
  - 102: Processing(WebDAV)
  - 103: Early Hints
1. 成功相应(200-299)
  - 200: OK
  - 201: Created
  - 202: Accept
  - 203: Non-Authoritative Information
  - 204: No Content
  - 205: Reset Content
  - 206: Partial Content
  - 207: Multi-Status(WebDAV)
  - 208: Already Reported(WebDAV)
  - 226: IM Used(HTTP Delta encoding)
1. 重定向(300-399)
  - 300: Multiple Choice
  - 301: Moved Permanently
  - 302: Found
  - 303: See Other
  - 304: Not Modified
  - 305: Use Proxy
  - 306: unused
  - 307: Temporary Redirect
  - 308: Permanent Redirect
1. 客户端错误(400-499)
  - 400: Bad Request
  - 401: Unauthorized
  - 402: Payment Required
  - 403: Forbidden
  - 404: Not Found
  - 405: Method Not Allowed
  - 406: Not Acceptable
  - 407: Proxy Authentication Required
  - 408: Request Timeout
  - 409: Conflict
  - 410: Gone
  - 411: Length Required
  - 412: Precondition Failed
  - 413: Payload Too Large
  - 414: URI Too Long
  - 415: Unsupported Media Type
  - 416: Range Not Satisfiable
  - 417: Expectation Failed
  - 418: I'm a teapot
  - 421: Misdirected Request
  - 422: Unprocessable Entity(WebDAV)
  - 423: Locked(WebDAV)
  - 424: Failed Dependency(WebDAV)
  - 425: Too Early
  - 426: Upgrade Required
  - 428: Precondition Required
  - 429: Too Many Requests
  - 431: Request Header Fields Too Large
  - 451: Unavailable For Legal Reasons
1. 服务器错误(500-599)
  - 500: Internal Server Error
  - 501: Not Implemented
  - 502: Bad Gateway
  - 503: Service Unavailable
  - 504: Gateway Timeout
  - 505: HTTP Version Not Supported
  - 506: Variant Also Negotiates
  - 507: Insufficient Storage
  - 508: Loop Detected(WebDAV)
  - 510: Not Extended
  - 511: Network Authentication Required



## 参考文档

1. [看完这篇HTTP，跟面试官扯皮就没问题了](https://zhuanlan.zhihu.com/p/102237039)
1. [HTTP中GET与POST的区别，99 %的人都理解错了](https://zhuanlan.zhihu.com/p/114846445)