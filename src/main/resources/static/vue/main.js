import Vue from "vue";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Toasted from 'vue-toasted';
import store from './store/store.js';

import HomePageContent from "./components/HomePageContent.vue";
import Navbar from "./components/shared/Navbar.vue";
import Footer from "./components/shared/Footer.vue";
import LoginForm from "./components/LoginForm.vue";
import Modal from 'modal-vue';

Vue.use(VueMaterial);
Vue.use(Toasted);

//add components
Vue.component('app-homepage-content', HomePageContent);
Vue.component('app-navbar', Navbar);
Vue.component('app-footer', Footer);
Vue.component('app-loginform', LoginForm);
Vue.component('modal', Modal);

//optional eventBus
export const eventBus = new Vue();

new Vue({
    el: '#app',
    store
});
