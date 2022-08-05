import { createRouter, createWebHashHistory } from "vue-router";

//引入组件
const Layout = () => import("@/views/Layout");
const Home = () => import("@/views/home");
const TopCategory = () => import("@/views/category/index");
const SubCategory = () => import("@/views/category/sub");
const Login = () => import('@/views/login/index')

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
  { path: "/login", component: Login },
];

const router = createRouter({
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { left: 0, top: 0 }
  }
});

export default router;
