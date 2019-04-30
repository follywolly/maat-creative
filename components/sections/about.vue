<template>
  <section id="about">
    <div class="container">
      <h2 class="title title--center">{{page.about_title}}</h2>
      <p class="text text--grey text--center">{{page.about_description}}</p>
    </div>
  </section>
</template>
<script>
export default {
  props: ['page']
}
</script>
