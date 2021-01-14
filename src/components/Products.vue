<template>
  <!-- Products & Services -->
  <section class="blog">
    <div class="container py-md-5">
      <h3 v-if="showHeader" class="heading mb-sm-5 mb-4 text-center"> Our Products</h3>
      <div class="row blog-grids">
        <section class="core-value m-2 card">
          <div class="container p-lg-4 py-md-4">
            <div class="row core-grids">
              <div class="col-lg-4 core-left mt-2">	
                <img src="../assets/images/Tsavo_WE3106.png" class="img-fliud" alt="" />
                <h4 class="mt-2">TSAVO WE-3106</h4>
              </div>
              <div class="col-lg-8 core-right text-justify">
                <p>
                  TSAVO WE-3106 is a high yielding variety with big cob setting ability. It has a high tolerance to Striga Hermonthica weed as well as common diseases such as Leaf Rust, GLS etc. It also boasts of its tolerance to bird damage due to excellent cob cover in addition to its lodging tolerance due to a strong yield stand. It grows well in low to mid altitude zones and is ideal for both green and dry maize market. The plant stays green at maturity making it suitable for livestock feed.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="core-value m-2 card mt-4">
          <div class="container p-lg-4 py-md-4">
            <div class="row core-grids">
              <div class="col-lg-8 core-left text-justify">
                <p>
                  TSAVO WE-4141 dubbed “double-double” by our farmers offers a vigorous plant with high double cob setting ability not to forget its high yields (30-35 bags/acre). It is adapted to a wide range of soils and grows well in low to mid altitude zones. This variety has a high tolerance to the Striga Hermonthica weed and to common diseases ( Leaf Rust, GLS). With green cob maturity of 90 – 110 days which dries in 120 – 130 days. It also boasts of its lodging tolerance due to a strong yield stand.
                </p>
              </div>
              <div class="col-lg-4 core-right mt-2">
                <img src="../assets/images/Tsavo_WE4141.png" class="img-fliud" alt="" />
                <h4 class="mt-2">TSAVO WE-4141</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
  <!-- //Products & Services -->
</template>

<script>
export default {
  name: 'Products',
  props: {
    showHeader: {
      type: Boolean,
      default: true
    }
  },
}
</script>