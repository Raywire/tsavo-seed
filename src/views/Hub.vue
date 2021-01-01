<template>
  <div>
    <Banner />
    <section class="contact py-5">
      <div class="container py-sm-3">
        <h3 class="heading mb-sm-5 mb-4 text-center">Hub</h3>
        <div class="row map-pos">
          <p>No information has been posted on the hub yet. Come back here for any future updates.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from '@/components/layouts/Banner'
export default {
  name: 'Privacy',
  components: {
    Banner
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
h2 {
  padding: 16px
}
p {
  text-align: justify;
  padding: 16px
}
</style>
