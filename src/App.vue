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
    <footer class="pt-12">

    </footer>
  </div>
</template>

<style scoped></style>
