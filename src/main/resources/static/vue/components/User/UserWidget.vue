<template>
    <div id="user" class="thumbnail col-xs-4" @click="$router.push({path: 'userfull/' + user._id})">
        <div><strong>{{user.name}} - <i :class="{'text-green bold' : balanceValue > 3000}">{{user.balance}}</i></strong>
        </div>
        <i class="fa fa-envelope-open-o" aria-hidden="true"></i>&nbsp;
        <small>{{user.email}}</small>
        <br>
        <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;
        <small>{{user.phone}}</small>
        <br>
        <i class="fa fa-home" aria-hidden="true"></i>&nbsp;
        <small>{{user.address}}</small>
        <br>
    </div>
</template>

<script>

    import {mapState} from 'vuex';

    export default {
        props: ['id'],
        computed: {
            user() {
                return this.users.filter(u => u._id === this.id)[0];
            },
            balanceValue() {
                return Number(this.user.balance.replace(/[^0-9\.]+/g, ''));
            },
            ...mapState({
                users: state => state.home.users
            })
        }
    }
</script>

<style scoped>

    .bold {
        font-weight: bold;
    }

    .text-green {
        color: #5cb85c;
    }

</style>
