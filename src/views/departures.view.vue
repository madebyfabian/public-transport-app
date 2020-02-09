<template>
  <div class="page" id="page__home">
    <div class="page__fixed-box">
      <h1>Abfahrten</h1>

      <Input 
        @input="searchStations"
        @focus="resetSearchInput"
        :iconLeft="{ name: 'search' }"
        :iconRight="{ name: 'location-compass', onClick: searchStationsByLocation }"
        v-model="searchQuery"
        ref="stationsInput"
        placeholder="Wo möchtest du starten?"
      />

      <DeparturesSuggestions
        v-if="showStationSuggestions"
        ref="departuresSuggestions"
        :suggestions="suggestions"
        :selectedStationID="selectedStationID"
      />
    </div>

    <section class="results">
      <div v-if="departures">
        <div v-if="departures.length !== 0">
          <div class="results__container">
            <DeparturesResults :departures="departures" />
          </div>
          <div class="results__controls">
            <div @click="getDepartures(true)" class="results__later-btn">Später</div>
          </div>
        </div>
        
        <AlertBox v-else type="warning">
          Keine Abfahrten gefunden.
        </AlertBox>
      </div>

      <div v-if="departures === false">
        <AlertBox type="error">
          Netzwerk-Fehler
        </AlertBox>
      </div>

      <div v-if="isLoadingDepartures" class="results__loading-animation">
        <LoadingSpinner />
      </div>
    </section>

    <section class="important-infos" v-if="departuresImportantInfos">
      <AlertBox
        type="info"
        v-for="(info, i) in departuresImportantInfos"
        :key="i">
        {{ info }}
      </AlertBox>
    </section>
  </div>
</template>

