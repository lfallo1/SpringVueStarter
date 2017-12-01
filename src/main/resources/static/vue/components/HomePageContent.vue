<template>
    <div id="home-page-content">
        <h3>{{welcomeMessage}}</h3>
        <h4>User Info: {{userInfo}}</h4>
        <app-homepage-subcontent></app-homepage-subcontent>
    </div>
</template>

<script>

    import HomePageSubContent from './HomePageSubContent.vue';
    import {mapState, mapGetters} from 'vuex';

    export default {

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
        }
    }
</script>

<style scoped>


</style>
