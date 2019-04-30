<template>
  <header>
    <h1 class="site-title">Maat<span>.</span></h1>
    <button id="menu-btn" @click="toggleMenu">{{ menu_text }}</button>
    <nav>
      <ul>
        <li><a class="scroll-link" href="#root">Home</a></li>
        <li><a class="scroll-link" href="#about">About</a></li>
        <li><a class="scroll-link" href="#advantages">Features</a></li>
        <li><a class="scroll-link" href="#tool">Tool</a></li>
        <li class="button"><a class="scroll-link" href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>


export default {
  data() {
    return {
      menu_open: false
    }
  },
  computed: {
    menu_text() {
      return this.menu_open ? 'close' : 'menu'
    }
  },
  methods: {
    toggleMenu() {
      this.menu_open = !this.menu_open
      const header = document.querySelector('header')

      if (this.menu_open) {
        header.classList.add('menu_open')
      } else {
        header.classList.remove('menu_open')
      }
    }
  },
  mounted() {
    if (process.browser) {
      const header = document.querySelector('header')
      const body = document.querySelector('.parallax')

      let { TweenLite } = require('gsap')
      let ScrollToPlugin =  require('gsap/ScrollToPlugin')
      const links = document.querySelectorAll('.scroll-link')
      const container = document.querySelector('.parallax')
      links.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault()
          const href = `#${e.target.href.split('#')[1]}`
          TweenLite.to(container, 0.6, {scrollTo: {y: href}})
          header.classList.remove('menu_open')
          this.menu_open = false
        })
      })


      body.addEventListener('scroll', () => {
        const distance = body.scrollTop
        if (distance > window.innerHeight - 30) {
          if (!header.classList.contains('background')) {
            header.classList.add('background')
          }
        } else {
          if (header.classList.contains('background')) {
            header.classList.remove('background')
          }
        }
      })
    }
  }
}

</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: white;
    padding: 1.25rem 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    height: 60px;
    // box-shadow: 0px 3px 20px -5px rgba(0,0,0,0.15);
    .site-title {
      text-transform: uppercase;
      font-size: 1.25rem;
      margin: 0;
      line-height: 0.25;
      margin-top: 3px;
      color: #fff;
      span {
        color: #ff5e62;

      }
    }
    &.menu_open {
      .site-title {
        color: #000;
      }
      background-color: white;
      nav {
        transform: translateX(-100vw);
      }
      #menu-btn {
        color: #000;
        &::before, &::after {
          background: #000;
          width: 20px;
          transform: translate(-50%, calc(-50% - 9px)) rotate(-45deg) ;
        }
        &::after {
          transform: translate(-50%, calc(-50% - 9px)) rotate(45deg) ;
        }
      }
    }
    #menu-btn {
      appearance: none;
      background: 0;
      border: 0;
      position: relative;
      padding: 0;
      margin: 0;
      outline: none;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      min-height: 35px;
      color: #fff;
      font-family: inherit;
      &::before, &::after {
        height: 1px;
        width: 30px;
        background: #fff;
        position: absolute;
        top: 50%;
        content: "";
        left: 50%;
        transform: translate(-50%, calc(-50% - 9px));
        transition: all 0.3s;
      }
      &::after {
        transform: translate(-50%, calc(-50% - 3px));
      }
      @media screen and (min-width: 50rem) {
        display: none;
      }
    }
    nav {
      // margin-left: 2rem;
      // overflow-x: scroll;
      position: absolute;
      top: 60px;
      right: -100vw;
      width: 100%;
      height: calc(100vh - 60px);
      background-color: white;
      transition: all 0.3s;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        list-style: none;
        padding: 2rem 0 6rem;
        align-items: center;
        li {
          margin: 0 .75rem;
          a {
            color: grey;
            font-size: 1rem;
            font-weight: lighter;
            text-decoration: none;
            transition: all 0.3s;
            &:hover {
              color: #ff5e62;
            }
          }
          &.button {
            border: 1px solid  #ff5e62;
            padding: 0.25rem 0.75rem;
            border-radius: 25px;
            &:hover {
              transition: all 0.3s;
              a {
                color: #fff;
              }
              background-color: #ff5e62;
            }
          }
        }

      }
      @media screen and (min-width: 50rem) {
        margin: 0;
        overflow-x: auto;
        position: static;
        top: auto;
        right: auto;
        background-color: transparent;
        height: auto;
        ul {
          flex-direction: row;
          justify-content: flex-end;
          padding: 0;
          li {
            a {
              color: #fff;
            }
          }
        }
      }
    }
    &.background {
      .site-title {
        color: black;
      }
      #menu-btn {
        color: black;
        &::before, &::after {
          background: #000;
        }
      }
      nav {
        ul {
          li {
            a {
              color: black;
            }
          }
        }
      }
    }
  }
</style>