<script>
  import DeparturesResults from '@/components/Departures/DeparturesResults'
  import DeparturesSuggestions from '@/components/Departures/DeparturesSuggestions'

  // Import Vue UI components
  import LoadingSpinner from '@/components/UI/LoadingSpinner'
  import SVGIcon from '@/components/UI/SVGIcon'
  import AlertBox from '@/components/UI/AlertBox'
  import Input from '@/components/UI/Input.vue'

  // Import functions
  import { fetchDepartures, fetchStations } from '@/functions/APIWrapperVAG'
  import getCurrPos from '@/functions/getCurrPos.fn'


  export default {
    name: 'home',

    components: {
      DeparturesResults,
      DeparturesSuggestions,
      SVGIcon,
      LoadingSpinner,
      AlertBox,
      Input
    },

    data: function() {
      return {
        suggestions: null,
        searchQuery: '',

        departures: null,
        departuresImportantInfos: null,
        selectedStationID: null,
        isLoadingDepartures: false,

        showStationSuggestions: true,
        isLoading: false
      }
    },

    methods: {
      getDepartures: function (loadWithDelay = false) {
        let delay = 0
        this.isLoadingDepartures = true
        this.isLoading = true

        if (loadWithDelay) 
          // Get the last result's departure minute and take this as the delay. - 1 to get sure we'll catch every departure. We're filtering out doubles further down
          delay = this.departures[this.departures.length - 1].AbfahrtszeitIst - 1 
        else 
          this.departures = null

        return fetchDepartures(this.selectedStationID, delay).then(departuresRes => {
          let departuresData = (departuresRes.Abfahrten.length === 0) ? [] : departuresRes.Abfahrten; // "Abfahrten" is german for Departures

          // Calc departureTime in minutes, because API only gives us a datetime string
          departuresData = departuresData.map(departure => {
            const departureDate = Date.parse(departure.AbfahrtszeitIst),
                  now = Date.now(),
                  diff = Math.round((departureDate - now) / 1000 / 60) /* milliseconds / 1000 = seconds; / 60 = minutes */
            departure.AbfahrtszeitIst = diff
            return departure
          })

          // Add newly fetched items to the end
          if (loadWithDelay) {
            for (const newDeparture of departuresData) {
              // Filter out every item we already have in the list and would then get shown twice.
              if (!this.departures.find(existingDeparture => existingDeparture.Fahrtnummer === newDeparture.Fahrtnummer))
                this.departures.push(newDeparture)
            }
          } else
            this.departures = departuresData

          this.isLoadingDepartures = false
          this.isLoading = false

          return departuresRes
        })
      },

      selectStation: async function(id) {
        try {
          this.selectedStationID = id
          this.departuresImportantInfos = null

          // Save the selected station into the localStorage list of last searches.
          const selectedStation = this.suggestions.find(el => el.id === id)
          const lastSearches = this.getLastSearches()

          // look if the current search is already saved in the list of last searches
          const stationAlreadyInList = lastSearches.find(el => el.id === id)
          if (stationAlreadyInList) {
            // station is already on list. Remove it and add it to the top of the list
            const key = lastSearches.findIndex((el) => el.id === id)
            lastSearches.splice(key, 1)
          }

          lastSearches.unshift(selectedStation)
          this.setLastSearches(lastSearches)

          // If user searched for a station before he selected it:
          if (this.searchQuery.length !== 0)
            this.searchQuery = ''

          // Get upcoming departures for this station
          const departuresRes = await this.getDepartures()

          // look if there are some additional information for this station
          if (departuresRes.Sonderinformationen)
            this.departuresImportantInfos = departuresRes.Sonderinformationen

        } catch (error) {
          console.log(error)
          this.departures = false
          this.isLoadingDepartures = false
        }
      },

      setLastSearches: function(newValue) {
        let newValueStr = JSON.stringify(newValue)
        localStorage.setItem('lastSearches', newValueStr)

        return newValue
      },

      getLastSearches: function() {
        const lastSearches = JSON.parse(localStorage.getItem('lastSearches'))

        if (!lastSearches)
          localStorage.setItem('lastSearches', JSON.stringify([]))

        return lastSearches || []
      },

      resetSearchInput: function() {
        this.searchQuery = ''
        this.showStationSuggestions = true
      },

      searchStations: async function() {
        const searchQuery = this.searchQuery,
              currPos     = await getCurrPos()

        // If the search query is lower than 3 chars.
        if (searchQuery.length < 3) {
          this.showStationSuggestions = searchQuery.length === 0
          this.departures = null
          this.departuresImportantInfos = null
          this.selectedStationID = null

          // Reset suggestions to the ones in localStorage
          this.suggestions = this.getLastSearches()

          return 
        }

        const stations = await fetchStations(currPos, this.searchQuery)
        if (!stations.length)
          return // no station found 

        this.suggestions = stations
        this.showStationSuggestions = true
      },

      searchStationsByLocation: async function() {
        const currPos  = await getCurrPos()

        const stations = await fetchStations(currPos)
        if (!stations.length)
          return // no station found

        const nearestStation = stations[0]
        
        this.suggestions = stations
        this.selectStation(nearestStation.id)
        this.searchQuery = nearestStation.name.main
      }
    },

    async created() {
      this.suggestions = this.getLastSearches()
    }
  }
</script>

<style lang="scss" scoped>
  .results {
    position: relative;
    margin-top: .5rem;
    
    &__container {
      background: var(--color-bg-secondary);
      font-size: 14px;
      padding: 1rem 0;
    }

    &__controls {
      margin: 1.5rem 0 0;
      display: flex;
      justify-content: center;
    }

    &__later-btn {
      font-size: 14px;
      font-weight: bold;
      color: var(--color-blue);
      height: 2rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
      border-radius: .5rem;
      background: var(--color-bg-secondary);

      &-icon {
        height: .75rem;
        width: .75rem;
        fill: var(--color-icons);
        margin-left: .5rem;
        transform: rotate(90deg) translateX(1px);
      }
    }
  }

  .important-infos {
    display: grid;
    grid-gap: 1rem;
    margin: 1.5rem 0;
  }
</style>