<template>
  <transition name="vk-indicator">
    <div class="vk-indicator" :class="{'full': type === 'full' }" v-show="visible">
      <div class="vk-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <spinner class="vk-indicator-spin" :color="type === 'full' ? '#fd5729': '#ccc'" :size="32"></spinner>
        <span class="vk-indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="vk-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<script>
import Spinner from '../../spinner/index'

export default {
  components: { Spinner },
  props: {
    text: String,
    type: { type: String, default: 'default' },
    size: { type: Number, default: 32 },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    doClose() {
      this.visible = false
    },
  },
}
</script>
