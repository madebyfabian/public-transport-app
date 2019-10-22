<template>
  <div class="page-wrap">
    <div id="page__journeys" class="page" :class="{ 'overlay-is-opened' : overlayIsOpened }">
      <div class="fixed">
        <h1>Verbindungen</h1>

        <section class="journey-inputs">
          <div class="journey-inputs__left"></div>

          <div class="journey-inputs__line">
            <div class="backdrop" id="backdrop--start">
              <div class="backdrop__content">
                <SVGIcon class="input-icon" name="search" />
                <Input 
                  @focusInput="toggleBackdrop('open', 'backdrop--start')"
                  @clickIconRight="getCurrPos"
                  @input="searchStations($event, start)"
                  v-model="start.inputValue"
                  placeholder="Wo startest du?" 
                  name="start__inputValue"
                  iconRight="location-compass"
                  spellcheck="false"
                />
              </div>
              <div class="backdrop__bg backdrop__bg--overlay"></div>
              <div class="backdrop__bg backdrop__bg--layer">
                <div class="backdrop__bg--layer-container">
                  <JourneysStationsResults 
                    @clickItem="chooseResult"
                    :result="start.stationSearchResults"
                    type="start"
                  />
                </div>            
              </div>
            </div>
          </div>
          
          <div class="journey-inputs__line">
            <div class="backdrop" id="backdrop--destination">
              <div class="backdrop__content">
                <SVGIcon class="input-icon" name="search" />
                <Input 
                  @focusInput="toggleBackdrop('open', 'backdrop--destination')"
                  @clickIconRight="swapInputValues"
                  @input="searchStations($event, destination)"
                  v-model="destination.inputValue"
                  placeholder="Wo möchtest du hin?" 
                  name="destination__inputValue"
                  iconRight="reverse-sort"
                  spellcheck="false"
                />
              </div>
              <div class="backdrop__bg backdrop__bg--overlay"></div>
              <div class="backdrop__bg backdrop__bg--layer">
                <div class="backdrop__bg--layer-container">
                  <JourneysStationsResults 
                    @clickItem="chooseResult"
                    :result="destination.stationSearchResults"
                    type="destination"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <JourneysResults
        v-if="results"
        :journeys="results"
      />

      <AlertBox type="warning" v-if="results === false">
        Keine Fahrten gefunden.
      </AlertBox>
    </div>
    
    <transition name="slide">
      <router-view v-bind:key="$route.params.id" />
    </transition>
  </div>
</template>

