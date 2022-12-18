import VueRouter from 'vue-router'
import Foo from '../pages/Foo'
import Bar from '../pages/Bar'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]
const router = new VueRouter({
    routes
})
export default router