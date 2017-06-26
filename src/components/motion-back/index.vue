<template lang="jade">
  div.motion-view
    //- up
    div.blocker.v1

    //- middle
    div.blocker.v2

    //- bottom
    div.blocker.v3
</template>

<style lang="stylus" scoped>
  .motion-view
    position: fixed
    width: 100%
    height: 100%

    .blocker
      position: absolute
      animation: animate-float-block 48s linear infinite
      opacity: 0
    
    .v1
      background: rgba(240, 240, 240, .15)    
      width: 20vw
      height: 18vw
      top: -15%
      left: 60%
    
    .v2
      background: rgba(240, 240, 240, .25)    
      width: 26vw
      height: 22vw
      top: 40%
      left: 80%
      animation-delay: 2s
      animation-duration: 72s
    
    .v3
      background: rgba(240, 240, 240, .2)  
      width: 24vw
      height: 20vw
      top: 80%
      left: 40%
      animation-delay: 4s
      animation-duration: 64s  
  
@keyframes animate-float-block
  0%
    transform: translateX(0)
    opacity: 0
  20%
  80%
    opacity: 1
  100%
    transform: translateX(-320%)
    opacity: 0

@media screen and (max-width: 480px)
  .motion-view
    display: none
</style>

