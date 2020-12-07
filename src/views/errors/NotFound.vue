<template>
  <div>
    <Banner />
    <!-- Comingsoon -->
    <section class="comingsoon py-5">
      <div class="container py-md-5">
        <div class="row">
          <div class="col-lg-6 offset-lg-6 col-md-8 offset-md-4">
            <h4>404 Not Found</h4>
            <p class="mt-3">The page you are looking for does not exist</p>
            <div class="mt-4">
              <p class="mt-2">Return back <router-link to="/home"><span class="fa fa-home"></span>Home</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //Comingsoon -->
  </div>
</template>

<script>
import Banner from '@/components/layouts/Banner'
export default {
  name: 'NotFound',
  components: {
    Banner
  }
}
</script>
