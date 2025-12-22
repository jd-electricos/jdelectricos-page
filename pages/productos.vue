<template>
  <div class="flex flex-wrap">
    <div
      v-for="prod in product"
      :key="prod.name"
      class="p-10 m-10 flex flex-col border-2 border-red-500 w-96 bg-red-300"
    >
      <img :src="prod.carouselImg[0]" class="w-40" alt="" />
      <p>{{ prod.id }}</p>
      <p>{{ prod.slugProduct }}</p>
      <p>{{ prod.name }}</p>
      <p>{{ prod.id_category }}</p>
      <p>{{ prod.sku }}</p>
      <p>{{ prod.description }}</p>
      <p>{{ prod.id_seo }}</p>
      <p>{{ prod.stock }}</p>
      <p>{{ prod.status }}</p>
      <p>{{ prod.technical_parameters }}</p>
      <p>{{ prod.price }}</p>
      ------category------
      <p>{{ prod.category.id }}</p>
      <p>{{ prod.category.ogtitle }}</p>
      <p>{{ prod.category.slug }}</p>
      ------seo------
      <p>{{ prod.seo.id }}</p>
      <p>{{ prod.seo.ogtitle }}</p>
      <p>{{ prod.seo.keywords }}</p>
      <p>{{ prod.seo.ogdescription }}</p>
    </div>
  </div>
</template>

<script setup>
const product = ref([]);

const fetchProducts = async () => {
  try {
    const res = await fetch("/api/products/");
    const data = await res.json();
    product.value = data;
  } catch (error) {
    console.log(error);
  }
};

fetchProducts();
</script>
