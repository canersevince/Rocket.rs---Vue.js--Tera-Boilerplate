const routes = [
    { path: '/count', component: count },
    { path: '/', component: hello }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})
