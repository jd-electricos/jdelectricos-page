<template>
  <div
    class="w-48 flex flex-col items-center gap-4 m-5 border-2 border-white rounded-sm hover:border-2 hover:border-yellow-500 p-3"
  >
    <div>
      <NuxtImg :src="urlImg" alt="" class="w-40 h-40 rounded-2xl" />
    </div>
    <div>
      <div class="flex flex-col items-center gap-4">
        <NuxtLink :to="`/${slugProduct}`">
          <h2 class="font-bold text-justify">{{ nameProduct }}</h2>
        </NuxtLink>
        <p class="font-semibold">$ {{ priceProduct }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  urlImg: String,
  slugProduct: String,
  nameProduct: String,
  priceProduct: String,
});
</script>

<style scoped></style>
