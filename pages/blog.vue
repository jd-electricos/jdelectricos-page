<template>
  <div class="pt-16 pb-8 px-4">
    <!-- Títulos del blog -->
    <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 pb-8">
      Blog, Noticias e Innovacion: Sector Eléctrico
    </h1>

    <!-- Filtros -->
    <div class="flex flex-wrap items-center justify-center gap-4 pb-8">
      <!-- Filtro de búsqueda por título -->
      <div>
        <input
          v-model="searchQuery"
          @input="fetchPosts"
          type="text"
          placeholder="Buscar por título"
          class="px-4 py-2 border rounded-lg"
        />
      </div>

      <!-- Filtro de categoría -->
      <div>
        <label for="categorySelect" class="sr-only"
          >Filtrar por categoría</label
        >
        <select
          v-model="selectedCategory"
          @change="changeCategory"
          class="px-4 py-2 border rounded-lg"
        >
          <option value="">Seleccionar categoría</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
    </div>

    <!-- Render posts -->
    <div class="flex flex-wrap justify-center gap-4">
      <div v-for="post in posts" :key="post.id" class="flex flex-wrap">
        <previewBlog :data="post" />
      </div>
    </div>

    <!-- Paginador minimalista -->
    <div
      v-if="pagination.totalPages > 1"
      class="flex justify-center items-center space-x-2 mt-8"
    >
      <!-- Ir a primera página -->
      <button
        @click="goToPage(1)"
        :disabled="pagination.currentPage === 1"
        aria-label="Ir a la primera página"
        title="Primera página"
        class="px-2 py-1 text-gray-500 hover:text-black disabled:opacity-30"
      >
        <ChevronsLeft />
      </button>

      <!-- Anterior -->
      <button
        @click="goToPage(pagination.currentPage - 1)"
        :disabled="pagination.currentPage === 1"
        aria-label="Página anterior"
        title="Página anterior"
        class="px-2 py-1 text-gray-500 hover:text-black disabled:opacity-30"
      >
        <ChevronLeft />
      </button>

      <!-- Páginas visibles -->
      <template v-for="page in visiblePages" :key="page">
        <button
          @click="goToPage(page)"
          :aria-label="`Ir a la página ${page}`"
          :title="`Página ${page}`"
          :class="[
            'w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition',
            page === pagination.currentPage
              ? 'bg-gray-900 text-white'
              : 'text-gray-600 hover:bg-gray-200',
          ]"
        >
          {{ page }}
        </button>
      </template>

      <!-- Siguiente -->
      <button
        @click="goToPage(pagination.currentPage + 1)"
        :disabled="pagination.currentPage === pagination.totalPages"
        aria-label="Página siguiente"
        title="Página siguiente"
        class="px-2 py-1 text-gray-500 hover:text-black disabled:opacity-30"
      >
        <ChevronRight />
      </button>

      <!-- Ir a última página -->
      <button
        @click="goToPage(pagination.totalPages)"
        :disabled="pagination.currentPage === pagination.totalPages"
        aria-label="Ir a la última página"
        title="Última página"
        class="px-2 py-1 text-gray-500 hover:text-black disabled:opacity-30"
      >
        <ChevronsRight />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import previewBlog from "../components/blog/previewBlog.vue";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-vue-next";

const posts = ref([]);
const categories = ref([]);
const pagination = ref({
  totalPages: 1,
  currentPage: 1,
  totalItems: 0,
  pageSize: 6,
});

const searchQuery = ref("");
const selectedCategory = ref("");

// Función para obtener posts desde el backend con paginación
const fetchPosts = async (page = 1) => {
  try {
    const queryParams = new URLSearchParams({
      page,
      limit: pagination.value.pageSize,
    });

    let endpoint = "http://localhost:5000/api/blog";
    if (selectedCategory.value) {
      endpoint = `http://localhost:5000/api/blog/category/${selectedCategory.value}`;
    }

    if (searchQuery.value) {
      queryParams.append("search", searchQuery.value);
    }

    const { data, pagination: meta } = await $fetch(
      `${endpoint}?${queryParams}`
    );

    posts.value = data;
    pagination.value = meta;

    // Obtener categorías solo una vez
    if (categories.value.length === 0) {
      const allPosts = await $fetch("http://localhost:5000/api/blog");
      categories.value = [
        ...new Set(allPosts.data.map((post) => post.category)),
      ];
    }
  } catch (error) {
    console.error("Error al cargar posts", error);
  }
};

// Cambiar de página
const goToPage = (page) => {
  if (page >= 1 && page <= pagination.value.totalPages) {
    fetchPosts(page);
  }
};

// Cambio de categoría
const changeCategory = () => {
  pagination.value.currentPage = 1;
  fetchPosts(1);
};

// Páginas visibles (solo 3: actual + anterior + siguiente)
const visiblePages = computed(() => {
  const total = pagination.value.totalPages;
  const current = pagination.value.currentPage;
  const delta = 1;
  let start = Math.max(1, current - delta);
  let end = Math.min(total, current + delta);

  if (current <= delta) {
    end = Math.min(total, 1 + delta * 2);
  }

  if (current > total - delta) {
    start = Math.max(1, total - delta * 2);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});

onMounted(() => {
  fetchPosts();
});

// SEO del blog
useHead({
  title: "Blog, Noticias e Innovacion: Sector Eléctrico",
  meta: [
    {
      name: "description",
      content: "Blog, Noticias e Innovacion: Sector Eléctrico",
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
    { property: "og:url", content: "https://jdelectricos.com.co/blog" },
  ],
  link: [{ rel: "canonical", href: "https://jdelectricos.com.co/blog" }],
});
</script>
