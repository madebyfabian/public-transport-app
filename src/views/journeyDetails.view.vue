<template>
  <transition name="slide">
    <div class="overlay page" :class="{ 'has-transition': hasTransition }">
      <NativeLink @click.native="clickedBackBtn">Verbindungen</NativeLink>

      <section class="overlay__info-box">
        <JourneyInterchangesList :changes="journey.legs" />
        <p class="info">
          {{ journey.rendered.durationString }}
          <span class="seperator">&bull;</span>
          {{ journey.interchanges }} {{ (journey.interchanges === 1) ? 'Umstieg' : 'Umstiege' }}
        </p>
      </section>

      <section class="overlay__content">
        <article
          v-for="(leg, i) in journey.legs"
          :key="i"
          class="leg-item">

          <div class="leg-item__main-content">
            <div class="station cell">
              <p class="station__time">{{ leg.points[0].dateTime.time }}</p>
              <div class="station__dot"></div>
              <div class="station__dot-line"></div>
              <p class="station__name">{{ leg.points[0].name }}</p>
            </div>

            <div class="mode-info cell">
              <JourneyModeItem 
                :leg="leg"
                :renderText="false"
                class="mode-info__type"
              />
              <p class="mode-info__final-destination">
                <strong>{{ leg.mode.name }}</strong><br>
                {{ leg.mode.destination }}
              </p>
            </div>
            
            <div class="mode" v-if="leg.passedStops">
              <Accordion>
                <div slot="clickable" class="cell clickable-content">
                  <p>{{ leg.passedStops.length }} {{ (leg.passedStops.length === 1) ? 'Station' : 'Stationen' }}</p>
                </div>
                <div slot="content">
                  <div class="mode__passed-stops-wrap">
                    <article 
                      v-for="(stop, i) in leg.passedStops"
                      :key="i"
                      class="cell mode__passed-stop">

                      <p class="mode__passed-stop-time">{{ stop.time || '' }}</p>
                      <div class="mode__passed-stop-dot"></div>
                      <p class="mode__passed-stop-name">{{ stop.name }}</p>
                    </article>
                  </div>
                </div>
              </Accordion>

              <div class="mode__bg-layer"></div>
              <SVGIcon name="arrow-right" class="mode__icon" />
            </div>

            <div class="station cell">
              <p class="station__time">{{ leg.points[1].dateTime.time }}</p>
              <div class="station__dot"></div>
              <p class="station__name">{{ leg.points[1].name }}</p>
            </div>
          </div>

          <div 
            v-if="i + 1 !== journey.legs.length"
            class="leg-item__interchange-content cell">

            <p>Umsteigen, 9 Min.</p>
          </div>
        </article>
      </section>
    </div>
  </transition>
</template>

<script>
  import SVGIcon from '@/components/UI/SVGIcon'
  import Accordion from '@/components/UI/Accordion'
  import NativeLink from '@/components/UI/NativeLink'

  import JourneyInterchangesList from '@/components/Journeys/JourneyInterchangesList'
  import JourneyModeItem from '@/components/Journeys/JourneyModeItem'

  import { store } from '@/functions/store'

  export default {
    name: 'JourneyDetails',
    components: {
      SVGIcon,
      JourneyInterchangesList,
      JourneyModeItem,
      Accordion,
      NativeLink
    },
    data() {
      return {
        hasTransition: false
      }
    },
    computed: {
      journey() {
        return store.selectedJourneyData
      }
    },
    methods: {
      clickedBackBtn() {
        this.hasTransition = true
        this.$router.go(-1)
      },

      logIt(data) {
        console.log(data)
      } 
    }
  }
</script>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 900;
    padding-top: 0;
    background: var(--color-bg-primary);
    overflow-y: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    
    &.has-transition {
      transition: var(--transition-time-overlay);
    }

    &__info-box {
      margin: 0 -1rem;
      padding: 1rem 1rem 1.5rem;

      .info {
        margin-top: .5rem;
        color: var(--color-text-secondary);

        span.seperator {
          color: var(--color-icons);
        }
      }
    }
  }

  .leg-item {
    --line-top-space: 0;

    &:first-child {
      --line-top-space: 1.5rem;

      .station:first-child .station__dot {
        background: var(--color-icons);
      }
    }

    &:last-child {
      --line-top-space: -1.5rem;

      .station:last-child .station__dot {
        background: var(--color-icons);
      }
    }

    &__interchange-content {
      height: 3.75rem;
      padding: 6px 1rem;

      p {
        grid-column: 3 / 4;
      }
    }

    &__main-content {
      border-radius: 10px;
      padding: 1rem;
      background: var(--color-bg-secondary);
      position: relative;
      overflow: hidden;

      .station {
        --width-dot: 1rem;
        --width-dot-half: calc(var(--width-dot) / 2);
        height: 1.5rem;

        &__dot {
          height: 1rem;
          width: 1rem;
          border-radius: 100%;
          position: relative;
          z-index: 2;
          background: var(--color-bg-secondary);
          border: 2px solid var(--color-icons);
          justify-self: center;

          &-line {
            --width-line: 4px;
            --width-line-half: calc(var(--width-line) / 2);
            --space: calc(1rem + calc(var(--width-dot-half) - var(--width-line-half)));
            content: '';
            z-index: 1;
            background: var(--color-bg-border);
            height: 100%;
            position: absolute;
            top: var(--line-top-space);
            left: calc(2rem + 1rem + var(--space));
            width: .25rem;
          }
        }

        &__time {
          color: var(--color-text-secondary);
        }
      }

      .mode-info {
        margin: 1rem 0;

        &__type {
          grid-column: 2 / 3;
          justify-self: center;
        }

        &__final-destination {
          grid-column: 3 / 4;
          line-height: 1.25rem;
          color: var(--color-text-secondary);
        }
      }

      .mode {
        margin: -.25rem 0 1rem;
        position: relative;

        .Accordion.is-opened {
          & ~ .mode__bg-layer {
            width: calc(100% + .25rem);
          }

          & ~ .mode__icon {
            transform: rotate(90deg) rotateY(180deg);
          }
        }

        .clickable-content p {
          font-weight: bold;
          grid-column: 3 / 4;
          padding: .5rem 0;
          color: var(--color-text-secondary);
        }

        .Accordion {
          position: relative;
          z-index: 1;
        }

        &__bg-layer {
          position: absolute; 
          top: 0;
          right: 0;
          z-index: 0;
          height: 100%;
          width: 100%;
          border-radius: 8px;
          background: #28282A;
          transform-origin: right top;
          width: 243px;
          transition: width 100ms ease;
        }

        &__icon {
          height: 1rem;
          width: 1rem;
          position: absolute;
          right: 1rem;
          top: calc(1rem - 2px);
          fill: var(--color-icons);
          transform: rotate(90deg);
          transition: transform 300ms ease;
        }

        

        &__passed-stop {
          padding: .75rem 0;
          color: var(--color-text-secondary);
          position: relative;

          &-time {
            padding-left: .5rem;
          }

          &-dot {
            height: .5rem;
            width: .5rem;
            background: var(--color-icons);
            border-radius: 100%;
            justify-self: center;
          }
        }
      }
    } 
  }

  .cell {
    display: grid;
    grid-template-columns: 2rem 1rem 1fr;
    grid-column-gap: 1rem;
    align-items: center;
  }
</style>