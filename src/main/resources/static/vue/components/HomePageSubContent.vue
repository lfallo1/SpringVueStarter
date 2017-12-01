<template>
    <div id="home-page-sub-content">
        <p>Some sub content</p>
    </div>
</template>

<script>

    import {mapActions} from 'vuex';

    export default {

        methods: {
            ...mapActions({
                initialize: 'home/initialize'
            })
        },
        created() {
            this.initialize({
                userName: 'jdoe123',
                age: 24,
                location: 'United States'
            });
        }
    }
</script>

<style scoped>


</style>
