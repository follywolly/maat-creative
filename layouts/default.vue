<template>
  <div>
    <nuxt />
    <loader />
  </div>
</template>

<script>
import loader from '~/components/loader.vue'
import data from '~/components/helpers/data.js'

export default {
  head() {
    return {
      script: [
        {src: 'https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.0.0/dist/lazyload.min.js'}
      ]
    }

  },
  components: {
    loader
  },
  async mounted() {
    if (process.browser) {
      const lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
      })
    }
    let check = this.$store.state.pages
    if (check.length === 0) {
      const pages = await data.getPages()
      this.$store.commit('setPages', pages)

      // this.$store.commit('setLoading', false)
    }
    check = this.$store.state.posts
    if (check.length === 0) {
      // this.$store.commit('setLoading', true)
      const posts = await data.getPosts()
      this.$store.commit('setPosts', posts)
      // this.$store.commit('setLoading', false)
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
accent: #ce0472;
*/

html {
  font-family: sans-serif;
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  color: #292929;
  overflow-x: hidden;
}
section {
  background-color: white;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
figure {
  max-width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #C8CDD0;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container {
  padding: 6rem 3rem;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
}
.title, .text {
  max-width: 30rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.4;
}
.title {
  font-size: 1.5rem;
  @media screen and (min-width: 40rem){
    font-size: 2rem;
  }
  &:focus {
    color: red;
  }
  &--light {
    color: #fff;
  }
  &--center {
    text-align: center;
  }
}
.subtitle {
  font-weight: lighter;
  font-size: 1rem;
  @media screen and (min-width: 40rem){
    font-size: 1.125rem;
  }
  margin: .75rem 0;
  &--light {
    color: #fff;
  }
  &--center {
    text-align: center;
  }
}
.text {
  font-size: 1rem;
  @media screen and (min-width: 40rem){
    font-size: 1.125rem;
  }
  &--small {
    font-weight: lighter;
    font-size: .875rem;
    @media screen and (min-width: 40rem){
      font-size: 1rem;
    }
  }
  &--grey {
    color: #415058;
  }
  &--center {
    text-align: center;
  }
}
.full {
  overflow-x: hidden;
  background-color: white;
  transition: all 0.3s;
}
.center {
  display: flex;
  justify-content: center;
  &--vertical {
    align-items: center;
    flex-direction: column;
  }
}
.btn {
  font-family: inherit;
  appearance: none;
  border: 0;
  background: 0;
  padding: 0.75rem 2rem;
  background: linear-gradient(to right, #ff9966, #ff5e62);
  // background: linear-gradient(to right, #fc4cac, #ce0472);
  // background: #ce0472;
  border-radius: 2rem;
  text-decoration: none;
  color: white;
  font-size: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: table;
  text-transform: lowercase;
  cursor: pointer;
  transition: all 0.3s;
  @media screen and (min-width: 40rem) {
    font-size: 1.125rem;
  }
  &--center {
    margin-left: auto;
    margin-right: auto;
  }
  &--secondary {
    background: transparent;
    color: #415058;
    border-bottom: 1px solid #415058;
    border-radius: 0;
    transition: all 0.3s;
    padding-left: .5rem;
    padding-right: .5rem;
    &:hover {
      background-color: #415058;
      color: #fff;
      padding-left: 1.75rem;
      padding-right: 1.75rem;
      // border-radius: 25px;
    }
  }
}
.title {
  line-height: 1.4;
  margin-bottom: 1.5rem;
  margin-top: 0;
  font-size: 2rem;
  font-weight: bold;
  &--pre {
    font-size: .875rem;
  }

}
input {
  font-family: inherit;
  font-size: 1rem;
  appearance: none;
  border: 0;
  background: 0;
  padding: 0.75rem 1.25rem;
  background-color: white;
}
</style>
