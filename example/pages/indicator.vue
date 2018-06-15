<template>
  <div class="page">
    <h1 class="page-title">Indicator</h1>
    <div class="page-wrapper page-indicator">
      <vk-button size='large' @click.native="openIndicator">点击弹出 Indicator</vk-button>
      <vk-button size='large' @click.native="openIndicatorWithText">我要报名</vk-button>
    </div>
  </div>
</template>

<style lang="less">
@import '../../packages/button/style/index.less';
@import '../../packages/indicator/style/index.less';

.page-indicator .vk-button {
  margin-bottom: 10px; /* no */
}
</style>

<script>
import { Indicator } from 'src/index'

export default {
  methods: {
    openIndicator() {
      Indicator.open()
      setTimeout(() => this.$indicator.close(), 20000)
    },
    openIndicatorWithText() {
      Indicator.open({
        text: 'loading',
        type: 'full'
      })
      setTimeout(() => Indicator.close(), 2000)
    }
  },
  beforeDestroy() {
    Indicator.close()
  }
}
</script>



