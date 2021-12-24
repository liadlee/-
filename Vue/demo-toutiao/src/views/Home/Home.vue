<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed placeholder />
    <AritcleInfo v-for="item in artList"
    :key="item.id"
    :title="item.title"
    :author="item.aut_name"
    :pubdate="item.pubdate"
    :comm_count="item.comm_count"
    ></AritcleInfo>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'
import AritcleInfo from '@/components/ArticleInfo/ArticleInfo.vue'
export default {
  name: 'Home',
  data() {
    return {
      page: 1,
      limit: 10,
      // 获取的文章列表数据数组
      artList: []
      /*        | 参数名        | 类型   | 说明                        |
          | :------------ | :----- | --------------------------- |
          | art_id        | string | 文章 id                     |
          | title         | string | 文章标题                    |
          | aut_id        | string | 作者的 id                   |
          | comm_count    | string | 评论数                      |
          | pubdate       | string | 发布日期                    |
          | aut_name      | string | 作者名字                    |
          | \|- cover     | object | 文章封面                    |
          | \|---- type   | number | 封面的数量，可选值：0、1、3 |
          | \|---- images | array  | 文章封面图片的 URL 数组     |
 */
    }
  },
  methods: {
    // 调用封装好的API定义获取文章列表的方法
    async initArticleList() {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // 转存获取到的数据
      this.artList = res
    }
  },
  created() {
    // 在生命周期函数中调用初始化方法
    // 获取文章列表数据
    this.initArticleList()
  },
  components: {
    AritcleInfo
  }
}
</script>

<style lang="less" scoped>
.home-container {
  /deep/.van-nav-bar {
    background-color: #007bff;
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
</style>
