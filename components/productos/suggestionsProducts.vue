<template>
  <section v-if="products.length" aria-labelledby="similar-products-title">
    <div class="mb-6 flex items-end justify-between gap-4">
      <div>
        <p class="text-sm font-bold uppercase tracking-[0.16em] text-[#F1B81A]">
          Continúa explorando
        </p>
        <h2
          id="similar-products-title"
          class="mt-2 text-2xl font-bold tracking-tight text-[#0B4168] sm:text-3xl"
        >
          Productos relacionados
        </h2>
      </div>
      <NuxtLink
        :to="`/${dataSlug}`"
        class="hidden font-bold text-[#0B4168] underline decoration-[#F1B81A] decoration-2 underline-offset-4 hover:text-[#11649a] sm:block"
        >Ver categoría</NuxtLink
      >
    </div>

    <div class="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      <article
        v-for="product in products"
        :key="product.id || product.slugProduct"
        class="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-[#0B4168]/30 hover:shadow-lg"
      >
        <NuxtLink
          :to="`/${product.slugProduct}`"
          class="block aspect-square overflow-hidden bg-[#F5F7FA] p-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F1B81A]/40"
        >
          <NuxtImg
            :src="product.previewImg || fallbackImage"
            :alt="product.name || 'Producto eléctrico relacionado'"
            class="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03] rounded-2xl"
            width="360"
            height="360"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
            decoding="async"
            @error="setFallback"
          />
        </NuxtLink>
        <div class="flex flex-1 flex-col p-4">
          <h3
            class="line-clamp-3 break-words text-sm font-extrabold leading-5 text-[#1F2937] sm:text-base"
          >
            <NuxtLink
              :to="`/${product.slugProduct}`"
              class="hover:text-[#0B4168]"
              >{{ product.name }}</NuxtLink
            >
          </h3>
          <NuxtLink
            :to="`/${product.slugProduct}`"
            class="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-bold text-[#0B4168] transition group-hover:text-[#11649a]"
          >
            Ver producto <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { ArrowRight } from "lucide-vue-next";

const config = useRuntimeConfig();
const props = defineProps({ dataSlug: { type: String, default: "" } });
const fallbackImage = "/img/logo/LOGO-JD-ICONO.webp";

const { data } = await useAsyncData(
  () => `related-products-${props.dataSlug}`,
  () =>
    $fetch(`${config.public.apiBase}/subcategories/slug/${props.dataSlug}`, {
      timeout: 5000,
    }).catch(() => null),
  { watch: [() => props.dataSlug], default: () => null },
);
const products = computed(() =>
  Array.isArray(data.value?.productsInSubcategory)
    ? data.value.productsInSubcategory.slice(0, 4)
    : [],
);
const setFallback = (event) => {
  event.target.src = fallbackImage;
};
</script>
