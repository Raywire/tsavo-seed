<template>
  <div id="app" v-scroll="handleScroll">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    <scroll-to-top id="scroller"></scroll-to-top>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import ScrollToTop from '@/components/layouts/ScrollToTop.vue'
import scroll from '@/directives/scroll'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ScrollToTop
  },
  directives: {
    scroll
  },
  mounted () {
    window.addEventListener("load", function () {setTimeout(this.hideURLbar, 0);}, false);
    const element = document.querySelector('#scroller')
    element.style.display = 'none'
  },
  methods: {
    hideURLbar () {
      window.scrollTo(0, 1);
    },
    handleScroll () {
      const element = document.querySelector('#scroller')
      if (element) {
        window.scrollY > 800 ? element.style.display = 'block' : element.style.display = 'none'
      }
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
