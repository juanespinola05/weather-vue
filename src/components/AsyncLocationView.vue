<script lang="ts" setup>
import { getWeatherData } from '@/services/weather'
import { useRoute } from 'vue-router'
import WeatherCard from './WeatherCard.vue'
import CardContainer from './CardContainer.vue'
import WeatherDataBar from './WeatherDataBar.vue'
import HourlyWeather from './HourlyWeather.vue'
import type { DailyEntity } from '@/share/types'
import DailyWeather from './DailyWeather.vue'

const route = useRoute()

const fetchData = async () => {
  const { lat, lng } = route.query
  return getWeatherData(lat as string, lng as string)
}
let weatherData = await fetchData()

const { description, icon } = (weatherData?.current.weather as any)[0]
const daily = (weatherData.daily as DailyEntity[])
const now = daily[0]
const minTemp = now.temp.min
const maxTemp = now.temp.max
const cityName = (route.params.city as string).replace(/_/gi, ' ')

const date = new Date(weatherData?.currentTime || 0)
const computedDates = {
  shorter: date.toLocaleDateString('en-us', { month: 'short', day: 'numeric'}),
  short: date.toLocaleDateString('en-us', {
    weekday: 'short',
    day: '2-digit',
    month: 'long'
  }),
  time: date.toLocaleTimeString('en-us')
}
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
      <CardContainer class="w-full mt-4">
        <h1 class="text-2xl font-medium">{{ cityName }}</h1>
        <p class="text-sm text-gray-300">
          {{ computedDates.short + ' ' + computedDates.time }}
        </p>
      </CardContainer>
      <WeatherDataBar
        :humidity="now.humidity"
        :feels_like="weatherData?.current.feels_like"
        :wind="now.wind_speed"
        />
    </div>
    <CardContainer class="mt-4 text-white">
      <h2 class="text-lg font-bold">Hourly</h2>
      <div class="overflow-x-scroll w-full mt-2 scroll-smooth">
        <ul class="flex gap-2">
          <li v-for="hour of weatherData.hourly" :key="hour.dt">
            <HourlyWeather :data="hour" />
          </li>
        </ul>
      </div>
    </CardContainer>
    <CardContainer class="mt-4 text-white">
      <h2 class="text-lg font-bold">Next Forecast</h2>
      <ul class="flex flex-col mt-2">
        <li v-for="day of weatherData.daily" :key="day.dt">
          <DailyWeather :data="day" />
        </li>
      </ul>
    </CardContainer>
  </main>
</template>
