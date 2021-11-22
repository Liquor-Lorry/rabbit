<template>
  <div class="main-body">
    <!-- 顶部通栏 -->
    <top-nav></top-nav>
    <!-- 头部组件 -->
    <Header />
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
import TopNav from "../components/TopNav.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Layout",
  components: {
    TopNav,
    Header,
    Footer,
  },
};
</script>
<style scoped lang="less">
.main-body {
  min-height: 600px;
}
</style>>