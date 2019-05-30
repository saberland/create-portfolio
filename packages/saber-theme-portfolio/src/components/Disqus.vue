<template>
  <div id="disqus_thread"></div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    permalink: {
      type: String,
      required: true
    },
    shortname: {
      type: String,
      required: true
    }
  },

  mounted() {
    const { permalink, url } = this
    window.disqusConfig = function() {
      this.page.url = `${url}${permalink}`
      this.page.identifier = permalink
    }

    const script = document.createElement('script')
    script.async = true
    script.src = `https://${this.shortname}.disqus.com/embed.js`
    script.setAttribute('data-timestamp', Number(new Date()))
    document.body.append(script)
  }
}
</script>
