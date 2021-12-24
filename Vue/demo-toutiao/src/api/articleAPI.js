import request from '@/utils/request'

// 向外按需导出一个API函数表达式
export const getArticleList = function (_page, _limit) {
  // 设置默认参数
  _page = _page || 1
  _limit = _limit || 10
  // 服务器根路径在utils下request.js中封装
  return request.get('/articles', {
    _page,
    _limit
  })
}
