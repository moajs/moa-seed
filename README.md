# Moa-seed


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

- add ueditor.baidu.com

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
