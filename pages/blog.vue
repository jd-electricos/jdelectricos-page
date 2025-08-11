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
          type="text"
          placeholder="Buscar por título"
          class="px-4 py-2 border rounded-lg"
        />
      </div>

      <!-- Filtro de categoría -->
      <div>
        <select v-model="selectedCategory" class="px-4 py-2 border rounded-lg">
          <option value="">Seleccionar categoría</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
    </div>

    <!-- render posts -->
    <div class="flex flex-wrap justify-center gap-4">
      <div v-for="post in filteredPosts" :key="post.id" class="flex flex-wrap">
        <previewBlog :data="post" />
      </div>
    </div>

    <!-- Paginador minimalista -->
    <div
      v-if="totalPages > 1"
      class="flex justify-center items-center space-x-2 mt-8"
    >
      <!-- Ir a primera página -->
      <button
       @click="goToPage(1)"
        :disabled="currentPage === 1"
        aria-label="Ir a la primera página"
        title="Primera página"
        class="px-2 py-1 text-gray-500 hover:text-black disabled:opacity-30"
      >
        <ChevronsLeft />
      </button>

      <!-- Anterior -->
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
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
            page === currentPage
              ? 'bg-gray-900 text-white'
              : 'text-gray-600 hover:bg-gray-200',
          ]"
        >
          {{ page }}
        </button>
      </template>

      <!-- Siguiente -->
      <button
            @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        aria-label="Página siguiente"
        title="Página siguiente"
        class="px-2 py-1 text-gray-500 hover:text-black disabled:opacity-30"
      >
        <ChevronRight />
      </button>

      <!-- Ir a última página -->
      <button
          @click="goToPage(totalPages)"
        :disabled="currentPage === totalPages"
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
import { ref, computed, watchEffect } from 'vue'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next'
import previewBlog from '../components/blog/previewBlog.vue'

// Estados de filtros
const searchQuery = ref('')
const selectedCategory = ref('')

// Estados de paginación
const currentPage = ref(1)
const totalPages = ref(1)
const pageSize = 16

// Obtener los datos desde el backend paginado
const { data: paginatedData, refresh } = await useAsyncData('posts', () =>
  $fetch(`http://localhost:5000/api/blog?page=${currentPage.value}&limit=${pageSize}`)
)

// Computar posts actuales
const posts = computed(() => paginatedData.value?.data || [])

// Actualizar total de páginas cuando se actualicen los datos
watchEffect(() => {
  if (paginatedData.value?.pagination) {
    totalPages.value = paginatedData.value.pagination.totalPages
  }
})

// Computar categorías únicas desde los posts
const categories = computed(() => {
  return [...new Set(posts.value.map((post) => post.category))]
})

// Filtrar posts según búsqueda y categoría
const filteredPosts = computed(() => {
  return posts.value.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value
      ? post.category === selectedCategory.value
      : true
    return matchesSearch && matchesCategory
  })
})

// Cambiar de página
function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    refresh()
  }
}
const visiblePages = computed(() => {
  const maxVisible = 5
  const pages = []

  let startPage = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let endPage = startPage + maxVisible - 1

  if (endPage > totalPages.value) {
    endPage = totalPages.value
    startPage = Math.max(1, endPage - maxVisible + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return pages
})

// SEO
useHead({
  title: 'Blog, Noticias e Innovacion: Sector Eléctrico',
  meta: [
    {
      name: 'description',
      content: 'Blog, Noticias e Innovacion: Sector Eléctrico'
    },
    {
      name: 'keywords',
      content:
        'Blog, Noticias e Innovacion, Sector Eléctrico, Jd Electricos, sector electrico, noticias, innovacion'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Jd Electricos' },
    { name: 'publisher', content: 'Jd Electricos' },
    {
      property: 'og:title',
      content: 'Blog, Noticias e Innovacion: Sector Eléctrico'
    },
    {
      property: 'og:description',
      content: 'Blog, Noticias e Innovacion: Sector Eléctrico'
    },
    {
      property: 'og:url',
      content: 'Blog, Noticias e Innovacion: Sector Eléctrico'
    }
  ],
  link: [{ rel: 'canonical', href: 'https://jdelectricos.com.co/blog' }]
})
</script>
