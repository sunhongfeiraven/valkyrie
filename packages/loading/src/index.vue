<template>
  <div class="loading" :class="className">
    <section class="loading-content">
    </section>
  </div>
</template>

<script>
export default {
  props: {
    className: { type: String, default: '' },
  },
}
</script>
