<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <scroll-to-top></scroll-to-top>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import ScrollToTop from '@/components/layouts/ScrollToTop.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ScrollToTop
  },
  mounted () {
    window.addEventListener("load", function () {setTimeout(this.hideURLbar, 0);}, false);
  },
  methods: {
    hideURLbar () {
      window.scrollTo(0, 1);
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
