<template>
  <div>
    <article 
      v-for="(item, i) in result"
      :key="i"
      @click="$emit('clickItem', type, item)"
      class="station-result">

      <SVGIcon
        :name="`journeys-stop-suggestion--${item.type}`"
        class="station-result__icon"
      />
      <span class="station-result__name">
        {{ item.name }}
      </span>
      <span class="station-result__city">
        {{ item.ref.place }}
      </span>
    </article>
  </div>
</template>

<script>
  import SVGIcon from '@/components/UI/SVGIcon'

  export default {
    name: 'JourneysStationsResults',
    props: [ 'result', 'type' ],
    components: {
      SVGIcon
    }
  }
</script>

<style lang="scss" scoped>
  .station-result {
    --icon-size: 30px;
    --row-space: 1rem;
    display: grid;
    grid-template-columns: var(--icon-size) 1fr;
    grid-column-gap: 12px;

    &:not(:last-child) .station-result__city {
        border-bottom: .33px solid var(--color-bg-border);
      }

    &__icon {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      align-self: center;
      height: var(--icon-size);
      width: var(--icon-size);
      fill: var(--color-text-secondary);
    }

    &__name, &__city {
      grid-column: 2 / 3;
      display: block;
    }

    &__name {
      line-height: 1rem;
      font-size: 14px;
      margin: var(--row-space) 0 2px;
    }

    &__city {
      color: var(--color-text-secondary);
      font-size: .75rem;
      line-height: 1rem;
      padding-bottom: var(--row-space);
    }
  }
</style>