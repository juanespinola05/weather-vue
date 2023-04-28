<script setup lang="ts">
import type { HourlyEntity, WeatherEntity } from '@/share/types'
import WeatherIcon from './WeatherIcon.vue'

const props = defineProps<{ data: HourlyEntity }>()
const icon = (props.data.weather as WeatherEntity[])[0].icon
const numericTime = new Date(props.data.dt).toLocaleTimeString('en-us', { hour: 'numeric' })
</script>
<template>
  <div class="w-16 flex flex-col gap-1 items-center rounded-xl p-1">
    <p>{{ Math.round(data.temp) }}%</p>
    <WeatherIcon :icon="icon" :description="''" />
    <p class="text-sm">{{ numericTime }}</p>
  </div>
</template>
