<template>
  <div class="bg-gray-800">
    <formContacto />
    <mapa />
  </div>
</template>
<script setup>
import formContacto from "~/components/contacto/formContacto.vue";
import mapa from "~/components/contacto/mapa.vue";
useHead({
  title: "Contacto JD ELECTRICOS | DISTRIBUIDOR DE MATERIALES",
  meta: [
    {
      name: "description",
      content:
        "Somos una empresa distribuidora de materiales eléctricos. Nuestro contacto es 57(1) 341 1060, Bogotá, Colombia.",
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
      content: "Contacto JD ELECTRICOS | DISTRIBUIDOR DE MATERIALES",
    },
    {
      property: "og:description",
      content:
        "Somos una empresa distribuidora de materiales eléctricos. Nuestro contacto es 57(1) 341 1060, Bogotá, Colombia.",
    },
    {
      property: "og:url",
      content: "https://jdelectricos.com.co/contacto-jd-electricos-colombia/",
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
    { property: "og:updated_time", content: "2025-02-27T16:23:26-05:00" },
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
      content: "Contacto JD ELECTRICOS | DISTRIBUIDOR DE MATERIALES",
    },
    {
      name: "twitter:description",
      content:
        "Somos una empresa distribuidora de materiales eléctricos. Nuestro contacto es 57(1) 341 1060, Bogotá, Colombia.",
    },
    { name: "twitter:site", content: "@JD_ELECTRICOS" },
    { name: "twitter:creator", content: "@JD_ELECTRICOS" },
    {
      name: "twitter:image",
      content:
        "https://jdelectricos.com.co/wp-content/uploads/2020/04/distribuidor-de-materiales-electricos.jpg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://jdelectricos.com.co/contacto-jd-electricos-colombia/",
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
              "https://jdelectricos.com.co/contacto-jd-electricos-colombia/#primaryImage",
            url: "https://jdelectricos.com.co/wp-content/uploads/2025/02/Canales-de-contacto-jd.webp",
            width: "200",
            height: "200",
          },
          {
            "@type": "ContactPage",
            "@id":
              "https://jdelectricos.com.co/contacto-jd-electricos-colombia/#webpage",
            url: "https://jdelectricos.com.co/contacto-jd-electricos-colombia/",
            name: "Contacto JD ELECTRICOS | DISTRIBUIDOR DE MATERIALES",
            datePublished: "2015-05-14T13:39:04-05:00",
            dateModified: "2025-02-27T16:23:26-05:00",
            isPartOf: { "@id": "https://jdelectricos.com.co/#website" },
            primaryImageOfPage: {
              "@id":
                "https://jdelectricos.com.co/contacto-jd-electricos-colombia/#primaryImage",
            },
            inLanguage: "es-CO",
          },
          {
            "@type": "Service",
            name: "Contacto JD ELECTRICOS | DISTRIBUIDOR DE MATERIALES",
            description:
              "Somos una empresa distribuidora de materiales el\u00e9ctricos. Nuestro contacto es 57(1) 341 1060, Bogot\u00e1, Colombia.",
            serviceType: "venta de materiales electricos",
            offers: { "@type": "Offer", availability: "InStock" },
            "@id":
              "https://jdelectricos.com.co/contacto-jd-electricos-colombia/#schema-51406",
            image: {
              "@id":
                "https://jdelectricos.com.co/contacto-jd-electricos-colombia/#primaryImage",
            },
            mainEntityOfPage: {
              "@id":
                "https://jdelectricos.com.co/contacto-jd-electricos-colombia/#webpage",
            },
          },
        ],
      }),
    },
  ],
});
</script>
