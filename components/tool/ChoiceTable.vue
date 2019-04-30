<template>
  <div class="choices">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th v-for="(val, key) in longest">Choice {{val}}</th>
         </tr>
      </thead>
      <tbody>
        <tr v-for="(obj, key) in data" :key="key + '-parent'">
          <td>{{obj.ID}}</td>
          <td v-if="obj.choices.length !== longest" v-for="(val, subkey) in longest" :key="subkey + '-not-full'" :class="obj.choices[subkey] ? '' : 'null'">{{obj.choices[subkey] ? obj.choices[subkey] : 'null'}}</td>
          <td v-else v-for="(choice, subkey) in obj.choices" :key="subkey + '-full'">{{choice}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import helper from '~/components/helpers/helpers.js'
export default {
  props: ['data'],
  computed: {
    longest() {
      return helper.calcLongest(this.data)
    }
  }
}

</script>

<style lang="scss">
  .choices {
    overflow-x: scroll;
  }
  table {
    margin-top: 1rem;
    border-collapse: collapse;
    // width: 100%;
    background-color: #fff;
  }
  table, th, td {
    border: 1px solid #C8CDD0;
    padding: 0.5rem 1rem;
  }
  th {
    background-color: #C8CDD0;
    text-align: left;
    // color: #fff;
  }
  td {
    border-color: #f2f2f3;
    &.null {
      color: #DEDEDE;
    }
  }
</style>
