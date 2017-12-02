import {HOME_INITIALIZE, HOME_LOADING, HOME_SET_DUMMY_DATA, HOME_SET_DUMMY_DATA_ERROR} from './mutation-types.js';
import {HTTP} from '../../http.js';

export default {
    namespaced: true,
    state: {
        user: null,
        users: [],
        dummyData: [],
        error: {},
        loading: false
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
        [HOME_INITIALIZE](state, payload) {
            state.user = payload.user;
            state.users = payload.users;
        },
        [HOME_SET_DUMMY_DATA](state, dummyData) {
            state.dummyData = dummyData;
        },
        [HOME_SET_DUMMY_DATA_ERROR](state, error) {
            state.error = error;
        },
        [HOME_LOADING](state, isLoading) {
            state.loading = isLoading;
        }
    },
    actions: {
        initialize({commit}, payload) {
            commit(HOME_INITIALIZE, payload);
        },
        loadDummyData({commit}) {
            commit(HOME_SET_DUMMY_DATA, []);
            commit(HOME_SET_DUMMY_DATA_ERROR, {});
            commit(HOME_LOADING, true);
            HTTP.get('users')
                .then(data => {
                    commit(HOME_SET_DUMMY_DATA, data);
                    commit(HOME_LOADING, false);
                })
                .catch(err => {
                    commit(HOME_SET_DUMMY_DATA_ERROR, {
                        message: err.message,
                        hasError: true
                    });
                    commit(HOME_LOADING, false);
                });
        }
    }
};