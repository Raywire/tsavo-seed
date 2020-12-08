<template>
  <!-- Products & Services -->
  <section class="blog py-5">
    <div class="container py-md-5">
      <h3 class="heading mb-sm-5 mb-4 text-center"> Our Products</h3>
      <div class="row blog-grids">
        <div v-for="(product, index) in products" :key="index" class="col blog-left mb-lg-0 mb-sm-5 pb-lg-0 pb-5">	
          <img :src="require(`../assets/images/${product.image}`)" class="img-fliud" alt="" />
          <div class="blog-info">
            <h4>{{ product.name }}</h4>
            <ul>
              <li v-for="(detail, index) in product.details.slice(0, 3)" :key="index" class="mt-2">
                <span class="fa fa-pagelines"></span> {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- //Products & Services -->
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products:[
        {
          name: 'TSAVO-WE-3106',
          image: 's2.jpg',
          details: [
            'Vigorous plant with big cob setting ability',
            'High yielding variety (30-35 bags/acre)',
            'Grows well in low to mid altitude zones',
            'Tolerant to bird damage due to excellent cob cover',
            'Tolerant to common diseases (Leaf Rust, GLS)',
            'High tolerance to Striga Hermonthica weed',
            'Logding tolerance due to strong yield stand',
            'Green cob maturity 90-110 days. Cob dries in 120-130 days',
            'Ideal to both green and dry maize market',
            'Stays green plants at maturity suitable for livestock feed'
          ]
        },
        {
          name: 'TSAVO-WE-4141',
          image: 's3.jpg',
          details: [
            'Vigorous plant with high double cob setting ability',
            'High yielding variety (30-35 bags/acre)',
            'Grows well in low to mid altitude zones',
            'Tolerant to common diseases (Leaf Rust, GLS)',
            'High tolerance to Striga Hermonthica weed',
            'Logding tolerance due to strong yield stand',
            'Green cob maturity 90-110 days.',
            'Cob dries in 120-130 days',
            'Adapted to wide range soils'
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>