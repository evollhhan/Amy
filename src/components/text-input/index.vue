<template lang="jade">
  div.input-area(
    :class="{ focus: active, error: !valid }"
  )
    input(
      type="text",
      @focus="onFocus",
      @blur="onBlur",
      @change="onChange",
      v-model.trim="val",
      :placeholder="info"
    )
</template>

<style lang="stylus" scoped>
  .input-area
    position: relative
    width: 400px
    padding-bottom: 2px
    &:before
    &:after
      content: ''
      position: absolute
      display: block
      left: 0
      bottom: 0
      width: 100%
      height: 2px
      border-radius: 2px
    &:after
      background: #efefef
    &:before
      transform: scaleX(0)
      transition: .2s ease
      background: #03A9F4
      z-index: 1
    &.focus
      &:before
        transform: scaleX(1)
    &.error
      &:after
        background: #e53935
  
  @media screen and (max-width: 480px)
    .input-area
      width: 100%
      input
        width: 100%
</style>

<script>
  export default {
    data () {
      return {
        active: 0,
        valid: 1,
        val: ''
      }
    },
    props: ['info', 'state', 'name', 'change', 'timestamp'],
    watch: {
      val (newVal) {
        this.state[this.name] = newVal
      },
      timestamp () {
        this.onChange()
      }
    },
    methods: {
      onFocus () {
        this.active = 1
      },
      onBlur () {
        this.active = 0
      },
      onChange () {
        if (this.change) {
          this.valid = this.change(this.state)
        }
      }
    }
  }
</script>

