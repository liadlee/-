import axios from 'axios'
const request = axios.create(
  { // 设置根路径，即服务器地址
    baseURL: 'https://www.escook.cn'
  }
)
export default request
