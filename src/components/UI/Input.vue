<template>
  <div class="input">
    <div 
      v-if="iconLeft && iconLeft.name"
      @click="() => 'onClick' in iconLeft ? iconLeft.onClick() : null"
      :class="{ 'is-clickable': 'onClick' in iconLeft }"
      class="input__icon-container">

      <SVGIcon :name="iconLeft.name" />
    </div>

    <div class="input__floating-label-container">
      <input 
        @input="updateInput"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        :name="name" 
        :value="value"
        :type="type" 
        :placeholder="placeholder"
        :spellcheck="spellcheck"
        :required="required"
        ref="input"
      />
      <label :for="name">
        {{ placeholder }}
      </label>
    </div>

    <div 
      v-if="iconRight && iconRight.name"
      @click="() => 'onClick' in iconRight ? iconRight.onClick() : null"
      :class="{ 'is-clickable': 'onClick' in iconRight }"
      class="input__icon-container">

      <SVGIcon :name="iconRight.name" />
    </div>
  </div>
</template>

<script>
  import SVGIcon from '@/components/UI/SVGIcon'

  export default {
    name: 'Input',
    props: {
      'name': {
        type: String,
        default: ''
      },
      'value': {
        type: String,
        default: ''
      },
      'type': {
        type: String,
        default: 'text'
      },
      'placeholder': {
        type: String,
        default: ''
      },
      'iconLeft': {
        type: Object,
        default: null
      },
      'iconRight': {
        type: Object,
        default: null
      },
      'spellcheck': {
        type: String,
        default: 'false'
      },
      'required': {
        type: String,
        default: 'required'
      }
    },
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

        &:focus ~ label,
        &:valid ~ label {
          transform: translateY(-10px) scale(.8125);
        }

        // hide real placeholder
        &::placeholder { font-size: 0px; } // was color: var(--color-bg-secondary); opacity: 0; but chrome bugged
        &:-ms-input-placeholder { color: var(--color-bg-secondary) }
        &::-ms-input-placeholder { color: var(--color-bg-secondary) }
      }

      label {
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
        pointer-events: none;
        fill: var(--color-icons);
      }

      &.is-clickable {
        svg {
          fill: var(--color-text-secondary);
          pointer-events: all;
        }
      }
    }
  }
</style>