<template lang="jade">
  div.progress
    div.bar
</template>

<style lang="stylus" scoped>
  .progress
    width: 100%
    height: 4px
    overflow: hidden
    background: #efefef

    .bar
      width: 25%
      height: 100%
      background: #03a9f4
      animation: travel 1.6s ease infinite

  @keyframes travel
    from
      transform: translate3d(-100%, 0, 0)
    to
      transform: translate3d(500%, 0, 0)
</style>
