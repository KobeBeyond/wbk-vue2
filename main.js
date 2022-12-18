import Vue from 'vue'
import App from './App.vue'
import router from '@src/router/index'
new Vue({
    el: '#app',
    router,
    render: (createElement) => {
        return createElement(App)
    }
})