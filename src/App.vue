<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterContainer from './components/FooterContainer.vue'
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-weather-terciary via-weather-secondary to-weather-primary font-Roboto page-grid"
  >
    <NavBar></NavBar>
    <RouterView />
    <FooterContainer></FooterContainer>
  </div>
</template>

<style scoped>
.page-grid {
  display: grid;
  grid-template-rows: 4rem auto 4rem;
  grid-template-columns: 100%;
}
.page-grid footer {
  align-self: center;
}
</style>
