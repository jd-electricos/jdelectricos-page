<template>
  <div v-if="data" class="flex flex-col px-4 py-12 md:p-24">
    <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
      <div class="w-full lg:w-1/2 flex justify-center">
        <carouselProducts :carouselImage="data.carouselImg" :alt="data.name" />
      </div>
      <div class="flex flex-col w-full lg:w-1/2">
        <h1 class="text-2xl md:text-4xl font-bold">{{ data.name }}</h1>
        <hr class="my-4" />
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center p-5 gap-4">
          <p class="font-semibold">
            Ref: <span class="font-bold">{{ data.sku }}</span>
          </p>

          <NuxtLink :to="data.category.slug">
            <p class="font-semibold">
              Categoria:
              <span class="font-bold">{{ data.category.name }}</span>
            </p>
          </NuxtLink>
        </div>
        <p class="py-5 text-justify">{{ data.description }}</p>
        <p class="font-semibold py-5">
          Precio: <span class="font-bold">{{ data.price }}</span>
        </p>
        <button
          class="bg-gray-800 text-white font-bold p-4 rounded-xl hover:bg-gray-700 w-full sm:w-auto shadow-xl shadow-neutral-800/50"
        >
          Cotizar Producto
        </button>
        <div class="py-10">
          <h2 class="text-xl md:text-2xl font-bold mb-2">
            Caracteristicas Tecnicas de {{ data.category.name }}
          </h2>
          <p class="text-justify">{{ data.technical_parameters }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import carouselProducts from "./carouselProducts.vue";
import { computed } from "vue";

const props = defineProps({
  dataProducts: Object,
});

const data = computed(() => props.dataProducts || {});
useSeoMeta({
  title: computed(() => data.value.seo.ogtitle || ""),
  description: computed(() => data.value.seo.ogdescription || ""),
  ogTitle: computed(() => data.value.seo.ogtitle || ""),
  ogDescription: computed(() => data.value.seo.ogdescription || ""),
  ogType: "product",
  ogUrl: computed(() => data.value.slugProduct || ""),
  ogSiteName:
    "materiales electricos, productos electricos en colombia JD ELECTRICOS",
  ogImage: computed(() => data.value.carouselImg[0] || ""),
  ogImageSecureUrl: computed(() => data.value.carouselImg[0] || ""),
  ogImageWidth: "800",
  ogImageHeight: "800",
  ogImageAlt: computed(() => data.value.name || ""),
  ogImageType: "image/jpeg",
  twitterCard: "summary_large_image",
  twitterTitle: computed(() => data.value.name || ""),
  twitterDescription: computed(() => data.value.description || ""),
  twitterSite: "@JD_ELECTRICOS",
  twitterCreator: "@JD_ELECTRICOS",
  twitterImage: computed(() => data.value.carouselImg[0] || ""),
  robots:
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
});

useHead({
  meta: [
    { property: "og:locale", content: "es_ES" },
    { property: "og:type", content: "product" },
    { property: "product:price:currency", content: "COP" },
    { property: "product:availability", content: "instock" },
  ],
  script: [
    {
      innerHTML: computed(() => JSON.stringify(data.value.seo?.jsonld || {})),
      type: "application/ld+json",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: computed(
        () => `https://jdelectricos.com.co/${data.value.slugProduct}` || ""
      ),
    },
  ],
});
</script>
