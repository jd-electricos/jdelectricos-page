<template>
  <div
    class="w-58 flex flex-col items-center border-2 border-gray-600 rounded-2xl hover:border-2 hover:border-yellow-500 hover:bg-white p-3 text-white hover:text-black drop-shadow-xl bg-gray-800 drop-shadow-gray-900 m-5"
  >
    <div>
      <NuxtLink
        :to="`/${slugCategory}`"
        :aria-label="`Ver categoria ${nameCategory}`"
      >
        <NuxtImg
          :src="urlImg"
          :alt="`Ver categoria ${nameCategory}`"
          class="w-40 h-40 rounded-2xl"
        />
      </NuxtLink>
    </div>
    <div>
      <div class="flex flex-col items-center gap-4">
        <!-- <NuxtLink :to="`/${slugCategory}`">  este codigo es el de los slug se debe remplazar el de abajo por el de arriba -->
        <NuxtLink :to="`/${slugCategory}`">
          <h2 class="font-bold text-center">{{ nameCategory }}</h2>
        </NuxtLink>
        <NuxtLink :to="`/${slugCategory}`">
          <p class="font-semibold">Ver Categoria</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  urlImg: String,
  slugCategory: String,
  nameCategory: String,
});
</script>

<style scoped></style>
