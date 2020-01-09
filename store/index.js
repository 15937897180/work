import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = () => new Vuex.Store({
    state: {    
        count: 0
    },
    mutations: {
        add(state) {
            state.count++
        },
        sub(state) {
            state.count--
        }
    },
    actions: {
        asyncAdd(context) {
            setTimeout(() => {
                context.commit('add')
            }, 1000)
        },
        asyncSub(context) {
            setTimeout(() => {
                context.commit('sub')
            }, 1000)
        }
    }
})

export default store;
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)
// const store = () => new Vuex.Store({
//     state: {
//         count: 1
//     },
//     mutations: {
//         add(state) {
//             state.count ++
//         },
//         sub(state) {
//             state.count --
//         }
//     }
// })
// export default store