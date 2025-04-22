<template>
  <div class="pt-10 pb-10 px-5">
    <h1 class="text-4xl font-bold py-5">{{ props.category?.name }}</h1>
    <breadcrumb
      :categorySlug="props.category?.slug"
      :categoryName="props.category?.name"
    />
    <div class="flex flex-wrap gap-5 p-5 justify-center">
      <div
        v-for="subcategory in props.category?.subCategories"
        :key="subcategory.name"
      >
        <div
          class="w-58 flex flex-col items-center gap-4 m-5 border-2 border-gray-600 rounded-2xl hover:border-2 hover:border-yellow-500 hover:bg-white p-3  hover:text-black"
        >
          <div>
            <NuxtLink
              :to="`/${subcategory.slug}`"
              :aria-label="`Ver categoria ${subcategory.name}`"
            >
              <NuxtImg
                src="https://jdelectricos.com.co/wp-content/uploads/2015/02/10671457_350118441826896_5004478760188836471_n-150x150.jpg"
                :alt="`Ver categoria ${subcategory.name}`"
                class="w-40 h-40 rounded-2xl"
              />
            </NuxtLink>
          </div>
          <div>
            <div class="flex flex-col items-center gap-4">
              <!-- <NuxtLink :to="`/${slugCategory}`">  este codigo es el de los slug se debe remplazar el de abajo por el de arriba -->
              <NuxtLink :to="`/${subcategory.slug}`">
                <h2 class="font-bold text-center">{{ subcategory.name }}</h2>
              </NuxtLink>
              <NuxtLink :to="`/${subcategory.slug}`">
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

<style scoped></style>
