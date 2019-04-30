<template>
  <header :class="open ? 'admin__header open' : 'admin__header'">
    <div class="header__head">
      <h1 class="header-heading">Maat<span>.</span></h1>
      <button id="menu__toggle" @click="toggleMenu()">
        {{open ? 'close' : 'menu'}}
      </button>
    </div>
    <div class="header__body">
      <nav>
        <ul>
          <li><nuxt-link to="/admin">Dashboard</nuxt-link></li>
          <li><nuxt-link to="/admin/editor">Editor</nuxt-link></li>
          <li><nuxt-link to="/admin/data">Data</nuxt-link></li>
          <!-- <li><nuxt-link to="/admin">Mail</nuxt-link></li> -->
        </ul>
      </nav>
      <nuxt-link to="/tool" class="btn">See the tool</nuxt-link>
    </div>
    <div class="header__content-overlay" @click="toggleMenu()">
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleMenu() {
      this.open = !this.open
    }
  }
}

</script>
<style lang="scss">
  .admin__header {
    z-index: 2;
    position: fixed;
    top: 0;
    left: -12.5rem;
    width: 12.5rem;
    bottom: 0;
    // box-shadow: 3px 0px 20px -5px rgba(0,0,0,.15);
    display: flex;
    flex-direction: column;
    &.open {
      .header__body {
        transform: translateX(12.5rem);
      }
      .header__content-overlay {
        opacity: 1;
        pointer-events: all;
      }
      &+ .nuxt-body {
        transform: translateX(12.5rem);
        opacity: 0.5;
      }
    }
    .header__content-overlay {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100vw;
      z-index: -2;
      background-color: rgba(0,0,0,0.5);
      opacity: 0;
      transition: all 0.3s;
      content: "";
      pointer-events: none;
      @media screen and (min-width: 40rem) {
        display: none;
      }
    }
    .header__head {
      max-height: 50px;
      display: flex;
      justify-content: space-between;
      background-color: #292929;
      padding: 1rem;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      transition: all 0.3s;
      z-index: 1;
      @media screen and (min-width: 40rem) {
        justify-content: center;
        text-align: center;
        position: relative;
        top: auto;
        left: auto;
        width: auto;
      }
      .header-heading {
        font-size: 1.5rem;
        color: #fff;
        margin: 0;
        line-height: 0.5;
        margin-top: 4px;
        span {
          color: #ff5e62;
        }
      }

    }
    .header__body {
      background-color: #fff;
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      transition: all 0.3s;
      height: calc(100vh - 50px);
      z-index: 1;
      @media screen and (min-width: 40rem) {
        margin-top: 0;
      }
    }
    #menu__toggle {
      appearance: none;
      border: none;
      background: none;
      background: #292929;
      color: #fff;
      font-family: inherit;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s;
      @media screen and (min-width: 40rem) {
        display: none;
        pointer-events: none;
      }
    }
    nav {
      ul {
        list-style: none;
        padding: 0;
        li {
          padding: 0;
          margin: 0;
          a {
            transition: all 0.3s;
            display: block;
            color: #292929;
            text-decoration: none;
            padding: 1rem 1rem;
            border-bottom: 1px solid #f2f2f3;
            &.nuxt-link-exact-active {
              background: linear-gradient(to right, #ff9966, #ff5e62);
              color: white;
            }
          }
        }
      }
    }
    .btn {
      margin: auto 1rem 2rem;
      text-align: center;
    }
    @media screen and (min-width: 40rem) {
      left: 0;
      &+ .nuxt-body {
        padding-left: 12.5rem;
      }
    }
  }
</style>
