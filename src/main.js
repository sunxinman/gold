import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import ConfigRouter from './config-router'
import dire from './vue-directive'
Vue.use(VueRouter)
var router = new VueRouter();
ConfigRouter(router)
router.start(App,"#apps")

