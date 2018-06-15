<template>
  <section class="page-demo">
    <div class="page-header">
      <h1>Valkyrie Ui</h1>
      <p>移动端vue组件库</p>
    </div>
    <div v-for="group in navs" :key="group.title" class="group">
      <div class="group-title" v-text="group.title"></div>
      <router-link v-for="item in group.list" :key="item.path" :to="item.path" class="group-item" tag='div'>
        <span>{{ item.name }}</span>
        <i class="valkyrie valkyrie-back group-back"></i>
      </router-link>
    </div>
  </section>
</template>
<style lang="less">
.group {
  background: #fff;
  margin-bottom: 12px; /* no */
  padding: 12px; /* no */
}
.group-back {
  transform: rotate(180deg);
}
.group-title {
  font-size: 18px; /* no */
  margin-bottom: 16px; /* no */
}
.group-item span {
  padding-left: 8px; /* no */
}
.group-item {
  box-sizing: border-box;
  color: #666;
  display: flex;
  padding: 8px 0; /* no */
  justify-content: space-between;
  align-items: center;
  font-size: 16px; /* no */
}
.page-demo {
  padding: 0 16px; /* no */
}
.page-header h1 {
  color: rgba(0, 0, 0, 0.75);
  font-size: 21px; /* no */
  font-weight: normal;
  margin: 27px 0 15px; /* no */
}
.page-header p {
  font-size: 13px; /* no */
  color: rgba(0, 0, 0, 0.75);
  font-weight: normal;
  margin: 0 0 27px; /* no */
}
</style>
<script>
import { navs } from './route';

export default {
  data() {
    return {
      navs: []
    }
  },
  created() {
    this.navs = navs
  }
}
</script>
