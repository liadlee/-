import mysql from 'mysql2'
// 使用安装的mysql2模块创建数据库操作模块
const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  database: 'my_db_01',
  user: 'root',
  password: 'Mysql123'
})
export default pool.promise()