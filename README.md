# Moa-seed

- [Nodejs RESTFul Practice](http://nodeonly.com/2015/06/09/expressjs-rest.html)
- [Nodejs RESTFul Api Practice](http://nodeonly.com/2015/06/14/node-restful-api.html)

## Tech Stack

- use nodemon
- use gulp to rake
- use jade to erb|haml
- use nodemailer
- use mongoose to mongoid(ar)
- use config
- use require-directory
- use express-di
- auto mount routes with directory
- add cors
- plain post
- use bluebird for promise/A+
- jsonwebtoken for api

todo

- add ueditor.baidu.com

## Dependence

- moa-middlewares
- mongoosedao
- mount-middlewares
- mount-models
- mount-routes
- mount-controllers
- mount-services
- mount-tasks

## Cli Tools   

1.create scaffold user

    moag user name:string password:object
    
    
mongoose支持的data type基本如下：

• String -> string
• Number-> number
• Date -> date
• Boolean -> boolean
• Buffer -> buffer
• ObjectId -> object
• Mixed  -> mixed
• Array -> array

    
    
2.destroy scaffold user,this will move user to `~/.moajs/xxxx`

    moad user
    
3.new a project in cli

    moan new_project
    
## Gulp Tasks


```
gulp routes
```

![](doc/images/gulp-routes.png)

## api

### login

    http://127.0.0.1:3019/users/login

### auth

    curl -d "username=sang&password=000000" http://127.0.0.1:3019/api/auth

获取token作为以后的api授权凭证

### 测试获取用户信息接口

    curl http://127.0.0.1:3019/api/user/show?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NTc1OGMyNDhkZDEyMzFmN2FhOTY1ZjMiLCJ1c2VybmFtZSI6InNhbmciLCJwYXNzd29yZCI6IjAwMDAwMCIsImF2YXRhciI6IjExMTExIiwicGhvbmVfbnVtYmVyIjoiIiwiYWRkcmVzcyI6IiIsIl9fdiI6MH0.sqxnKY1ay0NbuRtqzFmDQRH49fFnc_R86GdMsrie6F4

返回结果

```
// 20150615195329
// http://127.0.0.1:3019/api/user/show?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NTc1OGMyNDhkZDEyMzFmN2FhOTY1ZjMiLCJ1c2VybmFtZSI6InNhbmciLCJwYXNzd29yZCI6IjAwMDAwMCIsImF2YXRhciI6IjExMTExIiwicGhvbmVfbnVtYmVyIjoiIiwiYWRkcmVzcyI6IiIsIl9fdiI6MH0.sqxnKY1ay0NbuRtqzFmDQRH49fFnc_R86GdMsrie6F4

{
  "data": {
    "user": {
      "_id": "55758c248dd1231f7aa965f3",
      "username": "sang",
      "password": "000000",
      "avatar": "11111",
      "phone_number": "",
      "address": "",
      "__v": 0
    }
  },
  "status": {
    "code": 0,
    "msg": "success"
  }
}
```

### more

see http://nodeonly.com/2015/06/14/node-restful-api.html

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## 版本历史

- v1.0.3 add api dump feature
- v1.0.2 rename index to /
- v1.0.0 初始化版本


## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
