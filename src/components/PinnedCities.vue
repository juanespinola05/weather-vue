<script setup lang="ts">
import { ref } from 'vue'
import type { Location, OpenWeatherCurrentResponse } from '@/share/types'
import { LOCATIONS_SPACE } from '@/constants/constants'
import { getCurrentWeatherData } from '@/services/weather'
import CardContainer from './CardContainer.vue'
import WeatherIcon from './WeatherIcon.vue'

type LocationData = Location & { data: OpenWeatherCurrentResponse }

const locationsFromLS = localStorage.getItem(LOCATIONS_SPACE)
const locations = ref<LocationData[]>(locationsFromLS ? JSON.parse(locationsFromLS) : [])
const getLocationData = async () => {
  const locationsRequests = locations.value.map(getCurrentWeatherData)
  const locationData = await Promise.all(locationsRequests)
  locations.value = locations.value.map((loc, i) => ({ ...loc, data: locationData[i] }))
}
await getLocationData()
</script>
<template>
  <div class="w-full max-w-md">
    <CardContainer
      class="w-full text-white flex justify-between items-center"
      v-for="loc in locations"
      :key="loc.id"
    >
      <div class="flex items-center">
        <p class="whitespace-nowrap">
          {{ loc.data.name }}
        </p>
        <WeatherIcon
          :icon="(loc.data.weather as any)[0].icon"
          :description="(loc.data.weather as any)[0].icon"
          :class="'w-10'"
        />
      </div>
      <div>
        <p>
          {{ Math.round(loc.data.main.temp_min) }}°
          <span class="text-gray-300"> {{ Math.round(loc.data.main.temp_max) }}° </span>
        </p>
      </div>
    </CardContainer>
  </div>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
