<template>
  <div>
    <button type="button" class="btn btn-light btn-sm">后退</button>
    <h4 class="text-center">用户详情---{{ id }}</h4>
    <button @click="print">打印$route</button>
    <button @click="printr">打印$router</button>
  </div>
</template>

<script>
export default {
  name: "MyUserDetail",
  props: {
    id: {},
  },
  methods: {
    print() {
      console.log(this.$route);
    },
    printr() {
      console.log(this.$router);
    },
  },
};
</script>

<style lang="less" scoped></style>
