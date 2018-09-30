import Vue from 'vue'

import Store from './store';
import Router from './routes';

Vue.config.productionTip = false

new Vue({
    store: Store,
    router: Router,
}).$mount('#app')
