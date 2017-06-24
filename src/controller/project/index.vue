<template lang="jade">
  div(:class="{ load: true }")
    div.title-bar
      h2 我的作品集
      div.action
        quick-tool(
          :func="toolFunc"
        )
        i.icon-refresh(
          @click="refreshList",
          :class="{ busy: busy }",
          title="刷新列表"
        )
    div.project-list(
      @mousedown="dragStart",
      @mousemove="drag",
      @mouseup="dragEnd",
      @mouseleave="dragEnd"
    )
      div.drag-container
        div.projects(:style="listStyle")
          card(
            v-for="(item, index) in list",
            :hasDrag="hasDrag",
            :item="item",
            key="index"
          )
</template>

<style lang="stylus" scoped>
  .load
    position: relative
    width: 100%
    height: 100%

    .drag-container
    .title-bar
      animation-name: animate-fadein
  
  .drag-container
  .title-bar
    animation-duration: .4s
    animation-fill-mode: forwards
    opacity: 0
  
  .drag-container
    animation-delay: .2s
  
  .project-list
    position: fixed
    top: 52%
    margin-top: -180px
    width: 100%
    height: 360px
    padding: 10px 0
    box-sizing: border-box
  
  .title-bar
    position: fixed
    width: 80%
    top: 52%
    margin-top: -290px
    h2
      font-size: 36px
    .action
      position: absolute
      top: 45px
      right: 0
      font-size: 18px
      i
        transition: .4s ease
        margin: 0 8px
        cursor: pointer
        &:hover
          color: #999
      .icon-refresh
        display: inline-block
        &.busy
          color: #03a9f4
          animation: animate-rotate 1.2s linear infinite

  .addnew
    text-align: center
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)
    color: #ccc
    &:hover
      color: #666
    .icon-add
      line-height: 240px
      font-size: 24px
    .text
      margin-top: 8px
      font-size: 20px
      font-weight: bold

  .projects
    padding: 0 2px
    transition: .1s ease
</style>

<script>
  import quickTool from './quick-tool'
  import card from '@/components/card'

  let x = 0
  let cx = 0
  let dragTime = 0

  export default {
    data () {
      return {
        load: 0,
        busy: 0,
        isDrag: 0,
        hasDrag: 0,
        mx: 0,
        toolFunc: {
          refreshList: this.refreshList
        }
      }
    },
    methods: {
      async refreshList (resetFavor) {
        this.busy = 1
        try {
          await this.$sleep()
          this.$notice('success', '列表已更新。')
        } catch (e) {
          this.$notice('error', e)
        }
        this.busy = 0
      },
      drag (e) {
        if (!this.isDrag) { return }
        this.hasDrag = 1
        let direct = e.clientX - x
        let offset = cx + direct * 2
        if (offset > 0) {
          offset = 0
        } else if (offset < 0 - this.listLen) {
          offset = 0 - this.listLen
        }
        this.mx = offset
      },
      dragStart (e) {
        dragTime = e.timeStamp
        this.hasDrag = 0
        this.isDrag = 1
        x = e.clientX
      },
      dragEnd (e) {
        if (e.timeStamp - dragTime < 120) {
          this.hasDrag = 0
        }
        this.isDrag = 0
        cx = this.mx
      }
    },
    computed: {
      list () {
        return this.$store.state.project
      },
      listLen () {
        return this.list.length * 260
      },
      listStyle () {
        return {
          width: (this.listLen + 300) + 'px',
          transform: `translateX(${this.mx}px)`
        }
      }
    },
    components: {
      card,
      quickTool
    },
    mounted () {
      setTimeout(() => {
        this.load = 1
      }, 200)
    }
  }
</script>
