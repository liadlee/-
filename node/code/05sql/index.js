const express = require('express');
const router = require('./router') //自定义路由模块
const mysql = require('mysql'); //数据库模块  node第三方模块
const cors = require('cors')
// 创建服务器实例
const app = express();

//注册cors模块
app.use(cors())
// 注册路由模块
app.use('/api',router)
app.listen(80,()=>{
    console.log('this server is running at http://127.0.0.1');
})