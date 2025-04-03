<template>
  <section>
    <div class="p-3 bg-white w-full">
      <bannerPromotions roundedStyle="rounded-2xl" />
    </div>
    <div class="bg-gray-800 px-10">
      <div class="lg:text-6xl text-4xl font-bold font-serif text-white p-10">
        <h1>Materiales Electricos</h1>
        <h2>Por Categorias</h2>
      </div>
      <!-- Filtros -->
      <div class="flex flex-wrap justify-center gap-4 mb-6">
        <!-- Búsqueda por nombre -->
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar categoría..."
          class="px-4 py-2 border rounded-lg bg-white"
        />

        <!-- Filtro por categoría -->
        <select
          v-model="selectedCategory"
          class="bg-white px-4 py-2 border rounded-lg"
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
        <div class="flex flex-wrap gap-10 justify-center">
          <cardCategoriesToFeed
            v-for="(categories, index) in paginatedCategories"
            :key="index"
            urlImg="/img/logo/logo-jd-electricos.webp"
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
      `http://localhost:5000/api/categories?all=true`
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
</script>
