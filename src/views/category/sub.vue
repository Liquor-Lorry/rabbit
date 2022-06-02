<template>
    <div class="sub-category">
      <div class="container">
        <!-- 面包屑 -->
        <SubBread />
        <!-- 筛选区 -->
        <SubFilter />
      </div>
    </div>
</template>

<script>
import SubBread from './Conp/SubBread'
import SubFilter from './Conp/SubFilter'
export default {
  name: 'Sub',
  components: { SubBread, SubFilter },
  // 定义属性
  data() {
    return {
      
    }
  }
}
</script>

<style lang='less' scoped>
  
</style>
