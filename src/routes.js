import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App';
import List from './components/List.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '',
                component: List,
                alias: [
                    'active',
                    'completed'
                ]
            }
        ]
    }
];

const Router = new VueRouter({
    mode: 'history',
    routes
});

export default Router;