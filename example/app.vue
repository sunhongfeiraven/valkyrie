<template>
  <div>
    <p>123</p>
    <router-link class="page-back" v-if="visible" :to="'/'">
      返回
    </router-link>
    <router-view></router-view>
  </div>
</template>

<style lang='less'>
@import './styles/base.less';

p {
  font-size: 12px;
}
</style>

<script>
export default {
  computed: {
    visible() {
      return ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
    }
  }
};
</script>
