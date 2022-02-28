// 提供首页相关api数据
import request from '@/utils/request'

/**
 *获取首页品牌分类的数据
 * @params {Integer} limit - 品牌个数
 * @return Promise
 */
export const findBrand = (limit) => { 
    return request('/home/brand', 'get', {limit})
}


/**
 *获取首页轮播图的数据
 * @return Promise
 */
export const findBanner = () => { 
    return request('/home/banner', 'get')
}


/**
 *获取首页面板（新鲜好物）的数据
 * @return Promise
 */
export const findNew = () => {
    return request('home/new', 'get')
}


/**
 *获取首页面板（人气推荐）的数据
 * @return Promise
 */
export const findHot = () => {
    return request('home/hot', 'get')
  }