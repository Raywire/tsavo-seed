<template>
  <div>
    <Banner/>

    <!-- services -->
    <section class="services py-5">
      <div class="container py-lg-5">
        <h3 class="heading mb-sm-5 mb-4 text-center"> Our Services</h3>
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="home-grid">
              <span class="num-title">01</span>
              <h4 class="home-title mt-3">Crop Cultivation</h4>
              <p class="mt-2"> Pellentesque in ipsum id orci porta dapibus roined magna ipsum.</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mt-sm-0 mt-4">
            <div class="home-grid">
              <span class="num-title">02</span>
              <h4 class="home-title mt-3">Farm Plantation</h4>
              <p class="mt-2"> Pellentesque in ipsum id orci porta dapibus roined magna ipsum.</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mt-lg-0 mt-4">
            <div class="home-grid">
              <span class="num-title">03</span>
              <h4 class="home-title mt-3">Plant Renovation</h4>
              <p class="mt-2"> Pellentesque in ipsum id orci porta dapibus roined magna ipsum.</p>
            </div>
          </div>
        </div>
        
        <div class="row ">
          <div class="row col-lg-9 mt-lg-5 mt-4 mx-auto px-lg-3 px-0">
            <div class="col-lg-6 col-sm-6">
              <div class="home-grid">
                <span class="num-title">04</span>
                <h4 class="home-title mt-3">Crop Harvesting</h4>
                <p class="mt-2"> Pellentesque in ipsum id orci porta dapibus roined magna ipsum.</p>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 mt-sm-0 mt-4">
              <div class="home-grid">
                <span class="num-title">05</span>
                <h4 class="home-title mt-3">Gardening Farm</h4>
                <p class="mt-2"> Pellentesque in ipsum id orci porta dapibus roined magna ipsum.</p>
              </div>
            </div>
          </div>
        </div>
          
      </div>
    </section>
    <!-- //services -->

    <!-- Why Choose Us -->
    <section class="serives-agile py-5" id="works">
      <div class="container py-md-5">
        <h3 class="heading mb-5 text-center"> Why Choose Us</h3>
        <div class="welcome-bottom text-center">
          <div class="welcome-grid">
            <span class="fa fa-apple"></span>
            <h4 class="my-3">Grains </h4>
            <p>quis nostrum ullamet corporis suscipit.</p>
          </div>
          <div class="welcome-grid">
            <span class="fa fa-skyatlas"></span>
            <h4 class="my-3">Seed Traits</h4>
            <p>quis nostrum ullamet corporis suscipit.</p>
          </div>

          <div class="welcome-grid mt-md-0 mt-5">
            <span class="fa fa-yelp"></span>
            <h4 class="my-3">Safety</h4>
            <p>quis nostrum ullamet corporis suscipit.</p>
          </div>
          <div class="welcome-grid mt-lg-0 mt-md-4 mt-5">
            <span class="fa fa-viadeo"></span>
            <h4 class="my-3">Cultivation</h4>
            <p>quis nostrum ullamet corporis suscipit.</p>
          </div>
          <div class="welcome-grid mt-lg-0 mt-md-4 mt-5">
            <span class="fa fa-pagelines"></span>
            <h4 class="my-3">Environment</h4>
            <p>quis nostrum ullamet corporis suscipit.</p>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </section>
    <!-- Why Choose Us -->

    <!-- Products & Services -->
    <section class="blog py-5">
      <div class="container py-md-5">
        <h3 class="heading mb-sm-5 mb-4 text-center"> Our Products and Services</h3>
        <div class="row blog-grids">
          <div class="col-lg-4 col-md-6 blog-left mb-lg-0 mb-sm-5 pb-lg-0 pb-5">	
            <img src="../assets/images/s1.jpg" class="img-fliud" alt="" />
            <div class="blog-info">
              <h4>Farming Land <span class="fa fa-pagelines"></span></h4>
              <p class="mt-2">Integer sit ut amet mattis quam, sit amet ultricies velit. Praesent ullam corper dui turpis sit.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 blog-middle mb-lg-0 mb-sm-5 pb-lg-0 pb-md-5">	
            <img src="../assets/images/s2.jpg" class="img-fliud" alt="" />
            <div class="blog-info">
              <h4>Cultivation <span class="fa fa-pagelines"></span></h4>
              <p class="mt-2">Integer sit ut amet mattis quam, sit amet ultricies velit. Praesent ullam corper dui turpis sit.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 blog-right mt-lg-0 mt-5 pt-lg-0 pt-md-5">
            <img src="../assets/images/s3.jpg" class="img-fliud" alt="" />
            <div class="blog-info">
              <h4>Harvesting <span class="fa fa-pagelines"></span></h4>
              <p class="mt-2">Integer sit ut amet mattis quam, sit amet ultricies velit. Praesent ullam corper dui turpis sit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //Products & Services -->

    <!-- newsletter -->
    <div class="newsletter_right_w3 py-5">
      <div class="container py-lg-3">
      <h3 class="heading mb-4 text-center">Subscribe Newsletter</h3>
        <p class="sub-tittle text-center mb-sm-5 mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <div class="n-right-w3ls">
          <form action="#" method="post" class="newsletter">
            <input class="email" type="email" placeholder="Enter your email id..." required="">
            <button class="form-control btn" value="">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    <!-- //newsletter -->
  </div>
</template>

<script>
import Banner from '@/components/layouts/Banner'
export default {
  name: 'Services',
  components: {
    Banner
  }
}
</script>
