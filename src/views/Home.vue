<template>
  <div>
    <!-- banner -->
    <section class="banner_w3lspvt" id="home">
      <div class="csslider infinity" id="slider1">
        <input type="radio" name="slides" checked="checked" id="slides_1" />
        <input type="radio" name="slides" id="slides_2" />
        <input type="radio" name="slides" id="slides_3" />
        <input type="radio" name="slides" id="slides_4" />
        <ul>
          <li>
            <div class="banner-top">
              <div class="overlay">
                <div class="container">
                  <div class="w3layouts-banner-info text-center">
                    <div class="slider-text-container">
                      <h3 class="text-wh">Production</h3>
                      <h4 class="text-wh mx-auto my-4">Cultivating new crops to make farmers increase profits</h4>
                      <p class="text-li mx-auto mt-2">Hybrid seed production is a very specialized field that requires high professional knowledge,
                        experience and passion.</p>
                      <router-link to="/services" class="button-style mt-sm-5 mt-4">Read More</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="banner-top1">
              <div class="overlay1">
                <div class="container">
                  <div class="w3layouts-banner-info text-center">
                    <div class="slider-text-container">
                      <h3 class="text-wh">Processing</h3>
                      <h4 class="text-wh mx-auto my-4">Cultivating new crops to make farmers increase profits</h4>
                      <p class="text-li mx-auto mt-2">In agriculture and horticulture, seed treatment or seed dressing is a chemical, typically antimicrobial or fungicidal, with which seeds are treated (or "dressed") prior to planting</p>
                      <router-link to="/services" class="button-style mt-sm-5 mt-4">Read More</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="banner-top2">
              <div class="overlay">
                <div class="container">
                  <div class="w3layouts-banner-info text-center">
                    <div class="slider-text-container">
                      <h3 class="text-wh">Packaging</h3>
                      <h4 class="text-wh mx-auto my-4">Cultivating new crops to make farmers increase profits</h4>
                      <p class="text-li mx-auto mt-2">It is important to package seed in dry containers for proper storage.</p>
                      <router-link to="/services" class="button-style mt-sm-5 mt-4">Read More</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="banner-top3">
              <div class="overlay1">
                <div class="container">
                  <div class="w3layouts-banner-info text-center">
                    <div class="slider-text-container">
                      <h3 class="text-wh">Distribution</h3>
                      <h4 class="text-wh mx-auto my-4">Cultivating new crops to make farmers increase profits</h4>
                      <p class="text-li mx-auto mt-2">The overarching goal of functional seed systems is to ensure that seeds are available and accessible to all
                        end users.</p>
                      <router-link to="/services" class="button-style mt-sm-5 mt-4">Read More</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="arrows">
          <label for="slides_1"></label>
          <label for="slides_2"></label>
          <label for="slides_3"></label>
          <label for="slides_4"></label>
        </div>
      </div>
    </section>
    <!-- //banner -->
    <!-- about -->
    <section class="about py-5">
      <div class="container py-md-4">
        <h3 class="heading text-center mb-4">Our Products</h3>
        <div class="feature-grids row mt-5 text-center">
          <div class="col-lg-4 col-md-6 ">
            <div class="bottom-gd px-2 text-center">
              <div class="f-icon">
                <span class="fa fa-leaf" aria-hidden="true"></span>
              </div>
              <h3 class="mt-4">Maize Seeds</h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
            <div class="bottom-gd px-2 text-center">
              <div class="f-icon">
                <span class="fa fa-pagelines" aria-hidden="true"></span>
              </div>
              <h3 class="mt-4">Bean Seeds</h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-lg-0 mt-4">
            <div class="bottom-gd px-2 text-center">
              <div class="f-icon">
                <span class="fa fa-paw" aria-hidden="true"></span>
              </div>
              <h3 class="mt-4">Livestock</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //about -->

    <!-- Products & Services -->
    <products :showHeader="false"></products>
    <!-- //Products & Services -->

    <stake-holders></stake-holders>

    <!-- core values -->
    <section class="core-value py-5">
      <div class="container py-md-4">
        <div class="row core-grids">
          <div class="col-lg-6 core-left">	
            <img src="../assets/images/core.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 core-right text-center mt-3">
            <h4 class="text-capitalize mt-4"><span class="fa fa-quote-left text-color mr-2"></span>
              We Are Innovators in Agricultural Business. Our goal is to bring high quality hybrid seeds.
            <span class="fa fa-quote-right text-color mr-2"></span></h4>
          </div>
        </div>
      </div>
    </section>
    <!-- //core values -->

    <!-- text -->
    <section class="text py-5">
      <div class="container py-md-3 text-center">		
        <div class="row">
          <div class="col-12">
            <h3 class="mb-4 heading">Together <span>We Grow</span></h3>
            <router-link to="/services" class="btn mr-3"> Our Services</router-link>
            <router-link to="/contact" class="btn btn1"> Contact Us </router-link>
          </div>		
        </div>		
      </div>		
    </section>
    <!-- //text -->
  </div>
</template>

<script>
import StakeHolders from '../components/StakeHolders.vue'
import Products from '../components/Products'
export default {
  components: { StakeHolders, Products },
  name: 'Home',
}
</script>
