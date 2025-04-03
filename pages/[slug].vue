<template>
    <div class="p-10">
      <h1 class="text-4xl font-bold">{{ category?.name }}</h1>
      <p v-if="loading">Cargando productos...</p>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="product in products" :key="product.id" class="border p-4 rounded-lg">
          <h2 class="text-xl font-semibold">{{ product.name }}</h2>
          <img :src="product.carouselImg[0]" alt="Imagen del producto" class="w-32 rounded-md">
          <p class="mt-2">Precio: {{ product.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { ref, onMounted } from 'vue';
  
  const route = useRoute();
  const categorySlug = route.params.slug;
  const category = ref(null);
  const products = ref([]);
  const loading = ref(true);
  
  onMounted(async () => {
    try {
      // **1. Obtener información de la categoría con el slug**
      const categoryResponse = await fetch(`http://localhost:5000/api/categories/slug/${categorySlug}`);
      const categoryData = await categoryResponse.json();
      
      if (!categoryData || !categoryData.id) {
        console.error("Categoría no encontrada");
        return;
      }
      
      category.value = categoryData;
  console.log(`http://localhost:5000/api/products/categories/${categoryData.id}`)
      // **2. Obtener productos usando el ID de la categoría**
      const productsResponse = await fetch(`http://localhost:5000/api/products/categories/${categoryData.id}`);
      products.value = await productsResponse.json();
      
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    } finally {
      loading.value = false;
    }
  });
  </script>
  