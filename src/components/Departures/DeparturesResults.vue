<template>
  <div>
    <article 
      v-for="departure in departures"
      :key="departure.Fahrtnummer"
      class="departure">
      
      <SVGIcon 
        :name="departure.Produkt.toLowerCase()"
        class="departure__vehicle-type" />

      <span class="departure__line-name">{{ departure.Linienname }}</span>
      <span class="departure__target">{{ departure.Richtungstext }}</span>
      <span 
        v-if="departure.AbfahrtszeitIst !== 0"
        class="departure__time" 
        :class="{ 'has-no-realtime-data': !departure.Prognose }">
        
        {{ departure.AbfahrtszeitIst }} Min.
      </span>
      <span 
        v-else
        class="departure__time-now-icon">

        <SVGIcon 
          :name="departure.Produkt.toLowerCase() + '--is-ready'" />
      </span>
    </article>
  </div>
</template>

<script>
import SVGIcon from '@/components/UI/SVGIcon'

export default {
  name: 'DeparturesResults',
  props: ['departures'],
  components: {
    SVGIcon
  }
}
</script>

<style lang="scss" scoped>
  .departure {
    display: grid;
    grid-template-columns: 1.5rem 1.75rem 1fr 3.5rem;
    grid-gap: .5rem;
    margin: 0 1rem;

    &:not(:last-child) {
      border-bottom: .33px solid var(--color-bg-border);
      padding-bottom: .75rem;
      margin-bottom: .75rem;
    }

    &__vehicle-type {
      height: 1.5rem;
      width: 1.5rem;
      display: block;
    }

    &__line-name {
      @include flex;
      color: var(--color-text-secondary);
    }

    &__target {
      @include flex;
    }

    &__time {
      @include flex(flex-end);
      font-variant-numeric: tabular-nums;

      &.has-no-realtime-data {
        color: var(--color-text-secondary);
      }
    }

    &__time-now-icon {
      width: 100%;
      height: 1.5rem;
      @include flex(flex-end);
      
      svg {
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .5rem;
        fill: var(--color-text-secondary);
      }
    }
  }
</style>