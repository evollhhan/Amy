<template lang="jade">
  router-view
</template>

<script>
  import router from '@/router'

  export default {
    computed: {
      childpath () {
        return this.$route.path
      }
    },
    watch: {
      childpath (newVal) {
        if (newVal === '/setting') {
          router.push('/setting/general')
        }
      }
    },
    mounted () {
      if (this.$route.path === '/setting') {
        router.push('/setting/general')
      }
    }
  }
</script>
