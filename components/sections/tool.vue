<template>
  <section id="tool">
    <div class="container">
      <h2 class="title title--center">{{page.tool_title}}</h2>
      <p class="text text--center text--grey">{{page.tool_description}}</p>
      <div class="video-holder" v-if="page.tool_preview.length > 0">
        <choicevideo v-for="(preview, key) in page.tool_preview" :key="key" :data-choiceholder="key" :class="key === 0 ? 'active' : ''" :preview="page.tool_preview[key]" />
      </div>
      <a class="btn btn--center" :href="page.tool_link.link" :aria-label="page.tool_link.aria">{{page.tool_link.text}}</a>
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
      this.elements = document.querySelectorAll('#tool .choice')
    }
    this.loop = setInterval(()=> {
      this.switchChoices()
    }, 5000)
  },
  methods: {
    switchChoices() {
      if (process.client) {
        clearInterval(this.loop)
        let active = document.querySelector('#tool .choice.active')
        if (!active) {
          active = document.querySelectorAll('#tool .choice')[0]
        } else {
          active.classList.add('out')
        }
        const index = Number(active.dataset.choiceholder);
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
  .btn__choice {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
}
.btn {
  margin-top: 3rem;
}

</style>
