<template>
  <div class="page-indicator">
    <h1 class="page-title">Indicator</h1>
    <div class="page-indicator-wrapper">
      <vk-button @click="handleClick">123132</vk-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      console.log('123')
    }
  }
}
</script>



