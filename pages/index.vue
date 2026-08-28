<template>
  <div>
    <intro />
    <sectionCategory />
    <carouselDistributor />
    <introProducts />
    <ImageAndText />
    <introAboutMe />
    <nam />
  </div>
</template>

<script setup lang="ts">
import intro from "../components/home/intro.vue";
import carouselDistributor from "../components/home/carouselDistributor.vue";
import introProducts from "../components/home/introProducts.vue";
import sectionCategory from "../components/home/sectionCategory.vue";
import introAboutMe from "../components/home/introAboutMe.vue";
import ImageAndText from "../components/home/ImageAndText.vue";
import nam from "~/components/home/nam.vue";

const siteUrl = "https://www.jdelectricos.com.co/";
const title = "Materiales Eléctricos y Productos Eléctricos | JD Eléctricos";
const description = "Materiales eléctricos y productos eléctricos para proyectos de baja, media y alta tensión. Cotiza con JD Eléctricos y recibe atención en Colombia.";
const socialImage = "https://www.jdelectricos.com.co/wp-content/uploads/2020/04/distribuidor-de-materiales-electricos.jpg";

useSeoMeta({
  title,
  description,
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  ogLocale: "es_CO",
  ogType: "website",
  ogTitle: title,
  ogDescription: "Materiales eléctricos para empresas y proyectos de baja, media y alta tensión, con atención comercial en Colombia.",
  ogUrl: siteUrl,
  ogSiteName: "JD Eléctricos",
  ogImage: socialImage,
  ogImageAlt: "Materiales eléctricos JD Eléctricos",
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: socialImage,
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "JD Eléctricos",
      url: siteUrl,
      logo: `${siteUrl}img/logo/logo-menu-jd.webp`,
      email: "ventas@jdelectricos.com",
      telephone: "+57 310 8023277",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cra. 12 #15-95",
        addressLocality: "Bogotá",
        addressRegion: "Cundinamarca",
        postalCode: "111711",
        addressCountry: "CO",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "JD Eléctricos",
      publisher: { "@id": `${siteUrl}#organization` },
      inLanguage: "es-CO",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}#webpage`,
      url: siteUrl,
      name: title,
      description,
      isPartOf: { "@id": `${siteUrl}#website` },
      about: { "@id": `${siteUrl}#organization` },
      inLanguage: "es-CO",
    },
  ],
};

useHead({
  link: [{ rel: "canonical", href: siteUrl }],
  script: [{
    key: "home-structured-data",
    type: "application/ld+json",
    innerHTML: JSON.stringify(structuredData),
  }],
});
</script>
