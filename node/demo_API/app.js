import express from 'express'
import userRouter from './router/user_router.js'
// 创建服务器
const app = express()

// 挂载路由,虚拟前缀为/api  
app.use('/api',userRouter)

// 启动服务器
app.listen(80,()=>{
  console.log('server running at http://127.0.0.1');
})