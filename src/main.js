import Vue from 'vue'
import Vuex from 'vuex'
import store from "./store/index";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Campcard from "@/components/Campcard";
import Analysis from "@/components/Analysis";
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)

new Vue({
    el:'#app',
    store,
    render: h => h(Analysis),
})



