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
        <form @submit.prevent="sendMessage">
          <div class="row">
            <div class="col-md-6 contact-left">
              <div>
                <input v-model="contact.name" type="text" placeholder="Your Name" maxlength="64" :class="{ error: $v.contact.name.$error }">
                <span v-if="$v.contact.name.$dirty && !$v.contact.name.required" class="text-danger pt-2 small font-weight-bold">
                  Name is required
                </span>
                <span v-if="$v.contact.name.$dirty && !$v.contact.name.isNameValid" class="text-danger pt-2 small font-weight-bold">
                  Name must be valid
                </span>
              </div>
              <div class="my-3">
                <input v-model="contact.email" type="text" placeholder="Email" maxlength="64" :class="{ error: $v.contact.email.$error }">
                <span v-if="$v.contact.email.$dirty && !$v.contact.email.required" class="text-danger small font-weight-bold">
                  Email is required
                </span>
                <span v-if="$v.contact.email.$dirty && !$v.contact.email.email" class="text-danger small font-weight-bold">
                  Email must be valid
                </span>
              </div>
              <div>
                <input v-model="contact.subject" type="text" placeholder="Subject" maxlength="64" :class="{ error: $v.contact.subject.$error }">
                <span v-if="$v.contact.subject.$dirty && !$v.contact.subject.required" class="text-danger pt-2 small font-weight-bold">
                  Subject is required
                </span>
              </div>
            </div>
            <div class="col-md-6 contact-right mt-md-0 mt-4">
              <div>
                <textarea v-model="contact.message" placeholder="Message" maxlength="256" :class="{ error: $v.contact.message.$error }"></textarea>
                <span v-if="$v.contact.message.$dirty && !$v.contact.message.required" class="text-center text-danger pt-2 small font-weight-bold">
                  Message is required
                </span>
              </div>
              <button class="btn">
                Send Message
                <spinner v-if="sending"></spinner>
              </button>
            </div>
          </div>
          <div v-if="message && showMessage" class="alert mt-4" :class="alert" role="alert">
            {{ message }}
            <button type="button" class="close" @click="showMessage = false" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </form>
        <!-- map -->
        <div class="map mt-5">
          <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ruiru,%20Kenya+(Gicheha%20Farm)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <!-- //map -->
      </div>
    </section>
    <!-- //contact -->
  </div>
</template>

<script>
import { required, maxLength, helpers, email } from 'vuelidate/lib/validators'
import sgMail from '@sendgrid/mail'
import Banner from '@/components/layouts/Banner'
import Spinner from '../components/Spinner.vue'

const isNameValid = helpers.regex('isUsernameValid', /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)

export default {
  name: 'Contact',
  components: {
    Banner,
    Spinner
  },
  data() {
    return {
      submitted: false,
      sending: false,
      message: '',
      showMessage: false,
      alert: 'alert-primary',
      contact: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  validations: {
    contact: {
      name: { required, maxLength: maxLength(32), isNameValid },
      email: { required, email},
      subject: { maxLength: maxLength(64), required },
      message: { maxLength: maxLength(256), required },
    }
  },
  methods: {
    sendMessage () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.submitted = true
        this.sending = true
        const { name, email, subject, message } = this.contact

        const msg = {
          to: 'info@tsavoseed.com',
          from: email,
          subject,
          text:`${message}\n\n${name}`,
        }
        sgMail
          .send(msg)
          .then(() => {
            this.sending = false
            this.message = 'Your message has been sent'
            this.showMessage = true
            this.alert = 'alert-success'
          })
          .catch((error) => {
            console.error(error)
            this.sending = false
            this.message = 'Your message has not been sent, please try again'
            this.showMessage = true
            this.alert = 'alert-danger'
          })
      }
    }
  }
}
</script>
<style lang="css" scoped>
.contact-left .error, .contact-right .error {
	border: 1px solid red;
}
</style>