<template lang="jade">
  div.former
    div(v-for="(item, key) in formData")
      h5(v-text="item.tag")
      p.tip(v-text="item.tip")
      p.edit
        //- input/text
        text-input(
          v-if="item.type === 'input'",
          :state="item",
          :name="'val'",
          :info="item.placeholder",
          :change="check",
          :timestamp="item.timestamp"
        )

        //- input/checkbox
        label(v-if="item.type === 'checkbox'")
          i.pre-sq(:class="[ item.val ? 'icon-sq-check' : 'icon-sq' ]")
          input(type="checkbox", v-model="item.val")
          span(v-text="item.detail")
    slot
    p.action
      span.btn(
        v-show="config.confirmText",
        v-text="config.confirmText",
        :class="{ disable: busy }"
        @click="confirm",
        role="button"
      )
</template>

<style lang="stylus" scoped>
  p
    font-size: 12px
  h5
    margin-bottom: 0
  .action
    margin-top: 2em
    margin-bottom: 3em
</style>

<script>
  import textInput from '../text-input'

  export default {
    data () {
      return {
        busy: 0
      }
    },
    methods: {
      check (item) {
        if (!item.valid) { return true }

        switch (item.valid) {
          case 'noEmpty':
            if (!item.val) {
              return false
            }
        }

        return true
      },
      async confirm () {
        if (typeof this.submit !== 'function' || this.busy) {
          return
        }

        let result = true
        let postData = {}
        for (let i in this.formData) {
          if (this.formData[i].timestamp) {
            this.formData[i].timestamp++
          }

          if (result && !this.check(this.formData[i])) {
            result = false
          }

          postData[i] = this.formData[i].val
        }

        this.busy = 1
        if (!result) {
          this.$notice('error', `部分选项填写有误，请检查后重新提交。`)
        } else {
          try {
            await this.submit(postData)
          } catch (e) {
            this.$notice('error', e)
          }
        }
        this.busy = 0
      }
    },
    props: [ 'items', 'config', 'submit' ],
    components: {
      textInput
    },
    computed: {
      formData () {
        for (let i in this.items) {
          this.items[i].timestamp = 1
        }
        return this.items
      }
    }
  }
</script>

