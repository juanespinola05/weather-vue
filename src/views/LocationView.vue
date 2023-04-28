<script setup lang="ts">
import AsyncLocationView from '@/components/AsyncLocationView.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
</script>
<template>
  <div>
    <Suspense>
      <AsyncLocationView />
      <template #fallback>
        <div class="container h-full flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>
