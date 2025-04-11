<template>
  <div class="pt-10 pb-10 px-5">
    <h1 class="text-4xl font-bold">{{ props.category?.name }}</h1>
    <div class="flex flex-wrap gap-5 p-5 justify-center">
      <div v-for="product in props.products" :key="product.id">
        <cardProductToFeed
          :urlImg="product.previewImg"
          :slugProduct="product.slugProduct"
          :nameProduct="product.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import cardProductToFeed from "~/components/productos/cardProductToFeed.vue";
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  category: {
    type: Object,
    required: true,
  },
});

const data = computed(() => props.category || {});
useSeoMeta({
  title: computed(() => data.value.seo.ogtitle || ""),
  description: computed(() => data.value.seo.ogdescription || ""),
  ogTitle: computed(() => data.value.seo.ogtitle || ""),
  ogDescription: computed(() => data.value.seo.ogdescription || ""),
  ogType: "product",
  ogUrl: computed(() => data.value.slugProduct || ""),
  ogSiteName:
    "materiales electricos, productos electricos en colombia JD ELECTRICOS",
  // ogImage: computed(() => data.value.carouselImg || ""),
  // ogImageSecureUrl: computed(() => data.value.carouselImg || ""),
  ogImageWidth: "800",
  ogImageHeight: "800",
  ogImageAlt: computed(() => data.value.name || ""),
  ogImageType: "image/jpeg",
  twitterCard: "summary_large_image",
  twitterTitle: computed(() => data.value.name || ""),
  twitterDescription: computed(() => data.value.description || ""),
  twitterSite: "@JD_ELECTRICOS",
  twitterCreator: "@JD_ELECTRICOS",
  twitterImage: "https://jdelectricos.com.co/wp-content/uploads/2020/04/distribuidor-de-materiales-electricos.jpg",
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
        () => `https://jdelectricos.com.co/${data.value.slug}` || ""
      ),
    },
  ],
});
</script>

<style scoped></style>
