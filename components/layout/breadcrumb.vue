<template>
  <div
    class="bg-gray-200 rounded-2xl py-2 px-4 overflow-x-auto whitespace-nowrap flex items-center gap-2 text-gray-800 text-sm font-semibold scrollbar-hide select-none"
  >
    <NuxtLink to="/" class="text-gray-800 hover:text-gray-900 shrink-0">
      <p>Inicio</p>
    </NuxtLink>
    <ChevronRight class="shrink-0" />

    <NuxtLink
      to="/tienda-articulos-electricos"
      class="text-gray-800 hover:text-gray-900 shrink-0"
    >
      <p>Productos</p>
    </NuxtLink>
    <ChevronRight class="shrink-0" />

    <div :class="categoryName === undefined || null ? 'hidden' : 'flex flex-row items-center'">
      <NuxtLink
        :to="`/${categorySlug}`"
        class="text-gray-800 hover:text-gray-900 shrink-0"
        :class="subcategoryName === undefined || null ? 'font-bold text-gray-900' : ''"
      >
        <p>{{ categoryName }}</p>
      </NuxtLink>
    </div>
    
    <div :class="subcategoryName === undefined || null ? 'hidden' : 'flex flex-row items-center'">
      <ChevronRight class="shrink-0" />
      <NuxtLink
        :to="`/${subcategorySlug}`"
        class="text-gray-800 hover:text-gray-900 shrink-0"
        :class="productName === undefined || null ? 'font-bold text-gray-900' : ''"
      >
        <p>{{ subcategoryName }}</p>
      </NuxtLink>
    </div>
    <div :class="productSlug === undefined || null ? 'hidden' : 'flex flex-row items-center'">
      <ChevronRight class="shrink-0" />
      <NuxtLink
        :to="`/${productSlug}`"
        class="hover:text-gray-900 shrink-0 font-bold text-gray-900"
      >
        <p>{{ productName }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// import { ChevronRight } from "lucide-vue-next";
const ChevronRight = defineAsyncComponent(() =>
  import("lucide-vue-next").then(m => m.ChevronRight)
);
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
