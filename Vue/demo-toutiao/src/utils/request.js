import axios from 'axios'
// 对axios进行封装
const request = axios.create(
  { // 设置根路径，即服务器地址
    baseURL: 'https://www.escook.cn'
  }
)
export default request
