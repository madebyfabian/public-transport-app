<template>
  <section class="changes">
    <div class="changes__scroll-container">
      <JourneyModeItem 
        v-for="(leg, i) in filteredChanges"
        :key="i"
        :leg="leg"
        :renderSeperatorIcon="(i + 1) !== filteredChanges.length && filteredChanges.length > 1" />
    </div>
  </section>
</template>

<script>
  import JourneyModeItem from '@/components/Journeys/JourneyModeItem'

  export default {
    name: 'JourneyChangesList',
    props: [ 'changes' ],
    components: {
      JourneyModeItem
    },
    data() {
      return {
        filteredChanges: null
      }
    },
    created() {
      // filter out the type 97 (no-footpath) items
      this.filteredChanges = this.changes.filter(change => change.mode.type !== 97)
    }
  }
</script>

<style lang="scss" scoped>
  .changes {
    position: relative;
    height: 1.5rem;
    margin: 0 -1rem;

    // horizontal scroll padding bug fix
    .mode-item {
      &:first-child::before,
      &:last-child::after {
        content: '';
        width: 1rem;
        flex-shrink: 0;
      }
    }

    // gradient overlay at horizontal scrollable journey previews
    // TEMPORALLY DISABLED BECAUSE OF BUG IN IOS

    // &::before, &::after {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   height: 100%;
    //   width: 1rem;
    //   z-index: 100;
    //   background: linear-gradient(to right, rgba(0, 0, 0, 0) .5rem, var(--color-bg-secondary) 100%);
    // }

    // &::before {
    //   right: 0;
    // }

    // &::after {
    //   left: 0;
    //   transform: rotateY(180deg);
    // }

    &::-webkit-scrollbar { 
      width: 0 !important
    }

    &__scroll-container {
      @include flex(flex-start);
      overflow-x: auto;
    }
  }
</style>