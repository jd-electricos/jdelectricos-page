<template>
  <div class="pt-10 pb-10 px-5">
    <h1 class="text-4xl font-bold">{{ props.category?.name }}</h1>
    <div class="flex flex-wrap gap-5 p-5 justify-center">
      <div v-for="product in props.products" :key="product.id">
        <cardProductToFeed
          :urlImg="product.previewImg"
          :slugProduct="product.slugProduct"
          :nameProduct="product.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import cardProductToFeed from "~/components/productos/cardProductToFeed.vue";
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  category: {
    type: Object,
    required: true,
  },
});
console.log(props);
</script>

<style scoped></style>
