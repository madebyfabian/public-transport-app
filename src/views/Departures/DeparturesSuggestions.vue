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
    margin: calc(1rem - 6px) -1rem -6px; 
    max-height: 120px;
    user-select: none;

    &__container {
      padding: .25rem 10px 0;
      margin: -.25rem 0 0;
      height: 100%;
      width: 100%;
      @include flex(flex-start);
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .suggestion {
    padding: .5rem .75rem;
    margin: 6px;
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
    display: block;
    border-radius: .5rem;
    position: relative;

    &.is-selected {
      box-shadow: inset 0 0 0 2px var(--color-bg-border);
    }

    &__name {
      &-main, &-sub {
        white-space: pre;
      }

      &-main {
        display: block;
        font-size: 13px;
        margin-bottom: -3px;
      }

      &-sub {
        font-size: 11px;
        font-weight: 300;
        color: var(--color-text-secondary);
      }
    }
  }
</style>