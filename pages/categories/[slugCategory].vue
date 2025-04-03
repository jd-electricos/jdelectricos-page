<template>
  <div>
    <!-- componente para categoria -->
    <div class="p-10">
      <h1 class="text-4xl font-bold">{{ category?.name }}</h1>
      <p v-if="loading">Cargando Categorias...</p>
      <div v-else class="flex flex-wrap gap-5">
        <div v-for="product in products" :key="product.id" class="">
          <cardProductToFeed
            :urlImg="product.carouselImg[0]"
            :slugProduct="product.slugProduct"
            :nameProduct="product.name"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import cardProductToFeed from "~/components/productos/cardProductToFeed.vue";

const route = useRoute();
const categorySlug = route.params.slugCategory;
const category = ref(null);
const products = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    // **1. Obtener información de la categoría con el slug**
    const categoryResponse = await fetch(
      `http://localhost:5000/api/categories/slug/${categorySlug}`
    );
    const categoryData = await categoryResponse.json();

    if (!categoryData || !categoryData.id) {
      console.error("Categoría no encontrada");
      return;
    }

    category.value = categoryData;
    // **2. Obtener productos usando el ID de la categoría**
    const productsResponse = await fetch(
      `http://localhost:5000/api/products/categories/${categoryData.id}`
    );
    products.value = await productsResponse.json();
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  } finally {
    loading.value = false;
  }
});
</script>
