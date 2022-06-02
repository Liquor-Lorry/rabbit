<script>
import { h } from "vue";
export default {
  name: "XtxBread",
  // 使用render函数动态生成组件
  render() {
    //1. template 标签去除，单文件组件
    //2. 返回值就是组件内容
    //3. vue2.0的h函数传参进来的，vue3.0的h函数导入进来的
    //4. h 第一个参数--标签名  第二个参数--标签属性对象  第三个参数--子节点

    // 步骤：
    // 1.创建父容器
    // 2.获取默认插槽内容
    // 3.去除xtx-braed-item组件的i标签，应该由render函数来组织
    // 4.遍历插槽的item，得到一个动态创建的节点，最后一个item不加i标签
    // 5.把动态创建的节点渲染在xtx-bread标签中
    const items = this.$slots.default(); // 获取默认插槽的内容
    // console.log("items:", items, items.length);
    const dymanicItems = [];
    items.forEach((item, i) => {
      dymanicItems.push(item);
      console.log(dymanicItems);
      if (i < items.length - 1) {
        dymanicItems.push(h("i", { class: "iconfont icon-angle-right" }));
      }
    });
    return h("div", { class: "xtx-bread" }, dymanicItems);
  },
};
</script>

<style lang='less'>
// 去除 scoped 属性  目的：让样式作用到xtx-bread-item组件

.xtx-bread {
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all 0.4s;
      &:hover {
        color: @xtxColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
    // css样式方式实现，不合理
    // &:last-child {
    //   display: none;
    // }
  }
}
</style>