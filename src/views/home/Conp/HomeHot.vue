<template>
  <div class="home-hot">
    <!-- 人气推荐 -->
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
      <!-- 面板内容 -->
      <div ref="target" style="position: relative; height: 406px">
        <Transition name="fade">
          <ul v-if="goods.length" ref="pannel" class="goods-list">
            <li v-for="item in goods" :key="item.id">
              <RouterLink :to="`/product/${item.id}`">
                <img :src="item.picture" alt="" />
                <p class="name">{{ item.title }}</p>
                <p class="desc">{{ item.alt }}</p>
              </RouterLink>
            </li>
          </ul>
          <HomeSkeleton v-else />
        </Transition>
      </div>
    </HomePanel>
  </div>
</template>

<script>
import { ref } from "vue";
import HomePanel from "./HomePanel.vue";
import HomeSkeleton from "./HomeSkeleton.vue";

import { findHot } from "@/api/home.js";
import { useLazyData } from "@/hooks";
export default {
  name: "HomeHot",
  components: {
    HomePanel,
    HomeSkeleton,
  },
  setup() {
    // const goods = ref([])
    // findHot().then(data => {
    //     goods.value = data.result
    //     console.log(goods)
    // })

    // const target = ref(null);
    const { result, target } = useLazyData(findHot);

    return { goods: result, target };
  },
};
</script>

<style lang='less' scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
