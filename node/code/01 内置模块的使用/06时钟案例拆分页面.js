const exp = require('constants');
const fs = require('fs');
const path =require('path');
fs.readFile(path.join(__dirname,'./index.html'),'utf8',(err,datastr)=>{
    if(err){
        return console.log(err.message);
    }else{
        resolveCss(datastr);
        resolveJS(datastr);
        resolveHtml(datastr);
    }
})
function resolveCss(datastr){
    let cssexp=/<style>[\s\S]*?<\/style>/
    let r1=cssexp.exec(datastr)
     // exec 方法是在正则表达式上调用的，返回的是一个数组，0索引是完整匹配；
     //去除style标签
     r1=r1[0].replace(/<\/*style>/g,'')
    //  使用path.join拼接路径，fs写入文件
     fs.writeFile(path.join(__dirname,'./clock/index.css'),r1,(err)=>{
         if(err){
            return console.log(err);
        }
        console.log('写入css成功！');

     }) 
}
function resolveJS(datastr){
    let js = /<script>[\s\S]*?<\/script>/.exec(datastr);
    js=js[0].replace(/<\/*script>\s*/g,' ') //比css改进：匹配了空格进行替换去除，优化css首行空格
    fs.writeFile(path.join(__dirname,'/clock/index.js'),js,(err)=>{
        if(err){
            return console.log(err);
        }else{
            console.log('写入js文件成功');
        }
    })
}
function resolveHtml(datastr){
    let htmlexp =/(<script>[\s\S]*?<\/script>)/;
    let html =datastr.replace(/(<style>[\s\S]*?<\/style>\s*)/,'<link rel="stylesheet" href="./index.css">').replace(/<script>[\s\S]*?<\/script>\s*/,'<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname,'/clock/index.html'),html,(err)=>{
        if(err){
            return console.log(err);
        }else{
            console.log('写入html文件成功');
        }
    })
}