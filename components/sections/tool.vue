<template>
  <section id="tool">
    <div class="container">
      <h2 class="title title--center">{{page.tool_title}}</h2>
      <p class="text text--center text--small text--grey">{{page.tool_description}}</p>
      <div class="video-holder" v-if="page.tool_preview.length > 0">
        <choicevideo v-for="(preview, key) in page.tool_preview" :key="key" :data-choiceholder="key" :class="key === 0 ? 'active' : ''" :preview="page.tool_preview[key]" />
        <button @click="switchChoices" class="btn">switch!</button>
      </div>
    </div>
  </section>
</template>
<script>
import choicevideo from '~/components/choice-video.vue'
export default {
  components: {
    choicevideo
  },
  props: ['page'],
  data() {
    return {
      elements: [],
    }
  },
  mounted() {
    if (process.client) {
      this.elements = document.querySelectorAll('.choice')
    }
    this.loop = setInterval(()=> {
      this.switchChoices()
    }, 5000)
  },
  methods: {
    switchChoices() {
      if (process.client) {
        clearInterval(this.loop)
        const active = document.querySelector('.choice.active')
        const index = Number(active.dataset.choiceholder);
        active.classList.add('out')
        const next = this.elements[index + 1]
        if (next) {
          next.classList.add('active')
        } else {
          this.elements[0].classList.add('active')
        }
        setTimeout(() => {
          active.classList.remove('active')
          active.classList.remove('out')
          this.loop = setInterval(()=> {
            this.switchChoices()
          }, 5000)
        }, 1000)
      }

    }
  }
}
</script>
<style lang="scss" scoped>
  .video-holder {
    margin-top: 3rem;
    position: relative;
    height: 20rem;
    overflow: hidden;
    .btn {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 4;
    }
  }
</style>
