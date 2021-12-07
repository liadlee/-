//需求，自定义中间件模拟内置中间件express.urlendcoded()解析post请求发送的请求体url-encoded格式的数据

//步骤
/* 实现步骤:
        定义中间件 function（res req next）{}
        监听req的data事件:
            data事件在客户端发送数据到服务端时触发，并将数据传入事件处理函数中，（每次接收部分数据包）
        监听req的end事件
            数据接收完成时触发
        使用querystring模块解析请求体数据
            node内置模块，parse（）方法把接收查询字符串转为对象
        将解析出来的数据对象挂载为req.body
        将自定义中间件封装为模块
            module.exports={};
 */
const qs = require('querystring');
let diyurlencoded = function(req,res,next){
    let str = '';
    //监听data事件拼接接收数据
    req.on('data',(datas)=>{
        str += datas;
    })
    //监听end事件，数据接收完毕时处理
    req.on('end',()=>{
        let body;
        body = qs.parse(str)
        req.body=body;
        next();
    })
}
// 向外暴露
module.exports={
    diyurlencoded
}


