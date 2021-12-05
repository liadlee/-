const fs = require('fs');
fs.readFile('./text.txt','utf8',(err,data)=>{
    if(err){ //读取失败时err不为null，读取成功时err为null，data为undefined
        return console.log(`读取失败: ${err}`);
    }
    console.log(`data:${data}`);
})