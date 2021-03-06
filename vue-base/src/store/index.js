import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import user from './models/user/index'

Vue.use(Vuex);

let store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
      user
    }
});

export default store;
