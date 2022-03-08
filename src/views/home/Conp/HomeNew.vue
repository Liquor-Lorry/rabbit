<template>
  <div class="home-new">
    <!-- 新鲜好物 -->
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right>
        <XtxPanel path="/" />
      </template>
      <!-- 面板内容 -->
      <div ref="target" style="position: relative; height: 406px">
        <Transition name="fade">
          <ul v-if="goods.length" class="goods-list">
            <li v-for="item in goods" :key="item.id">
              <RouterLink :to="`/product/${item.id}`">
                <img :src="item.picture" alt="" />
                <p class="name ellipsis">{{ item.name }}</p>
                <p class="price">&yen;{{ item.price }}</p>
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

import { findNew } from "@/api/home.js";
import { useLazyData } from "@/hooks";
export default {
  name: "HomeNew",
  components: {
    HomePanel,
    HomeSkeleton,
  },
  setup() {
    // const goods = ref([])
    // findNew().then(data => {
    //     goods.value = data.result
    //     console.log(goods)
    // })

    // const target = ref(null);
    // 1.target 去绑定一个监听对象，最好是DOM
    // 2.传入API函数，内部获取调用，返回的就是响应式数据
    const { result, target } = useLazyData(findNew);

    return { goods: result, target };
  },
};
</script>

<style lang='less' scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
