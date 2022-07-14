// 分类模块
import { topCategory } from "@/api/constants";
import { getAllCategory } from "@/api/category";

export default {
  namespaced: true,
  state: () => {
    return {
      // 分类信息集合
      // 通过map改造拿到我们想要的数据
      list: topCategory.map((item) => ({ name: item })),
    };
  },
  mutations: {
    setList(state, headCategory) {
      state.list = headCategory;
    },
    // 定义show跟hide函数来控制当前分类的二级分类显示和隐藏
    show(state, id) { 
      const curCategory = state.list.find(item => item.id === id)
      curCategory.open = true
    },
    hide(state, id) { 
      const curCategory = state.list.find(item => item.id === id)
      curCategory.open = false
    }

  },
  actions: {
    async getList({ commit }) {
      // 这里调用异步请求
      // const data = await getAllCategory();
      // 获取成功后提交mutations进行数据修改
      // commit("setList", data.result);
      const { result } = await getAllCategory();
      result.forEach(top => {
        top.open = false
      })
      // 获取成功后提交mutations进行数据修改
      commit("setList", result);
    },
  },
};
