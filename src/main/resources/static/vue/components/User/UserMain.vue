<template>
  <div id="user-main">
    <div class="panel panel-default">
      <div class="panel-heading">User overview for {{user}}</div>
      <div class="panel-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: ['user']
}
</script>

<style scoped>
#user-main{
  margin: 0px auto;
  text-align: center;
}
</style>
