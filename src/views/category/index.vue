<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <xtx-bread-item :to="{ path: '/' }">首页</xtx-bread-item>
        <xtx-bread-item v-if="topCategory">{{
          topCategory.name
        }}</xtx-bread-item>
      </XtxBread>
      <!-- 轮播图 -->
      <XtxCarousel :sliders="sliders" style="height: 500px" />
      <!-- 全部分类 -->
      <div class="sub-list" v-if="topCategory && topCategory.children">
        <h3>全部分类</h3>
        <ul>
          <li v-for="sub in topCategory.children" :key="sub.id">
            <a href="javscript:;">
              <img :src="sub.picture" alt="" />
              <p>{{ sub.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 推荐商品 -->
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { findBanner } from "@/api/home.js";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "TopCategory",
  setup() {
    // 轮播图数据
    const sliders = ref([]);
    findBanner().then((data) => {
      sliders.value = data.result;
    });

    // 面包屑加子分类  ====>去vuex里面拿
    const route = useRoute();
    const store = useStore();
    console.log(route.params.id);
    console.log(store.state.category.list.find((item) => item.id));
    const topCategory = computed(() => {
      let cate = {};
      // 当前顶级分类 = 根据路由上的ID去vuex中category模块的list中查找
      // console.log(route.params.id);
      // console.log(store.state.category.list);
      return store.state.category.list.find((item) => {
        return item.id === route.params.id;
      });
      if (item) cate = item;
      return cate;
    });

    return { sliders, topCategory };
  },
};
</script>

<style lang='less' scoped>
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
}
</style>
