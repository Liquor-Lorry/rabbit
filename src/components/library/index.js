// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器

// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了vue构造函数，vue基础之上扩展
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，vue基础之上扩展

import XtxSkeleton from "./xtx-Skeleton.vue";
import XtxCarousel from "./xtx-Carousel.vue";
import XtxPanel from "./xtx-Panel.vue";

import defaultImg from "@/assets/images/qrcode.jpg";

export default {
  install(app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    app.component(XtxSkeleton.name, XtxSkeleton);
    app.component(XtxCarousel.name, XtxCarousel);
    app.component(XtxPanel.name, XtxPanel);

    // 定义指令
    defineDirective(app);
  }
};

// 定义指令
const defineDirective = (app) => {
  // 1.图片懒加载指令 v-lazy
  // 原理： 先存储图片地址，不能在src上，当图片进入可视区后将你存储的图片地址设置给图片元素使用即可
  app.directive("lazy", {
    // vue2.0 监听使用指令的DOM是否创建好，钩子函数：inserted
    // vue3.0 的指令拥有的1钩子函数和组件一样，使用指令的DOM是否创建好，钩子函数：mounted
    mounted(el, binding) {
      //   console.log("mounted");
      // 2.创建一个观察对象，来观察当前使用指令的元素
      const observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // console.log("进入可视区", el);
            // 停止观察
            observer.unobserve(el);
            // 3.将指令的值设置给el的src属性 binding.value就是指令的值
            el.src = binding.value;
            // 4.处理图片加载失败
            el.onerror = () => {
              el.src = defaultImg;
            };
          }
        },
        {
          threshold: 0
        }
      );
      // 开启观察
      observer.observe(el);
    }
  });
};
