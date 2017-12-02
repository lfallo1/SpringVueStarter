<template>
    <div class="container">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './shared/Header.vue';
    import Footer from './shared/Footer.vue';
    import {mapActions} from 'vuex';
    import users from '../data/users.js';

    export default {
        name: 'app',
        components: {
            appHeader: Header,
            appFooter: Footer
        },
        methods: {
            ...mapActions({
                initialize: 'home/initialize',
                fetchUser: 'auth/fetchUser'
            })
        },
        created() {
            this.initialize({
                user: {
                    username: 'lfallo1',
                    email: 'myemail@mail.edu',
                    dob: new Date(4, 10, 1990)
                },
                users: users
            });

            //check if user is already logged in
            this.fetchUser();
        }
    }
</script>

<style>
</style>