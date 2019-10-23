<template>
  <div class="page" id="page__home">
    <div class="page__fixed-box">
      <h1>Abfahrten (ha!ha!ha!)</h1>
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
          placeholder="Haltestelle"
        />
      </div>

      <DeparturesSuggestions
        :suggestions="suggestions"
        :selectedStationID="selectedStationID"
      />
    </div>

    <section class="results">
      <div v-if="departures">
        <div v-if="departures.length !== 0" class="results__container">
          <DeparturesResults :departures="departures" />
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
      <article
        class="important-infos__item"
        v-for="(info, i) in departuresImportantInfos"
        :key="i">

        {{ info }}
      </article>
    </section>
  </div>
</template>

<script>
  import DeparturesResults from './DeparturesResults'
  import DeparturesSuggestions from './DeparturesSuggestions'

  import LoadingSpinner from '@/components/LoadingSpinner'
  import SVGIcon from '@/components/SVGIcon'
  import AlertBox from '@/components/AlertBox'

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
      }
    },

    methods: {
      getAndSetDepartures: function() {
        return new Promise(async (resolve, reject) => {
          try {
            const departuresResponse = await fetch(`https://start.vag.de/dm/api/abfahrten.json/vgn/${this.selectedStationID}/?timedelay=0&product=Ubahn,Bus,Tram`)

            if (!departuresResponse.ok)
              throw new Error('Network response was not ok.');
            
            const departuresData = await departuresResponse.json()

            this.departures = (departuresData.Abfahrten.length === 0) ? [] : departuresData.Abfahrten
            resolve(departuresData)
          } catch (error) {
            console.error(error)
            reject()
          }
        })
      },

      selectStation: async function(id) {
        try {
          this.selectedStationID = id
          this.departures = null
          this.departuresImportantInfos = null
          this.isLoadingDepartures = true
          
          const departuresData = await this.getAndSetDepartures()

          this.isLoadingDepartures = false


          // save this selected station into the localStorage list of last searches
          const selectedStation = this.suggestions.find((el) => {
            return el.id === id
          })
          const lastSearches = this.getLastSearches()


          // look if the current search is already saved in the list of last searches
          const stationAlreadyInList = lastSearches.find((el) => {
            return el.id === id 
          })

          if (stationAlreadyInList) {
            // station is already on list. Remove it and add it to the top of the list
            const key = lastSearches.findIndex((el) => el.id === id)
            lastSearches.splice(key, 1)
          }

          lastSearches.unshift(selectedStation)
          localStorage.setItem('lastSearches', JSON.stringify(lastSearches))


          // look if there are some additional information for this station
          if (departuresData.Sonderinformationen)
            this.departuresImportantInfos = departuresData.Sonderinformationen

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
          // the search query is lower than 4 chars
          this.departures = null
          this.departuresImportantInfos = null
          this.selectedStationID = null

          // reset suggestions to the ones in localstorage
          this.suggestions = this.getLastSearches()

          return 
        }

        const searchResponse = await fetch(`https://start.vag.de/dm/api/haltestellen.json/vgn?name=${this.searchQuery}`),
              searchData = await searchResponse.json()

        if (searchData.Haltestellen.length === 0)
          return // no station found 

        this.suggestions = this.generateSaveableData(searchData.Haltestellen)
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
    height: 3.5rem;
    width: 100%;
    border-radius: 10px;
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
      margin-bottom: 2rem;
      padding: 1rem 0;
    }
  }

  .important-infos {
    display: grid;
    grid-gap: 1rem;
    font-size: 13px;
    color: var(--color-text-secondary);
    line-height: 150%;
    padding: 0 1rem;
    margin: 0 0 1rem;
    
    &__item {
      background: var(--color-bg-secondary);
      border-radius: 10px;
      padding: .75rem 1rem;
    }
  }
</style>