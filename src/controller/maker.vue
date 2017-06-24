<template lang="jade">
  section-box(
    :title="title",
    :subtitle="subtitle",
    :busy="busy"
  )
    former(
      :items="formItems",
      :config="formConfig",
      :submit="createProject"
    )
      div(v-show="formItems.name.val")
        p.tip(style="margin-top: 1em") 点击创建将在 project/src 下创建 {{ formItems.name.val }} 文件夹，文件夹中已包含一些必要的作品文件。
        p.tip(v-show="formItems.ssr.val") 在 project/service 下会生成一个 srv.{{ formItems.name.val }}.js 文件，在这里，你可以编辑作品渲染前所需数据的请求逻辑。
</template>

<script>
  import sectionBox from '@/components/section-box'
  import textInput from '@/components/text-input'
  import former from '@/components/former'
  import store from '@/store'

  export default {
    data () {
      return {
        title: '创建新作品',
        subtitle: '我们已经为你准备好了一切，只差一个好名字。',
        busy: 0,
        // state
        formConfig: {
          valid: false,
          confirmText: '即刻创建'
        },
        // config
        formItems: {
          name: {
            val: '',
            tag: '作品名称',
            tip: '如果是多个词语组合，请使用驼峰形式',
            type: 'input',
            placeholder: 'your project name',
            valid: 'noEmpty'
          },
          author: {
            val: '',
            tag: '艺术家',
            tip: '你的名字',
            type: 'input',
            placeholder: 'project author',
            valid: 'noEmpty'
          },
          description: {
            val: '',
            tag: '描述',
            tip: '我有一个大胆的想法...',
            type: 'input',
            placeholder: 'describe your project',
            valid: 'noEmpty'
          },
          path: {
            val: '',
            tag: '公网路径（选填）',
            tip: '作品公网路径与输出html文件名。例demo，则输出hmtl为demo.html，访问路径为/demo，默认与作品名称保持一致。',
            type: 'input',
            placeholder: 'your project public path'
          },
          cover: {
            val: '',
            tag: '封面地址（选填）',
            tip: '用于开发环境中显示的作品封面图。',
            type: 'input',
            placeholder: 'your cover url'
          },
          ssr: {
            val: true,
            tag: '其他选项',
            type: 'checkbox',
            detail: '是否支持SSR'
          }
        }
      }
    },
    components: {
      sectionBox,
      textInput,
      former
    },
    methods: {
      createProject (data) {
        return new Promise(async resolve => {
          data.path = ''
          data.cover = ''
          this.busy = 1
          store.commit('addToProject', data)
          await this.$sleep(1200)
          this.$notice('success', `已为你创建作品${data.name}。`)
          this.busy = 0
          resolve()
        })
      }
    }
  }
</script>

