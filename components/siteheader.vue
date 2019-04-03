<template>
  <header>
    <h1 class="site-title">Maat<span>.</span></h1>
    <nav>
      <ul>
        <li><a class="scroll-link" href="#root">Home</a></li>
        <li><a class="scroll-link" href="#about">About</a></li>
        <li><a class="scroll-link" href="#tool">Tool</a></li>
        <li><a class="scroll-link" href="#advantages">Features</a></li>
        <li><a class="scroll-link" href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>


export default {
  mounted() {
    if (process.browser) {
      let { TweenLite } = require('gsap')
      let ScrollToPlugin =  require('gsap/ScrollToPlugin')
      const links = document.querySelectorAll('.scroll-link')
      const container = document.querySelector('.parallax')
      links.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault()
          const href = `#${e.target.href.split('#')[1]}`
          TweenLite.to(container, 0.6, {scrollTo: {y: href, offsetY: 40}})
        })
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
    background-color: white;
    padding: .75rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    box-shadow: 0px 3px 20px -5px rgba(0,0,0,0.15);
    .site-title {
      text-transform: uppercase;
      font-size: 1.25rem;
      margin: 0;
      line-height: 0.25;
      margin-top: 3px;
      span {
        color: #ff5e62;

      }
    }
    nav {
      margin-left: 2rem;
      overflow-x: scroll;
      ul {
        display: flex;
        list-style: none;
        padding: 0;
        li {
          margin: 0 0.5rem;
          a {
            color: #292929;
            font-size: 0.875rem;
            font-weight: normal;
            text-decoration: none;
            transition: all 0.3s;
            &:hover {
              color: #ff5e62
            }
          }
        }
      }
    }
  }
</style>
