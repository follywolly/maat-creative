<template>
  <div class="choices">
    <choice-video v-for="(post, key) in posts" v-on:clicked="handleClick" :post="post" :id="'post-'+key" :key="key" :class="key === 0 ? 'active' : ''"/>
  </div>
</template>
<script>
import ChoiceVideo from '~/components/tool/ChoiceVideo.vue'
import {mapGetters} from 'vuex'

export default {
  layout: 'tool',
  components: {
    ChoiceVideo
  },
  data() {
    return {
      elements: [],
      index: 0
    }
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts'
    })
  },
  methods: {
    handleClick(choice) {
      if (typeof choice === 'number' || typeof choice === 'string') {
        this.$store.commit('updateChoices', choice)
      }
      if (this.elements.length === 0) {
        this.posts.forEach((p, i) => this.elements.push(document.querySelector(`#post-${i}`)))
      }
      this.index++
      if (this.elements[this.index]) {
        this.elements[this.index - 1].classList.remove('active')
        this.elements[this.index].classList.add('active')
      } else {
        this.$router.push({ path: './result' })
      }

    }
  },
  mounted() {
    console.log('mounted');
    const videos = document.querySelectorAll('video')
    videos.forEach(video => {
      video.addEventListener('loadeddata', () => {
        video.muted = true
        video.play()
      })
    })
  }
}
</script>
