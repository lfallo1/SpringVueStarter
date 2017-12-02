<template>
    <div>
        <div id="login-form-wrapper" class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
            <h2>Login</h2>
            <div>
                <form id="login-form" class="form-horizontal" @submit.prevent.stop="submit">

                    <div class="form-group">
                        <div class="col-sm-12">
                            <input v-model="form.username" type="text" class="form-control" name="username"
                                   id="username" placeholder="Username"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-12">
                            <input v-model="form.password" type="password" class="form-control" name="password"
                                   id="password" placeholder="Password"/>
                        </div>
                    </div>

                    <button id="login-button" type="submit" class="btn btn-primary">Submit</button>

                    <div id="login-error" v-if="error" class="alert alert-danger text-center">
                        <span class="glyphicon glyphicon-remove-circle"></span>&nbsp;<span>{{error}}</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import {mapActions, mapState} from 'vuex';

    export default {
        data() {
            return {
                form: {"username": "", "password": ""},
            }
        },
        methods: {
            submit() {
                const formData = 'username=' + this.form.username + '&password=' + this.form.password;
                this.login(formData);
            },
            ...mapActions({
                login: 'auth/login'
            })
        },
        computed: {
            ...mapState({
                error: state => state.auth.loginError
            })
        }
    }
</script>

<style scoped>
    #login-form-wrapper {
        margin-bottom: 100px;
    }

    #login-form-wrapper #login-button {
        width: 100%;
        margin-bottom: 15px;
        font-size: 20px;
    }

    #login-form-wrapper #login-error {
        padding: 8px;
    }

    #login-error span {
        font-size: 14px;
    }

    #login-form-wrapper h2 {
        color: rgba(51, 122, 183, 0.8);
        text-align: center;
    }
</style>