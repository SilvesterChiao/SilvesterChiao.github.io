# apidoc

## 安装

```bash
npm i -g apidoc
```

## 命令

- -v
- -i 输入
- -o 输出
- -f 解析文件, 支持正则表达式
- -t
- -h

## apidoc.json

- name 工程名
- verson 工程文档版本号
- description 描述
- title 标题
- url url 前缀
- sampleUrl 实例的 url 前缀
- header
  - title 文档头的链接锚点
  - filename 文档头所使用的文件
- footer
  - title
  - filename
- order 接口的排列顺序

## params

@api { method } path [ title ]
@apiDefine name [ title ][ description ]
@apiDescription text
@apiGroup name
@apiName name
@apiUse name
@apiParam [( group )][{ type }] [ field = defaultValue ][ description ]
@apiSuccess [( group )][{ type }] field [ description ]
@apiError [( group )][{ type }] field [ description ]
@apiParamExample [{ type }][ title ] example
@apiSuccessExample
@apiSampleRequest url
