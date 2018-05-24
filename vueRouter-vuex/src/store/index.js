import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({ 
    state: {
        totalPrice: 0
    },
    getters: {
        //可以读取state中的数据
        getTotal(state){
            return state.totalPrice;
        }
    },
    mutations: {
        //只允许同步操作
        changePrice (state, price) {
            state.totalPrice = price;
        }
    },
    actions: {
        //可以异步操作  (例如：http请求)
        actionPrice (context, price){
            context.commit('changePrice', price);
        }
    }
});

export default store;