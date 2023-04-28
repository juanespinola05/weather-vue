<script setup lang="ts">
import { capitalizeAll } from '@/utils/string'
import { computed } from 'vue'

const props = defineProps({
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  class: {
    type: String,
    default: ''
  }
})
const capitalizedDescription = computed(() => capitalizeAll(props.description))
</script>
<template>
  <img
    :class="[props.class, ' drop-shadow-2xl']"
    :src="`/dark/${props.icon}.svg`"
    :alt="capitalizedDescription"
  />
</template>
