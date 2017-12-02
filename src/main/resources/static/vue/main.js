import Vue from "vue";
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Toasted from 'vue-toasted';
import store from './store/store.js';
import routes from './routes.js';

import App from './components/App.vue'
import Modal from 'modal-vue';

Vue.use(VueMaterial);
Vue.use(Toasted);

//add components
Vue.component('modal', Modal);

//optional eventBus
export const eventBus = new Vue();

// --- router ---
Vue.use(VueRouter);

export const router = new VueRouter({
    // mode: 'history',
    routes: routes,
    linkExactActiveClass: 'exact-route-match',
    scrollBehavior(to, from, savedPosition) {
        return to.hash ? {selector: to.hash} : savedPosition ? savedPosition : {x: 0, y: 0};
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.filter(t => t.meta.isAuthRequired).length > 0) {
        console.log('route::auth_required');
    }
    if (to.matched.filter(t => t.meta.isAnonymousRequired).length > 0) {
        console.log('route::must_be_logged_out');
    }
    next();
});
// --- end router ---

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
