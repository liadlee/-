<template>
  <div class="home-container">
    <MyHeader></MyHeader>
    <div class="home-main-box">
      <MyAside></MyAside>
      <div class="home-main-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 头部区域组件
import MyHeader from "@/components/subcomponents/MyHeader.vue";
// 左侧边栏组件
import MyAside from "@/components/subcomponents/MyAside.vue";

export default {
  name: "MyHome",
  // 注册组件
  components: {
    MyHeader,
    MyAside,
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>