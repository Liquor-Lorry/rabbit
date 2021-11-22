<template>
  <div class="container">HomePage</div>
</template>


<script>
export default {
  name: "HomePage",
};
</script>

<style scoped lang="less">
.container {
  // 已使用style-resources-loader配置自动注入公用变量和混入，所以这里不需引入也可用
  // 在这里使用混入的阴影函数
  .hoverShadow();
  color: @xtxColor;
}
</style>