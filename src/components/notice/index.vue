<template lang="jade">
  div.notice-area(ref="parent")
    //- div.notice.animateIn.success hello there
</template>

<style lang="stylus">
  .notice-area
    position: fixed
    width: 100%
    left: 0
    bottom: 0
    color: #fff
    font-size: 14px
    z-index: 12

  .notice
    position: absolute
    bottom: 0
    width: 100%
    height: 28px
    line-height: 28px
    padding: 0 10px
    box-sizing: border-box
    transition: .4s ease
    opacity: 0
    overflow: hidden
    &.info
      background: #03a9f4
    &.success
      background: #4caf50
    &.error
      background: #e53935
    &.animateIn
      animation: movein-from-bottom .6s ease forwards
    &.animateOut
      animation: moveout .6s ease forwards

@keyframes movein-from-bottom
  from
    opacity: 0
    transform: translateY(100%)
  to 
    opacity: 1
    transform: translateY(0)

@keyframes moveout 
  from
    opacity: 1
    transform: translateY(0)

  to 
    opacity: 0
    transform: translateY(100%)
</style>

<script>
  export default {
    methods: {
      showMsg (type, msg) {
        let div = document.createElement('div')
        div.className = 'notice animateIn ' + type
        div.innerHTML = msg
        this.$refs.parent.appendChild(div)
        setTimeout(() => {
          div.className += ' animateOut'
          setTimeout(() => {
            this.$refs.parent.removeChild(div)
            div = null
          }, 650)
        }, 2000)
      }
    },
    mounted () {
      this.$notice('hock', (type, msg) => {
        this.showMsg(type, msg)
      })
    }
  }
</script>
