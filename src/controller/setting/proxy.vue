<template lang="jade">
  section-box(
    :title="title",
    :subtitle="subtitle"
  )
    p.tip 在此列表中添加的地址将被转发至 localhost
    table.proxy-table
      tr
        th(width="400") 地址
        th(width="130") 操作
      tr(v-for="item in list")
        td {{ item.url }}
        td
          span.button.disable(
            @click="updateRule('deprecated', item.url)",
            v-show="item.active"
          ) 禁用
          span.button(
            @click="updateRule('enable', item.url)",
            v-show="!item.active"
          ) 启用
          span.button.error(@click="updateRule('delete', item.url)") 删除
    p
      text-input(
        :state="edit",
        :name="'rule'",
        :info="'Add proxy path here...'"
        style="display:inline-block;"
      )
      span.btn.enlight(@click="updateRule('add')") 添加
</template>

<style lang="stylus" scoped>
  .proxy-table
    margin-top: 20px
    text-align: left
    color: #999
    border-collapse: collapse
    font-size: 13px

    th
      font-size: 14px

    tr
      border-bottom: 1px solid #ddd
      line-height: 2.5em
    
    th
    td
      padding-left: 0.5em
  
  .button
    margin-right: 2em
  
  .enlight
    vertical-align: bottom
    margin-left: 12px
</style>

<script>
  import textInput from '@/components/text-input'
  import sectionBox from '@/components/section-box'

  export default {
    data () {
      return {
        title: '路由代理',
        subtitle: '条条大路通罗马。',
        list: [
          {
            url: '/test1',
            active: 0
          },
          {
            url: '/test2',
            active: 1
          }
        ],
        edit: {
          rule: ''
        }
      }
    },
    components: {
      sectionBox,
      textInput
    },
    methods: {
      async updateRule (action, data) {
        await this.$sleep()
        if (action === 'add') {
          if (!this.edit.rule) {
            return this.$notice('error', '规则不能为空.')
          } else {
            this.list = this.list.concat({ url: this.edit.rule, active: 1 })
          }
        }
        this.$notice('success', '操作成功，接口服务器已更新。')
      }
    }
  }
</script>

