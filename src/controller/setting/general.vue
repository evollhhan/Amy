<template lang="jade">
  section-box(
    :title="title",
    :subtitle="subtitle",
    :busy="busy"
  )
    h3(style="margin-top:18px") 服务与通信
    p.tip 当前配置下访问项目的路径为：{{ config.developDomain }}:{{ config.developPort }}/project-name
    h5 默认启动域名
    p.tip 可以设置成你绑定的域名，例如 dev.com 以获取网站cookie，需要带上 http 或 https。
    p.edit
      text-input(
        :state="config",
        :name="'developDomain'",
        :info="'http://localhost'"
      )
    h5 开发服务器端口
    p.tip 用于启动开发环境、项目打包和操作相关配置。
    p.edit
      text-input(
        :state="config",
        :name="'developPort'",
        :info="'5000'"
      )
    h5 接口服务器端口
    p.tip 用于SSR数据获取、代理请求、模拟请求和线上请求。
    p.edit
      text-input(
        :state="config",
        :name="'apiServerPort'",
        :info="'5002'"
      )
    h3 接口
    h5 接口环境
    p.tip 可以选择的值 mock, proxy, online, 当同时设置时，请求优先级为 mock > proxy > online。
    p.tip mock 相关配置请在 /mock 下添加或更改。
    p.edit.type-select
      label
        i.pre-radio(:class="[ config.apiType === 'mock' ? 'icon-cr-check' : 'icon-cr' ]")
        input(type="radio", name="apitype", value="mock", v-model="config.apiType")
        span mock
      label
        i.pre-radio(:class="[ config.apiType === 'proxy' ? 'icon-cr-check' : 'icon-cr' ]")
        input(type="radio", name="apitype", value="proxy", v-model="config.apiType")
        span proxy
      label
        i.pre-radio(:class="[ config.apiType === 'online' ? 'icon-cr-check' : 'icon-cr' ]")
        input(type="radio", name="apitype", value="online", v-model="config.apiType")
        span online
    h3 开发环境
    h5 自动打开欢迎页面
    p.edit
      label
        i.pre-sq(:class="[ config.autoOpenBrowser ? 'icon-sq-check' : 'icon-sq' ]")
        input(type="checkbox", v-model="config.autoOpenBrowser")
        span 当开发服务器启动后自动打开游览器，跳转至欢迎页面
    h5 显示服务器日志（当前版本暂时停用）
    p.tip 某些系统下可能会出现常驻窗口，不影响使用。可以关闭该功能以提升性能，在终端中使用 pm2 logs 查看。
    p.tip
      label
        i.pre-sq(:class="[ config.realTimeLog ? 'icon-sq-check' : 'icon-sq' ]")
        input(type="checkbox", v-bind:value="config.realTimeLog")
        span 是否在页面上显示服务器日志
    h5 Firebase (实验)
    p.tip 想在所有 live-area 仓库中共享个性化配置？现在你可以选择 Firebase. 具体配置方式请参考 /firebase.
    p.edit
      label
        i.pre-sq(:class="[ firebase ? 'icon-sq-check' : 'icon-sq' ]")
        span(style="margin-left:20px;") 当前环境是否已启用 firebase
    h3 安全
    h5 访问控制（实验）
    p.tip 该设置仅对开发服务器有效，接口服务器不受影响。
    p.edit
      label
        i.pre-sq(:class="[ config.accessLimit ? 'icon-sq-check' : 'icon-sq' ]")
        input(type="checkbox", v-model="config.accessLimit")
        span 只允许本机访问开发服务器
    p.tip(style="margin-top: 50px") * 当前页面的更改需要手动重启服务器以生效。
    p.tip * 实验性功能未经过完整测试，如出现问题，请重启服务器或重设为默认值。
    p.action(v-if="!firebase")
      span.btn(
        :class="{ disable: busy }",
        @click="saveSetting(0, 0)"
      ) 保存更改
      span.btn(
        @click="saveSetting(0, 1)",
        :class="{ disable: busy }",
        style="margin-left: 20px"
      ) 重设为默认值
    p.action(v-show="firebase")
      span.btn(
        :class="{ disable: busy }",
        @click="saveSetting(1, 0)"
        ) 同步更改
      span.btn(
        :class="{ disable: busy }",
        @click="saveSetting(1, 1)",
        style="margin-left: 20px"
      ) 重设为默认值
</template>

<style lang="stylus" scoped>
  h3
    margin-top: 2em
  h5
    margin-bottom: 0
  
  .action
    margin-top: 2em
    margin-bottom: 3em
  
  .type-select
    margin-top: 0.5em

    label
      margin-right: 1.5em
      font-size: 14px
    span
      margin-left: 0.4em
  
  @media screen and (max-width: 480px)
    .action
      text-align: center
</style>

<script>
  import sectionBox from '@/components/section-box'
  import textInput from '@/components/text-input'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        title: '设置',
        subtitle: '你拍一，我拍一。',
        busy: 0,
        config: {
          developDomain: '',
          developPort: '',
          apiServerPort: '',
          apiType: '',
          autoOpenBrowser: false,
          realTimeLog: false
        }
      }
    },
    components: {
      sectionBox,
      textInput
    },
    computed: {
      ...mapGetters([
        'userConfig',
        'firebase'
      ])
    },
    watch: {
      userConfig () {
        this.bindConfig()
      }
    },
    methods: {
      async saveSetting (isSync, reset) {
        if (this.busy) {
          return
        }

        this.busy = 1
        await this.$sleep(1200)
        this.$notice('success', '已提交更改。')
        this.busy = 0
      },
      bindConfig () {
        this.config = JSON.parse(JSON.stringify(this.userConfig))
      }
    },
    mounted () {
      this.bindConfig()
    }
  }
</script>
