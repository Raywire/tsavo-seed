<template>
  <div>
    <Banner />
    <!-- contact -->
    <section class="contact py-5">
      <div class="container py-sm-3">
        <h3 class="heading mb-sm-5 mb-4 text-center"> Contact Us</h3>
        <div class="row map-pos">
          <div class="col-lg-4 col-md-6 address-row">
            <div class="row">
              <div class="col-2 address-left">
                <div class="contact-icon">
                  <span class="fa fa-home" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-10 address-right">
                <h5>Visit Us</h5>
                <p>P.O. Box 236 - 00232, Ruiru, Kenya.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 address-row w3-agileits">
            <div class="row">
              <div class="col-2 address-left">
                <div class="contact-icon">
                  <span class="fa fa-envelope" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-10 address-right">
                <h5>Mail Us</h5>
                <p><a href="mailto:info@tsavoseed.com">info@tsavoseed.com</a></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 address-row">
            <div class="row">
              <div class="col-2 address-left">
                <div class="contact-icon">
                  <span class="fa fa-phone" aria-hidden="true"></span>
                </div>
              </div>
              <div class="col-10 address-right">
                <h5>Call Us</h5>
                <p><a href="tel:+254775643903">+254 775 643 903</a></p>
              </div>
            </div>
          </div>
        </div>
        <form action="#" method="post">
          <div class="row">
            <div class="col-md-6 contact-left">
              <input type="text" name="Name" placeholder="Your Name" required="">
              <input type="email" name="Email" placeholder="Email" required="">
              <input type="text" name="Subject" placeholder="Subject" required="">
            </div>
            <div class="col-md-6 contact-right mt-md-0 mt-4">
              <textarea name="Message" placeholder="Message" required=""></textarea>
              <button class="btn">Send Message</button>
            </div>
          </div>
        </form>
        <!-- map -->
        <div class="map mt-5">
          <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859251.8642025779!2d-76.08274894689792!3d40.06224332601239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sRuiru%2C+KEN!5e0!3m2!1sen!2sin!4v1474436926209"
          allowfullscreen></iframe> -->
          <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ruiru,%20Kenya+(Gicheha%20Farm)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <!-- //map -->
      </div>
    </section>
    <!-- //contact -->
  </div>
</template>

<script>
import Banner from '@/components/layouts/Banner'
export default {
  name: 'Contact',
  components: {
    Banner
  }
}
</script>
