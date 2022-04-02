import Vue from 'vue';
import App from './App.vue';
// import mix from './混合';
import plugins from './插件.js';

Vue.config.productionTip = false;
// Vue.mixin(mix);
Vue.use(plugins);

new Vue({
	render: (h) => h(App),
}).$mount('#app');
