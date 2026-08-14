<template>
  <article class="category-card mx-2.5 shrink-0 sm:mx-3">
    <NuxtLink
      :to="`/${slugCategory}`"
      :aria-label="`Ver productos de ${nameCategory}`"
      class="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-3 shadow-lg shadow-black/15 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white/[0.09] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
    >
      <div class="category-image-frame overflow-hidden rounded-xl p-2">
        <NuxtImg
          format="webp"
          :src="urlImg || '/img/logo/LOGO-JD-ICONO.webp'"
          :alt="`${nameCategory} para instalaciones y redes eléctricas`"
          class="category-image w-full object-contain transition duration-500 group-hover:scale-105 rounded-xl"
          width="216"
          height="216"
          decoding="async"
          :loading="isFirst ? 'eager' : 'lazy'"
          :fetchpriority="isFirst ? 'high' : 'auto'"
        />
      </div>

      <div class="flex flex-1 flex-col justify-between px-2 pb-1 pt-4">
        <h3
          class="line-clamp-2 text-base font-bold leading-snug text-white sm:text-lg"
        >
          {{ formattedName }}
        </h3>
        <span
          class="mt-4 inline-flex items-center text-sm font-bold text-yellow-400"
        >
          Ver productos
          <span
            class="ml-2 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
            >→</span
          >
        </span>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  urlImg: String,
  slugCategory: String,
  nameCategory: { type: String, default: "Categoría eléctrica" },
  isFirst: { type: Boolean, default: false },
});

const formattedName = computed(() =>
  props.nameCategory
    .toLocaleLowerCase("es-CO")
    .split(" ")
    .map((word) => word.charAt(0).toLocaleUpperCase("es-CO") + word.slice(1))
    .join(" "),
);
</script>

<style scoped>
.category-card {
  width: 240px;
  height: 355px;
  flex: 0 0 240px;
}
.category-image-frame {
  width: 100%;
  height: 216px;
  flex: 0 0 216px;
}
.category-image {
  width: 100%;
  height: 100%;
}
@media (max-width: 640px) {
  .category-card {
    width: 210px;
    height: 325px;
    flex-basis: 210px;
  }
  .category-image-frame {
    height: 186px;
    flex-basis: 186px;
  }
}
</style>
