<template>
  <div id="admin" class="full admin">
    <section class="body">
      <div class="container">
        <h2 class="title">Dashboard</h2>
        <div class="chart">
          <h3>Choices</h3>
          <linechart :data="data" identifier="one"/>
        </div>
        <div class="feedback">
          <div class="error" v-if="error">
            <p>{{error}}</p>
          </div>
          <div class="loading" v-if="loading">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import config from '~/components/config/secrets.js'
import ChoiceTable from '~/components/tool/ChoiceTable.vue'
import linechart from '~/components/tool/charts/linechart.vue'

export default {
  layout: 'admin',
  components: {
    ChoiceTable,
    linechart
  },
  data() {
    return {
      error: '',
      loading: false,
      ids: 0
    }
  },
  computed: {
    ...mapGetters({
      data: 'getDashboard'
    })
  },
  mounted() {
    if (this.data.length === 0) return this.getData()
  },
  methods: {
    getData() {
      this.error = ''
      this.$store.commit('setLoading', true)
      const url = `${config.blend.api}wp-json/maat/v1/choices`
      fetch(url)
        .then(res => res.json())
        .then(res => {
          const format = res.map(obj => ({
            ...obj,
            choices: JSON.parse(obj.choices).choices
          }))
          return format
        })
        .then(formatted => {
          this.$store.commit('setDashboard', formatted)
          this.$store.commit('setLoading', false)
        })
        .catch(err => {
          this.$store.commit('setLoading', false)
          this.error = err
        })
    }
  }
}

</script>

<style lang="scss" scoped>
  .full {
    display: flex;
    flex-direction: column;
  }
  .error, .loading {
    color: #E23636;
    min-height: 1.5rem;
    overflow: hidden;
    margin: 0.5rem;
    p {
      margin: 0;
    }
  }
  .loading {
    color: #292929;
  }
</style>
