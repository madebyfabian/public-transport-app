<template>
  <a class="link">
    <SVGIcon name="arrow-right" />
    <slot />
  </a>
</template>

<script>
  import SVGIcon from '@/components/UI/SVGIcon'

  export default {
    name: 'NativeLink',
    components: {
      SVGIcon
    }
  }
</script>

<style lang="scss" scoped>
  .link {
    height: 44px;
    margin: 0;
    border: none;
    outline: none;
    background: transparent;
    @include flex(flex-start);
    display: inline-flex;
    font-size: 17px;
    line-height: 22px;
    color: var(--color-blue);
    margin-left: -1rem;
    padding: 0 0 0 4px;
    user-select: none;
    transition: opacity .25s ease;

    &:active {
      opacity: .65;
      transition: opacity .033s ease;
    }

    svg {
      height: 21px;
      width: 21px;
      fill: var(--color-blue);
      transform: rotateY(180deg);
      margin-right: 1px;
    }
  }
</style>