<template>
  <div id="home">
    <siteheader />
    <div class="parallax">
      <div class="parallax__layer parallax__layer--back">
        <img :src="data.acf.background_image" alt="">
      </div>
      <main class="parallax__layer parallax__layer--base" id="root">
        <landing :page="data.acf" />
        <about :page="data.acf" />
        <tool :page="data.acf" />
        <advantages :page="data.acf" />
        <contact :page="data.acf" />
        <sitefooter />
      </main>
    </div>

  </div>
</template>

<script>
import data from '~/components/helpers/data.js'
import siteheader from '~/components/siteheader.vue'
import landing from '~/components/sections/landing.vue'
import about from '~/components/sections/about.vue'
import tool from '~/components/sections/tool.vue'
import advantages from '~/components/sections/advantages.vue'
import contact from '~/components/sections/contact.vue'
import sitefooter from '~/components/sitefooter.vue'


export default {
  components: {
    siteheader,
    landing,
    about,
    tool,
    advantages,
    contact,
    sitefooter
  },
  computed: {
    data() {
      return this.$store.getters.getPage('Home')
    }
  },
  async fetch({ store }) {
    let res = await data.getServerPages()
    return new Promise(resolve => {
      store.commit('setPages', res.data)
      store.commit('setLoading', false)
      resolve()
    })
  }
}
</script>

<style lang="scss">
.parallax {
  perspective: 1px;
  height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}
.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.parallax__layer--base {
  padding-top: 2.5rem;
  transform: translateZ(0);
}
.parallax__layer--back {
  transform: translateZ(-2px) scale(3.1);
}
</style>
