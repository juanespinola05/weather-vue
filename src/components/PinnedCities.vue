<script setup lang="ts">
import { ref } from 'vue'
import type { Location, OpenWeatherCurrentResponse } from '@/share/types'
import { LOCATIONS_SPACE } from '@/constants/constants'
import { getCurrentWeatherData } from '@/services/weather'
import CardContainer from './CardContainer.vue'
import WeatherIcon from './WeatherIcon.vue'
import { useRouter } from 'vue-router'

type LocationData = Location & { data: OpenWeatherCurrentResponse }

const locationsFromLS = localStorage.getItem(LOCATIONS_SPACE)
const locations = ref<LocationData[]>(locationsFromLS ? JSON.parse(locationsFromLS) : [])
const getLocationData = async () => {
  const locationsRequests = locations.value.map(getCurrentWeatherData)
  const locationData = await Promise.all(locationsRequests)
  locations.value = locations.value.map((loc, i) => ({ ...loc, data: locationData[i] }))
}
await getLocationData()

const router = useRouter()
const navigateToLocation = (loc: LocationData) => {
  router.push({
    name: 'locationView',
    params: {
      state: loc.state,
      city: loc.city
    },
    query: {
      lat: loc.coords.lat,
      lng: loc.coords.lng
    }
  })
}
</script>
<template>
  <div class="w-full max-w-md flex flex-col gap-2">
    <a
      class="cursor-pointer block scale-hover"
      v-for="loc in locations"
      :key="loc.id"
      @click="navigateToLocation(loc)"
      :title="`See ${loc.data.name} weather data`"
    >
      <CardContainer class="w-full text-white flex justify-between items-center">
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
    </a>
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

.scale-hover {
  transition: transform 0.2s ease;
}

.scale-hover:hover {
  transform: scale(1.04);
}
</style>
