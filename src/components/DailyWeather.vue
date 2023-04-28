<script setup lang="ts">
import type { DailyEntity, WeatherEntity } from '@/share/types'
import WeatherIcon from './WeatherIcon.vue'

const props = defineProps<{ data: DailyEntity }>()
const icon = (props.data.weather as WeatherEntity[])[0].icon
const day = new Date(props.data.dt * 1000).toLocaleDateString('en-us', { weekday: 'long' })
const min = Math.round(props.data.temp.min)
const max = Math.round(props.data.temp.max)
</script>
<template>
  <div class="grid grid-cols-3 items-center">
    <p class="font-medium">{{ day }}</p>
    <WeatherIcon class="w-10 place-self-center" :icon="icon" :description="''" />
    <div class="justify-self-end">
      <p>
        {{ min }}°
        <span class="text-gray-300"> {{ max }}° </span>
      </p>
    </div>
  </div>
</template>
