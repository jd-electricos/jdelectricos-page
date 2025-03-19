<template>
  <div class="flex flex-col gap-4 items-center pt-10">
    <h2 class="sm:text-6xl text-3xl font-extrabold text-gray-800 text-justify">
      Categoria de Productos Eléctricos
    </h2>
    <div class="flex gap-4 slide-track animate-scroll">
      <CardProductToFeed
        v-for="product in products"
        :key="product.id"
        :slugProduct="product.slugProduct"
        :urlImg="product.carouselImg[0]"
        :nameProduct="product.name"
        :priceProduct="product.price"
        class="slide"
      />
    </div>
  </div>
</template>

<script setup>
import CardProductToFeed from "../productos/cardProductToFeed.vue";
const products = ref([]);
const fechtProducts = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/products");
    products.value = await response.json();
  } catch (error) {
    console.log(error);
  }
};
fechtProducts();
</script>
<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(
      calc(-200px * 4)
    ); /* Ajustar para que se desplace correctamente */
  }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
}

.slide-track {
  display: flex;
  width: calc(200px * 10); /* Ajusta este valor según el número de imágenes */
}

.slide {
  width: 200px; /* Tamaño ajustable para cada imagen */
  flex-shrink: 0; /* Para evitar que las imágenes se encojan */
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide img {
  width: 100%;
  max-width: 200px; /* Controla el tamaño máximo de la imagen */
  height: auto; /* Mantén la proporción original */
}

/* Opciones para dispositivos pequeños */
@media (max-width: 768px) {
  .slide img {
    max-width: 150px; /* Reducir tamaño para pantallas más pequeñas */
  }
}
</style>
