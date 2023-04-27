<script setup lang="ts">
import AsyncLocationView from '@/components/AsyncLocationView.vue'
</script>
<template>
  <div>
    <Suspense>
      <AsyncLocationView />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>
