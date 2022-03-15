<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <xtx-bread-item :to="{ path: '/' }">首页</xtx-bread-item>
        <xtx-bread-item to="/category/1005001">电器</xtx-bread-item>
        <xtx-bread-item>空调</xtx-bread-item>
      </XtxBread>
      <!-- 轮播图 -->
      <!-- 全部分类 -->
      <!-- 推荐商品 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TopCategory",
  // 定义属性
  data() {
    return {};
  },
};
</script>

<style lang='less' scoped>
.top-category {
  height: 300px;
}
</style>
