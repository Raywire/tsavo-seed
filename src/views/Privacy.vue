<template>
  <div>
    <Banner />
    <section class="contact py-5">
      <div class="container py-sm-3">
        <h3 class="heading mb-sm-5 mb-4 text-center">{{ company }} Privacy Policy</h3>
        <div class="row map-pos">
          <div class='cd-section liststyle cd-placeholder-2'>
            <h2>Introduction</h2>
            <p>
              Welcome to {{ company }}!
              Thank you for choosing {{ company }}.

              {{ company }} is conscious of taking and using your personal information.

              This page is dedicated to Privacy Policy: how {{ company }} collects, uses and keeps any information it has got from you.

              Please, take a few minutes to familiarize yourself with {{ company }} Privacy Policy.
            </p>

            <h2>The information type {{ company }} asks </h2>

            <p>
              When you use {{ company }} website or {{ company }} mobile apps , {{ company }} collects information about you.

              E-mail address and location is enough for website. You may be asked to provide more of your personal information for services: first and last names and/or your location.
            </p>

            <h2>
              How {{ company }} uses your information
            </h2>

            <p>
              The information collected by {{ company }} is needed for creating location priority, advertising events and delivering the best experience. {{ company }} also uses your data for sending you the latest {{ company }} news. However, you can easily unsubscribe from news and events of the newsletter. But please, remember that your E-mail is required in case of further assistance.
            </p>

            <h2>Disclosure to Third Parties and Third-part sites </h2>

            <p>
              {{ company }} does not disclose any of your information to Third Parties, neither names nor even E-mail addresses. It stays secure. The exception consists of the location, which provides analytics.

              Though the personal information may be necessary for a litigation or trial. In this case {{ company }} has to provide your data according to the law.
            </p>

            <h2>Copyrights protection</h2>

            <p>

              These organisers, who’d like to start advertising events via {{ company }}, should send event information for preliminary {{ company }} check and moderation. {{ company }} administration takes control under the intellectual property usage and does not use the posters for other purposes other than those intended for advertising an event.

              If you think {{ company }} somehow violates copyright law, please send a notification to {{ company }} using a feedback form . Such trouble notes are always being considered primarily by {{ company }} administration.
            </p>

            <h2>Cookie files and Google Webmaster Tools</h2>

            <p>
              {{ company }} uses Google Analytics, services belonging to Google Inc. Both of them use cookie files for user behavior analysis.

              All the data collected with the helping of cookie files is being sent and saved to Google servers. Google uses this information for making an advertisment. Google can disclose your personal information upon to law enforcement request (Learn more)

              If you still have any questions or concerns please feel free to contact the {{ company }} team.
            </p>

            <h2>{{ company }}'s details </h2>
            <p>
              You can contact {{ company }} by email at <a :href="`mailto:${email}`">{{ email }}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from '@/components/layouts/Banner'
export default {
  name: 'Privacy',
  components: {
    Banner
  },
  data() {
    return {
      email: 'info@tsavoseed.com',
      company: 'Tsavo Seed'
    }
  }
}
</script>

<style scoped>
h2 {
  padding: 16px
}
p {
  text-align: justify;
  padding: 16px
}
</style>
