<template lang="jade">
  div.sidebar-container
    div.sidebar
      p.figure
        i.dot(
          :class="{ active: path.indexOf(item.name) > -1 }",
          v-for="item in menu"
        )
      p.link-bar(v-for="item in menu")
        a.link(
          :class="{ active: path.indexOf(item.name) > -1 }",
          @click="jump(item.name)"
        ) {{ item.label }}
</template>

<style lang="stylus" scoped>
  .sidebar-container
    position: fixed
    top: 0
    left: 0
    width: 120px
    height: 100%
    z-index: 10
    transition: .3s ease

    &:hover
      background: rgba(255, 255, 255, .9)
      .link-bar
        transform: translate(0)
        opacity: 1
      .figure
        transform: scale(.8)
        opacity: 0

  .sidebar
    position: absolute
    margin-top: -121px
    top: 47%
    left: 20px
    width: 90px
    height: 242px
    font-size: 13px
  
  .figure
    position: absolute
    pointer-events: none    
    transition: .3s ease    
    top: 40px
    left: 20px
    opacity: 1
    .dot
      display: block
      margin: 20px 0
      width: 6px
      height: 6px
      border-radius: 50%
      border: 1px solid #999
      &.active
        background: #999

  .link-bar
    display: block
    margin: 1em 1em
    padding: 1em 0
    text-decoration: none
    transition: .4s ease
    transform: translate(-12px)
    cursor: pointer    
    opacity: 0
    z-index: 2
  
  .link
    position: relative  
    display: inline-block
    color: #666    
    &:after
    &:before
      content: ""
      display: block
      position: absolute
      top: 0.6em
      left: -10%
      width: 120%
      height: 2px
      -webkit-transform: scaleX(0)
      transform: scaleX(0)
      transition: .3s ease

    &:before
      background: rgba(122, 122, 122, .4)

    &:after
      background: rgba(122, 122, 122, .9)

    &.active:after
    &:hover:before
      transform: scaleX(1)
</style>


<script>
  import router from '@/router'

  export default {
    data () {
      return {
        menu: [
          {
            label: '+ NEW',
            name: 'new'
          },
          {
            label: 'PROJECTS',
            name: 'project'
          },
          {
            label: 'SETTINGS',
            name: 'setting'
          },
          {
            label: 'ABOUT',
            name: 'about'
          }
        ]
      }
    },
    methods: {
      jump (path) {
        router.push({
          name: path
        })
      }
    },
    computed: {
      path () {
        return this.$route.path.slice(1)
      }
    }
  }
</script>

