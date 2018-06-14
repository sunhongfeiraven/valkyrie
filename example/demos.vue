<template>
  <section class="page-demo">
    <div v-for="group in navs" :key="group.title">
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
    console.log(navs)
  }
};
</script>
