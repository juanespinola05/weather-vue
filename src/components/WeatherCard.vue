<script setup lang="ts">
import { capitalizeAll } from '@/utils/string'
import WeatherIcon from './WeatherIcon.vue'

const props = defineProps({
  weatherDescription: {
    required: true,
    type: String
  },
  icon: {
    required: true,
    type: String
  },
  minTemp: {
    type: Number,
    required: true
  },
  maxTemp: {
    type: Number,
    required: true
  },
  temp: {
    type: Number,
    required: true
  }
})
const capitalizedDescription = capitalizeAll(props.weatherDescription)
const tempetureDetails = `Max.: ${Math.round(props.maxTemp)}° Min.: ${Math.round(props.minTemp)}°`
const roundedTemperature = Math.round(props.temp)
</script>

<template>
  <WeatherIcon
    class="h-40 w-56 object-cover"
    :icon="props.icon"
    :description="props.weatherDescription"
  />
  <p class="font-bold text-7xl">{{ roundedTemperature }}°</p>
  <div class="text-gray-300 text-center">
    <p>{{ capitalizedDescription }}</p>
    <p>{{ tempetureDetails }}</p>
  </div>
</template>
