<template>
  <div class="flex flex-col gap-4 items-center pt-10">
    <h2 class="sm:text-6xl text-3xl font-extrabold text-gray-800 px-12">
      Categoría de Productos Eléctricos
    </h2>
    <div class="carousel-container">
      <div class="slide-track">
        <!-- Duplicamos la lista de productos para que el scroll sea fluido -->
        <CardProductToFeed
          v-for="(product, index) in repeatedProducts"
          :key="index"
          :slugProduct="product.slugProduct"
          :urlImg="product.carouselImg[0]"
          :nameProduct="product.name"
          class="slide"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import CardProductToFeed from "../productos/cardProductToFeed.vue";

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/products");
    products.value = await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Repetimos los productos para que el carrusel sea infinito
const repeatedProducts = computed(() => [...products.value, ...products.value]);

// Cargar los productos al montar el componente
onMounted(fetchProducts);
</script>

<style scoped>
/* Contenedor del carrusel */
.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 10px 0;
}

/* Track animado */
.slide-track {
  display: flex;
  width: max-content; /* Se ajusta automáticamente al contenido */
  animation: scroll 20s linear infinite;
  transform: translateX(-50%); /* Inicia desde la mitad */
}

/* Pausar animación en hover */
.carousel-container:hover .slide-track {
  animation-play-state: paused;
}

/* Animación continua */
@keyframes scroll {
  0% {
    transform: translateX(-20%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Estilos de cada slide */
.slide {
  width: 200px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide img {
  width: 100%;
  max-width: 200px;
  height: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .slide-track {
    animation: scroll 15s linear infinite;
  }

  .slide img {
    max-width: 150px;
  }
}
</style>
