<template>
  <div 
    class="mode-item"
    :class="`mode-item--${getLegTypeName(leg)}`">

    <SVGIcon 
      :name="`${getLegTypeName(leg)}--small`"
      class="mode-item__icon"
    />

    <div 
      v-if="renderText"
      class="mode-item__line">

      {{ renderLegText(leg) }}
    </div>

    <SVGIcon 
      v-if="renderSeperatorIcon || false"
      name="arrow-right"
      class="mode-item__seperator-icon"
    />
  </div>
</template>

<script>
  import SVGIcon from '@/components/UI/SVGIcon'

  export default {
    name: 'JourneyModeItem',
    props: {
      leg: {
        type: Object
      },
      renderSeperatorIcon: {
        type: Boolean,
        default: false
      },
      renderText: {
        type: Boolean,
        default: true
      }
    },
    components: {
      SVGIcon
    },
    methods: {
      getLegTypeName(leg) {
        if (leg.mode.code === 16)
          return 'ice'

        switch (leg.mode.type) {
          case 1:   return 'subway'
          case 2:   return 'sbahn'
          case 3:   return 'bus'
          case 4:   return 'tram'
          case 6:   return 'regio'
          case 97:  return 'HIDDEN' // no-footpath
          case 99: 
          case 100: return 'footpath'
        }
      },
      renderLegText(leg) {
        // Fixing a API bug where a ICE with an unknown ID gets the number "ICE ICE"... -.-
        if (leg.mode.number === 'ICE ICE')
          return 'ICE'

        if (leg.mode.type === 100 || leg.mode.type === 99) {
          // Calc footpath duration
          let startTime =     leg.points[0].stamp.time,
              departureTime = leg.points[1].stamp.time

          return (departureTime - startTime) + ' Min'
        } else
          return leg.mode.number
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mode-item {
    @include flex(flex-start);
    height: 1.5rem;

    // Different change types.
    &--HIDDEN {
      display: none }
    
    &--bus .mode-item__line { 
      background: #F9D2D4; color: #C31824 }

    &--tram .mode-item__line { 
      background: #EADDEE; color: #6C3E78 }

    &--subway .mode-item__line { 
      background: #D4E2F7; color: #19478E }

    &--ice .mode-item__line { 
      background: #D3D3D3; color: #737373 }

    &--sbahn .mode-item__line,
    &--regio .mode-item__line { 
      background: #CCFFE5; color: #008B44 }

    &--footpath {
      margin-left: -6px;

      .mode-item__icon { 
        fill: var(--color-text-secondary)
      }

      .mode-item__line { 
        padding: 0 0 0 .75rem;
        color: var(--color-text-secondary);
      }
    }

    // Change Type Icon.
    &__icon {
      height: 100%;
      width: 1.5rem;
      min-width: 1.5rem;
      position: relative;
      z-index: 1;
    }

    // Change Type Name Box
    &__line {
      height: 1rem;
      font-size: .75rem;
      font-weight: 600;
      @include flex;
      margin-left: -.75rem;
      padding: 0 .5rem 0 calc(.75rem + .25rem);
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      position: relative;
      z-index: 0;
      white-space: nowrap;
    }

    // Right arrow seperator between changes
    &__seperator-icon {
      height: .5rem;
      width: .5rem;
      margin: 0 6px;
      fill: var(--color-icons);
    }
  }
</style>