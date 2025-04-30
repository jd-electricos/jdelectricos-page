<template>
  <div
    class="bg-gray-100 rounded-2xl py-2 px-4 overflow-x-auto whitespace-nowrap flex items-center gap-2 text-gray-500 text-sm font-semibold scrollbar-hide select-none"
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
        :class="subcategoryName === undefined || null ? 'font-bold text-gray-800' : ''"

      >
        <p>{{ categoryName }}</p>
      </NuxtLink>
    </div>
    
    <div :class="subcategoryName === undefined || null ? 'hidden' : 'flex flex-row items-center'">
      <ChevronRight class="shrink-0" />
      <NuxtLink
        :to="`/${subcategorySlug}`"
        class="text-gray-500 hover:text-gray-800 shrink-0"
        :class="productName === undefined || null ? 'font-bold text-gray-800' : ''"
      >
        <p>{{ subcategoryName }}</p>
      </NuxtLink>
    </div>
    <div :class="productSlug === undefined || null ? 'hidden' : 'flex flex-row items-center'">
      <ChevronRight class="shrink-0" />
      <NuxtLink
        :to="`/${productSlug}`"
        class="hover:text-gray-800 shrink-0 font-bold text-gray-800"
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
