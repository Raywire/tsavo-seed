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
        <form @submit.prevent="sendMessage" novalidate>
          <div class="row">
            <div class="col-md-6 contact-left">
              <div class="form-group">
                <input v-model="contact.name" id="name" type="text" class="form-control" maxlength="64" :class="{ error: $v.contact.name.$error }" required>
                <label class="form-control-placeholder" for="name">Name</label>
                <span v-if="$v.contact.name.$dirty && !$v.contact.name.required" class="text-danger pt-2 small font-weight-bold">
                  Name is required
                </span>
                <span v-if="$v.contact.name.$dirty && !$v.contact.name.isNameValid" class="text-danger pt-2 small font-weight-bold">
                  Name must be valid
                </span>
              </div>
              <div class="form-group">
                <input v-model="contact.email" id="email" type="email" class="form-control" maxlength="64" :class="{ error: $v.contact.email.$error }" required>
                <label class="form-control-placeholder" for="email">Email</label>
                <span v-if="$v.contact.email.$dirty && !$v.contact.email.required" class="text-danger small font-weight-bold">
                  Email is required
                </span>
                <span v-if="$v.contact.email.$dirty && !$v.contact.email.email" class="text-danger small font-weight-bold">
                  Email must be valid
                </span>
              </div>
              <div class="form-group">
                <input v-model="contact.subject" id="subject" type="text" class="form-control" autocomplete="off" maxlength="64" :class="{ error: $v.contact.subject.$error }" required>
                <label class="form-control-placeholder" for="subject">Subject</label>
                <span v-if="$v.contact.subject.$dirty && !$v.contact.subject.required" class="text-danger pt-2 small font-weight-bold">
                  Subject is required
                </span>
              </div>
            </div>
            <div class="col-md-6 contact-right mt-md-0 mt-4">
              <div class="form-group">
                <textarea v-model="contact.message" id="message" class="form-control" maxlength="256" :class="{ error: $v.contact.message.$error }" required></textarea>
                <label class="form-control-placeholder" for="message">Message</label>
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
          <transition name="fade">
            <div v-if="message && showMessage" class="alert mt-4 font-weight-bold" :class="alert" role="alert">
              {{ message }}
              <button type="button" class="close" @click="showMessage = false" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </transition>
        </form>
        <!-- map -->
        <div class="map mt-5">
          <google-maps :coordinates="coordinates" :zoom="18"></google-maps>
        </div>
        <!-- //map -->
      </div>
    </section>
    <!-- //contact -->
  </div>
</template>

<script>
import { required, maxLength, helpers, email } from 'vuelidate/lib/validators'
import Banner from '@/components/layouts/Banner'
import Spinner from '../components/Spinner.vue'
import GoogleMaps from '../components/GoogleMaps.vue'

const isNameValid = helpers.regex('isUsernameValid', /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)

export default {
  name: 'Contact',
  components: {
    Banner,
    Spinner,
    GoogleMaps
  },
  data() {
    return {
      sending: false,
      message: '',
      showMessage: false,
      alert: 'alert-primary',
      contact: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      apiUrl: process.env.VUE_APP_API_URL,
      coordinates: '-1.1472, 36.959' //coordinates for Gicheha Farm Ltd.
    }
  },
  validations: {
    contact: {
      name: { required, maxLength: maxLength(32), isNameValid },
      email: { required, email, maxLength: maxLength(64)},
      subject: { maxLength: maxLength(64), required },
      message: { maxLength: maxLength(256), required },
    }
  },
  methods: {
    sendMessage () {
      this.$v.$touch()
      if (!this.$v.$invalid && !this.sending) {
        this.sending = true

        const data = this.contact

        const options = {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`${this.apiUrl}/api/send`, options)
            .then(res => res.json())
            .then(res => {
              if (res.success) {
                this.sending = false
                this.message = 'Your message has been sent'
                this.showMessage = true
                this.alert = 'alert-success'
                
                this.contact = {
                  name: '',
                  email: '',
                  subject: '',
                  message: ''
                }
                this.$v.$reset()
              } else {
                this.sending = false
                this.message = 'Your message has not been sent, please try again'
                this.showMessage = true
                this.alert = 'alert-danger'
              }
              })
            .catch(error => {
              this.sending = false
              this.message = `${error.message}, please try again`
              this.showMessage = true
              this.alert = 'alert-danger'
            })
      }
    }
  }
}
</script>
<style lang="css" scoped>
.form-control:focus {
  box-shadow: none;
  border-color: #80bdff;
  border-width: 1px;
}
.contact-left .error, .contact-right .error {
	border: 1px solid red;
}
.form-group {
  position: relative;
  margin-bottom: 1.8rem;
}

.form-control-placeholder {
  position: absolute;
  top: 0;
  padding: 7px 0 0 13px;
  transition: all 200ms;
  opacity: 0.5;
  font-weight: bold;
}

.form-control:focus + .form-control-placeholder,
.form-control:valid + .form-control-placeholder {
  font-size: 75%;
  transform: translate3d(0, -100%, 0);
  opacity: 1;
  color: black;
  font-weight: bold;
}

</style>