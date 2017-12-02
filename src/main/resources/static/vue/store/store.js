import Vue from 'vue';
import Vuex from 'vuex';
import HomeStore from './home/homeStore.js';
import AuthStore from './auth/authStore.js';
import {ROOTSTORE_SET_GLOBAL_TIME} from './mutation-types.js';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        home: HomeStore,
        auth: AuthStore
    },
    state: {
        globalTime: new Date()
    },
    mutations: {
        [ROOTSTORE_SET_GLOBAL_TIME](state, time) {
            state.globalTime = time;
        }
    },
    actions: {
        globalMethod({commit}) {
            commit(ROOTSTORE_SET_GLOBAL_TIME, new Date());
        }
    }
});