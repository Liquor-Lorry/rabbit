<template>
  <div>
    <div>
      App
      <!-- 在这里使用根模块state的数据 -->
      <p>{{ $store.state.username }}</p>
      <!-- 使用根模块getters的数据 -->
      <p>{{ $store.getters["newName"] }}</p>
      <button @click="mutationsFn">click me !</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "App",
  setup() {
    // 使用根模块state的数据
    const store = useStore();
    console.log(store.state.username);
    // 使用根模块getters的数据
    console.log(store.getters.newName);

    const mutationsFn = () => {
      // 提交根模块mutations函数
      // store.commit("updateName");

      // 调用根模块actions函数
      store.dispatch("updateName");
    };
    return {
      mutationsFn,
    };
  },
};
</script>

<style lang="less">
</style>
