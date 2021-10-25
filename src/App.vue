<template>
  <div>
    <div>App</div>
    <!-- 使用A模块的state数据 -->
    <p>{{ $store.state.moduleA.username }}</p>
    <!-- 使用A模块的getters数据 -->
    <p>{{ $store.getters.newName }}</p>

    <!-- 使用B模块的state数据 -->
    <p>{{ $store.state.moduleB.username }}</p>
    <!-- 使用B模块的getters数据 -->
    <p>{{ $store.getters["moduleB/newName"] }}</p>

    <!-- 使用B模块的mutations函数 -->
    <button @click="mutationsFn">mutationsFn</button>
    <!-- 使用B模块的actions函数 -->
    <button @click="actionsFn">actionsFn</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    const store = useStore();
    const mutationsFn = () => {
      // 提交B模块的修改
      store.commit("moduleB/updateName");
    };
    const actionsFn = () => {
      // 调用B模块的actions
      store.dispatch("moduleB/updateName");
    };
    return {
      mutationsFn,
      actionsFn,
    };
  },
};
</script>

<style lang="less">
</style>
