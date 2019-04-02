<template>
  <section id="landing">
    <div class="landing-holder">
    <!-- <div class="landing-holder" :style="'background-image: url(' + page.background_image + ');'"> -->
      <div class="container">
        <h2 class="title title--light title--center">{{page.title}}</h2>
        <h3 class="subtitle subtitle--light subtitle--center">{{page.subtitle}}</h3>
        <a class="btn scroll-link" href="#about">learn more</a>
      </div>
    </div>
    <a class="scroll-link scroll-button" href="#about" aria-hidden="true">
      <div class="scroller">
      </div>
    </a>
  </section>
</template>
<script>
export default {
  props: ['page']
}

</script>
<style lang="scss" scoped>
.scroll-button {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  height: 1.5rem;
  width: 6px;
  overflow: hidden;
  .scroller {
    content: "";
    display: block;
    background-color: white;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    animation: scroll 1.5s linear infinite;
    // position: absolute;
    // top: 0;
  }
}
@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 0;
    transform: translateY(1rem);
  }
  100% {
    opacity: 0;
    transform: translateY(1rem);
  }
}
#landing {
  background-color: transparent;
  position: relative;
}
.landing-holder {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  &::before, &::after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    content: "";
  }
  &::after {
    background: rgba(0,0,0,0.5);
  }
  &::before {
    filter: blur(2px);
    background: inherit;
  }
  .container {
    z-index: 2;
  }
  h2 {
    color: #fff;
  }
  .btn {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
