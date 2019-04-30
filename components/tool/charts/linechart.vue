<template>
  <div class="ct-chart ct-golden-section" :id="`linechart-${identifier}`"></div>
</template>
<script>
export default {
  props: ['data', 'identifier'],
  mounted() {
    if (process.browser) {
      this.$watch('data', this.drawChart, {immediate:true})
    }
  },
  methods: {
    drawChart(data) {
      if (data.length === 0 || this.identifier === null) return
      const Chartist = require('chartist')
      new Chartist.Line(`#linechart-${this.identifier}`, {
        labels: [1, 2, 3, 4],
        series: [[100, 120, 180, 200]]
      })
    }
  }
}
</script>
<style lang="scss">

</style>
