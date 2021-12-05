//1安装 npm i express@4.17.1
// 2导入
const express = require('express');
// 3创建服务器
const app = express();
// 4监听请求
app.get('/',(req,res)=>{
    res.send('')
})
// 5启动服务器
app.listen(80,()=>{
    console.log('server is running at http://127.0.0.1');
})