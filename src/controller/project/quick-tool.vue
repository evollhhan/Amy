<template lang="jade">
  div.quick-tool
    div.wrap
      i.icon-more
      a.icon-room.animate-in.i1
        i.icon-flag(
          title="快速入门",
          @click="jump('help')"
        )
      a.icon-room.animate-in.i2
        i.icon-layers(
          title="proxy列表",
          @click="jump('setting/proxy')"
        )
      a.icon-room.animate-in.i3
        i.icon-zap(
          title="快速清理",
          :class="{ busy: state.clean }"
          @click="clean"
        )
      a.icon-room.animate-in.i4
        i.icon-eye-off(
          title="清除访问记录",
          @click="func.refreshList()"
        )
</template>

<style lang="stylus" scoped>
  .quick-tool
    display: inline-block
    transition: .4s .3s ease
    float: left
    overflow: hidden
    max-width: 40px
    height: 32px
    &:hover
      transition-delay: .1s
      max-width 240px

      .icon-more
        transition-delay: .1s      
        opacity: 0
      
      .animate-in
        transform: translateX(0)
        opacity: 1

      .i1
        transition-delay: .2s
      .i2
        transition-delay: .3s
      .i3
        transition-delay: .4s
      .i4
        transition-delay: .5s
  
  .wrap
    min-width: 172px
  
  .animate-in
    transform: translateX(40px)
    opacity: 0

  .icon-room
    display: inline-block
    transition: .4s .3s ease
    margin-left: 18px
    cursor: pointer
  
  .icon-more
    position: relative
    left: 10px
    transition-delay: .3s
  
  i
    display: inline-block
    transition: .4s ease
    &:hover
      color: #999
  
  .busy
    &.icon-zap
      color: #03a9f4
      animation: animate-shaker 1.2s ease infinite
  
  @media screen and (max-width: 480px)
    .quick-tool
      display: none
</style>

<script>
  import router from '@/router'

  export default {
    data () {
      return {
        state: {
          clean: 0
        }
      }
    },
    methods: {
      jump (dist) {
        router.push(dist)
      },
      async clean () {
        if (this.state.clean) {
          return
        }

        this.state.clean = 1
        try {
          await this.$sleep()
          this.$notice('success', '已清理工作环境。')
        } catch (e) {
          this.$notice('error', e)
        }
        this.state.clean = 0
      }
    },
    props: [ 'func' ]
  }
</script>
