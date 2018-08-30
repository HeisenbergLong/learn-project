import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/**
 * 请求拦截器
 */
axios.interceptors.request.use(config => {
  console.log( `[${config.method}] --------- url=${config.url} --------- params=${JSON.stringify(config.data)} ` )
  return config
}, err => {
  return Promise.reject(err)
})

/**
 * 响应拦截器
 */
axios.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})

class Fetch {
  static get (url, params) {
    params = params ? params : {}
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        if(res.status === 200){
          resolve(res.data)
        }else{
          reject(res.status)
        }
      })
    })
  }
}

/**
 * 配置API接口
 */
export default {
  /**
   * 获取首页列表
   */
  getNews () {
    return Fetch.get('/news/index', { id: 1 })
  }
}
