import request from '@/utils/request'
// 导入封装好baseURL的axios进行封装API
// 向外按需导出一个API函数表达式
export const getArticleListAPI = function(_page, _limit) {
  // 设置默认参数
  _page = _page || 1
  _limit = _limit || 10
  // 服务器根路径在utils下request.js中封装
  // 返回的是一个promise对象
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }

  })
}
