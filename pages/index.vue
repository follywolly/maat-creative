<template>
  <div id="home">
    <siteheader />
    <div class="parallax">
      <div class="parallax__layer parallax__layer--back">
        <div class="video-holder" v-if="data.acf.tool_preview.length > 0">
          <choicevideo :data-choiceholder="0" class="active" :preview="data.acf.tool_preview[0]" />
        </div>
      </div>
      <main class="parallax__layer parallax__layer--base" id="root">
        <landing :page="data.acf" />
        <about :page="data.acf" />
        <advantages :page="data.acf" />
        <tool :page="data.acf" />
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
import choicevideo from '~/components/choice-video.vue'


export default {
  components: {
    siteheader,
    landing,
    about,
    tool,
    advantages,
    contact,
    sitefooter,
    choicevideo
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
  // padding-top: 2.5rem;
  transform: translateZ(0);
}
.parallax__layer--back {
  transform: translateZ(-1px) scale(2.1);
  .choice.active {
    .embed-container {
      transition: none;
      height: 50vh;
      &:nth-of-type(2) {
        top: 50vh;
      }
    }
    @media screen and (min-width: 40rem) {
      .embed-container {
        height: 100%;
        transform: translate(0,0);
        top: 0;
        &:nth-of-type(2) {
          top: 0;
        }

      }
    }
  }
  .choice__text-holder {
    display: none;
  }

}
</style>
