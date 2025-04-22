<template>
  <div class="pt-10 pb-10 px-5">
    <h1 class="text-4xl font-bold py-5">{{ props.subcategory.name }}</h1>
    <breadcrumb
      :categorySlug="props.subcategory.category.slug"
      :categoryName="props.subcategory.category.name"
      :subcategorySlug="props.subcategory.slug"
      :subcategoryName="props.subcategory.name"
    />
    <div class="flex flex-wrap gap-5 p-5 justify-center">
      <div
        v-for="product in props.subcategory.productsInSubcategory"
        :key="product.id"
      >
        <div
          class="w-58 flex flex-col items-center gap-4 m-5 border-2 border-gray-600 rounded-2xl hover:border-2 hover:border-yellow-500 hover:bg-white p-3 hover:text-black"
        >
          <div>
            <NuxtLink
              :to="`/${product.slugProduct}`"
              :aria-label="`Ver categoria ${product.name}`"
            >
              <NuxtImg
                :src="product.previewImg"
                :alt="`Ver categoria ${product.name}`"
                class="w-40 h-40 rounded-2xl"
              />
            </NuxtLink>
          </div>
          <div>
            <div class="flex flex-col items-center gap-4">
              <!-- <NuxtLink :to="`/${slugCategory}`">  este codigo es el de los slug se debe remplazar el de abajo por el de arriba -->
              <NuxtLink :to="`/${product.slugProduct}`">
                <h2 class="font-bold text-center">{{ product.name }}</h2>
              </NuxtLink>
              <NuxtLink :to="`/${product.slugProduct}`">
                <p class="font-semibold">Ver Categoria</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumb from "../layout/breadcrumb.vue";
const props = defineProps({
  subcategory: Object,
});
const data = computed(() => props.subcategory || {});
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
  keywords: computed(() => {
    return Array.isArray(data.value.seo.keywords)
      ? data.value.seo.keywords.join(", ")
      : "";
  }),
  ogImageWidth: "800",
  ogImageHeight: "800",
  ogImageAlt: computed(() => data.value.name || ""),
  ogImageType: "image/jpeg",
  twitterCard: "summary_large_image",
  twitterTitle: computed(() => data.value.name || ""),
  twitterDescription: computed(() => data.value.description || ""),
  twitterSite: "@JD_ELECTRICOS",
  twitterCreator: "@JD_ELECTRICOS",
  twitterImage:
    "https://jdelectricos.com.co/wp-content/uploads/2020/04/distribuidor-de-materiales-electricos.jpg",
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
