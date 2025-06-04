<template>
  <div class="flex flex-col gap-10">
    <div v-if="props.dataBlog" class="">
      <div v-html="props.dataBlog.content"></div>
    </div>
    <sectionCategory/>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import sectionCategory from "../home/sectionCategory.vue";

const props = defineProps({
  dataBlog: Object,
});

const data = computed(() => props.dataBlog || {});

useSeoMeta({
  title: computed(() => data.value.ogtitle || ""),
  description: computed(() => data.value.ogdescription || ""),
  ogTitle: computed(() => data.value.ogtitle || ""),
  ogDescription: computed(() => data.value.ogdescription || ""),
  ogType: "product",
  ogUrl: computed(() => data.value.slug || ""),
  ogSiteName:
    "materiales electricos, productos electricos en colombia JD ELECTRICOS",
  ogImage: computed(() => data.value.image || ""),
  ogImageSecureUrl: computed(() => data.value.image || ""),
  ogImageWidth: "800",
  ogImageHeight: "800",
  ogImageAlt: computed(() => data.value.title || ""),
  ogImageType: "image/jpeg",
  twitterCard: "summary_large_image",
  twitterTitle: computed(() => data.value.title || ""),
  twitterDescription: computed(() => data.value.ogdescription || ""),
  twitterSite: "@JD_ELECTRICOS",
  twitterCreator: "@JD_ELECTRICOS",
  twitterImage: computed(() => data.value.image || ""),
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
      location: { "@id": "https://jdelectricos.com.co/#place" },
    },
    {
      "@type": "WebSite",
      "@id": "https://jdelectricos.com.co/#website",
      url: "https://jdelectricos.com.co",
      name: "MATERIALES ELECTRICOS - JD ELECTRICOS",
      publisher: { "@id": "https://jdelectricos.com.co/#organization" },
      inLanguage: "es-CO",
    },
    {
      "@type": "ImageObject",
      "@id": `${data.value.canonical}/#primaryImage`,
      url: `${data.value.image}`,
      width: "600",
      height: "450",
    },
    {
      "@type": "WebPage",
      "@id": `${data.value.canonical}/#webpage`,
      url: `${data.value.canonical}/#webpage`,
      name: data.value.title,
      datePublished: data.value.createdAt,
      dateModified: data.value.createdAt,
      isPartOf: { "@id": "https://jdelectricos.com.co/#website" },
      primaryImageOfPage: {
        "@id": `${data.value.canonical}/#primaryImage`,
      },
      inLanguage: "es-CO",
    },
    {
      "@type": "BlogPosting",
      headline: data.value.title,
      datePublished: data.value.createdAt,
      dateModified: data.value.createdAt,
      author: { "@type": "Person", name: "admin" },
      publisher: { "@id": "https://jdelectricos.com.co/#organization" },
      description: data.value.ogdescription,
      "@id": `${data.value.canonical}/#richSnippet`,
      isPartOf: {
        "@id": `${data.value.canonical}/#webpage`,
      },
      image: {
        "@id": `${data.value.canonical}/#primaryImage`,
      },
      inLanguage: "es-CO",
      mainEntityOfPage: {
        "@id": `${data.value.canonical}/#webpage`,
      },
    },
  ],
});

useHead({
  meta: [
    { property: "og:locale", content: "es_ES" },
    { property: "og:type", content: "article" },
    {
      property: "og:title",
      content: data.value.ogtitle || "",
    },
    {
      property: "og:description",
      content: data.value.ogdescription || "",
    },
    {
      property: "og:url",
      content: data.value.canonical || "",
    },
    {
      property: "og:site_name",
      content:
        "materiales electricos, productos electricos en colombia JD ELECTRICOS",
    },
    {
      property: "article:publisher",
      content: "https://www.facebook.com/jd.materialeselectricos",
    },
    { property: "article:section", content: "BLOG" },
    { property: "og:updated_time", content: data.value.createdAt || "" },
    {
      property: "og:image",
      content: data.value.image || "",
    },
    {
      property: "og:image:secure_url",
      content: data.value.image || "",
    },
    { property: "og:image:width", content: "1024" },
    { property: "og:image:height", content: "453" },
    { property: "og:image:alt", content: "materiales eléctricos la por mayor" },
    { property: "og:image:type", content: "image/jpeg" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: data.value.title || "",
    },
    {
      name: "twitter:description",
      content: data.value.ogdescription || "",
    },
    { name: "twitter:site", content: "@JD_ELECTRICOS" },
    { name: "twitter:creator", content: "@JD_ELECTRICOS" },
    {
      name: "twitter:image",
      content: data.value.image || "",
    },
  ],
  script: [
    {
      innerHTML: computed(() =>
        JSON.stringify(data.value.jsonld || dataJsonLd.value)
      ),
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