<script>
  // Import Global Components
  import Input from '@/components/Input'
  import SVGIcon from '@/components/SVGIcon'
  import AlertBox from '@/components/AlertBox'
  
  // Import Journey Components
  import JourneysStationsResults from './JourneysStationsResults'
  import JourneysResults from './JourneysResults'
  
  // Import store
  import { store } from '@/functions/store'

  // Import bayern-fahrplan API functions
  import { 
    fetchJourneys, 
    fetchStations,
    fetchNearestStation
  } from '@/functions/bayernFahrplanAPIWrapper'

  // Import helper functions
  import getCurrPos from '@/functions/getCurrPos.fn'
  import renderDurationStr from '@/functions/renderDurationStr.fn'
  import parsePassedStops from '@/functions/parsePassedStops.fn'

  
  export default {
    name: 'Journeys',
    components: {
      Input,
      SVGIcon,
      JourneysStationsResults,
      JourneysResults,
      AlertBox
    },
    data: function() {
      return {
        start: {
          inputValue: '',
          stationSearchResults: null,
          selectedStation: { id: null, name: null }
        },

        destination: {
          inputValue: '',
          stationSearchResults: null,
          selectedStation: { id: null, name: null }
        },

        results: null
      }
    },

    computed: {
      overlayIsOpened: function() {
        return this.$route.name === 'journeyDetails'
      }
    },

    async created() {
      // Check if start & destination are defined as URL Query.
      let queries = this.$route.query
      for (let queryKey in queries) 
        queries[queryKey] = decodeURI(queries[queryKey])

      let hasStartValues = this.checkQueries(queries, 'start'),
          hasDestinationValues = this.checkQueries(queries, 'destination')
          
      // If all 4 values are filled and valid, start search
      if (hasStartValues && hasDestinationValues) 
        await this.searchJourneys()
    },

    methods: {
      /**
       * Helper function executed at created() to check journey data URL queries
       */
      checkQueries(queries, type) {
        const idKey = `${type}_id`,
              nameKey = `${type}_name`

        if (queries.hasOwnProperty(idKey) && queries.hasOwnProperty(nameKey)){
          const id = parseInt(queries[idKey])

          if (!id || queries[nameKey].length === 0) 
            return false
          else {
            this[type].selectedStation = { id, name: queries[nameKey] }
            this[type].inputValue = queries[nameKey]

            return true
          }
        }
      },

      // will get executed by JourneysResults.vue
      overlayToggle(status) {
        // this.overlayIsOpened = status
      },
      
      // Check if both inputs are filled
      checkReadyToSearch() {
        return (this.start.selectedStation.id && this.destination.selectedStation.id)
      },

      // Swapping the data / input values of the start and destination inputs
      swapInputValues() {
        const destination  = this.destination,
              start        = this.start
        
        this.destination = start
        this.start = destination
      },

      // choose a station search result and close backdrop modal
      chooseResult(type, data) {
        const inputObj = (type === 'destination') ? this.destination : this.start

        inputObj.inputValue = data.name
        inputObj.selectedStation = {
          id: data.ref.id,
          name: data.name
        }

        this.toggleBackdrop('close', `backdrop--${type}`)

        // add query to URL
        const queryStationIdKey   = `${type}_id`,
              queryStationNameKey = `${type}_name`

        this.$router.push({ query: { 
          ...this.$route.query, 
          [queryStationIdKey]: encodeURI(data.ref.id),
          [queryStationNameKey]: encodeURI(data.name)
        }})

        // check, if both inputs are filled
        if (this.checkReadyToSearch()) 
          this.searchJourneys()
      },

      async searchStations(searchQuery, data) {
        if (searchQuery.length < 4) 
          return

        // clear results
        data.stationSearchResults = null

        const searchStationsRes = await fetchStations(searchQuery)
        if (searchStationsRes)
          data.stationSearchResults = searchStationsRes
      },

      async searchJourneys() {
        try {
          this.results = null
          
          const journeysRes = await fetchJourneys({
            start: this.start.selectedStation.id,
            destination: this.destination.selectedStation.id
          })

          if (!journeysRes)
            throw new Error('No journeys found.')

          let journeys = journeysRes.trips

          // Check if multiple journeys are found and if not change single obj to arr
          if (journeys.hasOwnProperty('trip'))
            journeys = [{...journeys.trip}]
          
          // Loop journeys.
          for (let i = 0; i < journeys.length; i++) {
            const journey = journeys[i]

            // Check if multiple legs are found in this journey,
            // if not, change single obj to arr
            if (journey.legs.hasOwnProperty('leg'))
              journeys[i].legs = [{...journey.legs.leg}]

            // loop interchanges
            for (let interchange of journeys[i].legs) {
              let passedStops = interchange.passedStops
              if (!passedStops)
                continue
              
              // Overwrite existing passedStops array of strings with the parsed array of objects
              interchange.passedStops = parsePassedStops(passedStops)
            }

            journeys[i].rendered = {
              // Generate duration string (eg. "1 Std, 34 Min.")
              durationString: renderDurationStr(journey.duration)
            }
          }

          this.results = journeys
        } catch (error) {
          this.results = false
          console.error(error)
        }
      },

      toggleBackdrop: function(action, id) {
        const $backdropEl = document.querySelector(`#${id}`),
              $layer      = $backdropEl.querySelector(`.backdrop__bg--layer`),
              $page       = document.querySelector('#page__journeys')

        if (action === 'open') {
          $page.classList.add('scroll-fix-active')
          $backdropEl.classList.add('backdrop--is-active')
        } else {
          $page.classList.remove('scroll-fix-active')
          $backdropEl.classList.remove('backdrop--is-active')
        }
      },

      getCurrPos: async function() {
        try {
          // Call helper function to get curr geolocation.
          const currPos = await getCurrPos()

          // Call DB API to translate Geolocation into station ID.
          const currStation = await fetchNearestStation(currPos.coords)

          this.start.inputValue = currStation.name
          this.start.selectedStation = {
            id: currStation.ref.stateless,
            name: currStation.name
          }

          this.toggleBackdrop('close', 'backdrop--start')

          // Check, if both inputs are filled.
          if (this.checkReadyToSearch()) 
            this.searchJourneys()

        } catch (error) {
          console.error(error)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #page__journeys {
    --fixed-height: 252px;
    transition: transform .3s ease;
    padding-top: calc(var(--fixed-height) + 1.5rem);

    &.overlay-is-opened {
      transform: translateX(-25%);
    }

    .fixed {
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      padding: var(--space-status-bar) 1rem 1rem;
      height: var(--fixed-height);
      z-index: 900;
      background: var(--color-bg-primary);
      box-shadow: 0 0 0 1px var(--color-bg-secondary);
    }
  }

  .backdrop {
    &__content {
      position: relative;
      @include flex(flex-start);

      .input-icon {
        margin-right: .5rem;
        width: 18px;
        height: 18px;
        fill: var(--color-icons);
        flex-shrink: 0;
      }
    }

    $parent: &;
    &--is-active {
      #{$parent}__content {
        position: absolute;
        top: 3.5rem;
        width: calc(100% - 32px);
        z-index: 1200;
      }

      #{$parent}__bg--layer,
      #{$parent}__bg--overlay {
        opacity: 1;
        visibility: visible;
      }
    }

    &__bg {
      visibility: hidden;
      opacity: 0;
    }

    &__bg--layer {
      --space: calc(56px + calc(24px * 2));
      position: fixed;
      width: 100vw;
      height: calc(var(--height-viewport) - 1.5rem);
      padding: var(--space) 1rem 0;
      overflow: hidden;
      background: var(--color-bg-secondary);
      border-radius: 10px;
      left: 0;
      top: 1.5rem;
      z-index: 1100;
      transition: opacity .125s ease,
                  height .25s ease;

      &-container {
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        margin: 0 -1rem;
        padding: 0 1rem calc(var(--height-tab-bar) + 1rem);
      }
    }

    &__bg--overlay {
      position: fixed;
      height: 100vh;
      background: rgba(#000, .75);
      top: 0;
      width: 100vw;
      z-index: 1000;
      left: 0;
      transition: opacity .125s ease;
    }
  }

  .journey-inputs {
    @include flex;
    // position: relative;
    flex-wrap: wrap;

    // three dots
    &__left {
      position: absolute;
      width: 18px;

      &::after {
        --size: .25rem;
        content: '';
        top: calc(50% - calc(var(--size) / 2));
        height: var(--size);
        width: var(--size);
        border-radius: 100%;
        background: var(--color-bg-border);
        display: block;
        position: relative;
        margin: 0 auto;
        box-shadow: 0 calc(.5rem + var(--size)) 0 var(--color-bg-border),
                    0 calc(-.5rem - var(--size)) 0 var(--color-bg-border);
      }
    }

    &__line {
      width: 100%;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
</style>