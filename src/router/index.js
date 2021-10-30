import { createRouter, createWebHashHistory } from "vue-router";

//引入组件
const Layout = () => import("@/views/Layout");
const Home = () => import("@/views/home");

// 路由规则
const routes = [
  {
    path: "/",
    component: Layout,
    children: [{ path: "/", component: Home }],
  },
];

const router = createRouter({
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes,
});

export default router;
