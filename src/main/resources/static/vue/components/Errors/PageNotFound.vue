<template>
  <div id="pagenotfound">
    <h1 class="text-center path-text">404</h1>
    <h2 class="text-danger text-center"><span class="path-text">{{page}}</span> could not be found</h2>
    <div class="text-center">Return <router-link to="/">Home</router-link></div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      error: {}
    }
  },
  computed:{
    page(){
      return this.error.to ? this.error.to.path : 'Page';
    }
  },
  beforeRouteEnter (to, from, next) {
    next(function(vm) {
      vm.error = {'from': from, 'to': to, 'next': next};
      console.log(vm.error);
    })
  }
}
</script>

<style scoped>
.path-text{
  font-weight: bold;
  color: #1fa67a;
}
</style>
