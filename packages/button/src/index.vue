<template>
  <button class="vk-button" :class="[`vk-button-${type}`,`vk-button-${size}`,{'disabled':disabled}]" @click="onClick" :disabled="disabled">
    <label class="vk-button-text">
      <slot></slot>
    </label>
  </button>
</template>

<script>
export default {
  name: 'vk-button',
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'danger', 'primary'].indexOf(value) > -1
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
    onClick(evt) {
      this.$emit('click', evt)
    },
  },

}
</script>
