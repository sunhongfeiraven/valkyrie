<template>
  <section class="page-demo">
    <div v-for="group in navs" :key="group">
      <div class="page-title" v-text="group.title"></div>
      <div v-for="item in group.list" :to="item.path" :key="item.path">
        <div slot="title">
          <i :class="['indexicon', 'icon-' + item.icon]"></i>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang='less'>
.page-demo {
  padding-bottom: 50px;

  .indexicon {
    font-size: 22px;
    color: #26a2ff;
    display: inline-block;
    width: 30px;
    vertical-align: middle;

    &.icon-swipe {
      font-size: 26px;
    }

    &.icon-checklist {
      font-size: 18px;
    }
  }
}
</style>

<script>
/* eslint-disable */
import { navs } from './route';

export default {
  data() {
    return {
      navs: []
    };
  },

  created() {
    this.navs = navs;
  }
};
</script>
