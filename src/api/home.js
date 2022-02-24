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