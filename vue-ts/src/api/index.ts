import { HTTPStatusCode, ErrorMessage } from '@/enums'
import ElmentUI from 'element-ui'
import config from '@/config'
import store from '@/store'

export default class http {
  static baseURL = config.baseURL
  static regHttp = /^http|https/

  static getURL(url: string) {
    return this.regHttp.test(url) ? url : this.baseURL + url
  }

  static getToken(): string {
    return 'Bearer ' + store.getters.token
  }

  // HTTP Status Code 401 未授权，清空保存的 token，跳转登录页
  static unauthorized() {
    ElmentUI.Message.warning('登录已过期，请重新登录 ！')
  }

  static get(url: string, params?: any) {
    if (params) {
      let array: string[] = []
      Object.keys(params).forEach(key => params[key] !== '' && array.push(key + '=' + params[key]))
      url += '?' + array.join('&')
    }
  }
}
