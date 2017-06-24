<template lang="jade">
  div#app
    div.include(:class="{show: show}")
      sidebar
      notice
      motion-back
    div.router-container(:class="{seperate: hasLog}")
      div.container
        router-view
      logger.log-area(v-show="show && hasLog")
</template>

<script>
  import sidebar from '@/components/sidebar'
  import notice from '@/components/notice'
  import logger from '@/components/logger'
  import motionBack from '@/components/motion-back'

  export default {
    name: 'app',
    components: {
      motionBack,
      sidebar,
      notice,
      logger
    },
    computed: {
      show () {
        return this.$route.path !== '/'
      },
      hasLog () {
        return this.$store.state.config.realTimeLog
      }
    }
  }
</script>
