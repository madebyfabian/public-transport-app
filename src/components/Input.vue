<template>
  <div class="input">
    <div 
      @click="$emit('clickIconLeft')"
      v-if="iconLeft"
      class="input__icon-container">

      <SVGIcon :name="iconLeft" />
    </div>

    <div class="input__floating-label-container">
      <input 
        @focus="$emit('focusInput')"
        @input="updateInput"
        :name="name" 
        :type="type || 'text'" 
        :placeholder="placeholder" 
        :value="value"
        ref="input"
        required
      />
      <span :for="name">
        {{ placeholder }}
      </span>
    </div>

    <div 
      @click="$emit('clickIconRight')"
      v-if="iconRight"
      class="input__icon-container">

      <SVGIcon :name="iconRight" />
    </div>
  </div>
</template>

<script>
  import SVGIcon from '@/components/SVGIcon'

  export default {
    name: 'Input',
    props: [ 'value', 'name', 'placeholder', 'iconLeft', 'iconRight', 'type' ],
    components: {
      SVGIcon
    },
    methods: {
      updateInput() {
        this.$emit('input', this.$refs.input.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input {
    height: 3.5rem;
    width: 100%;
    border-radius: 10px;
    background-color: var(--color-bg-secondary);
    overflow: hidden;
    @include flex(flex-start);
    position: relative;
    box-shadow: inset 0 0 1px var(--color-bg-border);

    &__floating-label-container {
      width: 100%;
      position: relative;
      
      input {
        display: block;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        appearance: none;
        margin: 0;
        background-color: transparent;
        padding: 26px 1rem 12px;
        color: var(--color-text-primary);

        &:focus ~ span,
        &:valid ~ span {
          transform: translateY(-10px) scale(.8125);
        }

        // hide real placeholder
        &::placeholder { color: var(--color-bg-secondary); opacity: 0 }
        &:-ms-input-placeholder { color: var(--color-bg-secondary) }
        &::-ms-input-placeholder { color: var(--color-bg-secondary) }
      }

      span {
        position: absolute;
        top: 20px;
        line-height: 1rem;
        left: 1rem;
        transition: transform .12s ease, font-size .12s ease;
        transform-origin: top left;
        user-select: none;
        pointer-events: none;
        color: var(--color-text-secondary);
      }
    }

    &__icon-container {
      height: 100%;
      @include flex(flex-start);

      &:first-child {
        margin-right: -.5rem;
        padding-left: 1rem;
      }

      &:last-child {
        padding-right: 1rem;
      }

      svg {
        width: 18px;
        height: 18px;
        fill: var(--color-text-secondary);
      }
    }
  }
</style>