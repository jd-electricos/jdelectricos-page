<template>
  <section class="select-none">
    <!-- <div class="p-3 bg-white w-full">
      <bannerPromotions roundedStyle="rounded-2xl" />
    </div> -->
    <div class="bg-gray-800 px-10">
      <div class="lg:text-6xl text-4xl font-bold font-serif text-white p-10">
        <h1 class="text-shadow-lg/20 text-shadow-gray-950">Materiales Electricos</h1>
        <h2 class="text-shadow-lg/20 text-shadow-gray-950">Por Categorias</h2>
      </div>
      <!-- Filtros -->
      <div class="flex flex-wrap justify-center gap-4 mb-6 w-full">
        <!-- Búsqueda por nombre -->
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar categoría..."
          class="w-full sm:w-72 px-4 py-2 border rounded-lg bg-white"
        />

        <!-- Filtro por categoría -->
        <select
          v-model="selectedCategory"
          class="w-full sm:w-72 px-4 py-2 border rounded-lg bg-white"
        >
          <option value="">Todas</option>
          <option
            v-for="category in allCategories"
            :key="category.id"
            :value="category.slug"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-wrap justify-center">
          <cardCategoriesToFeed
            v-for="(categories, index) in paginatedCategories"
            :key="index"
            :urlImg="categories.previewImg"
            :slugCategory="categories.slug"
            :nameCategory="categories.name"
          />
        </div>
        <Paginator
          :currentPage="page"
          :totalPages="totalPages"
          @update:page="updatePage"
        />
      </div>
    </div>
    <!-- Paginador -->
</section>
</template>
<script setup>
import { ref, computed, watchEffect } from "vue";
import cardCategoriesToFeed from "~/components/productos/cardCategoriesToFeed.vue";
import bannerPromotions from "../components/layout/bannerPromotions.vue";
import Paginator from "../components/productos/paginator.vue";

const page = ref(1);
const limit = 15;
const loading = ref(true);
const allCategories = ref([]); // Todas las categorías (para filtros)
const filteredCategories = ref([]); // Categorías filtradas (para paginar)
const searchQuery = ref("");
const selectedCategory = ref("");

// Cargar TODAS las categorías solo una vez
const fetchAllCategories = async () => {
  try {
    const response = await fetch(
      `/api/categories?all=true`
    );
    const data = await response.json();
    allCategories.value = data.items;
    filteredCategories.value = data.items; // Inicia sin filtros
  } catch (error) {
    console.error("Error al cargar todas las categorías:", error);
  } finally {
    loading.value = false;
  }
};

// Computed property para filtrar las categorías
watchEffect(() => {
  const filtered = allCategories.value.filter((category) => {
    const matchesSearch = category.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value
      ? category.slug === selectedCategory.value
      : true;
    return matchesSearch && matchesCategory;
  });

  filteredCategories.value = filtered; // Actualizamos categorías filtradas
  page.value = 1; // Reiniciar a la página 1 cada vez que se filtra
});

// Paginación en el frontend sobre `filteredCategories`
const paginatedCategories = computed(() => {
  const start = (page.value - 1) * limit;
  const end = start + limit;
  return filteredCategories.value.slice(start, end);
});

// Calcular total de páginas dinámicamente
const totalPages = computed(() => {
  return Math.max(1, Math.ceil(filteredCategories.value.length / limit));
});

// Cargar categorías al inicio
fetchAllCategories();

