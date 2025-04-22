<template>
  <div
    class="bg-gray-200 rounded-2xl p-4 overflow-x-auto whitespace-nowrap flex items-center gap-2 mb-10 text-gray-500 text-sm font-semibold scrollbar-hide"
  >
    <NuxtLink to="/" class="text-gray-500 hover:text-gray-800 shrink-0">
      <p>Inicio</p>
    </NuxtLink>
    <ChevronRight class="shrink-0" />

    <NuxtLink
      to="/tienda-articulos-electricos"
      class="text-gray-500 hover:text-gray-800 shrink-0"
    >
      <p>Productos</p>
    </NuxtLink>
    <ChevronRight class="shrink-0" />

    <div :class="categoryName === undefined || null ? 'hidden' : 'flex flex-row items-center'">
      <NuxtLink
        :to="`/${categorySlug}`"
        class="text-gray-500 hover:text-gray-800 shrink-0"
      >
        <p>{{ categoryName }}</p>
      </NuxtLink>
    </div>
    
    <div :class="subcategoryName === undefined || null ? 'hidden' : 'flex flex-row items-center'">
      <ChevronRight class="shrink-0" />
      <NuxtLink
        :to="`/${subcategorySlug}`"
        class="text-gray-500 hover:text-gray-800 shrink-0"
      >
        <p>{{ subcategoryName }}</p>
      </NuxtLink>
    </div>
    <div :class="productSlug === undefined || null ? 'hidden' : 'flex flex-row items-center'">
      <ChevronRight class="shrink-0" />
      <NuxtLink
        :to="`/${productSlug}`"
        class="text-gray-500 hover:text-gray-800 shrink-0"
      >
        <p>{{ productName }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ChevronRight } from "lucide-vue-next";
const props = defineProps({
  categorySlug: String,
  categoryName: String,
  subcategorySlug: String,
  subcategoryName: String,
  productSlug: String,
  productName: String,
});
</script>

<style scoped></style>
