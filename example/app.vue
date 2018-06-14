<template>
  <div>
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="valkyrie valkyrie-back"></i>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<style lang='less'>
@import './styles/index.less';
@import './assets/font/iconfont.less';

.page-wrapper {
  padding: 0 20px; /* no */
}

.page-wrapper h3 {
  margin-top: 1em;
  font-size: 18px; /* no */
  margin-bottom: 0.8em;
}

.page-wrapper p {
  text-align: justify;
  font-size: 14px; /* no */
  margin-bottom: 1em; /* no */
}

.page-title {
  font-size: 20px; /* no */
  margin: 20px auto; /* no */
  text-align: center;
  display: block;
  line-height: 1;
}

.page-back {
  display: inline-block;
  position: absolute;
  top: 10px; /* no */
  right: 0;
  bottom: 0;
  left: 10px; /* no */
  width: 40px; /* no */
  height: 40px; /* no */
  text-align: center;
}
.page{
  padding-bottom: 32px; /* no */
}
.page-back i {
  font-size: 24px; /* no */
  line-height: 40px; /* no */
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
