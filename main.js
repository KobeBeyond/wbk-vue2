import Vue from 'vue'
import App from './App'
import router from '@src/router/index'
import DatePicker from 'ant-design-vue/lib/date-picker'
import 'ant-design-vue/lib/date-picker/style/css'
Vue.use(DatePicker)
new Vue({
    el: '#app',
    router,
    render: (createElement) => {
        return createElement(App)
    }
})