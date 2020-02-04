<template>
  <div class="page" id="page__home">
    <div class="page__fixed-box">
      <h1>Abfahrten</h1>
      <div class="station-input">
        <span class="station-input__icon">
          <SVGIcon name="search" />
        </span>
        
        <input 
          @input="searchStations"
          v-model="searchQuery"
          @focus="searchQuery = ''"
          ref="stationsInput"
          class="station-input__textfield" 
          type="text" 
          autofocus
          spellcheck="false"
          placeholder="Wo möchtest du hin?"
        />
      </div>

      <DeparturesSuggestions
        v-if="showStationSuggestions"
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
            <div @click="getDepartures('LATER')" class="results__later-btn">Später</div>
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

  // Import API functions
  import { 
    fetchDepartures,
    fetchStations
  } from '@/functions/APIWrapperVAG'

  export default {
    name: 'home',

    components: {
      DeparturesResults,
      DeparturesSuggestions,
      SVGIcon,
      LoadingSpinner,
      AlertBox
    },

    data: function() {
      return {
        suggestions: null,
        suggestionsCloseIcon_visible: false,
        searchQuery: '',

        departures: null,
        departuresImportantInfos: null,
        selectedStationID: null,
        isLoadingDepartures: false,

        showStationSuggestions: true
      }
    },

    methods: {
      getDepartures: function (method = null) {
        let delay = 0
        this.isLoadingDepartures = true
        
        if (method === 'LATER') {
          // Get the last result's departure minute and take this as the delay
          delay = this.departures[this.departures.length - 1].AbfahrtszeitIst - 1 // - 1 to get sure we'll catch every departure. We're filtering out doubles further down
        } else {
          this.departures = null
        }

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
          if (method === 'LATER') {
            for (const newDeparture of departuresData) {
              // Filter out every item we already have in the list and would then get shown twice.
              if (!this.departures.find(existingDeparture => existingDeparture.Fahrtnummer === newDeparture.Fahrtnummer))
                this.departures.push(newDeparture)
            }
          } else
            this.departures = departuresData

          this.isLoadingDepartures = false

          return departuresRes
        })
      },

      selectStation: async function(id) {
        try {
          this.selectedStationID = id
          this.departuresImportantInfos = null
          
          const departuresRes = await this.getDepartures()

          // save this selected station into the localStorage list of last searches
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
          localStorage.setItem('lastSearches', JSON.stringify(lastSearches))

          // look if there are some additional information for this station
          if (departuresRes.Sonderinformationen)
            this.departuresImportantInfos = departuresRes.Sonderinformationen

        } catch (error) {
          this.departures = false
          this.isLoadingDepartures = false
        }
      },

      getLastSearches: function() {
        const lastSearches = JSON.parse(localStorage.getItem('lastSearches'))

        if (!lastSearches)
          localStorage.setItem('lastSearches', JSON.stringify([]))

        return lastSearches || []
      },

      searchStations: async function() {
        const searchQuery = this.searchQuery
        if (searchQuery.length < 3) {
          // the search query is lower than 3 chars
          this.departures = null
          this.departuresImportantInfos = null
          this.selectedStationID = null
          this.showStationSuggestions = false

          // reset suggestions to the ones in localstorage
          this.suggestions = this.getLastSearches()

          return 
        }

        const searchData = await fetchStations(this.searchQuery)

        if (searchData.Haltestellen.length === 0)
          return // no station found 

        this.suggestions = this.generateSaveableData(searchData.Haltestellen)
        this.showStationSuggestions = true
      },

      generateSaveableData: function(VAGAPIData) {
        let saveableData = []
        for (let i = 0; i < VAGAPIData.length; i++) {
          const station = VAGAPIData[i],
                name = station.Haltestellenname.split('('),
                id = station.VGNKennung

          saveableData.push({
            id,
            name: {
              main: name[0].trim(),
              sub: name[1].replace(')', '')
            }
          })
        }

        return saveableData
      }
    },

    async created() {
      this.suggestions = this.getLastSearches()
    }
  }
</script>

<style lang="scss" scoped>
  .station-input {
    height: 3rem;
    width: 100%;
    border-radius: .75rem; // was 10px
    background-color: var(--color-bg-secondary);
    overflow: hidden;
    @include flex(flex-start);
    position: relative;

    &__icon {
      display: block;
      height: 100%;
      @include flex(flex-end);

      svg {
        width: 18px;
        height: 18px;
        margin: 0 .5rem 0 1rem;
        fill: var(--color-icons);
      }
    }

    &__textfield {
      height: 100%;
      display: block;
      border: none;
      appearance: none;
      margin: 0;
      padding: 0;
      outline: none;
      width: 100%;
      background-color: transparent;

      &::placeholder { color: var(--color-text-secondary); opacity: 1;  }
      &:-ms-input-placeholder { color: var(--color-text-secondary); }
      &::-ms-input-placeholder {  color: var(--color-text-secondary); }
    }
  }

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