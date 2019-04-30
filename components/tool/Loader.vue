<template>
  <div :class="loading ? 'loader center center--vertical active' : 'loader center center--vertical'">
    <h2 class="loader__heading">Maat<span>.</span></h2>
    <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
    <svg width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#cecece">
        <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)" stroke-width="2">
                <circle cx="5" cy="50" r="5">
                    <animate attributeName="cy"
                         begin="0s" dur="2.2s"
                         values="50;5;50;50"
                         calcMode="linear"
                         repeatCount="indefinite" />
                    <animate attributeName="cx"
                         begin="0s" dur="2.2s"
                         values="5;27;49;5"
                         calcMode="linear"
                         repeatCount="indefinite" />
                </circle>
                <circle cx="27" cy="5" r="5">
                    <animate attributeName="cy"
                         begin="0s" dur="2.2s"
                         from="5" to="5"
                         values="5;50;50;5"
                         calcMode="linear"
                         repeatCount="indefinite" />
                    <animate attributeName="cx"
                         begin="0s" dur="2.2s"
                         from="27" to="27"
                         values="27;49;5;27"
                         calcMode="linear"
                         repeatCount="indefinite" />
                </circle>
                <circle cx="49" cy="50" r="5">
                    <animate attributeName="cy"
                         begin="0s" dur="2.2s"
                         values="50;50;5;50"
                         calcMode="linear"
                         repeatCount="indefinite" />
                    <animate attributeName="cx"
                         from="49" to="49"
                         begin="0s" dur="2.2s"
                         values="49;5;27;49"
                         calcMode="linear"
                         repeatCount="indefinite" />
                </circle>
            </g>
        </g>
    </svg>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        loading: 'isLoading'
      })
    }
  }
</script>
<style lang="scss" scoped>
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #292929;
    color: black;
    z-index: -3;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    &.active {
      z-index: 10;
      opacity: 1;
      pointer-events: all;
    }
    .loader__heading {
      color: #fff;
      font-size: 2rem;
      margin-bottom: 2rem;
      span {
        color: #ff5e62;
      }
    }
  }
</style>
