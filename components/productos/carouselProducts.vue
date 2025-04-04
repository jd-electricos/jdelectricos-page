<template>
  <div class="relative w-full max-w-3xl mx-auto">
    <!-- Imagen principal -->
    <div class="relative">
      <img
        :src="images[currentIndex]"
        class="w-full h-96 object-contain rounded-lg bg-gray-100"
      />

      <!-- Botón Izquierda -->
      <button
        @click="prevSlide"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <ArrowBigLeft />
      </button>

      <!-- Botón Derecha -->
      <button
        @click="nextSlide"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <ArrowBigRight />
      </button>
    </div>

    <!-- Miniaturas -->
    <div class="flex justify-center mt-4 space-x-2">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        @click="currentIndex = index"
        class="w-16 h-16 object-cover cursor-pointer border-2"
        :class="{ 'border-gray-800': currentIndex === index }"
      />
    </div>
  </div>
</template>

<script setup>
import { ArrowBigLeft, ArrowBigRight } from "lucide-vue-next";
import { ref } from "vue";

defineProps({
  images: Array,
});

const currentIndex = ref(0);

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};
</script>
