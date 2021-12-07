// 服务器的主入口
// 导入express模块
const express = require('express');
//创建express服务器实例 app
const app = express();
//配置cors跨域 导入cors中间件
const cors = require('cors');
app.use(cors());
//注册解析urlencoded格式数据的内置中间件  req.body
app.use(express.urlencoded({extended:false}))

//自定义中间件，封装res.send()对错误的响应，挂载res.cc()方法
app.use(function(req,res,next){
    res.cc=function(err,status = 1){  //默认status=1 错误状态（严格来说应该写响应码）
        res.send({
            // 状态
            status,
            // 状态描述，判断 err 是 错误对象 还是 字符串
            message: err instanceof Error ? err.message : err,
          })
        next(); //中间件固定格式，执行完毕后移交
    }
})

//导入并注册用户路由模块 路由前缀  /api
const userRouter = require('./router/user')
app.use('/api',userRouter)
//以指定的端口号启动服务器
app.listen(80,function(){
    console.log('running : http://127.0.0.1:80');
})
