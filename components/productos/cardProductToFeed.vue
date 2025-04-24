<template>
  <div
    class="w-48 min-h-80 flex flex-col items-center justify-between border-2 border-gray-600 rounded-2xl hover:border-2 hover:border-yellow-500 hover:bg-white p-3"
  >
    <div class="">
      <NuxtLink :to="`/${slugProduct}`">
        <NuxtImg :src="urlImg" alt="" class="w-40 rounded-2xl mask-t-from-50%" />
      </NuxtLink>
    </div>
    <div>
      <div class="flex flex-col items-center gap-4">
        <!-- <NuxtLink :to="`/${slugProduct}`">  este codigo es el de los slug se debe remplazar el de abajo por el de arriba -->
        <NuxtLink :to="`/${slugProduct}`">
          <h2 class="font-bold hover:text-gray-500">{{ nameProduct }}</h2>
        </NuxtLink>
        <NuxtLink :to="`/${slugProduct}`">
          <p class="font-semibold hover:text-gray-500">Saber mas</p>
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
