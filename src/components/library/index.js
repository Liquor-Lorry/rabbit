// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器

// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了vue构造函数，vue基础之上扩展
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，vue基础之上扩展

import XtxSkeleton from './xtx-Skeleton.vue'
import XtxCarousel from './xtx-Carousel.vue'

export default {
    install(app) {
        // 在app上进行扩展，app提供 component directive 函数
        // 如果要挂载原型 app.config.globalProperties 方式
        app.component(XtxSkeleton.name, XtxSkeleton)
        app.component(XtxCarousel.name, XtxCarousel)
    }
}