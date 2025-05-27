<template>
  <section class="select-none bg-gray-800 p-10 pb-56">
    <div class="flex flex-col justify-center items-center px-10">
      <div class="font-bold font-serif py-5 text-white">
        <h2 class="text-3xl text-shadow-lg/20 text-shadow-amber-50">
          Subcategorías de
        </h2>
        <h1 class="lg:text-5xl text-2xl text-shadow-lg/20 text-shadow-amber-50">
          {{ props.category?.name }}
        </h1>
      </div>
      <br />
      <breadcrumb
        class="lg:w-3/12 w-15/12"
        :categorySlug="props.category?.slug"
        :categoryName="props.category?.name"
      />
    </div>
    <div class="flex flex-wrap justify-center pt-10">
      <div
        v-for="subcategory in sortedSubCategories"
        :key="subcategory.name"
      >
        <div
          class="w-58 flex flex-col items-center gap-4 m-5 border-2 border-gray-600 rounded-2xl hover:border-2 hover:border-yellow-500 hover:bg-gray-900 p-3 hover:text-black drop-shadow-xl bg-gray-800 drop-shadow-gray-900"
        >
          <div>
            <NuxtLink
              :to="`/${subcategory.slug}`"
              :aria-label="`Ver categoria ${subcategory.name}`"
            >
              <NuxtImg
                src="https://jdelectricos.com.co/wp-content/uploads/2015/02/10671457_350118441826896_5004478760188836471_n-150x150.jpg"
                :alt="`Ver categoria ${subcategory.name}`"
                :title="`Ver categoria ${subcategory.name}`"
                class="w-40 h-40 rounded-2xl hover:mask-b-from-20% hover:mask-b-to-80%"
                width="160"
                height="160"
                format="webp"
                loading="eager"
                decoding="async"
                preload
              />
            </NuxtLink>
          </div>
          <div>
            <div class="flex flex-col items-center gap-4">
              <!-- <NuxtLink :to="`/${slugCategory}`">  este codigo es el de los slug se debe remplazar el de abajo por el de arriba -->
              <NuxtLink :to="`/${subcategory.slug}`">
                <h2 class="font-bold text-center text-white">
                  {{ subcategory.name }}
                </h2>
              </NuxtLink>
              <NuxtLink :to="`/${subcategory.slug}`">
                <p
                  class="font-semibold bg-gray-800 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 text-white p-1 px-2 rounded-md"
                >
                  Ver Categoria
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

const sortedSubCategories = computed(() => {
  if (!props.category?.subCategories) return [];
  return [...props.category.subCategories].sort((a, b) =>
    a.name.localeCompare(b.name, "es", { sensitivity: "base" })
  );
});

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

const dataJsonLd = ref({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "@id": "https://jdelectricos.com.co/#place",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "4.6047838",
        longitude: "-74.076315",
      },
      hasMap:
        "https://www.google.com/maps/search/?api=1&amp;query=4.6047838,-74.076315,15z",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cra. 12 #15-95",
        addressLocality: "Bogota",
        addressRegion: "Cundinamarca",
        postalCode: "111711",
        addressCountry: "Colombia",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://jdelectricos.com.co/#organization",
      name: "MATERIALES ELECTRICOS - JD ELECTRICOS",
      url: "https://jdelectricos.com.co",
      email: "ventas@jdelectricos.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cra. 12 #15-95",
        addressLocality: "Bogota",
        addressRegion: "Cundinamarca",
        postalCode: "111711",
        addressCountry: "Colombia",
      },
      logo: {
        "@type": "ImageObject",
        // <- aca se debe cambiar la url por el paranetro de la imagen
        url: "https://jdelectricos.com.co/wp-content/uploads/2017/03/jd-electricos1-300x71.png", 
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+57 3232257426",
          contactType: "sales",
        },
        {
          "@type": "ContactPoint",
          telephone: "+57 3163203517",
          contactType: "sales",
        },
        {
          "@type": "ContactPoint",
          telephone: "+57 3202705734",
          contactType: "sales",
        },
        {
          "@type": "ContactPoint",
          telephone: "+57 3235730100",
          contactType: "sales",
        },
      ],
      location: {
        "@id": "https://jdelectricos.com.co/#place",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://jdelectricos.com.co/#website",
      url: "https://jdelectricos.com.co",
      name: "MATERIALES ELECTRICOS - JD ELECTRICOS",
      publisher: {
        "@id": "https://jdelectricos.com.co/#organization",
      },
      inLanguage: "es-CO",
    },
    {
      "@type": "ImageObject",
      "@id": `https://jdelectricos.com.co/${data.value.slug}/#primaryImage`,
      url: "https://jdelectricos.com.co/wp-content/uploads/2020/09/cable-acsr-por-mayor.jpg",
      width: "500",
      height: "500",
    },
    {
      "@type": "ItemPage",
      "@id": `https://jdelectricos.com.co/${data.value.slug}/#webpage`,
      url: `https://jdelectricos.com.co/${data.value.slug}`,
      name: data.value.seo.ogtitle,
      datePublished: "2020-09-04T12:47:31-05:00",
      dateModified: "2022-02-25T01:34:26-05:00",
      isPartOf: {
        "@id": "https://jdelectricos.com.co/#website",
      },
      primaryImageOfPage: {
        "@id": `https://jdelectricos.com.co/${data.value.slug}/#primaryImage`,
      },
      inLanguage: "es-CO",
    },
    {
      "@type": "Product",
      name: data.value.seo.ogtitle,
      description: data.value.seo.ogdescription,
      releaseDate: "2020-09-04T12:47:31-05:00",
      category: data.value.name,
      mainEntityOfPage: {
        "@id": `https://jdelectricos.com.co/${data.value.slug}/#webpage`,
      },
      "@id": `https://jdelectricos.com.co/${data.value.slug}/#richSnippet`,
      image: {
        "@id": `https://jdelectricos.com.co/${data.value.slug}/#primaryImage`,
      },
    },
  ],
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
      innerHTML: computed(() => JSON.stringify(data.value.seo?.jsonld || dataJsonLd.value)),
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
