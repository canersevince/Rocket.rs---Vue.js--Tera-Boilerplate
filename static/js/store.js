var store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters : {
        getCount(state){
            return state.count
        }
    }
})