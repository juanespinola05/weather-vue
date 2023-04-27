<script setup lang="ts">
import SearchInput from '../components/SearchInput.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { fetchPlaces } from '../services/places'
import type { FeaturesEntity } from '@/share/types'

const router = useRouter()
const queryTimeout = ref<number | null>(null)
const mapboxSearchResult = ref<FeaturesEntity[] | null | undefined>(null)
const searchError = ref(false)

const getSearchResults = (query: string) => {
  searchError.value = false
  clearTimeout(queryTimeout.value as number)

  queryTimeout.value = setTimeout(async () => {
    if (query === '') return (mapboxSearchResult.value = null)

    fetchPlaces(query)
      .then((res) => (mapboxSearchResult.value = res.features))
      .catch(() => (searchError.value = true))
  }, 300)
}

const previewLocation = (locationResult: FeaturesEntity) => {
  const [city, state] = locationResult.place_name.split(',').map((e) => e.replace(/\s/gi, '_'))
  router.push({
    name: 'locationView',
    params: { state, city },
    query: {
      lat: (locationResult.geometry.coordinates as number[])[1],
      lng: (locationResult.geometry.coordinates as number[])[0],
      preview: 'true'
    }
  })
}
</script>

<template>
  <main class="container flex flex-col gap-4 items-center">
    <SearchInput @search-input="getSearchResults" />
    <p></p>
    <p class="text-red-600 text-center inline-block rounded-lg bg-red-100 p-2" v-if="searchError">
      Something went wrong! Try again later.
    </p>
    <ul v-else class="flex gap-1 flex-col max-w-md w-full items-center text-gray-300">
      <li
        :title="item.place_name"
        class="line-overflow bg-weather-terciary bg-opacity-60 w-full rounded-lg h-12 p-3 hover:bg-opacity-90 transition-all duration-75"
        v-for="item of mapboxSearchResult"
        :key="item.properties.mapbox_id"
        @click="previewLocation(item)"
      >
        {{ item.place_name }}
      </li>
    </ul>
    <p
      v-if="!searchError && mapboxSearchResult?.length === 0"
      class="text-center inline-block rounded-lg p-2 bg-blue-100 shadow-lg"
    >
      No matches found
    </p>
  </main>
</template>

<style scoped>
.line-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
