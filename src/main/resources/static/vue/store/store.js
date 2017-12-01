import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import HomeStore from './home/homeStore.js';
import { ROOTSTORE_SET_AUTH } from './mutation-types.js';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        chat: HomeStore
    },
    state: {
        auth: {
            loggedin : false
        },
    },
    mutations: {
        [ROOTSTORE_SET_AUTH](state, auth) {
            state.auth = auth;
        }
    },
    actions: {
        fetchUser({commit}, auth) {
            commit(ROOTSTORE_SET_AUTH, auth)
        }
    }
});