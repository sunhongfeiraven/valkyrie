<template>
  <div class="vk-spinner-snake" v-bind="$attrs" :style="{
          'border-top-color': spinnerColor,
          'border-left-color': spinnerColor,
          'border-bottom-color': spinnerColor,
          'height': spinnerSize,
          'width': spinnerSize
          }">
  </div>
</template>

<script>
export default {
  name: 'vk-spinner',
  props: {
    size: { type: Number, default: 28 },
    color: { type: String, default: '#fd5729' },
  },
  computed: {
    spinnerColor() {
      return this.color || '#fd5729'
    },
    spinnerSize() {
      return `${(this.size || 28)}px`
    },
  },
}
</script>
