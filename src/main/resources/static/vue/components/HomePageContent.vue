<template>
    <div id="home-page-content">
        <h3>{{welcomeMessage}}</h3>
        <h4>User Info: {{userInfo}}</h4>
        <app-homepage-subcontent></app-homepage-subcontent>
    </div>
</template>

<script>

    import HomePageSubContent from './HomePageSubContent.vue';
    import {mapState, mapGetters, mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions({
                setCsrf: 'setCsrf'
            })
        },
        components: {
            'app-homepage-subcontent': HomePageSubContent
        },
        computed: {
            ...mapState({
                user: state => state.user,
            }),
            ...mapGetters({
                userInfo: 'home/userInfo',
                welcomeMessage: 'home/welcomeMessage'
            })
        },
        created() {
            this.setCsrf();
        }
    }
</script>

<style scoped>


</style>
