<template>
  <div class="container">
    <!-- 修改数据，测试是否需持久化 -->
    {{ $store.state.user.profile.account }}
    <button @click="$store.commit('user/setUser', { account: 'lorry' })">
      设置用户信息
    </button>
    <hr />

    <!-- 测试请求函数 -->
    <button @click="fn()">测试请求工具函数</button>
  </div>
</template>

<script>
// import { useStore } from "vuex";
import request from "@/utils/request";
export default {
  name: "App",
  setup() {
    const fn = () => {
      // 测试请求
      request("/member/profile", "get", { justin: 18 });
    };
    return { fn };
  },
};
</script>

<style lang="less">
</style>
