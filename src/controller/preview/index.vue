<template lang="jade">
  section-box(
    :title="title",
    :subtitle="subtitle",
  ).preview-box
    h5 什么是发布预览？
    p.tip 发布预览用于在本地模拟构建，打包和服务端渲染等步骤，是一个自动化检测过程，也可作为产品验收的一种途径。
    p.tip 注：同一时间只能发布一个作品， 目前只支持 ssr 作品。
    h4 请选择需要发布的作品
    div.select-item.motion-in(
      v-for="(item, index) in list",
      :style="{ animationDelay: (index + 1) * 0.1 + 's' }",
      :class="{ disable: item.type !== 'ssr' }",
      @click="start(item.name, item.type)"
    )
      p.select-name {{ item.name }}
      p
        span(v-if="item.type === 'ssr'") SSR项目
        span(v-else) 普通项目
</template>

<style lang="stylus" scoped>
  .select-item
    display: inline-block
    margin: 0 12px 18px 0
    width: 150px
    height: 110px
    text-align: center
    font-size: 13px
    overflow: hidden
    border-radius: 4px
    transition: .3s ease
    border: 1px solid #eee
    cursor: pointer
    &:hover
      border-color: #999
    &.disable
      color: #ccc

  .select-name
    font-size: 18px
    font-weight: bold
</style>

<script>
  import sectionBox from '@/components/section-box'

  export default {
    data () {
      return {
        title: '发布预览',
        subtitle: '下面，就是见证奇迹的时刻。'
      }
    },
    methods: {
      start (name, type) {
        this.$notice('error', '在开发服务器离线时不提供该功能预览。')
      }
    },
    computed: {
      list () {
        return this.$store.state.project
      },
      config () {
        return this.$store.state.config
      },
      project () {
        return {
          name: this.$route.query.name,
          type: this.$route.query.type
        }
      }
    },
    components: {
      sectionBox
    }
  }
</script>

