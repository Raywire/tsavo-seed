<template>
  <!-- Products & Services -->
  <section class="blog">
    <div class="container py-md-5">
      <h3 class="heading mb-sm-5 mb-4 text-center"> Our Products</h3>
      <div class="row blog-grids">
        <div v-for="(product, index) in products" :key="index" class="col blog-left mb-lg-0 mb-sm-5 pb-lg-0 pb-5">	
          <img :src="require(`../assets/images/${product.image}`)" class="img-fliud displayed" alt="" />
          <div class="blog-info">
            <h4 class="text-center">{{ product.name }}</h4>
            <ul>
              <li v-for="(detail, index) in product.details.slice(0, 3)" :key="index" class="mt-2">
                <p><span class="fa fa-pagelines"></span> {{ detail }}</p>
              </li>
              <div :id="index" class="collapse">
                <li v-for="(detail, index) in product.details.slice(3)" :key="index" class="mt-2">
                  <p><span class="fa fa-pagelines"></span> {{ detail }}</p>
                </li>
              </div>
              <div class="mt-2 text-center">
                <button class="btn btn-outline-success btn-sm" @click="revealInfo(index)">
                <span>
                  <svg style="width:24px;height:24px" :id="`caret-${index}`" class="caret-down" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </span>
                </button>
              </div>
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
      showMore: false,
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
  },
  methods: {
    revealInfo (id) {
      this.showMore = !this.showMore
      let element = document.getElementById(id)
      let caret = document.getElementById(`caret-${id}`)
      element.classList.toggle('show')
      caret.classList.toggle('open')
    },
  }
}
</script>

<style lang="scss">
.collapse {
  display: block;
  max-height: 0px;
  overflow: hidden;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1);
&.show {
    max-height: 99em;
    transition: max-height .5s ease-in-out;
  }
}
.btn-link {
  color: #737373
}
.caret-down{
  transform: rotate(0deg);
  transition: transform 0.4s linear;
}

.caret-down.open{
  transform: rotate(-180deg);
  transition: transform 0.4s linear;
}
img.displayed {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
}
</style>