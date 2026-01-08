<template>
  <section v-if="data" class="flex flex-col px-4 py-12 md:p-14" @copy="handleCopy">
    <div
      class="flex flex-col lg:flex-row items-center gap-10 lg:gap-32 md:p-14"
    >
      <div class="w-full lg:w-1/2 flex justify-center">
        <carouselProducts :carouselImage="data.carouselImg" :alt="data.name" />
      </div>
      <div class="flex flex-col w-full lg:w-1/2">
        <div class="flex flex-col gap-4">
          <h1 class="text-2xl md:text-4xl font-bold text-shadow-lg/20">
            {{ data.name }}
          </h1>
          <breadcrumb
            :categorySlug="data.subCategory.category.slug"
            :categoryName="data.subCategory.category.name"
            :subcategorySlug="data.subCategory.slug"
            :subcategoryName="data.subCategory.name"
            :productSlug="data.slugProduct"
            :productName="data.name"
          />
          <hr />
        </div>
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-center p-5 gap-4"
        >
          <p class="font-semibold opacity-0 cursor-default">
            Ref: <span class="font-bold">{{ data.sku }}</span>
          </p>
          <NuxtLink :to="data.subCategory.category.slug">
            <p class="font-semibold">
              Categoria:
              <span class="font-bold">{{
                data.subCategory.category.name || "nada"
              }}</span>
            </p>
          </NuxtLink>
        </div>
        <p class="py-5">{{ data.description }}</p>
        <!-- <p class="font-semibold py-5">
          Precio: <span class="font-bold">{{ data.price }}</span>
        </p> -->
        <a
          :href="whatsappLink"
          target="_blank"
          itemprop="url"
          class="bg-gray-800 text-white font-bold p-4 rounded-xl hover:bg-gray-700 w-full sm:w-auto shadow-xl shadow-neutral-800/50 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer text-center"
        >
          Cotizar Producto
        </a>
      </div>
    </div>
    <div class="py-10">
      <h2 class="text-xl md:text-2xl font-bold mb-2">
        Caracteristicas Tecnicas de {{ data.name }}
      </h2>
      <!-- <p class="text-justify">{{ data.technical_parameters }}</p> -->
      <parametersTable :technicalParameters="data.technical_parameters" :id_category="data.id_category" :name="data.name" />
    </div>
    <div class="py-10">
      <suggestionsProducts :dataSlug="data.subCategory.slug" />
    </div>
  </section>
</template>

<script setup>
import carouselProducts from "./carouselProducts.vue";
import breadcrumb from "../layout/breadcrumb.vue";
import parametersTable from "./parametersTable.vue";
import suggestionsProducts from "./suggestionsProducts.vue";
import { computed } from "vue";

const props = defineProps({
  dataProducts: Object,
});

const data = computed(() => props.dataProducts || {});
const phoneNumber = "573108023277"; // Número de WhatsApp
const whatsappLink = computed(() => {
  const message = `Hola Japs, quiero cotizar ${props.dataProducts.name} con referencia ${props.dataProducts.sku}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
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
  keywords: computed(() => {
    return Array.isArray(data.value.seo.keywords)
      ? data.value.seo.keywords.join(", ")
      : "";
  }),
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
        url: computed(() => data.value.previewImg || ""),
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
      "@id": `https://jdelectricos.com.co/${data.value.slugProduct}/#primaryImage`,
      url: data.value.carouselImg[0],
      width: "500",
      height: "500",
    },
    {
      "@type": "ItemPage",
      "@id": `https://jdelectricos.com.co/${data.value.slugProduct}/#webpage`,
      url: `https://jdelectricos.com.co/${data.value.slugProduct}`,
      name: data.value.seo.ogtitle,
      datePublished: "2020-09-04T12:47:31-05:00",
      dateModified: "2022-02-25T01:34:26-05:00",
      isPartOf: {
        "@id": "https://jdelectricos.com.co/#website",
      },
      primaryImageOfPage: {
        "@id": `https://jdelectricos.com.co/${data.value.slugProduct}/#primaryImage`,
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
        "@id": `https://jdelectricos.com.co/${data.value.slugProduct}/#webpage`,
      },
      "@id": `https://jdelectricos.com.co/${data.value.slugProduct}/#richSnippet`,
      image: {
        "@id": `https://jdelectricos.com.co/${data.value.slugProduct}/#primaryImage`,
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
      innerHTML: computed(() =>
        JSON.stringify(data.value.seo?.jsonld || dataJsonLd.value)
      ),
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

const handleCopy = (event) => {
  event.preventDefault();

  const customText = `JD ELÉCTRICOS | ${data.value.name}  - https://jdelectricos.com.co/${data.value.slugProduct}`;
  
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", customText);
  } else if (window.clipboardData) {
    // For IE (just in case)
    window.clipboardData.setData("Text", customText);
  }
};
</script>
