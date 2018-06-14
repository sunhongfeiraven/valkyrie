<template>
  <div class="page">
    <h1 class="page-title">Button</h1>
    <div class="page-wrapper page-button">
      <h3>通栏按钮</h3>
      <p>宽度自适应的按钮一般用于页面底部或者表单结尾 (large)</p>
      <vk-button @click="handleClick" size='large' radius='0px'>我要报名(default)我要报名我要报名我要报名</vk-button>
      <vk-button @click="handleClick" size='large' type='primary' radius='0px'>我要报名(primary)</vk-button>
      <vk-button size='large' type='primary'>我要报名(圆角)</vk-button>
      <vk-button disabled size='large' type='primary'>我要报名(disabled)</vk-button>
      <h3>宽度固定按钮-圆角</h3>
      <p>主要用于缺省页 (normal)</p>
      <vk-button @click="handleClick">我要报名(default)</vk-button>
      <vk-button @click="handleClick" type='primary'>我要报名(default)</vk-button>
      <h3>组合按钮</h3>
      <p>小型按钮 (small)</p>
      <vk-button size='small'>我要报名</vk-button>
      <vk-button size='small' type='ghost'>我要报名</vk-button>
      <vk-button size='small' type='primary'>我要报名</vk-button>
    </div>
  </div>
</template>
<style lang="less">
@import '../../packages/button/style/index.less';

.page-button .vk-button {
  margin-bottom: 10px; /* no */
}
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



