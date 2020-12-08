<template>
  <!-- move top icon -->
  <span class="move-top text-center" @click="scrollToTop()">
    <svg style="width:54px;height:54px" viewBox="0 0 24 24">
      <path fill="#FF9C26" d="M13,18V10L16.5,13.5L17.92,12.08L12,6.16L6.08,12.08L7.5,13.5L11,10V18H13M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
    </svg>
  </span>
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
