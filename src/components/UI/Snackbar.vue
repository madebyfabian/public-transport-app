<template>
  <div class="snackbar" :class="{ 'is-closing': isClosing }">
    <div class="snackbar__content">
      <slot />
    </div>

    <button class="snackbar__button" @click="buttonClick">{{ buttonText }}</button>
  </div>
</template>

<script>
  import SVGIcon from '@/components/UI/SVGIcon'

  export default {
    name: 'Snackbar',
    components: {
      SVGIcon
    },
    props: {
      buttonText: {
        type: String,
        default: 'Aktualisieren'
      }
    },
    data() {
      return {
        isClosing: false
      }
    },
    methods: {
      buttonClick() {
        // Close snackbar
        this.isClosing = true

        // Emit event to parent
        this.$emit('buttonClick')
      }
    }
  }
</script>

<style lang="scss">
  .snackbar {
    position: fixed;
    bottom: 34px;
    padding: 1rem .5rem;
    border-radius: .5rem;
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
    z-index: 1200;
    margin: 0 1rem;
    width: calc(100% - 2rem);
    box-shadow: 0 8px 32px 0 var(--color-bg-primary);
    animation: openUp 300ms ease;
    animation-fill-mode: forwards;

    display: grid;
    grid-template-columns: 1fr min-content;
    gap: .5rem;

    &.is-closing {
      animation: closeDown 400ms ease;
      animation-fill-mode: forwards;
    }

    &__content {
      padding: .5rem;
    }

    &__button {
      padding: .5rem;
      font-weight: 600;
      background: transparent;
      outline: none;
      border: none;
      color: var(--color-blue);
      transition: oapcity 150ms ease;

      &:hover, &:active {
        opacity: .65;
      }
    }

    @keyframes openUp {
      from {transform: translateY(calc(calc(100% + 34px + 20px)))} // 100% = snackbar height, 34px is bottom offset, 20px is shadow
      to {transform: none}
    }

    @keyframes closeDown {
      from {transform: none}
      to {transform: translateY(calc(calc(100% + 34px + 20px)))} // 100% = snackbar height, 34px is bottom offset, 20px is shadow
    }
  }
</style>