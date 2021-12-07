//导入express包
const express =require('express');
//导入path模块
const path = require('path');
//创建服务器实例
const app = express();
//关键步骤：
// 全局注册内置中间件，且设置一个挂载前缀
app.use('/clock',express.static(path.join(__dirname,'../01 内置模块的使用/clock')));

//指定端口号启动服务器
app.listen(8080,()=>{
    console.log(__filename);
    console.log('server is running at 127.0.0.1:8080');
})