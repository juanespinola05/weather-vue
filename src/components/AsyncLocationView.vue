<script lang="ts" setup>
import { getWeatherData } from '@/services/weather'
import { useRoute } from 'vue-router'
import WeatherCard from './WeatherCard.vue'
import CardContainer from './CardContainer.vue'
import WeatherDataBar from './WeatherDataBar.vue';

const route = useRoute()

const fetchData = async () => {
  const { lat, lng } = route.query
  return getWeatherData(lat as string, lng as string)
}
let weatherData = await fetchData()
console.log("🚀 ~ file: AsyncLocationView.vue:15 ~ weatherData:", weatherData)

const { description, icon } = (weatherData?.current.weather as any)[0]
const daily = (weatherData.daily as any)[0]
const minTemp = daily.temp.min
const maxTemp = daily.temp.max
const cityName = (route.params.city as string).replace(/_/gi, ' ')

const date = new Date(weatherData?.currentTime || 0).toLocaleDateString('en-us', {
  weekday: 'short',
  day: '2-digit',
  month: 'long'
})
const time = new Date(weatherData?.currentTime || 0).toLocaleTimeString('en-us')
</script>

<template>
  <main class="container">
    <div class="flex flex-col items-center text-white">
      <WeatherCard
        :temp="weatherData?.current.temp"
        :max-temp="maxTemp"
        :min-temp="minTemp"
        :weather-description="description"
        :icon="icon"
      />
      <CardContainer class="w-full mt-3">
        <h1 class="text-2xl font-medium">{{ cityName }}</h1>
        <p class="text-sm text-gray-300">
          {{ date + ' ' + time }}
        </p>
      </CardContainer>
      <WeatherDataBar
        :humidity="daily.humidity"
        :feels_like="weatherData?.current.feels_like"
        :wind="daily.wind_speed"
      />
    </div>

    <pre class="text-white">{{ JSON.stringify(weatherData.hourly, null, 2) }}</pre>
  </main>
</template>
