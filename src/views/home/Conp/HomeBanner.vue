<template>
    <div>
        <div class="home-banner">
            <XtxCarousel auto-play :sliders="sliders" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { findBanner } from "@/api/home.js"
export default {
    name: "HomeBanner",
    setup() {
        // 获取轮播图数据
        const sliders = ref([])
        findBanner().then(data => {
            sliders.value = data.result
            console.log("轮播图数据：",sliders.value)
        })

        return { sliders }
    }
}
</script>

<style lang='less' scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98
}

// 覆盖样式
.xtx-carousel {
    ::v-deep .carousel-btn.prev {
        left: 270px;
    }
    ::v-deep .carousel-indicator {
        padding-left: 250px;
    }
}
</style>
