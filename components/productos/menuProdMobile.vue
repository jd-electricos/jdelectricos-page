<template>
  <div>
    <!-- menu productos -->
    <Transition name="fade">
      <button
        v-if="!menuOpen"
        class="fixed bottom-10 left-5 bg-gray-600 text-white p-3 z-999 lg:hidden rounded-2xl drop-shadow-xl drop-shadow-gray-900 font-bold text-sm"
        @click="menuOpen = true"
      >
        Menu Productos
      </button>
    </Transition>
    <MenuFloat :open="menuOpen" @close="menuOpen = false" />
  </div>
</template>

<script setup>
import MenuFloat from "~/components/productos/menuFloat.vue";

const menuOpen = ref(false);
</script>

<style scoped></style>
