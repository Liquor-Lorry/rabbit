<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <xtx-bread-item :to="{ path: '/' }">首页</xtx-bread-item>
        <transition name="fade-right" mode="out-in">
          <xtx-bread-item v-if="topCategory" :key="topCategory.id">{{
            topCategory.name
          }}</xtx-bread-item>
        </transition>
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
      <!-- 分类关联商品 -->
      <div class="ref-goods"  v-for="item in subList" :key="item.id">
        <div class="head">
          <h3>- {{item.name}} -</h3>
          <p class="tag">{{item.desc}}</p>
          <XtxMore />
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :key="good.id" :good="good" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { findBanner } from "@/api/home.js";
import { findTopCategory } from "@/api/category.js";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import GoodsItem from './Conp/GoodsItem'
export default {
  name: "TopCategory",
  components: { GoodsItem },
  setup() {
    // 轮播图数据
    const sliders = ref([]);
    findBanner().then((data) => {
      sliders.value = data.result;
    });

    // 面包屑+所有子分类  ====>去vuex里面拿
    const route = useRoute();
    const store = useStore();
    const topCategory = computed(() => {
      let cate = {};
      // 当前顶级分类 = 根据路由上的ID去vuex中category模块的list中查找
      const item = store.state.category.list.find((item) => {
        return item.id === route.params.id;
      });
      if (item) cate = item;
      return cate;
    });

    // 推荐商品
    const subList = ref([])
    const getSubList = () => {
      findTopCategory(route.params.id).then(res => {
        subList.value = res.result.children
      })
    }
    
    watch(() => route.params.id, (newVal) => {
       if (newVal && `/category/${newVal}` === route.path) getSubList()
    }, { immediate: true })

    return { sliders, topCategory, subList };
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
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
}
</style>
