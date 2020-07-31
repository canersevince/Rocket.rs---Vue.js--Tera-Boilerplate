var count = Vue.component('count', {
    delimiters: ['[[', ']]'],
    computed: {
        count() {
            return this.$store.getters['getCount']
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        }
    },
    template: `<div class="count-div">
                    <h1>Vuex "count" data is : [[count]]</h1>
                    <div>
                        <button class="btn-pink" @click="increment()">Click me!</button>
                        <button class="btn-pink" @click="$router.push('/')">Go Back</button>
                    </div>
               </div>`
})