import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入自己的UI组件库
import myUI from '@/components/library'


// 重置样式文件资源
import "normalize.css";
// 引入自己的重置样式文件和公用样式文件
import "@/assets/styles/common.less";

createApp(App).use(store).use(router).use(myUI).mount("#app");
