    // 用户的路由模块，创建用户相关路由对象，并挂载路由
//导入express包
const express = require('express')
 
// 导入路由模块的处理函数模块
const userHandler = require('../router_handler/user')

//创建路由对象
const router = express.Router()

// -----路由的编写------start
// 注册用户的处理函数
exports.regUser = (req, res) => {
    res.send('reguser OK')
  }
  
  // 登录的处理函数
  exports.login = (req, res) => {
    res.send('login OK')
  }

// -----路由的编写------end

//向外暴露路由对象
module.exports=router;