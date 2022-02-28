// 1.新建一个axios实例
// 2.请求拦截 如果有token就进行头部携带
// 3.响应拦截 （1）剥离无效数据 （2）处理token失效情况
// 4.导出一个函数，调用当前的axios实例发请求，返回值为promise

import axios from "axios";
import store from "@/store";
import router from "@/router";
// 导出请求的根路径
export const baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net/";

const instance = axios.create({
  baseURL,
  timeout: 5000,
});

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    // 拦截业务逻辑
    // 进行请求配置的修改
    // 如果本地有token就在头部携带
    // 1.获取用户信息对象
    const { profile } = store.state.user;
    // 2. 判断是否有token
    if (profile.token) {
      // 设置token
      config.headers.Authorization = `Bearer ${profile.token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//响应拦截
instance.interceptors.response.use(
  (res) => {
    // res => res.data  取出data数据，将来调用接口的时候直接拿到的就是后台的数据
    return res.data;
  },
  (err) => {
    // 401 状态码，进入该函数
    if (err.response && err.response.status === 401) {
      // 1. 清空无效的用户信息
      // 2. 跳转到登录页
      // 3. 跳转需要传参（当前路由地址）给登录页码
      store.commit("user/setUser", {});
      // 当前路由地址
      // 组件里头：`/user?a=10` $route.path === /user  $route.fullPath === /user?a=10
      // js模块中：router.currentRoute.value.fullPath 就是当前路由地址，router.currentRoute 是ref响应式数据
      // encodeURIComponent 转换uri编码，防止解析地址出问题
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath);
      router.push("/login?redirectUrl=" + fullPath);
    }
    return Promise.reject(err);
  }
);

// 请求工具函数
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
    // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
    // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
    // method参数：get,Get,GET  转换成小写再来判断
    // 在对象，['params']:submitData ===== params:submitData 这样理解
    [method.toLowerCase() === "get" ? "params" : "data"]: submitData,
  });
};
