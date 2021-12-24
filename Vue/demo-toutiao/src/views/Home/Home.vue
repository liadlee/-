<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed placeholder />
  </div>
</template>

<script>
export default {
  name: 'Home'
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
