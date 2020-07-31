var hello = Vue.component('hello', {
    delimiters: ['[[', ']]'],
    data: function () {
        return {
            header: "Vue",
            api_content : null
        }
    },
    created(){
        axios.get('/api/content').then(res => {
            let data = res.data
            this.api_content = data.api_content
        })
    },
    template: `<div class="my-div">
                    <h1>Hello From [[header]]</h1>
                    <h3 v-if="api_content">[[api_content]]</h3> 
                    <router-link tag="button" class="btn-pink" to="count">Click here to go counter!</router-link> 
               </div>`
})