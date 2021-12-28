// 该模块用于创建导出操作用户数据表相关方法
import db from "../db/index.js";

// 使用ES按需导出，将getAllUser()方法导出
export async function getAllUser(req,res){
  try{ 
    const [result] =await db.query('select id,username,nickname from ev_users')
  // [result] 解构赋值，取返回结果数组的第一个为result
  //console.log(result);
  res.send({
    status : 200,
    message: '获取用户数据成功',
    data: result
  })
}catch(e){
  res.send({
    status : 500,
    message: '获取用户数据失败',
    desc: e.message
  })
}
 
}

