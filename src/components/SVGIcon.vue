<template>
  <svg class="SVGIcon">
    <use :href="`#icon--${name}`" />
  </svg>
</template>

<script>
  export default {
    name: 'SVGIcon',
    props: [ 'name' ]
  }
</script>