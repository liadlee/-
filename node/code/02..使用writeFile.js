const fs = require('fs')
fs.writeFile('./text_W.txt','文件不存在时会自动创建',(err)=>{
    console.log('err:'+err); //写入成功时err为null；默认以utf8的方式写入
})