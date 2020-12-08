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
              <h4 class="home-title mt-3">Seed Production</h4>
              <p class="mt-2 clamp-2">
                Hybrid seed production is a very specialized field that requires high professional knowledge,
                experience and passion. Our hybrid seed multiplication is done in our Ziwani farm under highly
                mechanized production system. In Ziwani, the crop is irrigated using the pivot irrigation system.
                The production is done professionally, implanting all the Good Agricultural Practices (GAP) that
                gives our seeds a unique and un-matchable quality. The seed quality embraces germination
                energy, total germination %, physical purity, genetic purity and wholesomeness.
                The site meets all the standards stipulated by Kenya Plant Health Inspectorate Services (KEPHIS)
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mt-sm-0 mt-4">
            <div class="home-grid">
              <span class="num-title">02</span>
              <h4 class="home-title mt-3">Seed Processing</h4>
              <p class="mt-2 clamp-2">
                In agriculture and horticulture, seed treatment or seed dressing is a chemical, typically antimicrobial or fungicidal, with which seeds are treated (or "dressed") prior to planting. Less frequently, insecticides are added. Seed treatments can be an environmentally more friendly way of using pesticides as the amounts used can be very small. It is usual to add colour to make treated seed less attractive to birds, and easier to see and clean up in the case of an accidental spillage. Specialist machinery is required to safely and efficiently apply the chemical to the seed. A seed coating is a thicker form of covering of seed and may contain fertiliser, growth promoters and or seed treatment as well as an inert carrier and a polymer outer shell. The term "seed dressing" is also used to refer to the process of removing chaff, weed seeds and straw from a seed stock.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mt-lg-0 mt-4">
            <div class="home-grid">
              <span class="num-title">03</span>
              <h4 class="home-title mt-3">Seed Packaging</h4>
              <p class="mt-2 clamp-2">
                It is important to package seed in dry containers for proper storage. For small quantities of seed, these containers may be tin cans, jars, or pots that are glazed on the inside; even reinforced boxes or bags can be suitable. Metal or plastic jerricans, or drums are often used to package large quantities of seed. Regardless of the type of container employed, it should be of standard size and shape, if possible, so that when one is filled with seed of a known purity percentage, the approximate number of seeds it contains can be estimated. Also, containers of standard sizes and shapes are easier to handle. For subsequent identification, each package of seed, or each aggregation of packages representing a given seed collection, should be labelled
              </p>
            </div>
          </div>
        </div>
        
        <div class="row ">
          <div class="row col-lg-9 mt-lg-5 mt-4 mx-auto px-lg-3 px-0">
            <div class="col-lg-6 col-sm-6">
              <div class="home-grid">
                <span class="num-title">04</span>
                <h4 class="home-title mt-3">Seed Distribution</h4>
                <p class="mt-2 clamp-2">
                  The overarching goal of functional seed systems is to ensure that seeds are available and accessible to all
                  end users, notably smallholder farmers, in sufficient quantity, quality and diversity to produce sufficient nutritious food in a sustainable way for the household itself, other consumers, or both. In order to achieve
                  this goal, seed systems rely on the interconnected performance of three key functions: seed production and distribution, innovation, regulation
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 mt-sm-0 mt-4">
              <div class="home-grid">
                <span class="num-title">05</span>
                <h4 class="home-title mt-3">Agronomic Support</h4>
                <p class="mt-2 clamp-2">
                  Agronomic support is a complex of services provided by high-level professionals with the aim of increasing the profitability of crop production or the production of forage crops. Modern agrarian science does not stand still, so something new is constantly appearing - something that allows you to get extra profit. The use of such competitive advantages allows to obtain higher yields and increase the profitability of agribusiness.
                </p>
              </div>
            </div>
          </div>
        </div>
          
      </div>
    </section>
    <!-- //services -->

    <stake-holders></stake-holders>

    <!-- Products & Services -->
    <products></products>
    <!-- //Products & Services -->

    <!-- newsletter -->
    <div class="newsletter_right_w3 py-5">
      <div class="container py-lg-3">
      <h3 class="heading mb-4 text-center">Subscribe Newsletter</h3>
        <p class="sub-tittle text-center mb-sm-5 mb-4">Enter your email and hit subscribe to be up to date with our newsletter</p>
        <div class="n-right-w3ls">
          <form action="#" method="post" class="newsletter">
            <input class="email" type="email" placeholder="Enter your email ..." required="">
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
import StakeHolders from '../components/StakeHolders.vue'
import Products from '../components/Products.vue'
export default {
  name: 'Services',
  components: {
    Banner,
    StakeHolders,
    Products
  }
}
</script>
