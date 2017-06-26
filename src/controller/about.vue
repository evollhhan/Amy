<template lang="jade">
  section-box(
    :title="title",
    :subtitle="subtitle",
  )
    h4 LOOKBOOK 2016-2017
    hr(style="margin-bottom: 1.5em")

    h3 Hola.
    p 这原本是一个我在工作中编写的前端开发工具，支持非SSR项目与SSR项目的搭建，开发，构建和模拟。经过特定修改后，作为了我的个人作品展示页面。里面大多数接口信息和与工作有关的变量已经被去除，但还是保留了一些项目以供预览和相互交流。在项目一页中，你可以看到我以往的一些作品，当然主要是活动页面（这些开发相对独立），实际上我还会参与其他很多业务的开发以及基础架构的搭建。
    h3 技术栈
    p 这些是我在工作中用到的一些技术(排名不分先后)，我并不是某方面的专家，但是我会用他们来解决问题以及做一些创造性的事情！
    ul
      li vue 1.x / vue 2.x
      li vue-ssr
      li stylus
      li sass
      li webpack 2
      li webgl for 3d/2d (threejs, learning glsl)
      li createjs for 2d
      li css3
      li svg
      li gulp
      li angluar 1.x
      li nodejs
      li vagrant
    p 有时候我还得需要使用他们：
    ul
      li ps （什么？这是切图仔的基本功？）
      li ai （做矢量的不错选择）
      li 3dmax （抱歉我不是建模砖家）
      li garageband （加上一点灵感)
    p 对了，我最开始还摸索过一段时间他们，为以往的公司开发一个内部小型OA平台：
    ul
      li .net
      li mssql
    h5 祝你访问愉快～ （2017.6）
</template>

<style lang="stylus" scoped>
  h4
  h3
    margin: 10px 0
  
  p
    text-indent: 2em
    font-size: 13px
    margin: 0
    line-height: 2em

  li
    list-style: inherit
    font-size: 14px
    line-height: 2em
    margin-left: 4em
</style>

<script>
  import sectionBox from '@/components/section-box'

  export default {
    data () {
      return {
        title: '关于我',
        subtitle: '千里之行，始于 <div>Hello World.</div>'
      }
    },
    components: {
      sectionBox
    }
  }
</script>

