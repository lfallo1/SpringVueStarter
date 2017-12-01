<template>
    <div id="nav-wrapper">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button id="toggle-nav" class="navbar-toggle" :class="{'collapsed' : !navExpanded}"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" :aria-expanded="navExpanded"
                            @click="navExpanded=!navExpanded">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="">Vuex Demo</a>
                    <ul class="nav navbar-nav">
                        <li class="connected-navbar-message">
                            <button class="btn btn-danger">
                                <i class="material-icons with-text">block</i>&nbsp;
                                I do nothing
                            </button>
                        </li>
                    </ul>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div :class="{'collapse' : !navExpanded}" class="navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="" @click.prevent.stop="">Not signed in</a>
                        </li>
                        <li class="dropdown" :class="{'open' : navbarDropdownIsOpen}">
                            <a @click.prevent.stop="navbarDropdownIsOpen = !navbarDropdownIsOpen" href=""
                               class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                               :aria-expanded="navExpanded">Account <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="/login"><i
                                        class="material-icons with-text md-18">perm_identity</i>Signin</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                navbarDropdownIsOpen: false,
                navExpanded: false
            }
        }
    }

</script>

<style scoped>

    #toggle-nav {
        z-index: 1000;
    }

    li.disconnected a, li.connected a {
        font-weight: bold;
    }

    li.disconnected a {
        color: #d9534f !important;
    }

</style>