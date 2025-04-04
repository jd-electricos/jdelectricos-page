<template>
  <div>
    <div v-if="pending">
      <p>Cargando información...</p>
    </div>

    <div v-else-if="isCategory">
      <h1 class="text-4xl font-bold">{{ category?.name }}</h1>
      <div class="flex flex-wrap gap-5">
        <div v-for="product in products" :key="product.id">
          <cardProductToFeed
            :urlImg="product.carouselImg[0]"
            :slugProduct="product.slugProduct"
            :nameProduct="product.name"
          />
        </div>
      </div>
    </div>

    <div v-else-if="isProduct">
      <feedProduct :dataProducts="product" />
    </div>

    <div v-else>
      <p>No se encontró ninguna categoría o producto con el slug proporcionado.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import cardProductToFeed from "~/components/productos/cardProductToFeed.vue";
import feedProduct from "~/components/productos/feedProduct.vue";

const route = useRoute();
const slug = route.params.slug;

const { data, pending } = await useAsyncData(`slug-${slug}`, async () => {
  const result = {
    isCategory: false,
    isProduct: false,
    category: null,
    product: null,
    products: [],
  };

  try {
    // 1. Intentar buscar categoría (manejo manual de error)
    let categoryRes = null;

    try {
      categoryRes = await $fetch(`http://localhost:5000/api/categories/slug/${slug}`);
    } catch (e) {
      categoryRes = null;
    }

    if (categoryRes?.id) {
      result.category = categoryRes;
      result.isCategory = true;

      try {
        result.products = await $fetch(
          `http://localhost:5000/api/products/categories/${categoryRes.id}`
        );
      } catch (e) {
        result.products = [];
      }

      return result;
    }

    // 2. Si no es categoría, buscar como producto
    let productRes = null;

    try {
      productRes = await $fetch(`http://localhost:5000/api/products/slug/${slug}`);
    } catch (e) {
      productRes = null;
    }

    if (Array.isArray(productRes) && productRes.length > 0) {
      result.product = productRes[0];
      result.isProduct = true;
    } else if (productRes?.id) {
      result.product = productRes;
      result.isProduct = true;
    }
  } catch (e) {
    console.error("❌ Error general:", e);
  }

  return result;
});

// Computed
const isCategory = computed(() => data.value?.isCategory);
const isProduct = computed(() => data.value?.isProduct);
const category = computed(() => data.value?.category);
const product = computed(() => data.value?.product);
const products = computed(() => data.value?.products);
</script>
