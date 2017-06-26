<template lang="jade">
  section-box(
    :title="title",
    :subtitle="subtitle"
  )
    h4 LOOKBOOK
    h5 lastest version 1.0.1 by pathen @2017.7
    hr

    h3 version 1.0.1
    p by pathen
    p 1. 兼容移动端样式
    p 2. 其他小的问题修复

    h3 version 1.0.0
    p by pathen
    p 1. 在本地添加了我的项目信息
    p 2. 去除了一些与公司开发环境有关的接口和变量。
    p 3. 优化了视觉信息和错误处理。
</template>

<style lang="stylus" scoped>
  h4
  h5
    margin: 10px 0
  
  h3
    margin-bottom: 8px

  p
    font-size: 12px
    margin: 0
    line-height: 2em
</style>

<script>
  import sectionBox from '@/components/section-box'

  export default {
    data () {
      return {
        title: '版本信息',
        subtitle: '这里展示了近期的版本更新内容。'
      }
    },
    components: {
      sectionBox
    }
  }
</script>

