<template>
    <div id="support">
        <h3>Support</h3>
        <div v-if="loading">
            <div class="alert alert-info">Loading Data</div>
        </div>
        <div v-else>
            <div v-if="!error.hasError">
                <div class="col-xs-4" v-for="item in dummyData">
                    <div class="jumbotron">{{item}}</div>
                </div>
            </div>
            <div v-else>
                <div class="text-danger">{{error.message}}</div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapState, mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions({
                loadDummyData: 'home/loadDummyData'
            })
        },
        computed: {
            ...mapState({
                error: state => state.home.error,
                dummyData: state => state.home.dummyData,
                loading: state => state.home.loading
            })
        },
        created() {
            this.loadDummyData();
        }
    }
</script>

<style>
</style>
