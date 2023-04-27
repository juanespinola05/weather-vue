<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-weather-terciary via-weather-secondary to-weather-primary font-Roboto"
  >
    <NavBar></NavBar>
    <RouterView />
  </div>
</template>

<style scoped></style>
