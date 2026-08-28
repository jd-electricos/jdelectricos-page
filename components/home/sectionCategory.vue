<template>
  <section
    class="relative isolate overflow-hidden bg-slate-950 py-16 sm:py-20"
    aria-labelledby="categorias-title"
  >
    <div
      class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-7xl px-6 text-center sm:px-10 lg:px-12">
      <p class="text-xs font-bold uppercase tracking-[0.22em] text-yellow-400">
        Catálogo especializado
      </p>
      <h2
        id="categorias-title"
        class="mx-auto mt-4 max-w-3xl font-serif text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
      >
        Catálogo de materiales eléctricos
      </h2>
      <p
        class="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
      >
        Explora productos eléctricos y componentes para redes, instalaciones e
        infraestructura de baja, media y alta tensión.
      </p>
    </div>

    <div
      v-if="repeatedCategories.length"
      class="carousel-container mt-10 sm:mt-12"
    >
      <div class="slide-track">
        <cardCategoriesToFeed
          v-for="(category, index) in repeatedCategories"
          :key="`${category.slug}-${index}`"
          :url-img="category.previewImg || '/img/logo/LOGO-JD-ICONO.webp'"
          :slug-category="category.slug"
          :name-category="category.name"
        />
      </div>
    </div>

    <div
      v-else
      class="mx-auto mt-10 max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-slate-300"
    >
      Consulta nuestro catálogo completo para conocer las categorías
      disponibles.
    </div>

    <div class="mt-10 text-center">
      <NuxtLink
        to="/tienda-articulos-electricos"
        class="inline-flex items-center rounded-xl border border-yellow-400/30 px-6 py-3 font-bold text-yellow-300 transition hover:bg-yellow-400 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
      >
        Explorar materiales eléctricos
        <span class="ml-2" aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import cardCategoriesToFeed from "~/components/productos/cardCategoriesToFeed.vue";

const config = useRuntimeConfig();
const { data: categoryResponse } = await useAsyncData(
  "home-categories",
  () =>
    $fetch(`${config.public.apiBase}/categories`, {
      signal: AbortSignal.timeout(5000),
    }),
  { default: () => ({ items: [] }) },
);
const categories = computed(() => categoryResponse.value?.items ?? []);
const repeatedCategories = computed(() => [
  ...categories.value,
  ...categories.value,
]);
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0.75rem 0;
}
.carousel-container::before,
.carousel-container::after {
  content: "";
  position: absolute;
  inset-block: 0;
  z-index: 2;
  width: clamp(2rem, 8vw, 8rem);
  pointer-events: none;
}
.carousel-container::before {
  left: 0;
  background: linear-gradient(to right, rgb(2 6 23), transparent);
}
.carousel-container::after {
  right: 0;
  background: linear-gradient(to left, rgb(2 6 23), transparent);
}
.slide-track {
  display: flex;
  align-items: stretch;
  width: max-content;
  animation: category-scroll 75s linear infinite;
  will-change: transform;
}
.carousel-container:hover .slide-track,
.carousel-container:focus-within .slide-track {
  animation-play-state: paused;
}
@keyframes category-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
@media (max-width: 640px) {
  .slide-track {
    animation-duration: 45s;
  }
}
@media (prefers-reduced-motion: reduce) {
  .slide-track {
    animation: none;
  }
  .carousel-container {
    overflow-x: auto;
    scrollbar-width: thin;
  }
}
</style>
