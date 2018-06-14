<template>
  <div class="page">
    <h1 class="page-title">Button</h1>
    <div class="page-wrapper">
      <h3>通栏按钮-直角</h3>
      <vk-button @click="handleClick" size='large' radius='0px'>123132</vk-button>
    </div>
  </div>
</template>
<style lang="less">
@import '../../packages/button/style/index.less';
</style>

<script>
export default {
  methods: {
    handleClick() {
      console.log('123')
    }
  }
}
</script>



