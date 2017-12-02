<template>
    <div id="home">
        <h3>Home</h3>
        <h4>Users length: {{users.length}}</h4>
        <h4>User: {{user}}</h4>
        <app-user v-for="user in users" :id="user._id" :key="user._id"></app-user>
    </div>
</template>

<script>

    import User from '../User/UserWidget.vue';
    import {mapState} from 'vuex';

    export default {
        components: {
            appUser: User
        },
        computed: {
            ...mapState({
                users: state => state.home.users,
                user: state => state.home.user
            })
        }
    }
</script>