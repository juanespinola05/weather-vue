<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { uid } from 'uid'
import type { Location } from '@/share/types'
import { LOCATIONS_SPACE } from '@/constants/constants'

const route = useRoute()

const locations = ref<Location[]>([])
const isPreview = ref(false)
const saveLocations = (newLocations: Location[]) => {
  localStorage.setItem(LOCATIONS_SPACE, JSON.stringify(newLocations))
}
watch(() => locations.value, saveLocations, { deep: true })

onMounted(() => {
  const locationsFromLS = localStorage.getItem(LOCATIONS_SPACE)
  locations.value = JSON.parse(locationsFromLS ?? '[]')
  isPreview.value = !locations.value.some(
    ({ city, state }) => route.params.city === city && route.params.state === state
  )
})

const addLocation = () => {
  const locationData: Location = {
    id: uid(),
    state: route.params.state as string,
    city: route.params.city as string,
    coords: {
      lat: route.query.lat as string,
      lng: route.query.lng as string
    }
  }
  locations.value.push(locationData)
  isPreview.value = false
}
const removeLocation = (id: string) => {
  const index = locations.value.findIndex((l) => l.id === id)
  locations.value.splice(index, 1)
  isPreview.value = true
}
</script>
<template>
  <button v-if="isPreview" @click="addLocation" class="cursor-pointer">
    <v-icon name="hi-solid-plus-circle" scale="1.5" hover />
  </button>
  <button v-else @click="removeLocation(route.query.id as string)" class="cursor-pointer">
    <v-icon name="hi-solid-minus-circle" scale="1.5" hover />
  </button>
</template>
