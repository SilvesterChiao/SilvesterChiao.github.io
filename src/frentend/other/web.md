# HTTP 请求过程

## 请求过程

1. 查找本地 hosts 文件, 获取域名对应 ip 地址, 如果没有则请求 DNS 服务器
1. 建立 TCP 连接
  - 客户端发送一个带有SYN标志的数据包给服务端，服务端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息，最后客户端再回传一个带ACK标志的数据包，代表握手结束，连接成功。
1. 发送 HTTP 请求
1. 服务器处理请求
1. 返回响应结果
1. 客户端渲染

## HTTP 请求

- AJAX
- fetch
- axios

## Method 有哪些

- GET: 
- POST: 
- PUT: 
- DELETE: 

## 缓存

memory cache -> disk cache -> 请求网络资源

强制缓存: 浏览器不会像服务器发送任何请求, 直接从本地缓存中读取文件并返回 Status Code: 200 OK
协商缓存: 向服务器发送请求, 服务器会根据这个请求的 request header 的一些参数来判断是否命中协商缓存, 如果命中, 则返回 304 状态码并带上新的 response header 通知浏览器从缓存中读取资源

Expires: 过期时间, 如果设置了时间, 则浏览器会在设置的时间内直接读取缓存, 不再请求
Cache-Control: 当值设为 max-age=300 时, 则代表这个请求正确返回时间的5分钟内再次加载资源, 就会命中强缓存
Last-Modified
Etag: 响应头缓存标识
If-None-Match: 本地缓存数据库保存的 Etag 信息

## 什么是浏览器同源策略? 为什么会产生跨域问题, 如何解决?

为了保证用户信息安全, 同源策略(same-origin policy)由 Netscape 公司在 1995 引入浏览器, 最初是指不同源的两个网页不能互相访问 Cookie, 如果协议、域名和端口都相同的话即可认为同源, 随着互联网的发展, 同源策略的方位限制范围已经扩大到 Cookie、LocalStorage、IndexDB、DOM 和 AJAX.

- window.name
- window.postMessage
- document.domain
- iframe
- JSONP: 只能是 GET 请求
- CORS(Cross-Origin Resource Sharing)
- 服务器代理
- Nginx: 设置 server 里的 location 里的 proxy_pass

## 安全性

CSRF 攻击

XSS 攻击

## 参考文档

1. [一次搞定前端“核心主线”——从输入URL到页面展示发生了什么](https://zhuanlan.zhihu.com/p/190320054)
1. [“天龙八步”细说浏览器输入URL后发生了什么](https://www.xuecaijie.com/it/157.html#1Q64p5DeC8dKFF)
1. [http面试必会的：强制缓存和协商缓存](https://juejin.cn/post/6844903838768431118)
1. [10分钟彻底搞懂Http的强制缓存和协商缓存](https://segmentfault.com/a/1190000016199807)
1. [浏览器同源政策及其规避方法](https://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
