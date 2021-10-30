import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";

// 三个模块 用户、购物车、分类
import user from "./modules/user";
import cart from "./modules/cart";
import category from "./modules/category";

export default createStore({
  modules: {
    user,
    cart,
    category,
  },
  plugins: [
    createPersistedstate({
      key: "rabbit-lorry-pc-store",
      paths: ["user", "cart"],
    }),
  ],
});
