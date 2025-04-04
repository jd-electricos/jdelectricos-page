<template>
  <div v-if="data">
    <NuxtImg :src="data.carouselImg[0]" />
    <h1>{{ data.name }}</h1>
    <p>{{ data.sku }}</p>
    <p>{{ data.description }}</p>
    <p>{{ data.price }}</p>
    <p>{{ data.stock }}</p>
    <p>{{ data.category.name }}</p>
    <p>{{ data.technical_parameters }}</p>
  </div>
</template>

<script setup>
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
  ogSiteName: "materiales electricos, productos electricos en colombia JD ELECTRICOS",
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
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
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
  link: [{ rel: "canonical", href: computed(() => `https://jdelectricos.com.co/${data.value.slugProduct}` || "") }],
});
</script>

