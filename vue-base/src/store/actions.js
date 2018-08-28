import * as types from './mutation-types'
/**
 * 这里可以使用异步操作
 *
 * @param {*} {commit, state}
 * @param {*} payload
 */
const add = ( {commit, state}, payload ) => {
  commit(types.SET_SHPPING, payload.shopping)
  // commit(types.SET_SHPPING, payload.shopping) ...
}
