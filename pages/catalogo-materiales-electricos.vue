<template>
  <div class="h-screen w-full flex flex-col items-center justify-center pt-4">
    <iframe
      :src="pdfUrl"
      width="100%"
      height="100%"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup>
const pdfUrl = '/JD-JAPS-CATALOGO.pdf' // Accediendo directamente desde la carpeta public

useHead({
  title: "Catálogo de Materiales Eléctricos - Japs Electrical Equipment",
  meta: [
    {
      name: "description",
      content:
        "Descubre nuestro catálogo de materiales eléctricos para alta, media y baja tensión. Ofrecemos productos de alta calidad para proyectos industriales. Visita nuestra tienda online.",
    },
    {
      name: "keywords",
      content:
        "Materiales eléctricos, Equipos eléctricos alta tensión, Materiales eléctricos media tensión, Materiales eléctricos baja tensión, Proveedores de materiales eléctricos, Componentes eléctricos industriales, Distribuidores de material eléctrico",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Japs Electrical Equipment" },
    { name: "publisher", content: "Japs Electrical Equipment" },
    {
      property: "og:title",
      content: "Catálogo de Materiales Eléctricos - Japs Electrical Equipment",
    },
    {
      property: "og:description",
      content:
        "Descubre nuestro catálogo de materiales eléctricos para alta, media y baja tensión. Ofrecemos productos de alta calidad para proyectos industriales. Visita nuestra tienda online.",
    },
    { property: "og:url", content: "https://www.japs.com.co/catalogo-materiales-electricos" },
  ],
  link: [{ rel: "canonical", href: "https://www.japs.com.co/catalogo-materiales-electricos" }],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Catálogo de Materiales Eléctricos - Japs Electrical Equipment",
        "url": "https://www.japs.com.co/catalogo-materiales-electricos",
        "description": "Página de catalogo de materiales eléctricos de Japs Equipos Eléctricos.",
        "mainEntity": {
          "@type": "Organization",
          "name": "Japs Equipos Eléctricos",
          "url": "https://www.japs.com.co",
          "logo": "https://www.japs.com.co/_vercel/image?url=%2Flogo-japs-menu.webp&w=320&q=100",
          "email": "ventas@japs.com.co",
          "telephone": "+57-310-802-3277",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Cra 12 #15-95 Centro",
            "addressLocality": "Bogotá",
            "addressCountry": "CO"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+57-310-802-3277",
              "contactType": "customer service",
              "areaServed": "CO",
              "availableLanguage": ["Spanish"]
            },
            {
              "@type": "ContactPoint",
              "email": "ventas@japs.com.co",
              "contactType": "sales",
              "areaServed": "CO",
              "availableLanguage": ["Spanish"]
            }
          ]
        }
      })
    }
  ]
});
definePageMeta({
  ssr: false, // Esto habilitará SSG para esta página
});
</script>
