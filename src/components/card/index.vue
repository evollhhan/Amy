<template lang="jade">
  div.item
    h5 来自艺术家 {{ item.author }}
    h5.preview(@click="preview(item.name, item.type)") 发布预览
    div(@click="link(item.path)")
      div.cover(:class="['lb-' + item.name]")
      div.detail
        p.name {{ item.name }}
        p.desc {{ item.description }}
</template>

<style lang="stylus" scoped>
  .item
    position: relative
    display: inline-block
    margin-right: 20px
    width: 280px
    height: 370px
    box-shadow: 0 0 1px rgba(0, 0, 0, .4), 1px 2px 4px rgba(0, 0, 0, 0)
    border-radius: 6px
    transition: .3s ease
    background: #fff
    // overflow: hidden
    cursor: pointer

    &:hover
      box-shadow: 0 0 1px rgba(0, 0, 0, 0), 1px 2px 4px rgba(0, 0, 0, .3)
      animation-play-state: paused

      h5
        transition-delay: .1s
        opacity: 1
    
    &.ld
      box-shadow: none !important
      border: none
      line-height: 300px
      text-align: center

    h5
      position: absolute
      transition: .4s .3s ease
      top: -48px
      opacity: 0
      &.preview
        right: 0
        color: #03a9f4

  .detail
    box-sizing: border-box
    padding: 12px 10px 0
    text-align: center
    p
      margin: 0
      vertical-align: middle
      white-space: nowrap
      overflow: hidden      
      text-overflow: ellipsis
      transition: .3s ease

    .name
      font-family: ceviche
      font-size: 32px

    .desc
      margin-top: 0.5em
      font-size: 14px  
      color: #aaa  

  .cover
    border-radius: 6px 6px 0 0
    width: 100%
    height: 280px
    background-color: #eee
    background-size: cover
    background-position: center

  @media screen and (max-width: 480px)
    .item
      display: block
      margin-right: 0
      width: 84vw
      height: 84vw
      margin-bottom: 20vw

      .cover
        width: 84vw
        height: 84vw
        border-radius: 6px
      
      .detail
        position: absolute
        border-radius: 0 0 6px 6px
        padding: 1em 0
        width: 100%
        bottom: 0
        background: rgba(255, 255, 255, .92)
      
      h5
        opacity: 1
</style>

<script>
  import router from '@/router'

  export default {
    methods: {
      link (path) {
        if (this.hasDrag) { return }
        window.open(path)
      },
      preview (name, type) {
        router.push({
          name: 'preview',
          query: {
            name: name,
            type: type
          }
        })
      }
    },
    props: [ 'item', 'hasDrag' ]
  }
</script>
