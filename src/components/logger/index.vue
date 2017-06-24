<template lang="jade">
  div(ref="rootlog")
    div(ref="logspace")
</template>

<script>
  export default {
    data () {
      return {
        active: false
      }
    },
    computed: {
      onLog () {
        return this.$store.state.config.realTimeLog
      }
    },
    watch: {
      onLog (newVal, oldVal) {
        if (newVal && !this.active) {
          this.active = true
          this.start()
        }
      }
    },
    methods: {
      start () {
        let eventStreamUrl = '/__ssr/log'
        let source = new EventSource(eventStreamUrl)
        source.addEventListener('message', e => {
          let data = e.data
          if (data.indexOf('|SSR-') > -1) { return }
          let pre = document.createElement('pre')
          pre.innerHTML = data
          this.$refs.logspace.appendChild(pre)
          pre = null
          // reset height
          let root = this.$refs.rootlog
          let space = this.$refs.logspace
          root.scrollTop = space.clientHeight - root.clientHeight + 60
        })
        source.addEventListener('error', e => {
          console.log(e)
          source.close()
        })
      }
    },
    mounted () {
      if (this.onLog && !this.active) {
        this.active = true
        this.start()
      }
    }
  }
</script>

