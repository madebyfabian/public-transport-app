<template>
  <div class="LoadingSpinner">
    <svg viewBox="0 0 50 50">
      <path d="M8.5 15.7a18.68 18.68 0 1 0 32.7 18.1l-3.57-1.96a14.62 14.62 0 0 1-25.56-14.17L8.5 15.69z">
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
      </path>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'LoadingSpinner'
  }
</script>

<style lang="scss" scoped>
  .LoadingSpinner {
    @include flex(center);

    svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: var(--color-bg-border)!important;
    }
  }
</style>