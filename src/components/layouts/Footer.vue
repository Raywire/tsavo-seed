<template>
  <!-- footer -->
  <footer class="text-center py-5">
    <div class="container py-md-3">
      <!-- logo -->
      <h2 class="logo2 text-center">
        <a href="index.html">
          <img src="../../assets/images/logo.png" alt="" srcset=""> Tsavo Seed
        </a>
      </h2>
      <!-- //logo -->
      <!-- address -->
      <div class="contact-left-footer mt-4">
        <ul>
          <li>
            <p>
              <span class="fa fa-map-marker mr-2"></span>P.O. Box 236 - 00232, Ruiru, Kenya
            </p>
          </li>
          <li class="mx-4">
            <p>
              <span class="fa fa-phone mr-2"></span><a href="tel:+254775643903">+254 775 643 903</a>.
            </p>
          </li>
          <li>
            <p class="text-wh">
              <span class="fa fa-envelope-open mr-2"></span>
              <a href="mailto:info@tsavoseed.com">info@tsavoseed.com</a>
            </p>
          </li>
        </ul>
        <ul>
          <li class="mx-4">
            <p class="text-wh">
              <span class="fa fa-gavel mr-2"></span>
              <router-link to="/terms">Terms</router-link>
            </p>
          </li>
          <li>
            <p class="text-wh">
              <span class="fa fa-user-secret mr-2"></span>
              <router-link to="/privacy">Privacy</router-link>
            </p>
          </li>
        </ul>
      </div>
      <!-- //address -->
      <!-- social icons -->
      <div class="footercopy-social my-4">
        <ul>
          <li>
            <a href="#">
              <span class="fa fa-facebook-square"></span>
            </a>
          </li>
          <li class="mx-2">
            <a href="#">
              <span class="fa fa-twitter-square"></span>
            </a>
          </li>
          <li class="">
            <a href="#">
              <span class="fa fa-google-plus-square"></span>
            </a>
          </li>
          <li class="mx-2">
            <a href="#">
              <span class="fa fa-linkedin-square"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="fa fa-rss-square"></span>
            </a>
          </li>
          <li class="ml-2">
            <a href="#">
              <span class="fa fa-pinterest-square"></span>
            </a>
          </li>
        </ul>
      </div>
      <!-- //social icons -->
      <!-- copyright -->
      <div class="w3l-copy text-center">
        <p class="text-da">© {{ currentYear }} Tsavo Seed. All rights reserved</p>
      </div>
      <!-- //copyright -->
    </div>
  </footer>
  <!-- //footer -->
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>
