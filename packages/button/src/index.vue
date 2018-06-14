<template>
  <button class="vk-button" :style="{'border-radius':radius}" :class="[`vk-button-${type}`,`vk-button-${size}`,{'disabled':disabled},{'active':active}]" :disabled="disabled" @touchstart="onTouchStart" @touchend="onTouchEnd" @click="onClick">
    <label class="vk-button-text">
      <slot></slot>
    </label>
  </button>
</template>

<script>
export default {
  name: 'vk-button',
  data() {
    return {
      active: false,
    }
  },
  props: {
    disabled: Boolean,
    radius: { type: String, default: '5px' },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'ghost', 'primary'].indexOf(value) > -1
      },
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['small', 'normal', 'large'].indexOf(value) > -1
      },
    },
  },
  methods: {
    onTouchStart() {
      if (this.disabled) return
      this.active = true
    },
    onTouchEnd() {
      if (this.disabled) return
      this.active = false
    },
    onClick(evt) {
      this.$emit('click', evt)
    },
  },
}
</script>
