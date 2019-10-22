<template>
  <nav class="tab-bar">
    <div class="tab-bar__container">
      <router-link 
        v-for="(item, i) in tabItems"
        :key="i"
        :to="{ name: item.name }"
        class="tab-bar-item">

        <SVGIcon class="tab-bar-item__icon" :name="'tab-bar--' + item.name" />
        <div class="tab-bar-item__label">{{ item.title }}</div>
      </router-link>
    </div>
  </nav>
</template>

<script>
  import SVGIcon from './SVGIcon'
  export default {
    name: 'TabBar',
    components: {
      SVGIcon
    },
    data: function() {
      return {
        tabItems: [
          {
            name: "departures",
            title: "Abfahrten"
          },
          {
            name: "journeys",
            title: "Verbindungen"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-bar {
    height: var(--height-tab-bar);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    backdrop-filter: blur(27.18px);
    background-color: var(--color-bg-transparent);
    z-index: 1000;

    &__container {
      @include flex;

      .tab-bar-item {
        width: 100%;
        height: 100%;
        -webkit-tap-highlight-color: transparent;
        color: var(--color-text-secondary);

        &.router-link-active {
          color: var(--color-blue);

          svg {
            fill: var(--color-blue);
          }
        }

        &__icon {
          width: 30px;
          height: 28px;
          margin: 5px auto 0;
          display: block;
          fill: var(--color-text-secondary);
        }

        &__label {
          line-height: 12px;
          font-size: 10px;
          text-align: center;
          letter-spacing: 0.16px;
          margin: 2px 0;
        }
      }
    }
  }
</style>