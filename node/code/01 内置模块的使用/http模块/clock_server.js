// 为clock案例创建一个服务器
//客户端向服务器请求页面时，服务器返回的不是页面文件，而是读取对应文件返回客户端字符串
//导入关键模块
const http = require('http');
const fs = require('fs');
const path = require('path');

//创建服务器
const server = http.createServer()

server.on('request', (req, res) => {
    let url = req.url;

    // 不要设置响应头！    
    // 不要设置响应头  ！  
    // 不要设置响应头    ！
    //res.setHeader('Content-Type', 'text/html; charset=utf-8')
    let content = '404 NOT FOUND'
    url === '/' ? url = '/index.html' : url;
    let fpath = path.join(__dirname, '../clock', url)
    console.log(`请求url：${fpath}`);
    fs.readFile(fpath, 'utf8', (err, datastr) => {
        if (err) return res.end('404 Not found.')
        res.end(datastr)
    })
})
server.listen(80, () => {
    console.log('server is running at http://127.0.0.1');
})
