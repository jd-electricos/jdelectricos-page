<template>
  <div>
    <div v-if="pending">
      <p>Cargando información...</p>
    </div>

    <div v-else-if="isCategory">
      <feedCategory :products="products" :category="category" />
    </div>

    <div v-else-if="isSubcategory">
      <feedSubcategory :subcategory="subcategory" />
    </div>

    <div v-else-if="isProduct">
      <feedProduct :dataProducts="product" />
    </div>

    <div v-else-if="isBlog">
      <feedBlog :dataBlog="blog"/>
    </div>

    <div v-else class="p-10">
      <p>
        No se encontró ninguna categoría, subcategoría o producto con el slug
        proporcionado.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import feedProduct from "~/components/productos/feedProduct.vue";
import feedCategory from "~/components/productos/feedCategory.vue";
import feedSubcategory from "~/components/productos/feedSubcategory.vue"; // Asegúrate de crearlo
import feedBlog from "~/components/blog/feedBlog.vue";

const route = useRoute();
const slug = route.params.slug;

const { data, pending } = await useAsyncData(`slug-${slug}`, async () => {
  const result = {
    isCategory: false,
    isSubcategory: false,
    isProduct: false,
    isBlog: false,
    blog: null,
    category: null,
    subcategory: null,
    product: null,
    products: [],
  };

  try {
    // 1. Buscar categoría
    let categoryRes = null;
    try {
      categoryRes = await $fetch(
        `/api/categories/slug/${slug}`
      );
    } catch {}

    if (categoryRes?.id) {
      result.category = categoryRes;
      result.isCategory = true;
      try {
        result.products = await $fetch(
          `/api/products/categories/${categoryRes.id}`
        );
      } catch {}
      return result;
    }

    // 2. Buscar subcategoría
    let subcategoryRes = null;
    try {
      subcategoryRes = await $fetch(
        `/api/subcategories/slug/${slug}`
      );
    } catch {}

    if (subcategoryRes?.id) {
      result.subcategory = subcategoryRes;
      result.isSubcategory = true;
      try {
        result.products = await $fetch(
          `/api/products/subcategories/${subcategoryRes.id}`
        );
      } catch {}
      return result;
    }

    // 3. Buscar producto
    let productRes = null;
    try {
      productRes = await $fetch(
        `/api/products/slug/${slug}`
      );
    } catch {}

    if (Array.isArray(productRes) && productRes.length > 0) {
      result.product = productRes[0];
      result.isProduct = true;
    } else if (productRes?.id) {
      result.product = productRes;
      result.isProduct = true;
    }

     // 4. Buscar blog
    let blogRes = null;
    try {
      blogRes = await $fetch(
        `/api/blog/slug/${slug}`
      );
    } catch {}

    if (blogRes?.id) {
      result.blog = blogRes;
      result.isBlog = true;
      try {
        result.products = await $fetch(
          `/api/blog/${blogRes.id}`
        );
      } catch {}
      return result;
    }
  } catch (e) {
    console.error("❌ Error general:", e);
  }
  return result;
});

// Computed
const isCategory = computed(() => data.value?.isCategory);
const isSubcategory = computed(() => data.value?.isSubcategory);
const isProduct = computed(() => data.value?.isProduct);
const isBlog = computed(() => data.value?.isBlog);

const category = computed(() => data.value?.category);
const subcategory = computed(() => data.value?.subcategory);
const product = computed(() => data.value?.product);
const products = computed(() => data.value?.products);
const blog = computed(() => data.value?.blog); 
</script>
