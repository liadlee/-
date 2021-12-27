<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed placeholder />
    <!-- 下拉刷新组件 -->
  <van-pull-refresh
  v-model="refreshing"
  :disabled="disabled"
  @refresh="onRefresh"
  >
    <!--列表组件
    List 组件通过 loading 和 finished 两个变量控制加载状态，
    当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true。
    此时可以发起异步操作并更新数据，数据更新完毕后，
    将 loading 设置成 false 即可。若数据已全部加载完毕，
    则直接将 finished 设置成 true 即可。
    mmediate-check 是否在初始化时立即执行滚动位置检查,默认初始化立即触发load事件-->
   <van-list
    v-model="loading"
    :finished="finished"
    :finished-text="finishedText"
    :immediate-check="false"
    @load="onLoad">
      <!-- //自定义组件，列表项 -->
      <AritcleInfo v-for="item in artList"
      :key="item.id"
      :title="item.title"
      :author="item.aut_name"
      :pubdate="item.pubdate"
      :comm_count="item.comm_count"
      :cover="item.cover"></AritcleInfo>
    </van-list>
  </van-pull-refresh>
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
      artList: [],
      // 定义列表下拉刷新相关数据
      loading: false, // 是否处于加载状态，加载过程中不触发load事件
      finished: false, // 是否已加载完成，加载完成后不再触发load事件
      finishedText: '没有更多了',
      refreshing: false, // 下拉刷新是否处于加载中状态
      disabled: false // 是否禁用刷新
    }
  },
  methods: {
    // 调用封装好的API定义获取文章列表的方法
    async initArticleList(isFresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // 转存获取到的数据 刷新和加载对数据的拼接不同
      if (isFresh) {
        // 如果是刷新请求，获取的新数据在前
        this.artList = [...res, ...this.artList]
        // 改变刷新状态
        this.refreshing = false
      } else {
        // 上拉加载获取的数据在后面（下一页
        this.artList = [...this.artList, ...res]
        // 改变加载状态
        this.loading = false
      }

      if (res.length < this.limit) { // 当获取到的数据小于每次请求规定的条目数时，即没有更多数据了
        this.finished = true // 加载提示
        this.disabled = true // 禁用刷新
      }
    },
    // 定义上拉加载事件
    onLoad() {
      // console.log('触发load事件')
      this.loading = true
      this.page++
      this.initArticleList()
    },
    // 定义下拉刷新事件
    onRefresh() {
      this.refreshing = true
      this.page++
      this.initArticleList(true)
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
  padding-bottom: 50px;
  /deep/.van-nav-bar {
    background-color: #007bff;
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
</style>
