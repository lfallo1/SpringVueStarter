import {AUTH_SET_LOGIN_ERROR, AUTH_SET_USER} from './mutation-types.js';
import axios from 'axios';
import {router} from '../../main.js';

export default {
    namespaced: true,
    state: {
        auth: {},
        loginError: false
    },
    getters: {
        isLoggedIn(state) {
            return state.auth.username;
        }
    },
    mutations: {
        [AUTH_SET_USER](state, auth) {
            state.auth = auth;
        },
        [AUTH_SET_LOGIN_ERROR](state, error) {
            state.loginError = error;
        }
    },
    actions: {
        login({commit, dispatch}, formData) {
            commit(AUTH_SET_LOGIN_ERROR, false);
            axios({
                url: '/login',
                method: 'POST',
                data: formData
            }).then(res => {
                dispatch('fetchUser');
            }).catch(err => {
                if (err && err.response && err.response.data && err.response.data.message && err.response.data.message.toLowerCase().indexOf('maximum sessions') > -1) {
                    commit(AUTH_SET_LOGIN_ERROR, "Maximum sessions for this login exceeded");
                    return;
                }
                commit(AUTH_SET_LOGIN_ERROR, "Invalid username / password");
            })
        },
        logout({commit}) {
            axios({
                url: '/logout', method: 'GET'
            }).then(res => {
                commit(AUTH_SET_USER, {});
                router.push('/');
            })
        },
        fetchUser({commit}) {
            axios({url: '/api/user', method: 'GET'})
                .then(res => {
                    commit(AUTH_SET_USER, res.data.principal);
                    router.push('/');
                })
                .catch(err => {
                    commit(AUTH_SET_USER, {});
                });
        }
    }
};