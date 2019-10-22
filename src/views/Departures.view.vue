<template>
  <div class="page" id="page__home">
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
        placeholder="Haltestelle"
      />
    </div>

    <DeparturesSuggestions
      :suggestions="suggestions"
      :selectedStationID="selectedStationID" />

    <section class="departures">
      <DeparturesContainer
        v-if="departures"
        :departures="departures" />

      <div v-if="isLoadingDepartures" class="loading-animation">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="40" height="40" viewBox="0 0 50 50" xml:space="preserve">
          <path d="M8.5 15.7a18.68 18.68 0 1 0 32.7 18.1l-3.57-1.96a14.62 14.62 0 0 1-25.56-14.17L8.5 15.69z">
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
          </path>
        </svg>
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
import pulltorefresh from 'vue-awesome-pulltorefresh'
import DeparturesContainer from '@/components/departures/DeparturesContainer'
import DeparturesSuggestions from '@/components/departures/DeparturesSuggestions'
import SVGIcon from '@/components/SVGIcon'

export default {
  name: 'home',

  components: {
    DeparturesContainer,
    DeparturesSuggestions,
    SVGIcon
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

  mounted(){
    pulltorefresh.init({
      mainElement: '#page__home',
      iconRefreshing: `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="1.5rem" height="1.5rem" viewBox="0 0 50 50" xml:space="preserve">
          <path d="M8.5 15.7a18.68 18.68 0 1 0 32.7 18.1l-3.57-1.96a14.62 14.62 0 0 1-25.56-14.17L8.5 15.69z">
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
          </path>
        </svg>`,
      iconArrow: '↓',
      onRefresh: () => {
        const vueData = this
        return new Promise(async(resolve, reject) => {
          if (!vueData.selectedStationID) 
            // user didn't fetch anything yet, so nothing to refresh there
            resolve()
          else
            // user already selected a station & fetched it. Let's refresh it!
            resolve(await vueData.getAndSetDepartures())
        })
      }
    })
  },

  beforeDestroy() {
    pulltorefresh.destroyAll()
  },

  methods: {
    getAndSetDepartures: function() {
      return new Promise(async (resolve, reject) => {
        const departuresResponse = await fetch(`https://start.vag.de/dm/api/abfahrten.json/vgn/${this.selectedStationID}/?timedelay=0&product=Ubahn,Bus,Tram`),
              departuresData = await departuresResponse.json()

        this.departures = (departuresData.Abfahrten.length === 0) ? [] : departuresData.Abfahrten
        resolve(departuresData)
      })
    },

    selectStation: async function(id) {
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

    // const fetchData = await fetch('https://www.vgn.de/verbindungen/?to=de%3A09564%3A510&td=de%3A09564%3A434'),
    //       HTML      = await fetchData.text()

    // console.log(HTML)
  }
}
</script>

<style lang="scss">
 .ptr--ptr  {
    box-shadow: none!important;
    font-size: 1rem!important;

    * {
      color: var(--color-text-secondary)!important;
    }

    svg {
      fill: var(--color-text-secondary)!important;
    }

    .ptr--text {
      display: none;
    }
  }
</style>

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

  .departures {
    position: relative;

    .loading-animation {
      @include flex(center);
      position: absolute;
      width: 100%;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: var(--color-bg-border)!important;
      }
    }
  }

  .important-infos {
    display: grid;
    grid-gap: 1rem;
    font-size: 13px;
    color: var(--color-text-secondary);
    line-height: 150%;
    
    &__item {
      background: var(--color-bg-secondary);
      border-radius: 10px;
      padding: 1rem;
    }
  }
</style>