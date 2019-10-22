<template>
  <div 
    :class="{ 'is-opened': isOpened }"
    class="Accordion">

    <div class="Accordion__clickable" @click="isOpened = !isOpened">
      <slot name="clickable" />
    </div>

    <div class="Accordion__content">
      <slide-up-down :active="isOpened" :duration="300">
        <slot name="content" />
      </slide-up-down>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Accordion',
    data: () => ({
      isOpened: false
    })
  }
</script>