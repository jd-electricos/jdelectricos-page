<template>
  <div>
    <titleAndImage />
    <quienesSomos />
  </div>
</template>
<script setup>
import titleAndImage from "../components/nosotros/titleAndImage.vue";
import quienesSomos from "../components/nosotros/quienesSomos.vue";
useHead({
  title: "Empresa Distribuidora De Materiales Eléctricos",
  meta: [
    {
      name: "description",
      content:
        "Somos una empresa distribuidora de materiales eléctricos en Colombia, tenemos productos como aisladores eléctricos, herrajes eléctricos, cables eléctricos",
    },
    {
      name: "robots",
      content:
        "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    },
    { property: "og:locale", content: "es_ES" },
    { property: "og:type", content: "article" },
    {
      property: "og:title",
      content: "Empresa Distribuidora De Materiales Eléctricos",
    },
    {
      property: "og:description",
      content:
        "Somos una empresa distribuidora de materiales eléctricos en Colombia, tenemos productos como aisladores eléctricos, herrajes eléctricos, cables eléctricos",
    },
    {
      property: "og:url",
      content:
        "https://jdelectricos.com.co/empresa-distribuidora-de-materiales-electricos-en-colombia/",
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
    { property: "og:updated_time", content: "2025-02-27T16:29:13-05:00" },
    {
      property: "og:image",
      content:
        "https://jdelectricos.com.co/wp-content/uploads/2015/03/Conductores-electricos-y-sustentabilidad-en-edificios.jpg",
    },
    {
      property: "og:image:secure_url",
      content:
        "https://jdelectricos.com.co/wp-content/uploads/2015/03/Conductores-electricos-y-sustentabilidad-en-edificios.jpg",
    },
    {
      property: "og:image:alt",
      content: "Empresa distribuidora de materiales eléctricos",
    },
    {
      property: "article:published_time",
      content: "2015-05-14-0513:36:42-05:00",
    },
    {
      property: "article:modified_time",
      content: "2025-02-27-0516:29:13-05:00",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Empresa Distribuidora De Materiales Eléctricos",
    },
    {
      name: "twitter:description",
      content:
        "Somos una empresa distribuidora de materiales eléctricos en Colombia, tenemos productos como aisladores eléctricos, herrajes eléctricos, cables eléctricos",
    },
    { name: "twitter:site", content: "@JD_ELECTRICOS" },
    { name: "twitter:creator", content: "@JD_ELECTRICOS" },
    {
      name: "twitter:image",
      content:
        "https://jdelectricos.com.co/wp-content/uploads/2015/03/Conductores-electricos-y-sustentabilidad-en-edificios.jpg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://jdelectricos.com.co/empresa-distribuidora-de-materiales-electricos-en-colombia/",
    },
  ],
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
          },
          {
            "@type": "ImageObject",
            "@id":
              "https://jdelectricos.com.co/empresa-distribuidora-de-materiales-electricos-en-colombia/#primaryImage",
            url: "https://jdelectricos.com.co/wp-content/uploads/2015/03/Conductores-electricos-y-sustentabilidad-en-edificios.jpg",
            width: "200",
            height: "200",
          },
          {
            "@type": "WebPage",
            "@id":
              "https://jdelectricos.com.co/empresa-distribuidora-de-materiales-electricos-en-colombia/#webpage",
            url: "https://jdelectricos.com.co/empresa-distribuidora-de-materiales-electricos-en-colombia/",
            name: "Empresa Distribuidora De Materiales El\u00e9ctricos",
            datePublished: "2015-05-14T13:36:42-05:00",
            dateModified: "2025-02-27T16:29:13-05:00",
            isPartOf: { "@id": "https://jdelectricos.com.co/#website" },
            primaryImageOfPage: {
              "@id":
                "https://jdelectricos.com.co/empresa-distribuidora-de-materiales-electricos-en-colombia/#primaryImage",
            },
            inLanguage: "es-CO",
          },
          {
            "@type": "Article",
            headline: "Empresa Distribuidora de materiales el\u00e9ctricos",
            datePublished: "2015-05-14-0513:36:42-05:00",
            dateModified: "2025-02-27-0516:29:13-05:00",
            author: { "@type": "Person", name: "admin" },
            description:
              "Somos una empresa distribuidora de materiales el\u00e9ctricos en Colombia, tenemos productos como aisladores el\u00e9ctricos, herrajes el\u00e9ctricos, cables el\u00e9ctricos",
            "@id":
              "https://jdelectricos.com.co/empresa-distribuidora-de-materiales-electricos-en-colombia/#schema-48142",
            isPartOf: {
              "@id":
                "https://jdelectricos.com.co/empresa-distribuidora-de-materiales-electricos-en-colombia/#webpage",
            },
            publisher: { "@id": "https://jdelectricos.com.co/#organization" },
            image: {
              "@id":
                "https://jdelectricos.com.co/empresa-distribuidora-de-materiales-electricos-en-colombia/#primaryImage",
            },
            inLanguage: "es-CO",
            mainEntityOfPage: {
              "@id":
                "https://jdelectricos.com.co/empresa-distribuidora-de-materiales-electricos-en-colombia/#webpage",
            },
          },
        ],
      }),
    },
  ],
});
</script>
