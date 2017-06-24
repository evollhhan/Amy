<template>
    <svg width="80" height="80" viewPort="0 0 80 80">
      <circle class="circle" 
              cx="40"
              cy="40"
              r="20"
              stroke-width="4"
              v-bind:stroke="color || '#03a9f4'"
              fill="none" />
    </svg>
</template>

<style lang="stylus" scoped>
  .circle
    stroke-dasharray: 125
    stroke-dashoffset: 125
    transform-origin: 50%
    animation: loading-ani 1.2s ease infinite
    
@keyframes loading-ani
  0%
    transform: rotate(0deg)
    stroke-dashoffset: 125
  50%
    stroke-dashoffset: 0
  100%
    stroke-dashoffset: -125
    transform: rotate(360deg)   
</style>

<script>
  export default {
    props: ['color']
  }
</script>

