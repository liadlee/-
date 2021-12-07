// 用户相关路由处理函数供router/user.js模块调用

// 路由-注册用户的处理函数
exports.regUser = (req, res) => {
    res.send('reguser OK')
}

// 登录的处理函数
exports.login = (req, res) => {
    res.send('login OK')
}