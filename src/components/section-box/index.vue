<template lang="jade">
  div.section-box(:class="{onload:true}")
    h2.se-title.onload {{ title }}
    h5.se-subtitle.onload {{ subtitle }}
    slot
    div.se-loading-container
      progress-bar.se-loading(:class="{ busy: busy }")
</template>

<style lang="stylus" scoped>
  .section-box
    position: relative
    width: 84%
    left: 8%
    margin-top: 220px
    box-sizing: border-box
    padding: 2% 4%
    border-radius: 8px
    box-shadow: 1px 1px 3px rgba(0,0,0,0.3)
    background: #fff
    min-height: 600px

  .onload
    animation: animate-fadein .6s ease forwards
    transform: translateY(20%)
    opacity: 0
  
  .se-title
  .se-subtitle
    position: absolute
    animation-duration: .6s
    left: 15px

  .se-title
    font-size: 32px
    top: -150px
    animation-delay: .4s

  .se-subtitle
    top: -90px
    animation-delay: .6s
  
  .se-loading-container
    position: absolute
    bottom: 0
    left: 10%
    width: 80%
    height: 8px
    overflow: hidden
    .se-loading
      position: relative
      top: 4px
      height: 8px
      border-radius: 50%
      transition: .4s ease
      opacity: 0
      &.busy
        opacity: 1
</style>

<script>
  import progressBar from '@/components/progress'

  export default {
    props: [ 'title', 'subtitle', 'busy' ],
    components: {
      progressBar
    }
  }
</script>
