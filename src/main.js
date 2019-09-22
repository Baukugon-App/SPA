import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/LeftColumnStore';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(vuetify);

new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')