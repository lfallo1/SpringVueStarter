import {HOME_INITIALIZE} from './mutation-types.js';

export default {
    namespaced: true,
    state: {
        user: null
    },
    getters: {
        userInfo(state) {
            return state.user ? `${state.user.userName} is ${state.user.age} years old, and is from ${state.user.location}` : 'No info available';
        },
        welcomeMessage(state) {
            return state.user ? `Welcome to the site, ${state.user.userName}` : 'Hello, guest';
        }
    },
    mutations: {
        [HOME_INITIALIZE](state, user) {
            state.user = user;
        }
    },
    actions: {
        initialize({commit}, payload) {
            commit(HOME_INITIALIZE, payload);
        },
    }
};