<template>
  <div>
    <ul class="header-nav">
      <li class="home"><RouterLink to="/">首页</RouterLink></li>
      <li v-for="item in list" :key="item.id" @mouseenter="show(item)" @mouseleave="hide(item)" @mousemove="show(item)">
        <RouterLink @click="hide(item)" :to="`/category/${item.id}`">{{item.name}}</RouterLink>
        <div class="layer" :class="{open: item.open}">
          <ul>
            <li v-for="sub in item.children" :key="sub.id">
              <RouterLink @click="hide(item)" :to="`/category/sub/${sub.id}`">
                <img :src="sub.picture" alt="" />
                <p>{{sub.name}}</p>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
  name: "HeaderNav",
  // 定义属性
  setup(){
    const store = useStore()
    // 拿到vuex的分类列表
    const list = computed(() => {
      return store.state.category.list
    })

    // 跳转的时候不会关闭二级分类，通过数据来控制
    // 1.vuex每个分类加上open数据
    // 2.vuex提过显示和隐藏函数，修改open数据
    // 3.组件中使用vuex中的函数，使用时间来绑定，提供一个类名控制显示和隐藏

    const show = (item) => {
      store.commit('category/show',item.id)
    }
    const hide = (item) => {
      store.commit('category/hide',item.id)
    }


    return { list, show, hide }
  }
};
</script>

<style lang='less' scoped>
.header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 999;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      // 显示二级导航
      // > .layer {
      //   height: 132px;
      //   opacity: 1;
      // }
    }
  }
}
// 二级导航弹层样式
.layer {
  &.open{
    height: 132px;
    opacity: 1;
  }
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
