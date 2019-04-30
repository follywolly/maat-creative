<template>
  <div class="tool">
    <nuxt />
    <loader />
  </div>
</template>

<script>
import loader from '~/components/tool/loader.vue'
import data from '~/components/helpers/data.js'

export default {
  components: {
    loader
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
.tool {
  .full {
    min-height: 100vh;
  }
  .title {
    max-width: 100%;
  }
  .container {
    max-width: 100%;
  }
}

</style>
