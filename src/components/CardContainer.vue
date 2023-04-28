<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div
    :class="[props.class, 'rounded-lg p-4 shadow-xl w-full bg-weather-quaternary bg-opacity-60']"
  >
    <slot></slot>
  </div>
</template>
