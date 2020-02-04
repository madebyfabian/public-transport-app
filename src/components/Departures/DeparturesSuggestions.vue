<template>
  <section class="suggestions">
    <div class="suggestions__container">
      <article
        class="suggestion"
        v-for="item in suggestions"
        :key="item.id"
        :class="{ 'is-selected': item.id === selectedStationID }"
        @click="selectStation(item.id)">

        <span class="suggestion__name-main">{{ item.name.main }}</span>
        <span class="suggestion__name-sub">{{ item.name.sub }}</span>
      </article>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'DeparturesSuggestions',
    props: [ 'suggestions', 'selectedStationID' ],
    methods: {
      selectStation: function(id) {
        this.$parent.selectStation(id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .suggestions {
    margin: 1rem -1rem 0; 
    user-select: none;

    &__container {
      padding: 0 1rem 0;
      height: 100%;
      width: 100%;
      // @include flex(flex-start);
      display: grid;
      grid-template-columns: repeat(999, min-content);
      overflow: auto;
      gap: .5rem;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .suggestion {
      padding: .5rem .75rem;
      background: var(--color-bg-secondary);
      color: var(--color-text-primary);
      display: inline-block;
      border-radius: .625rem; // was .5rem
      position: relative;

      &.is-selected {
        box-shadow: inset 0 0 0 2px var(--color-bg-border);
      }

      &__name {
        &-main, &-sub {
          white-space: pre;
          line-height: 1rem;
          display: block;
          height: 1rem;
        }

        &-main {
          display: block;
          font-size: 13px;
        }

        &-sub {
          font-size: 11px;
          font-weight: 300;
          color: var(--color-text-secondary);
        }
      }
    }
  }
</style>