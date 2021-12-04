// 使用path模块处理路径 path.join(__dirname,'./text.txt')
const path = require('path');
const fs = require('fs');
fs.readFile(path.join(__dirname,'./text.txt'),'utf-8',(err,data)=>{
    console.log(data);
})