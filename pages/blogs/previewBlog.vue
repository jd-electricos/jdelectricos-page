<template>
  <div
    class="flex flex-col justify-center items-center border rounded-lg shadow-xl shadow-neutral-300/50 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 p-4"
  >
    <div class="flex justify-between gap-2">
      <!-- texto a la derecha -->
      <div>
        <NuxtLink
          :to="`/blogs/${props.data.slug}`"
          class="text-blue-500 hover:underline"
        >
          <h2 class="font-bold">{{ props.data.title }}</h2>
        </NuxtLink>
        <p>{{ props.data.previewText }}</p>
      </div>
      <!-- imagen a la izquierda -->
      <div>
        <NuxtLink :to="`/blogs/${props.data.slug}`">
          <NuxtImg :src="props.data.image" width="100" :title="props.data.title" :alt="`imagen de la noticia ${props.data.slug}`" />
        </NuxtLink>
      </div>
    </div>
    <NuxtLink :to="`/blogs/${props.data.slug}`">
      <button
        class="bg-gray-800 text-white font-bold p-2 rounded-xl hover:bg-gray-700 text-center cursor-pointer"
      >
        Ver Noticia
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
