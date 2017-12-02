<template>
    <div id="user-full" class="well well-lg">
        <div class="jumbotron">{{user.username}}</div>
        <p>{{user}}</p>
        <button class="btn btn-primary" @click="$router.go(-1)">Back</button>
    </div>
</template>

<script>

    import {mapState} from 'vuex';

    export default {
        props: ['id'],
        computed: {
            ...mapState({
                user: state => state.auth.auth
            })
        }
    }
</script>
