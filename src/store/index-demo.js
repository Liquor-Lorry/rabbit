import { createStore } from "vuex";

// 模块A
const moduleA = {
  state: {
    username: "ModuleA",
  },
  getters: {
    newName(state) {
      return state.username + " ！！！";
    },
  },
};
// 模块B
const moduleB = {
  namespaced: true, // 开启命名空间
  state: {
    username: "ModuleB",
  },
  getters: {
    newName(state) {
      return state.username + " ！！！";
    },
  },
  mutations: {
    updateName(state) {
      state.username = "moduleBBBBB";
    },
  },
  actions: {
    updateName(ctx) {
      // 发送请求
      setTimeout(() => {
        ctx.commit("updateName");
      }, 1500);
    },
  },
};

export default createStore({
  modules: {
    moduleA,
    moduleB,
  },
});

/* 
export default createStore({
  state: {
    username: "lorry",
  },
  getters: {
    newName(state) {
      return state.username + " is me !";
    },
  },
  mutations: {
    updateName(state) {
      state.username = "justin";
    },
  },
  actions: {
    updateName(ctx) {
      // 发送请求
      setTimeout(() => {
        ctx.commit("updateName");
      }, 1000);
    },
  },
  modules: {},
});
 */
