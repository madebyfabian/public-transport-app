<template>
  <div 
    class="alert-box"
    :class="`alert-box--${type}`"
    :style="`--bg: var(--color-bg-${type}); --accent: var(--color-${type});`">

    <SVGIcon :name="type" />
    <p><slot /></p>
  </div>
</template>

<script>
import SVGIcon from '@/components/SVGIcon'

export default {
  name: 'AlertBox',
  components: {
    SVGIcon
  },
  props: {
    'type': {
      type: String,
      default: 'warning'
    }
  }
}
</script>

<style lang="scss" scoped>
  .alert-box {
    padding: 1rem;
    padding-left: 1.25rem;
    border-radius: 10px;
    background: var(--bg);
    overflow: hidden;
    position: relative;
    @include flex(flex-start);

    &::after {
      content: '';
      left: 0;
      height: 100%;
      width: .25rem;
      background: var(--accent);
      position: absolute;
      top: 0;
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
      margin-right: 1rem;
    }
  }
</style>