<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 筛选区 -->
      <SubFilter @filter-change="changeFilter" />
      <!-- 结果区 -->
      <div class="goods-list">
        <!-- 排序 -->
        <SubSort @sort-change="changeSort" />
        <!-- 列表 -->
        <ul>
          <li v-for="item in goodsList" :key="item.id">
            <GoodsItem :good="item" />
          </li>
        </ul>
        <xtx-InfiniteLoading
          :loading="loading"
          :finished="finished"
          @infinite="getData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SubBread from "./Conp/SubBread";
import SubFilter from "./Conp/SubFilter";
import SubSort from "./Conp/SubSort";
import GoodsItem from "./Conp/GoodsItem";

import { ref, watch } from "vue";
import { findSubCategoryGoods } from "@/api/category";
import { useRoute } from "vue-router";
export default {
  name: "Sub",
  components: { SubBread, SubFilter, SubSort, GoodsItem },
  setup() {
    // 1. 基础布局
    // 2. 无限加载组件
    // 3. 动态加载数据且渲染
    // 4. 任何筛选条件变化需要更新列表
    const route = useRoute();

    const loading = ref(false);
    const finished = ref(false);
    const goodsList = ref([]);
    // 查询参数
    let reqParams = {
      page: 1,
      pageSize: 20,
    };
    // 获取数据函数
    const getData = () => {
      loading.value = true;
      reqParams.categoryId = route.params.id;
      findSubCategoryGoods(reqParams).then(({ result }) => {
        if (result.items.length) {
          goodsList.value.push(...result.items);
          reqParams.page++;
        } else {
          // 加载完毕
          finished.value = true;
        }
        // 请求结束
        loading.value = false;
      });
    };

    // 切换二级分类重新加载
    watch(
      () => route.params.id,
      (newVal) => {
        if (newVal && route.path === "/category/sub/" + newVal) {
          goodsList.value = [];
          reqParams = {
            page: 1,
            pageSize: 20,
          };
          finished.value = false;
        }
      }
    );

    // 监听筛选区改变
    const changeFilter = (filterParams) => {
      reqParams = { ...reqParams, ...filterParams }
      reqParams.page = 1
      goodsList.value = []
      finished.value = false
    }
    // 监听排序改变
    const changeSort = (sortParams) => {
      reqParams = { ...reqParams, ...sortParams }
      reqParams.page = 1
      goodsList.value = []
      finished.value = false
    }

    return { loading, finished, goodsList, getData, changeFilter, changeSort };
  },
};
</script>

<style lang='less' scoped>
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    li {
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
