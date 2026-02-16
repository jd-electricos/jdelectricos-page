<template>
  <div>
    <intro />
    <sectionCategory />
    <!-- <bannerPromotions /> -->
    <carouselDistributor />
    <introProducts />
    <ImageAndText />
    <introAboutMe />
  </div>
</template>
<script setup>
import intro from "../components/home/intro.vue";
import carouselDistributor from "../components/home/carouselDistributor.vue";
import introProducts from "../components/home/introProducts.vue";
// import sectionCategory from "../components/home/sectionCategory.vue";
// import bannerPromotions from "../components/layout/bannerPromotions.vue";
import introAboutMe from "../components/home/introAboutMe.vue";
import ImageAndText from "../components/home/ImageAndText.vue";

const SectionCategory = defineAsyncComponent(
  () => import("../components/home/sectionCategory.vue")
);

// seo para el home
useHead({
  title: "Materiales Electricos | Distribuidor Productos Por Mayor",
  meta: [
    {
      name: "description",
      content:
        "En JD Eléctricos somos importadores directos de materiales eléctricos para alta, media y baja tensión. Contamos con un amplio catálogo de productos eléctricos certificados, con despachos a nivel nacional",
    },
    {
      name: "robots",
      content:
        "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    },
    { property: "og:locale", content: "es_ES" },
    { property: "og:type", content: "website" },
    {
      property: "og:title",
      content: "Materiales Electricos | Distribuidor Productos Por Mayor",
    },
    {
      property: "og:description",
      content:
        "En JD Eléctricos somos importadores directos de materiales eléctricos para alta, media y baja tensión. Contamos con un amplio catálogo de productos eléctricos certificados, con despachos a nivel nacional",
    },
    {
      property: "keywords",
      content:
        "Materiales Electricos Colombia, Distribuidor productos electricos. Importador. herrajes , cables acsr, aisladores poliméricos, soldadura exotermica. Of Bogotá",
    },
    { property: "og:url", content: "https://jdelectricos.com.co/" },
    {
      property: "og:site_name",
      content:
        "materiales electricos, productos electricos en colombia JD ELECTRICOS",
    },
    { property: "og:updated_time", content: "2025-03-25T08:07:05-05:00" },
    {
      property: "og:image",
      content:
        "https://jdelectricos.com.co/wp-content/uploads/2020/04/distribuidor-de-materiales-electricos.jpg",
    },
    {
      property: "og:image:secure_url",
      content:
        "https://jdelectricos.com.co/wp-content/uploads/2020/04/distribuidor-de-materiales-electricos.jpg",
    },
    { property: "og:image:width", content: "1024" },
    { property: "og:image:height", content: "453" },
    { property: "og:image:alt", content: "materiales eléctricos la por mayor" },
    { property: "og:image:type", content: "image/jpeg" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Materiales Electricos | Distribuidor Productos Por Mayor",
    },
    {
      name: "twitter:description",
      content:
        "En JD Eléctricos somos importadores directos de materiales eléctricos para alta, media y baja tensión. Contamos con un amplio catálogo de productos eléctricos certificados, con despachos a nivel nacional",
    },
    { name: "twitter:site", content: "@JD_ELECTRICOS" },
    { name: "twitter:creator", content: "@JD_ELECTRICOS" },
    {
      name: "twitter:image",
      content:
        "https://jdelectricos.com.co/wp-content/uploads/2020/04/distribuidor-de-materiales-electricos.jpg",
    },
  ],
  link: [{ rel: "canonical", href: "https://jdelectricos.com.co/" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
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
            potentialAction: {
              "@type": "SearchAction",
              target: "https://jdelectricos.com.co/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
          {
            "@type": "ImageObject",
            "@id": "https://jdelectricos.com.co/#primaryImage",
            url: "https://jdelectricos.com.co/wp-content/uploads/2025/03/caja-medifor-monofasico-policarbonato.png",
            width: "200",
            height: "200",
          },
          {
            "@type": "ItemPage",
            "@id": "https://jdelectricos.com.co/#webpage",
            url: "https://jdelectricos.com.co/",
            name: "Materiales Electricos | Distribuidor Productos Por Mayor",
            datePublished: "2015-05-14T12:51:30-05:00",
            dateModified: "2025-03-25T08:07:05-05:00",
            isPartOf: { "@id": "https://jdelectricos.com.co/#website" },
            primaryImageOfPage: {
              "@id": "https://jdelectricos.com.co/#primaryImage",
            },
            inLanguage: "es-CO",
          },
          {
            "@type": "Product",
            name: "Materiales Electricos | Distribuidor Productos Por Mayor",
            description:
              "Materiales El\u00e9ctricos Colombia, Distribuidor importador. herrajes , cables,  subestaciones, aisladores polimericos, iluminacion led., soldadura.  Of Bogota",
            offers: {
              "@type": "Offer",
              price: "0",
              url: "https://jdelectricos.com.co/",
              availability: "https://schema.org/InStock",
            },
            "@id": "https://jdelectricos.com.co/#schema-48057",
            image: { "@id": "https://jdelectricos.com.co/#primaryImage" },
            mainEntityOfPage: { "@id": "https://jdelectricos.com.co/#webpage" },
          },
        ],
      }),
    },
  ],
});
</script>