// Actualizar la página desde el paginador
const updatePage = (newPage) => {
  page.value = newPage;
};
useSeoMeta({
  title: "Tienda De Articulos Electricos",
  description: "Tienda articulos electricos",
  ogTitle: "Tienda De Articulos Electricos",
  ogDescription: "Tienda articulos electricos",
  ogType: "article",
  ogUrl: "https://jdelectricos.com.co/tienda-articulos-electricos",
  ogSiteName:
    "materiales electricos, productos electricos en colombia JD ELECTRICOS",
'article:publisher': 'https://www.facebook.com/jd.materialeselectricos',
  ogImage:
    "https://jdelectricos.com.co/wp-content/uploads/2020/04/jd-electricos.jpg",
  ogImageSecureUrl:
    "https://jdelectricos.com.co/wp-content/uploads/2020/04/jd-electricos.jpg",
  ogImageWidth: "1024",
  ogImageHeight: "453",
  ogImageAlt: "jd electricos colombia",
  ogImageType: "image/jpeg",
  twitterCard: "summary_large_image",
  twitterTitle: "Tienda De Articulos Electricos",
  twitterDescription: "Tienda articulos electricos",
  twitterSite: "@JD_ELECTRICOS",
  twitterCreator: "@JD_ELECTRICOS",
  twitterImage:
    "https://jdelectricos.com.co/wp-content/uploads/2020/04/jd-electricos.jpg",
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
      innerHTML: {
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
            "@type": "CollectionPage",
            "@id":
              "https://jdelectricos.com.co/tienda-articulos-electricos/#webpage",
            url: "https://jdelectricos.com.co/tienda-articulos-electricos/",
            name: "Tienda De Articulos Electricos",
            isPartOf: { "@id": "https://jdelectricos.com.co/#website" },
            inLanguage: "es-CO",
          },
          {
            "@context": "https://schema.org/",
            "@graph": [
              {
                "@type": "Product",
                name: "ABITARE INTERRUPTOR SENCILLO",
                url: "https://jdelectricos.com.co/abitare-interruptor-sencillo/",
                "@id":
                  "https://jdelectricos.com.co/abitare-interruptor-sencillo/",
                description: "ABITARE INTERRUPTOR SENCILLO",
              },
              {
                "@type": "Product",
                name: "ABRAZADERA EN U TIPO CODENSA | HERRAJES ELECTRICOS",
                url: "https://jdelectricos.com.co/abrazadera-en-u/",
                "@id": "https://jdelectricos.com.co/abrazadera-en-u/",
                description:
                  "Abrazadera en U tipo CODENSA. ET-436 No.5 (5/8x 300x 470mm). Venta de productos al detalle y por mayor. Estos herrajes se usan para montar y/o fijar crucetas",
              },
              {
                "@type": "Product",
                name: "ABRAZADERA O COLLARIN",
                url: "https://jdelectricos.com.co/abrazadera-o-collarin/",
                "@id": "https://jdelectricos.com.co/abrazadera-o-collarin/",
                description: "ABRAZADERA O COLLARIN",
              },
              {
                "@type": "Product",
                name: "ABRAZADERA O COLLARIN PARA TRANSFORMADOR",
                url: "https://jdelectricos.com.co/abrazadera-collarin-transformador/",
                "@id":
                  "https://jdelectricos.com.co/abrazadera-collarin-transformador/",
                description: "ABRAZADERA O COLLARIN PARA TRANSFORMADOR",
              },
              {
                "@type": "Product",
                name: "ACCESORIO PARA MOTORES ABB",
                url: "https://jdelectricos.com.co/accesorio-motores-abb/",
                "@id": "https://jdelectricos.com.co/accesorio-motores-abb/",
                description: "ACCESORIO PARA MOTORES ABB",
              },
              {
                "@type": "Product",
                name: "ACOPLE FLEXIBLE CROUSE HINDS",
                url: "https://jdelectricos.com.co/acople-flexible-crouse-hinds/",
                "@id":
                  "https://jdelectricos.com.co/acople-flexible-crouse-hinds/",
                description: "ACOPLE FLEXIBLE CROUSE HINDS",
              },
              {
                "@type": "Product",
                name: "ADAPTADOR PARA CABLE DE 600A",
                url: "https://jdelectricos.com.co/adaptador-cable-600a/",
                "@id": "https://jdelectricos.com.co/adaptador-cable-600a/",
                description:
                  "Adaptador para Cable de 600A - 4/0 AWG 15KV; referencia No. CA625C",
              },
              {
                "@type": "Product",
                name: "Aislador carrete | aisladores en porcelana | JD Electricos",
                url: "https://jdelectricos.com.co/aislador-carrete/",
                "@id": "https://jdelectricos.com.co/aislador-carrete/",
                description:
                  "aislador carrete ANSI 53-2 , ANSI 53-3 , aislador tensor, aislador line post, aislador pin , aislador poimerico, despachos a nivel nacional, consultenos",
              },
              {
                "@type": "Product",
                name: "Aislador Carrete 53-2",
                url: "https://jdelectricos.com.co/aislador-carrete-53-2/",
                "@id": "https://jdelectricos.com.co/aislador-carrete-53-2/",
                description: "Aislador Carrete 53-2",
              },
              {
                "@type": "Product",
                name: "Aislador Hibrido 15 kv",
                url: "https://jdelectricos.com.co/aislador-hibrido-15-kv/",
                "@id": "https://jdelectricos.com.co/aislador-hibrido-15-kv/",
                description: "Aislador Hibrido 15 kv",
              },
              {
                "@type": "Product",
                name: "aislador line post-aislador porcelana",
                url: "https://jdelectricos.com.co/aislador-line-post/",
                "@id": "https://jdelectricos.com.co/aislador-line-post/",
                description:
                  "aislador line post 57-1 , aislador line post 57-2 , aisladores polimericos, aisladores porcelana-carrete-tensor-pin-materiales electricos en general - despachos a nivel nacional",
              },
              {
                "@type": "Product",
                name: "Aislador line post 57-1",
                url: "https://jdelectricos.com.co/aislador-line-post-57-1/",
                "@id": "https://jdelectricos.com.co/aislador-line-post-57-1/",
                description: "Aislador line post 57-1",
              },
              {
                "@type": "Product",
                name: "Aislador line Post 57-2",
                url: "https://jdelectricos.com.co/aislador-line-post-57-2/",
                "@id": "https://jdelectricos.com.co/aislador-line-post-57-2/",
                description: "Aislador line Post 57-2",
              },
              {
                "@type": "Product",
                name: "Aislador para Barraje 250A 25mm X 1/4",
                url: "https://jdelectricos.com.co/aislador-para-barraje-250a-25mm-x-1-4/",
                "@id":
                  "https://jdelectricos.com.co/aislador-para-barraje-250a-25mm-x-1-4/",
                description: "Aislador para Barraje 250A 25mm x 1/4",
              },
              {
                "@type": "Product",
                name: "AISLADOR PARA BARRAJE 600A",
                url: "https://jdelectricos.com.co/aislador-barraje-600a/",
                "@id": "https://jdelectricos.com.co/aislador-barraje-600a/",
                description: "AISLADOR PARA BARRAJE 600A",
              },
              {
                "@type": "Product",
                name: "Aislador pin 55-4",
                url: "https://jdelectricos.com.co/aislador-pin-55-4/",
                "@id": "https://jdelectricos.com.co/aislador-pin-55-4/",
                description: "Aislador pin 55-4",
              },
            ],
          },
        ],
      },
      type: "application/ld+json",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://jdelectricos.com.co/tienda-articulos-electricos",
    },
  ],
});
</script>
