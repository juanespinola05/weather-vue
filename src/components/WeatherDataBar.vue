<script setup lang="ts">
import CardContainer from './CardContainer.vue'

const props = defineProps({
  humidity: {
    required: true,
    type: Number
  },
  feels_like: {
    required: true,
    type: Number
  },
  wind: {
    required: true,
    type: Number
  }
})
const dataItems = [
  {
    icon: 'md-grain-twotone',
    data: `${props.humidity}%`
  },
  {
    icon: 'fa-temperature-low',
    data: `${props.feels_like}`
  },
  {
    icon: 'fa-wind',
    data: `${Math.round(props.wind)}Km/h`
  }
]
</script>
<template>
  <CardContainer class="rounded-xl p-1 mt-4">
    <ul class="flex justify-between items-center h-8 px-4">
      <li v-for="item of dataItems" :key="item.icon" class="flex gap-2">
        <v-icon :name="item.icon" scale="1.2" />
        <p>{{ item.data }}</p>
      </li>
    </ul>
  </CardContainer>
</template>
