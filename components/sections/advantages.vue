<template>
  <section id="advantages">

      <!-- <h2 class="title title--center">{{page.advantages_title}}</h2>
      <p class="text text--small text--grey text--center">{{page.advantages_description}}</p> -->
      <div class="advantages__holder">
        <div v-for="(advantage, key) in page.advantages" :key="key" class="advantage">
          <div class="advantage__img-holder">
            <figure class="advantage__img">
              <img class="lazy" :data-src="advantage.image" alt="">
            </figure>
          </div>
          <div class="advantage__text">
            <h3 class="title">{{advantage.heading}}</h3>
            <p class="text text--grey">{{advantage.description}}</p>
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
    .advantage {
      background-color: #fff;
      position: relative;
      z-index: 1;

      padding: 6rem 3rem;
      @media screen and (min-width: 40rem) {
        padding: 8rem;
        display: flex;
        align-items: center;
      }
      .advantage__img-holder {
        flex: 1;
        margin-bottom: 3rem;
        box-shadow: 0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.10);
        @media screen and (min-width: 40rem) {
          margin-bottom: 0;
        }
        .advantage__img {
          max-height: 20rem;
        }

      }
      .advantage__text {
        @media screen and (min-width: 40rem){
          padding-left: 4rem;
        }
        text-align: left;
        flex: 1;
      }
      &:nth-of-type(odd) {
        background-color: #F8F9F9;
        .advantage__text {
          @media screen and (min-width: 40rem){
            padding-left: 0;
            padding-right: 4rem;
            order: -1;
          }
        }
      }
    }
  }
</style>
