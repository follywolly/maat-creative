<template>
  <div>
    <adminheader />
    <nuxt class="nuxt-body" />
    <loader />
  </div>
</template>

<script>
import loader from '~/components/tool/loader.vue'
import data from '~/components/helpers/data.js'
import adminheader from '~/components/tool/admin-header.vue'

export default {
  head() {
    return {
      title: 'MAAT. tool dashboard',
      link: [
        { rel: 'stylesheet', href: '//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css'}
      ],
      script: [
        {src: '//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js'}
      ]
    }
  },
  components: {
    loader,
    adminheader
  },
  async mounted() {
    let check = this.$store.state.pages
    if (check.length === 0) {
      const pages = await data.getPages()
      this.$store.commit('setPages', pages)

      this.$store.commit('setLoading', false)
    }
    check = this.$store.state.posts
    if (check.length === 0) {
      this.$store.commit('setLoading', true)
      const posts = await data.getPosts()
      this.$store.commit('setPosts', posts)
      this.$store.commit('setLoading', false)
    }
  }
}
</script>

<style lang="scss">
/*
light gray: #F2F2F3;
med gray: #C8CDD0;
dark gray: #415058;
black: #292929;
*/
.nuxt-body {
  transition: opacity 0.3s;
  padding-top: 3rem;
  &.full {
    min-height: 100vh;
    background-color: #f2f2f3;
  }
  .title {
    max-width: 100%;
  }
  .container {
    max-width: 100%;
  }
  section {
    background-color: transparent;
  }
  @media screen and (min-width: 40rem) {
    padding-top: 0;
  }
}
.chart {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 20px -5px rgba(0,0,0,.15);
  // max-height: 15rem;
  max-width: 25rem;
  @media screen and (min-width: 40rem) {
    padding: 1.5rem;
  }
  h3 {
    text-align: center;
    margin-bottom: 1.5rem;
    @media screen and (min-width: 40rem) {
      text-align: left;
    }
  }
  .ct-chart {
    .ct-series {
      .ct-line, .ct-point {
        stroke: #ff5e62;
      }
    }
  }
}





</style>
