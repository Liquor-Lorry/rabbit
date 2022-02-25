<template>
  <!-- 首页入口 -->
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
  </div>
  <!-- 新鲜好物 -->
  <!-- 人气推荐 -->
</template>


<script>
import HomeCategory from './Conp/HomeCategory.vue'
import HomeBanner from './Conp/HomeBanner.vue'
export default {
  name: "HomePage",
  components: {
    HomeCategory,
    HomeBanner
  }
};
</script>

<style scoped lang="less">
// .container {
//   // 已使用style-resources-loader配置自动注入公用变量和混入，所以这里不需引入也可用
//   // 在这里使用混入的阴影函数
//   .hoverShadow();
//   color: @xtxColor;
//   height: 500px;
// }
</style>