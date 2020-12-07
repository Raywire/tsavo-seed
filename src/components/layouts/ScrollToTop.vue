<template>
  <!-- move top icon -->
  <span class="move-top text-center" @click="scrollToTop()"></span>
  <!-- //move top icon -->
</template>

<script>
export default {
  name: 'ScrollToTop',
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>
