<template>
  <div class="main-body">
    <!-- 顶部通栏 -->
    <TopNav />
    <!-- 头部组件 -->
    <Header />
    <!-- 吸顶头部 -->
    <HeaderSticky />
    <!-- 内容区域 -->
    <div class="main">
      <!-- 二级路由 -->
      <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <Footer />
  </div>
</template>

<script>

import {useStore} from 'vuex'

import TopNav from "../components/TopNav.vue";
import HeaderSticky from "../components/HeaderSticky.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Layout",
  components: {
    TopNav,
    HeaderSticky,
    Header,
    Footer,
  },
  setup(){
    const store = useStore()
    store.dispatch('category/getList')
  }
};
</script>
<style scoped lang="less">
.main-body {
  min-height: 600px;
}
</style>>