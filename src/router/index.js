import { createRouter, createWebHashHistory } from "vue-router";

//引入组件
const Layout = () => import("@/views/Layout");
const Home = () => import("@/views/home");
const TopCategory = () => import("@/views/category/index");
const SubCategory = () => import("@/views/category/sub");

// 路由规则
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/", component: Home },
      { path: "/category/:id", component: TopCategory },
      { path: "/category/sub/:id", component: SubCategory },
    ],
  },
];

const router = createRouter({
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes,
});

export default router;
