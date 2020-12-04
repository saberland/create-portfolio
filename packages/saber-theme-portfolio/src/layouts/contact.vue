<template>
  <div class="wrap">
    <div class="container">
      <HomeProfile />
      <div class="main">
        <div class="columns">
          <div class="column is-8">
            <h2 class="page-title">
              {{ page.attributes.title }}
            </h2>
            <form
              name="Contact Form"
              method="POST"
              data-netlify="true"
              :action="$themeConfig.contactForm.formSubmitRedirect"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <TextField label="Your Name" type="text" name="name" />
              <TextField label="Your Email" type="email" name="email" />
              <TextArea label="Your Message" type="text" name="message" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeProfile from '../components/HomeProfile.vue'
import TextField from '../components/TextField.vue'
import TextArea from '../components/TextArea.vue'

export default {
  components: {
    HomeProfile,
    TextField,
    TextArea
  },
  props: ['page'],
  head() {
    return {
      title: ''
        .concat(this.page.attributes.title, ' - ')
        .concat(this.$siteConfig.title),
      meta: [
        {
          property: 'og:title',
          content: this.$siteConfig.title
        },
        {
          property: 'og:description',
          content: this.$siteConfig.description
        },
        {
          property: 'og:image',
          content: this.$themeConfig.profilePicture
        }
      ]
    }
  }
}
</script>

<style scoped>
button {
  width: 80px;
  height: 40px;
  cursor: pointer;
  border: 1px solid var(--hover-border-color);
  border-radius: 3px;
  background: var(--card-bg);
  color: var(--text-color);
}
button:hover {
  border: 2px solid var(--hover-border-color);
  border-radius: 3px;
}
</style>
