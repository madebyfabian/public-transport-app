<template>
  <div class="JourneysResults">
    <div class="JourneysResults__text">Ergebnisse:</div>
    <article
      v-for="(journey, i) in journeys"
      :key="i"
      @click="openJourneyDetails(i)"
      class="JourneysResults__item">

      <div class="line--top">
        <span class="time">
          <span class="time__departure">{{ getDepartureTime(journey) }}</span>
          <span class="time__arrival"> - {{ getArrivalTime(journey) }}</span>
        </span>

        <div class="duration">
          {{ renderTime(journey.duration) }}
        </div>
      </div>

      <JourneyInterchangesList :changes="journey.legs" />
    </article>
  </div>
</template>

<script>
  import JourneyInterchangesList from './JourneyInterchangesList'

  import { store } from '@/functions/store'

  export default {
    name: 'JourneysResults',
    props: [ 'journeys' ],
    components: {
      JourneyInterchangesList
    },
    methods: {
      openJourneyDetails(i) {
        store.selectedJourneyData = this.journeys[i]
        this.$router.push({ name: 'journeyDetails', query: this.$route.query })
      },

      getDepartureTime(journeyObj) {
        // check if legs is an array with objects legs = [{LegData}, {LegData}] 
        // or an object journeyObj.legs = { leg: {LegData} }
        const leg = (journeyObj.legs.hasOwnProperty('leg')) ? 
                      journeyObj.legs.leg : // is a single obj
                      journeyObj.legs[0] // is an array
        
        return leg.points[0].dateTime.time
      },

      getArrivalTime(journeyObj) {
        // same thing as in getDepartureTime() ... -.-
        const leg = (journeyObj.legs.hasOwnProperty('leg')) ? 
                      journeyObj.legs.leg : // is a single obj
                      journeyObj.legs[journeyObj.legs.length - 1] // is an array

        return leg.points[leg.points.length - 1].dateTime.time
      },

      renderTime(str) {
        let arr = str.split(':')

        arr[0] = parseInt(arr[0])
        arr[1] = parseInt(arr[1])

        let returnStr = arr[1] + ' Min.'

        // If 1 or more hrs
        if (arr[0] > 0)
          returnStr = `${arr[0]} Std., ${returnStr}`

        return returnStr
      }
    }
  }
</script>

<style lang="scss" scoped>
  .JourneysResults {
    min-height: calc(100% + 1rem);
    
    &__text {
      font-weight: 500;
      font-size: .75rem;
      line-height: 1rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--color-text-secondary);
      margin: 0 1rem .5rem;
    }

    &__item {
      padding: 1rem;
      background: var(--color-bg-secondary);
      
      &:not(:last-child) {
        margin-bottom: .75rem;
      }

      .line--top {
        margin-bottom: .75rem;
        font-size: 0.875rem;
        @include flex;

        .time {
          font-variant-numeric: tabular-nums;

          &__arrival {
            color: var(--color-text-secondary);
          }
        }

        .duration {
          color: var(--color-text-secondary);
        }
      }
    }
  }
</style>