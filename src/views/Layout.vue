<template>
  <div>
    <!-- 顶部通栏 -->
    <nav>顶部通栏</nav>
    <!-- 头部组件 -->
    <header>头部组件</header>
    <!-- 内容区域 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <footer>底部组件</footer>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>