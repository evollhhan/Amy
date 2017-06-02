<template lang="jade">
  div#app
    p hello world
    router-view
</template>

<style lang="stylus" scoped>
  p
   font-size: 36px
   color: #f33
</style>

<script>
  export default {
    name: 'app'
  }
</script>
