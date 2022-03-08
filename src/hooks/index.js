// 提供复用逻辑的函数（钩子）
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";
/**
 * 数据懒加载函数
 * @params {Object} target - DOM对象
 * @params {Function} apiFn - API函数
 */
export const useLazyData = (apiFn) => {
  const result = ref([]);
  const target = ref(null);
  // stop 停止观察  target 目标元素  isIntersecting 是否进入可视区
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      // 如果在可视区
      if (isIntersecting) {
        stop();
        // 调用api函数获取数据
        apiFn().then((data) => {
          result.value = data.result;
        });
      }
      // targetIsVisible.value = isIntersecting;
    },
    // 配置选项，相交的比例大于0就触发
    {
      threshold: 0
    }
  );
  return { result, target };
};
