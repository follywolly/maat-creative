<template>
  <div class="choice full">
    <div class="embed-container" @click="emit" :data-value="post.acf.choice_one.value">
      <div class="choice__text-holder">
        <h2 class="choice__category">{{post.acf.choice_one.category}}</h2>
        <h3 class="choice__description">{{post.acf.choice_one.description}}</h3>
      </div>
      <video :src="format(post.acf.choice_one.video)" autoplay preload playsinline muted loop width="100%" height="auto"></video>
      <!-- <iframe :src="format(post.acf.video_1)" width="100%" height="auto" frameborder="0" allowfullscreen></iframe> -->
    </div>
    <div class="embed-container" @click="emit" :data-value="post.acf.choice_two.value">
      <div class="choice__text-holder">
        <h2 class="choice__category">{{post.acf.choice_two.category}}</h2>
        <h3 class="choice__description">{{post.acf.choice_two.description}}</h3>
      </div>

      <video :src="format(post.acf.choice_two.video)" autoplay preload playsinline muted loop width="100%" height="auto"></video>
      <!-- <iframe :src="format(post.acf.video_2)" width="100%" height="auto" frameborder="0" allowfullscreen></iframe> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChoiceVideo',
  props: ['post'],
  methods: {
    format(url) {
      return url
      // return url.replace('/watch?v=', '/embed/') + '?&mute=1&autoplay=1&controls=0&disablekb=1&loop=1&playsinline=1&modestbranding=1'
    },
    emit(e) {
      this.$emit('clicked', e.target.dataset.value)
    }
  }
}
</script>

<style lang="scss">
  .choice {
    overflow: hidden;
    display: block;
  }
  .choice__text-holder {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    padding: 4rem;
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
  .embed-container {
    cursor: pointer;
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
  @media screen and (min-width: 40rem) {
    .choice {
      display: flex;
    }
    .embed-container {
      width: 50%;
      height: 100vh;
      flex: 1;
      &:hover {
        flex: 1.1;
      }
    }
  }
	.embed-container video {
    pointer-events: none;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .choice.full {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: -2;
    pointer-events: none;
    opacity: 0;
    transition: all 0.3s;
  }
  .choice.full.active {
    z-index: 1;
    opacity: 1;
    pointer-events: all;
  }
</style>
