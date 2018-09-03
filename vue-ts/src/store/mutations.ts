import * as types from './mutaion-types'

export default {
  [types.SET_TOKEN](state: any, token: string) {
    state.token = token
  }
}
