<template>
  <div id="profile">
    <h3>Profile for {{ user }}</h3>
  </div>
</template>

<script>
export default {
  props: ['user'],
  beforeRouteUpdate (to, from, next) {
    debugger
    console.log(to);
  }
}
</script>

<style>
</style>
