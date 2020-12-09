<template>
  <div>
    <Banner/>

    <!-- services -->
    <section class="services py-5">
      <div class="container py-lg-5">
        <h3 class="heading mb-sm-5 mb-4 text-center"> Our Services</h3>
        <div class="row">
          <div v-for="(service, index) in services.slice(0, 3)" :key="index" :class="`${index === 2 ? 'mx-auto' : ''}`" class="col-lg-4 col-sm-6 mt-lg-0 mt-4">
            <div class="home-grid">
              <span class="num-title">{{ `0${index + 1}` }}</span>
              <h4 class="home-title mt-3">{{ service.title }}</h4>
              <p class="mt-2 clamp-2 mb-1">
                {{ service.info }}
              </p>
              <modal :info="service.info" :title="service.title"></modal>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="row col-lg-9 mt-lg-5 mt-4 mx-auto px-lg-3 px-0">
            <div class="col-lg-6 col-sm-6">
              <div class="home-grid">
                <span class="num-title">04</span>
                <h4 class="home-title mt-3">{{ services[3].title }}</h4>
                <p class="mt-2 clamp-2">
                  {{ services[3].info }}
                </p>
                <modal :info="services[3].info" :title="services[3].title"></modal>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 mt-sm-0 mt-4">
              <div class="home-grid">
                <span class="num-title">05</span>
                <h4 class="home-title mt-3">{{ services[4].title }}</h4>
                <p class="mt-2 clamp-2">
                  {{ services[4].info }}
                </p>
                <modal :info="services[4].info" :title="services[4].title"></modal>
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
          <form class="newsletter" @submit.prevent="subscribe" novalidate :class="{ error: $v.contact.email.$error }">
            <input class="email" v-model="contact.email" type="email" placeholder="Enter your email ...">
            <button class="form-control btn">Subscribe
              <spinner v-if="sending"></spinner>
            </button>
          </form>
          <span v-if="$v.contact.email.$dirty && !$v.contact.email.required" class="text-danger small font-weight-bold">
            Email is required
          </span>
          <span v-if="$v.contact.email.$dirty && !$v.contact.email.email" class="text-danger small font-weight-bold">
            Email must be valid
          </span>
          <transition name="fade">
            <div v-if="message && showMessage" class="alert mt-4 font-weight-bold" :class="alert" role="alert">
              {{ message }}
              <button type="button" class="close" @click="showMessage = false" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!-- //newsletter -->
  </div>
</template>

<script>
import { required, maxLength, email } from 'vuelidate/lib/validators'
import Banner from '@/components/layouts/Banner'
import StakeHolders from '../components/StakeHolders.vue'
import Products from '../components/Products.vue'
import Spinner from '../components/Spinner.vue'
import Modal from '../components/Modal.vue'

export default {
  name: 'Services',
  components: {
    Banner,
    StakeHolders,
    Products,
    Spinner,
    Modal
  },
  data() {
    return {
      sending: false,
      message: '',
      showMessage: false,
      alert: 'alert-primary',
      contact: {
        email: ''
      },
      apiUrl: process.env.VUE_APP_API_URL,
      info: "Agronomic support is a complex of services provided by high-level professionals with the aim of increasing the profitability of crop production or the production of forage crops. Modern agrarian science does not stand still, so something new is constantly appearing - something that allows you to get extra profit. The use of such competitive advantages allows to obtain higher yields and increase the profitability of agribusiness.",
      title: "Seed Production",
      services: [
        {
          title: 'Seed Production',
          info: 'Hybrid seed production is a very specialized field that requires high professional knowledge, experience and passion. Our hybrid seed multiplication is done in our Ziwani farm under highly mechanized production system. In Ziwani, the crop is irrigated using the pivot irrigation system. The production is done professionally, implanting all the Good Agricultural Practices (GAP) that gives our seeds a unique and un-matchable quality. The seed quality embraces germination energy, total germination %, physical purity, genetic purity and wholesomeness. The site meets all the standards stipulated by Kenya Plant Health Inspectorate Services (KEPHIS)'
        },
        {
          title: 'Seed Processing',
          info: 'In agriculture and horticulture, seed treatment or seed dressing is a chemical, typically antimicrobial or fungicidal, with which seeds are treated (or "dressed") prior to planting. Less frequently, insecticides are added. Seed treatments can be an environmentally more friendly way of using pesticides as the amounts used can be very small. It is usual to add colour to make treated seed less attractive to birds, and easier to see and clean up in the case of an accidental spillage. Specialist machinery is required to safely and efficiently apply the chemical to the seed. A seed coating is a thicker form of covering of seed and may contain fertiliser, growth promoters and or seed treatment as well as an inert carrier and a polymer outer shell. The term "seed dressing" is also used to refer to the process of removing chaff, weed seeds and straw from a seed stock.'
        },
        {
          title: 'Seed Packaging',
          info: 'It is important to package seed in dry containers for proper storage. For small quantities of seed, these containers may be tin cans, jars, or pots that are glazed on the inside; even reinforced boxes or bags can be suitable. Metal or plastic jerricans, or drums are often used to package large quantities of seed. Regardless of the type of container employed, it should be of standard size and shape, if possible, so that when one is filled with seed of a known purity percentage, the approximate number of seeds it contains can be estimated. Also, containers of standard sizes and shapes are easier to handle. For subsequent identification, each package of seed, or each aggregation of packages representing a given seed collection, should be labelled.'
        },
        {
          title: 'Seed Distribution',
          info: 'The overarching goal of functional seed systems is to ensure that seeds are available and accessible to all end users, notably smallholder farmers, in sufficient quantity, quality and diversity to produce sufficient nutritious food in a sustainable way for the household itself, other consumers, or both. In order to achieve this goal, seed systems rely on the interconnected performance of three key functions: seed production and distribution, innovation, regulation'
        },
        {
          title: 'Agronomic Support',
          info: 'Agronomic support is a complex of services provided by high-level professionals with the aim of increasing the profitability of crop production or the production of forage crops. Modern agrarian science does not stand still, so something new is constantly appearing - something that allows you to get extra profit. The use of such competitive advantages allows to obtain higher yields and increase the profitability of agribusiness.'
        },
      ]
    }
  },
  validations: {
    contact: {
      email: { required, email, maxLength: maxLength(64)},
    }
  },
  methods: {
    subscribe () {
      this.$v.$touch()
      if (!this.$v.$invalid && !this.sending) {
        this.sending = true
        this.message = 'Your have successfully subscribed to our newsletter'
        this.showMessage = true
        this.alert = 'alert-success'
        this.sending = false
      }
    }
  }
}
</script>
<style scoped>
.error {
	border: 1px solid red;
}
</style>