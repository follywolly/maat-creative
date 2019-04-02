<template>
  <div class="choice full">
    <div class="embed-container choice_one">
      <div class="choice__text-holder">
        <h2 class="choice__category">{{preview.choice_one.category}}</h2>
        <h3 class="choice__description">{{preview.choice_one.description}}</h3>
      </div>
      <video :src="format(preview.choice_one.video)" autoplay preload playsinline muted loop width="100%" height="auto"></video>
      <!-- <iframe :src="format(post.acf.video_1)" width="100%" height="auto" frameborder="0" allowfullscreen></iframe> -->
    </div>
    <div class="embed-container choice_two">
      <div class="choice__text-holder">
        <h2 class="choice__category">{{preview.choice_two.category}}</h2>
        <h3 class="choice__description">{{preview.choice_two.description}}</h3>
      </div>

      <video :src="format(preview.choice_two.video)" autoplay preload playsinline muted loop width="100%" height="auto"></video>
      <!-- <iframe :src="format(post.acf.video_2)" width="100%" height="auto" frameborder="0" allowfullscreen></iframe> -->
    </div>
  </div>
</template>

<script>

export default {
  props: ['preview'],
  methods: {
    format(url) {
      return url
      // return url.replace('/watch?v=', '/embed/') + '?&mute=1&autoplay=1&controls=0&disablekb=1&loop=1&playsinline=1&modestbranding=1'
    },
  }
}
</script>

<style lang="scss">
  .choice {
    overflow: hidden;
    display: block;
    pointer-events: none;
    z-index: -2;
    &.full {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 0;
      opacity: 1;
      background-color: transparent;
    }
    &.active {
      pointer-events: all;
      z-index: 1;
      .choice_one {
        // opacity: 1;
        transform: translateY(20rem);
      }
      .choice_two {
        // opacity: 1;
        transform: translateY(-20rem);
      }
    }
    &.out {
      z-index: 0;
      .choice_one {
        transform: translateY(40rem);
        // opacity: 1;
      }
      .choice_two {
        transform: translateY(-40rem);
        // opacity: 1;
      }
    }
    .choice_one, .choice_two {
      position: absolute;
      top: -20rem;
      left: 0;
      // opacity: 0;
      transition: all 1s;
    }
    .choice_two {
      bottom: -20rem;
      right: 0;
      left: auto;
      top: auto;
    }
    .choice__text-holder {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      bottom: 0;
      padding: 2rem;
      background-color: transparent;
    }
    .choice__description, .choice__category {
      color: #fff;
      font-size: 1.5rem;
      margin-top: .5rem;
    }
    .choice__category {
      font-size: 1rem;
      font-weight: normal;
      margin-bottom: 0;
    }
  }
  .embed-container {
    // cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    height: 50vh;
    transition: all 0.6s;
    &::before {
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      position: absolute;
      content: "";
      background: linear-gradient(to bottom, rgba(0,0,0,.6) 0%,rgba(0,0,0,0) 60%);
    }
  }
  .embed-container video {
    pointer-events: none;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 40rem) {
    .choice {
      display: flex;
    }
    .embed-container {
      width: 50%;
      height: 20rem;
      flex: 1;
      &:hover {
        flex: 1.1;
      }
    }
  }

</style>
