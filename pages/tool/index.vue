<template>
  <div id="start" class="full start active center center--vertical" :style="page ? `background-image: url(${page.acf.header_image})` : ''">
    <div class="container" v-if="page">
      <h2 class="title title--pre">{{page.acf.pre_title}}</h2>
      <h3 class="title">{{page.acf.title}} <span>{{page.acf.subtitle}}</span></h3>
      <router-link class="btn btn--center" :to="page.acf.button.link">{{page.acf.button.text}}</router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
import data from '~/components/helpers/data.js'
  export default {
    layout: 'tool',
    
    computed: {
      page() {
        return this.$store.getters.getPage('Start')
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
  #start {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: rgba(0,0,0,0.5);
      content: "";
    }
    .container {
      padding-top: 0;
      padding-bottom: 0;
      z-index: 1;
    }
    .title {
      color: #fff;
    }
  }
</style>
