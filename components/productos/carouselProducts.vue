<template>
  <div class="relative w-full max-w-3xl mx-auto">
    <!-- Imagen principal -->
    <div class="relative ">
      <NuxtImg
        :src="carouselImage[currentIndex]"
        class="w-full h-96 object-contain rounded-lg bg-gray-100 shadow-xl shadow-neutral-800/50"
        :alt="alt"
        width="640"
        height="384"
        :key="currentIndex"
        decoding="async"
        itemprop="image"
        :title="alt"
        :aria-label="`Imagen del producto ${alt}`"
        :aria-describedby="`Descripción de la imagen del producto ${alt}`"
        fetchpriority="high"
        preload
      />

      <!-- Botón Izquierda -->
      <button
        @click="prevSlide"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full cursor-pointer"
        aria-label="Anterior"
        title="Anterior"
      >
        <ArrowBigLeft aria-hidden="true" focusable="false" />
      </button>

      <!-- Botón Derecha -->
      <button
        @click="nextSlide"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full cursor-pointer"
        aria-label="Siguiente"
        title="Siguiente"
      >
        <ArrowBigRight aria-hidden="true" focusable="false" />
      </button>
    </div>

    <!-- Miniaturas -->
    <div class="flex justify-center mt-4 space-x-2">
      <NuxtImg
        v-for="(image, index) in carouselImage"
        :key="index"
        :src="image"
        :alt="alt"
        :title="`minuatura de ${alt}`"
        @click="currentIndex = index"
        class="w-16 h-16 object-cover cursor-pointer border-2 shadow-xl shadow-neutral-800/50 rounded-lg"
        :class="{ 'border-gray-800': currentIndex === index }"
        width="64"
        height="64"
        preload
      />
    </div>
  </div>
</template>

<script setup>
import { ArrowBigLeft, ArrowBigRight } from "lucide-vue-next";
import { ref } from "vue";

const props = defineProps({
  carouselImage: {
    type: Array,
    required: true,
  },
  alt: {
    type: String,
  },
});

const currentIndex = ref(0);

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.carouselImage.length) %
    props.carouselImage.length;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.carouselImage.length;
};
</script>
