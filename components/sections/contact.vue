<template>
  <section id="contact">
    <div class="container">
      <h2 class="title title--center">{{page.contact_title}}</h2>
      <p class="text text--small text--grey text--center">{{page.contact_description}}</p>
      <a v-if="page.contact_button" class="btn btn--center" :href="`mailto:${email}`">{{page.contact_button.text}}</a>
    </div>
  </section>
</template>
<script>
export default {
  props: ['page'],
  data() {
    return {
      email: ''
    }
  },
  mounted(){
    if (process.browser) {
      this.$watch('page', page => {
        this.email = page.contact_button.email
      }, {immediate:true})
    }
  }
  // computed: {
  //   email() {
  //     if (process.browser) {
  //       return this.page.contact_button.email
  //     }
  //     return ''
  //   }
  // }
}
</script>
<style lang="scss" scoped>
#contact p {
  margin-bottom: 3rem;
}
</style>
