<template>
  <div id="end" class="full end">
    <section v-if="page" class="header" :style="`background-image: url(${ page.acf.header_image });`">
      <div class="container">
        <h2 class="title header__title header__title--pre">{{ page.acf.pre_title }}</h2>
        <h3 class="title header__title">{{ page.acf.title }} <span>{{ page.acf.subtitle }}</span></h3>
      </div>
    </section>
    <section v-if="page" class="body">
      <div class="container">
        <h2 class="title body__title body__title--pre">{{ page.acf.body_pre_title }}</h2>
        <h3 class="title body__title">{{ page.acf.body_title }}</h3>
        <ol class="results">
          <li class="results__item" v-for="(choice, key) in choices" :key="key">
            <div>
              <figure>
                <img :src="page.acf.header_image" alt="">
              </figure>
              <div class="content">
                {{ key + 1 }}. {{ choice }}
              </div>
            </div>
          </li>
        </ol>
        <div class="user-input" v-if="page.acf.user_text_input">
          <form @submit="handleInput">
            <input v-model="input" type="email" name="" value="" :placeholder="page.acf.user_text_input_placeholder">
          </form>
          <a class="btn" id="user-input-button" :href="page.acf.button.link + input">{{page.acf.button.text}}</a>
        </div>
        <a v-else class="btn" :href="page.acf.button.link">{{page.acf.button.text}}</a>
        <!-- <button class="btn" @click="handlePost">Post results to api</button> -->
        <div class="feedback">
          <div class="error" v-if="error">
            <p>{{error}}</p>
          </div>
          <div class="loading" v-if="loading">
            <p>Loading...</p>
          </div>
          <div class="success" v-if="success">
            <p>Done!</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import config from '~/components/config/secrets.js'

export default {
  layout: 'tool',

  data() {
    return {
      choices: ['romantiek', 'actief', 'passief'], //this.$store.state.choices
      input: '',
      error: '',
      loading: false,
      success: false
    }
  },
  computed: {
    page() {
      return this.$store.getters.getPage('Result')
    }
  },
  mounted() {
    this.handlePost()
  },
  methods: {
    handleInput(e) {
      e.preventDefault()
      document.querySelector('#user-input-button').click()
    },
    handlePost(e) {
      // if (this.choices.length === 0) {
      //   return
      // }
      // const url = `${config.blend.api}wp-json/maat/v1/choices`
      // fetch(url, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({choices: this.choices})
      // })
      // .then(() => console.log('api posted'))
      // .catch(err => {
      //   console.error('api error: ', err);
      // })
    }
  }
}

</script>

<style lang="scss" scoped>
#end {
  &.full {
    display: flex;
    flex-direction: column;
  }
  .container {
    padding-top: 0;
    padding-bottom: 0;
    z-index: 1;
  }

  .error, .success, .loading {
    color: #E23636;
    min-height: 1.5rem;
    overflow: hidden;
    margin: 0.5rem;
    p {
      margin: 0;
    }
  }
  .success {
    color: #292929;
  }
  .loading {
    color: #292929;
  }
  .header {
    padding: 5rem 0;
    background-size: cover;
    background-position: cover;
    background-repeat: no-repeat;
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      bottom: 0;
      background-color: rgba(0,0,0,0.4);
      content: "";
    }
  }
  .body {
    padding-top: 3rem;
    background-color: #efefef;
    flex: 1;
    padding-bottom: 6rem;
  }
  .title {
    line-height: 1.4;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
  .body__title {
    font-size: 1.25rem;
    color: #292929;
    &--pre {
      font-size: 0.875rem;
      font-weight: normal;
      text-transform: uppercase;
    }
  }
  .header__title {
    color: #fff;
    font-size: 1.5rem;
    position: relative;
    z-index: 1;
    color: #fff;
    line-height: 1.4;
    span {
      display: block;
    }
    &--pre {
      font-size: 0.875rem;
      font-weight: normal;
      text-transform: uppercase;
    }
  }
  .results {
    list-style-type: none;
    padding: 0;
    margin: 2rem 0 0;
    display: flex;
    flex-wrap: wrap;
    .results__item {
      // padding: 0.5rem 0.75rem;
      background-color: white;
      border-radius: 4px;
      margin: .5rem 1rem .5rem 0;
      box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.1);
      figure {
        border-radius: 4px 4px 0 0;
        max-width: 20rem;
        max-height: 10rem;
      }
      .content {
        padding: 1rem;
      }
    }
  }
  .user-input {
    padding-top: 3rem;
  }
}

</style>
