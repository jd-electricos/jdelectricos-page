<template>
  <figure class="w-full">
    <div class="relative aspect-square overflow-hidden rounded-2xl bg-white">
      <NuxtImg
        :src="activeImage"
        :alt="`${alt}, imagen ${currentIndex + 1} de ${safeImages.length}`"
        class="h-full w-full object-contain p-4 sm:p-8 rounded-2xl"
        width="720"
        height="720"
        sizes="(max-width: 1024px) 100vw, 50vw"
        fit="contain"
        decoding="async"
        fetchpriority="high"
        loading="eager"
        itemprop="image"
        @error="useFallback"
      />

      <template v-if="safeImages.length > 1">
        <button
          type="button"
          class="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/95 text-[#0B4168] shadow-sm transition hover:bg-[#0B4168] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0B4168]/25"
          aria-label="Ver imagen anterior"
          @click="prevSlide"
        >
          <ChevronLeft class="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          class="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/95 text-[#0B4168] shadow-sm transition hover:bg-[#0B4168] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0B4168]/25"
          aria-label="Ver imagen siguiente"
          @click="nextSlide"
        >
          <ChevronRight class="h-5 w-5" aria-hidden="true" />
        </button>
        <span
          class="absolute bottom-3 right-3 rounded-full bg-[#0B4168] px-3 py-1 text-xs font-bold text-white"
          >{{ currentIndex + 1 }} / {{ safeImages.length }}</span
        >
      </template>
    </div>

    <figcaption class="sr-only">Galería del producto {{ alt }}</figcaption>

    <div
      v-if="safeImages.length > 1"
      class="mt-4 flex gap-3 overflow-x-auto pb-1"
      aria-label="Miniaturas del producto"
    >
      <button
        v-for="(image, index) in safeImages"
        :key="`${image}-${index}`"
        type="button"
        class="h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-white p-1 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F1B81A]/40"
        :class="
          currentIndex === index
            ? 'border-[#F1B81A]'
            : 'border-slate-200 hover:border-[#0B4168]/50'
        "
        :aria-label="`Ver imagen ${index + 1} de ${alt}`"
        :aria-current="currentIndex === index ? 'true' : undefined"
        @click="currentIndex = index"
      >
        <NuxtImg
          :src="image"
          :alt="`Miniatura ${index + 1} de ${alt}`"
          class="h-full w-full object-contain"
          width="80"
          height="80"
          sizes="80px"
          loading="lazy"
          decoding="async"
          @error="useFallback"
        />
      </button>
    </div>
  </figure>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const props = defineProps({
  carouselImage: { type: Array, default: () => [] },
  alt: { type: String, default: "Producto eléctrico" },
});

const fallbackImage = "/img/logo/LOGO-JD-ICONO.webp";
const currentIndex = ref(0);
const failedImages = ref(new Set());
const safeImages = computed(() => {
  const images = props.carouselImage
    .filter(Boolean)
    .map((image) => (failedImages.value.has(image) ? fallbackImage : image));
  return images.length ? images : [fallbackImage];
});
const activeImage = computed(
  () => safeImages.value[currentIndex.value] || fallbackImage,
);

watch(
  () => props.carouselImage,
  () => {
    currentIndex.value = 0;
  },
  { deep: true },
);
const useFallback = () => {
  if (activeImage.value === fallbackImage) return;
  failedImages.value = new Set([...failedImages.value, activeImage.value]);
};
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + safeImages.value.length) %
    safeImages.value.length;
};
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % safeImages.value.length;
};
</script>
