<template>
  <section id="advantages">
    <div class="container">
      <h2 class="title title--center">{{page.advantages_title}}</h2>
      <p class="text text--small text--grey text--center">{{page.advantages_description}}</p>
      <div class="advantages__holder">
        <div v-for="(advantage, key) in page.advantages" :key="key" class="advantage">
          <div class="advantage__before">
            {{'0' + (key + 1)}}
          </div>
          <div class="advantage__content">
            <figure class="advantage__img">
              <img :src="advantage.image" alt="">
            </figure>
            <div class="advantage__text">
              <h3 class="title title--center">{{advantage.heading}}</h3>
              <p class="text text--center text--small text--grey">{{advantage.description}}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['page']
}
</script>
<style lang="scss" scoped>
  #advantages {
    background: #F2F2F3;
  }
  .advantages__holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4rem;
    .advantage {
      box-shadow: 0px 3px 20px -5px rgba(0,0,0,0.15);
      min-width: 10rem;
      max-width: 18rem;
      background-color: #fff;
      border-radius: 5px;
      margin: 4rem 0rem 1rem;
      position: relative;
      z-index: 1;
      @media screen and (min-width: 40rem) {
        margin: 1rem;
      }
      .advantage__before {
        z-index: -1;
        position: absolute;
        top: -3rem;
        right: -2rem;
        color: #C8CDD0;
        font-weight: bold;
        font-size: 6rem;
        @media screen and (min-width: 40rem) {
          font-size: 4rem;
          top: -2rem;
          right: auto;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      // .advantage__content {
      //   position: relative;
      //   z-index: 2;
      // }
      .advantage__img {
        border-radius: 5px 5px 0 0;
        max-height: 10rem;
      }
      .advantage__text {
        padding: 1.5rem 1.5rem 2rem;
      }
    }
  }
</style>
