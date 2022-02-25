<template>
  <div class='xtx-carousel' @mouseenter="stop()" @mouseleave="start()">
      <!-- 轮播图容器 -->
    <ul class="carousel-body">
        <!-- 给显示图片加上fade效果 -->
      <li class="carousel-item" v-for="(item, i) in sliders" :key="item.id" :class="{fade : index === i}">
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="">
        </RouterLink>
      </li>
    </ul>
    <!-- 上一张 -->
    <a @click="toggle(-1)" href="javascript:;" class="carousel-btn prev"><i class="iconfont icon-angle-left"></i></a>
    <!-- 下一张 -->
    <a @click="toggle(1)" href="javascript:;" class="carousel-btn next"><i class="iconfont icon-angle-right"></i></a>
    <!-- 指示器 -->
    <div class="carousel-indicator">
        <!-- 激活 -->
      <span @click="index=i" v-for="(item, i) in sliders" :key="item.id" :class="{active : index === i}"></span>
    </div>
  </div>
</template>

<script>
import { onUnmounted, ref, watch } from 'vue'
export default {
    name: 'XtxCarousel',
    props: {
        // 轮播数据
        sliders: {
            type: Array,
            default: () => []
        },
        // 是否自动轮播
        autoPlay: {
            type: Boolean,
            default: true
        },
        // 延迟时间
        duration: {
            type: Number,
            default: 3000
        }
    },
    setup(props) {
        // 控制图片的索引
        const index = ref(0)

        // 自动轮播
        let timer = null
        const autoPlayFn = () => {
            clearInterval(timer)
            // 自动播放，每隔一定时间切换索引
            timer = setInterval(() => {
                index.value ++
                if(index.value >= props.sliders.length){
                    index.value = 0
                }
            },props.duration)
        }

        // 监听sliders的数据变化，判断如果有数据且autoPlay为true
        watch(() => props.sliders, (newVal) => {
            if(newVal.length && props.autoPlay){
                index.value = 0
                autoPlayFn() 
            }
        },{ immediate: true })

        // 鼠标进入暂停 离开开启自动播放
        const stop = () => {
            if(timer) clearInterval(timer)
        }
        const start = () => {
            if (props.sliders.length && props.autoPlay) {
                autoPlayFn()
            }
        }

        // 上一张、下一张切换
        const toggle = (step) => {
            // 将要改变的索引
            const newIndex = index.value + step
            // 超出边界 大于
            if(newIndex > (props.sliders.length - 1)){
                index.value = 0
                return
            }
            // 超出边界 少于
            if(newIndex < 0) {
                index.value = props.sliders.length - 1
                return
            }
            // 正常
            index.value = newIndex
        }

        // 组件卸载，清除定时器
        onUnmounted(() => {
            clearInterval(timer)
        })


        return { index, stop, start, toggle }
    }
}
</script>
<style scoped lang="less">
.xtx-carousel{
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel{
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0,0,0,0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background:  #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0,0,0,.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev{
        left: 20px;
      }
      &.next{
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
