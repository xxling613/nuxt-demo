import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        fristid: '',
        homeList: []
    },
    mutations: {
        setfristid(state, id) {
            state.fristid = id
        }
    }
})

export default store