<template>
  <div class="pt-16 pb-8 px-4">
    <!-- Títulos del blog -->
    <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 pb-8">
      Blog, Noticias e Innovacion: News
    </h1>
    <!-- Filtros -->
    <div class="flex flex-wrap items-center justify-center gap-4 pb-8">
      <!-- Filtro de búsqueda por título -->
      <div>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar por título"
          class="px-4 py-2 border rounded-lg"
        />
      </div>
    </div>

    <!-- render posts -->
    <div class="flex flex-wrap justify-center gap-4">
      <div v-for="post in filteredPosts" :key="post.id" class="flex flex-wrap">
        <previewBlog :data="post" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import previewBlog from "../components/blog/previewBlog.vue";
const config = useRuntimeConfig();

// ✅ Cambiamos a useAsyncData
const { data: posts } = await useAsyncData("posts", () =>
  $fetch(`${config.public.apiBase}/blog/category/News`)
);

// Variables para los filtros
const searchQuery = ref("");
const selectedCategory = ref("");

// Generamos una lista de categorías únicas
const categories = computed(() => {
  return [...new Set(posts.value.map((post) => post.category))]; // Suponiendo que cada post tiene un campo 'category'
});

// Propiedad computada para filtrar los posts
const filteredPosts = computed(() => {
  return posts.value.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value
      ? post.category === selectedCategory.value
      : true;
    return matchesSearch && matchesCategory;
  });
});

// SEO de blog
useHead({
  title: "Blog Nuevos en Sector Electrico",
  meta: [
    {
      name: "description",
      content: "Blog Nuevos en Sector Electrico",
    },
    {
      name: "keywords",
      content:
        "Blog, Noticias e Innovacion, Sector Eléctrico, Jd Electricos, sector electrico, noticias, innovacion",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Jd Electricos" },
    { name: "publisher", content: "Jd Electricos" },
    {
      property: "og:title",
      content: "Blog, Noticias e Innovacion: Sector Eléctrico",
    },
    {
      property: "og:description",
      content: "Blog, Noticias e Innovacion: Sector Eléctrico",
    },
    {
      property: "og:url",
      content: "Blog, Noticias e Innovacion: Sector Eléctrico",
    },
  ],
  link: [{ rel: "canonical", href: "https://jdelectricos.com.co/blog-productos-electricos/" }],
});
</script>
