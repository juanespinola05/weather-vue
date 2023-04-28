<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { uid } from 'uid'
import type { Location } from '@/share/types'
import { LOCATIONS_SPACE } from '@/constants/constants'

const route = useRoute()
const router = useRouter()
const preview = computed(() => route.query.preview === 'true')
const locations = ref<Location[]>([])

const addLocation = () => {
  const locationsFromLS = localStorage.getItem(LOCATIONS_SPACE)
  if (locationsFromLS) locations.value = JSON.parse(locationsFromLS)

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
  localStorage.setItem(LOCATIONS_SPACE, JSON.stringify(locations.value))
  const query = Object.assign({}, route.query)
  delete query.preview
  router.push({ query })
}
</script>
<template>
  <button @click="addLocation" class="cursor-pointer">
    <v-icon v-if="preview" name="hi-solid-plus-circle" scale="1.5" hover />
  </button>
</template>
