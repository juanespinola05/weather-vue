<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="modalActive"
        class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center items-center px-8"
      >
        <Transition name="modal-inner">
          <div
            v-if="modalActive"
            class="p-4 bg-white max-w-sm max-h-screen overflow-y-scroll rounded-lg"
          >
            <slot />
            <button
              @click="$emit('close-modal')"
              class="rounded-lg text-white mt-8 bg-weather-primary py-2 px-6"
            >
              Close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup lang="ts">
defineEmits(['close-modal'])
defineProps({
  modalActive: {
    type: Boolean,
    defaultValue: false
  }
})
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-outer-enter-to,
.modal-outer-leave-from {
  opacity: 1;
}

.modal-inner-enter-active {
  transition: all 0.3s ease-in-out 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s ease-in-out;
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
