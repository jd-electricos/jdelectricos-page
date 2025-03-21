<template>
  <div
    class="w-48 flex flex-col items-center gap-4 m-5 border-2 border-gray-600 rounded-sm hover:border-2 hover:border-yellow-500 hover:bg-white p-3 text-white hover:text-black"
  >
    <div>
      <NuxtLink :to="`/`">
        <NuxtImg :src="urlImg" alt="" class="w-40 h-40 rounded-2xl" />
      </NuxtLink>
    </div>
    <div>
      <div class="flex flex-col items-center gap-4">
        <!-- <NuxtLink :to="`/${slugProduct}`">  este codigo es el de los slug se debe remplazar el de abajo por el de arriba -->
        <NuxtLink :to="`/`">
          <h2 class="font-bold text-justify">{{ nameProduct }}</h2>
        </NuxtLink>
        <NuxtLink :to="`/`">
          <p class="font-semibold">Saber mas</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  urlImg: String,
  slugProduct: String,
  nameProduct: String,
});
</script>

<style scoped></style>
