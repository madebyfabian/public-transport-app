<template>
  <div id="app">
    <div v-if="showServiceWorkerReloadSnackbar">
      Update available!
      <div :click="location.reload()"><u>Reload</u></div>
    </div>

    <keep-alive>    
      <router-view/>
    </keep-alive>

    <TabBar />

    <SVGIconProvider />
  </div>
</template>

<script>
  import SVGIconProvider from '@/components/SVGIconProvider.vue'
  import TabBar from '@/components/TabBar.vue'

  import { store } from '@/functions/store'

  export default {
    name: 'App',
    components: {
      SVGIconProvider,
      TabBar
    },

    computed: {
      showServiceWorkerReloadSnackbar() {
        return store.showServiceWorkerReloadSnackbar
      }
    },

    mounted() {
      /**
       * Viewport Height API
       */
      let pendingUpdate = false;
      function viewportHandler() {
        if (pendingUpdate) return;
        pendingUpdate = true;

        requestAnimationFrame(() => {
          pendingUpdate = false

          let viewport = window.visualViewport
          document.documentElement.style.setProperty('--height-viewport', viewport.height + "px");
        })
      }

      if (!navigator.standalone)
        document.documentElement.style.setProperty('--space-bottom-tab-bar', 0 + "px");

      // Call onload
      viewportHandler()

      // Call when viewport size updated
      window.visualViewport.addEventListener('resize', viewportHandler)
    },

    methods: {
      handleScroll (event) {
        if (window.scrollY <= 0)
          document.documentElement.style.setProperty('--opacity-fixed-box-border', 0)
          
        else
          document.documentElement.style.setProperty('--opacity-fixed-box-border', 1)
      }
    },

    created () {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll()
    },

    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="scss">
  @import url("./scss/vendor/_modern-normalize.scss");

  :root {
    --color-bg-primary:             #000;
    --color-bg-secondary:           #1C1C1D;
    --color-bg-border:              #3D3D40;
    
    --color-text-primary:           #FFFFFF;
    --color-text-secondary:         #8E8E92;

    --color-icons:                  #5A5A5E;

    --color-bg-transparent:         rgba(36, 36, 36, .6);
    --color-bg-primary-transparent: rgba(0, 0, 0, .6);

    @media (prefers-color-scheme: light) {
      --color-bg-primary:         #F2F2F7;
      --color-bg-secondary:       #FFFFFF;
      --color-bg-border:          #C6C6C8;

      --color-text-primary:       #000000;
      --color-text-secondary:     #8A8A8D;

      --color-icons:              #C4C4C6;

      --color-bg-transparent:     hsla(0, 0, 96, 1);
    }

    // static, doesnt change between dark / white
    --color-blue: #3A82F7;
    
    --color-bg-success: rgba(104, 208, 0, .15);
    --color-success:    rgba(104, 208, 0);

    --color-bg-warning: rgba(255, 204, 0, .15);
    --color-warning:    rgba(255, 204, 0);

    --color-bg-error:   rgba(255, 51, 51, .15);
    --color-error:      rgba(255, 51, 51);

    --height-tab-bar: calc(49px + var(--space-bottom-tab-bar));
    --space-status-bar: 44px;
    --space-bottom-tab-bar: 34px;
    --width-border: 1px;

    --transition-time-overlay: .3s;
  }

  body {
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    margin: 0;
    height: var(--height-viewport);
    overflow-x: hidden;
    overflow-y: scroll;
  }

  h1, h2, h3, h4, p {
    margin: 0
  }

  p {
    line-height: 1.5rem;
    font-size: .875rem;
  }

  h1 {
    margin-bottom: 1.5rem;
    font-size: 34px;
    line-height: 40px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .page {
    padding-bottom: calc(var(--height-tab-bar) + 1rem);

    &__fixed-box {
      position: sticky;
      top: 0;
      width: 100vw;
      padding: var(--space-status-bar) 1rem 1.5rem;
      z-index: 900;
      background: var(--color-bg-primary-transparent);
      backdrop-filter: blur(27.18px);

      &::after {
        content: '';
        height: 1px;
        bottom: 0;
        left: 0;
        position: absolute;
        width: 100vw;
        opacity: var(--opacity-fixed-box-border);
        transition: opacity 150ms ease;
        border-bottom: .33px solid var(--color-bg-border);
      }
    }
  }

  .page, body, #app {
    &.scroll-fix-active {
      height: 100vh;
      position: fixed;
      top: 0;
      overflow: hidden;
      width: 100vw;
    }
  }

  input {
    font-family: inherit;
    color: inherit;
    caret-color: var(--color-blue);
    height: 56px;
  }

  // router animations
  .slide-leave-active,
  .slide-enter-active {
    transition: var(--transition-time-overlay);
  }
  .slide-enter {
    transform: translate(100%, 0);
  }
  .slide-leave-to {
    transition: 0s;
    transform: translate(100%, 0);
  }
</style>