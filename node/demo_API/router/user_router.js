import express from 'express'
// 按需导入
import {getAllUser} from '../controller/user_ctrl.js'

// 创建路由模块
const router = new express.Router()

router.get('/user',getAllUser)  //getAllUser在此处为路由的处理函数

// 导出路由对象
export default router
