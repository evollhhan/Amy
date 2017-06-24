<template lang="jade">
  div.welcome
    div.title(:class="{ show: show }") LOOKBOOK
    div.loading(:class="{ show: show }", v-show="!exception")
      loading
    div.error(v-show="exception")
      p 由于以下原因，服务器无法启动：
      p {{ error }}
</template>

<style lang="stylus" scoped>
  .welcome
    position: fixed
    width: 100%
    height: 100%
    left: 0
    top: 0

    .loading
      position: absolute
      bottom: 10%
      left: 50%
      margin-left: -40px
      transition: .6s .4s ease
      opacity: 0
    
    .title
      position: absolute
      top: 40%
      width: 100%
      font-size: 32px
      text-align: center
      letter-spacing: 0.5em
      transform: translateY(8px)
      transition: .6s ease
      opacity: 0
    
    .loading
    .title
      &.show
        transform: translateY(0)
        opacity: 1
    
    .error
      position: absolute
      bottom: 10%
      width: 100%
      text-align: center
      font-size: 12px

      p
        margin: 0
        line-height: 2em
</style>

<script>
  import loading from '../components/loading'
  import { srvInit } from '@/service'
  import router from '../router'

  export default {
    data () {
      return {
        show: 0,
        exception: 0,
        error: ''
      }
    },
    components: {
      loading
    },
    async mounted () {
      setTimeout(() => {
        this.show = 1
      }, 200)

      try {
        await srvInit()
        await this.$sleep(1200)
        router.push(this.$route.query.source || 'project')
      } catch (e) {
        this.exception = 1
        this.error = e || '服务器超时或没有响应。'
      }
    }
  }
</script>
