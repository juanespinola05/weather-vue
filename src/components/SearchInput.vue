<template>
  <div class="w-full max-w-md mx-auto relative">
    <input
      type="search"
      name=""
      v-model="searchQuery"
      @input="$emit('search-input', searchQuery)"
      placeholder="Search for a city"
      class="mt-12 mx-auto rounded-lg h-12 w-full py-2 pl-4 pr-12 text-white drop-shadow-xl bg-weather-quaternary bg-opacity-60"
    />
    <div class="absolute right-3 bottom-2">
      <v-icon name="io-search" scale="1.5" color="#DDD"></v-icon>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

defineEmits(['search-input'])

const searchQuery = ref('')
</script>
