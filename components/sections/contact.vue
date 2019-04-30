<template>
  <section id="contact">
    <div class="left">
      <div class="container">
        <h2 class="title">{{page.contact_title}}</h2>
        <p class="text text--grey">{{page.contact_description}}</p>
        <a v-if="page.contact_button" class="btn" :href="`mailto:${email}`">{{page.contact_button.text}}</a>
        <div class="socials-holder">
          <a class="social-link" href="https://www.linkedin.com/company/maat-creative-amsterdam/">linkedin</a>
          <a class="social-link" href="https://www.facebook.com/Maatcreative/">facebook</a>
          <a class="social-link" href="https://www.instagram.com/maat.creative/">instagram</a>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="images-holder">
        <figure>
          <img class="lazy" data-src="/images/peet.jpg" alt="">
        </figure>
        <figure>
          <img class="lazy" data-src="/images/renzo.jpg" alt="">
        </figure>
        <figure>
          <img class="lazy" data-src="/images/patrick.jpg" alt="">
        </figure>
        <figure>
          <img class="lazy" data-src="/images/folkert.jpg" alt="">
        </figure>
        <h3>Peet Neunzig</h3>
        <h3>Renzo van der Spiegel</h3>
        <h3>Patrick van der Veldt</h3>
        <h3>Folkert-Jan van der Pol</h3>
      </div>
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
}
</script>
<style lang="scss" scoped>
#contact p {
  margin-bottom: 3rem;
}
#contact {
  // padding-bottom: 3rem;
  padding-bottom: 0;
  .socials-holder {
    padding-top: 1rem;
  }
  .social-link {
    text-decoration: none;
    color: #343434;
    transition: all 0.3s;
    &:visited {
      color: #cecece;
    }
    &:hover {
      color: #000;
    }
  }
  .images-holder {
    width: 100%;
    height: 50vh;
    position: relative;
    overflow: hidden;
    h3 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      font-family: inherit;
      font-size: 2rem;
      color: white;
      padding: 1rem;
      animation: fade 8s infinite;
      opacity: 0;
      @media screen and (min-width: 40rem) {
        padding: 3rem;
      }
      &:nth-of-type(2) {
        animation-delay: 2s;
      }
      &:nth-of-type(3) {
        animation-delay: 4s;
      }
      &:nth-of-type(4) {
        animation-delay: 6s;
      }
    }
    figure {
      position: absolute;
      top: 50vh;
      left: 0;
      width: 100%;
      height: 50vh;
      display: block;
      animation: slidemin 8s infinite;
      vertical-align: top;
      img {
        vertical-align: top;
      }
      &:nth-of-type(2) {
        animation-delay: 2s;
      }
      &:nth-of-type(3) {
        animation-delay: 4s;
      }
      &:nth-of-type(4) {
        animation-delay: 6s;
      }
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title, .text {
      margin-left: 0;
    }
  }
  @media screen and (min-width: 40rem) {
    display: flex;
    .left, .right {
      width: 50%;
    }
    .images-holder {
      height: 100vh;
      figure {
        height: 100vh;
        top: 100vh;
        animation: slidemax 8s infinite;
      }
    }
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    25% {
      opacity: 1;
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes slidemax {
    0% {
      transform: translateY(0)
    }
    5% {
      transform: translateY(-100vh)
    }
    25% {
      transform: translateY(-100vh)
    }
    30% {
      transform: translateY(-200vh)
    }
    100% {
      transform: translateY(-200vh)
    }
  }
  @keyframes slidemin {
    0% {
      transform: translateY(0)
    }
    5% {
      transform: translateY(-50vh)
    }
    25% {
      transform: translateY(-50vh)
    }
    30% {
      transform: translateY(-100vh)
    }
    100% {
      transform: translateY(-100vh)
    }
  }
}
</style>
