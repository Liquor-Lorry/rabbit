<template>
  <XtxBread>
    <XtxBreadItem to="/">首页</XtxBreadItem>
    <XtxBreadItem v-if="category.top" :to="`/category/${category.top.id}`">{{category.top.name}}</XtxBreadItem>
    <Transition name="fade-right" mode="out-in">
      <XtxBreadItem v-if="category.sub" :key="category.sub.id">{{category.sub.name}}</XtxBreadItem>
    </Transition>
  </XtxBread>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
  name: 'SubBread',
  setup() {
    // 注意：setup中的this不是当前vue实例

    const route = useRoute()
    const store = useStore()

    const category = computed(() => {
      const obj = {}
      store.state.category.list.forEach(top => {
        top.children && top.children.forEach(sub => {
          if(sub.id === route.params.id) {
            // 设置二级类目
            obj.sub = {
              is: sub.id,
              name: sub.name
            }
            // 设置一级类目
            obj.top = {
              id: top.id,
              name: top.name
            }
          }
        })
      })
      return obj
    })

    return { category }
  }
}
</script>

<style>

</style>