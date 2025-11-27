<template>
  <div class="flex flex-col gap-4 items-center pt-10 bg-gray-800">
    <h2 class="sm:text-6xl text-3xl font-extrabold text-white px-12">
      Nuestros Materiales Eléctricos
    </h2>
    <div class="carousel-container">
      <div class="slide-track">
        <!-- Duplicamos la lista de categorias para que el scroll sea fluido -->
        <cardCategoriesToFeed
          v-for="(categories, index) in repeatedProducts"
          :key="index"
          urlImg="/img/logo/logo-menu-jd.webp"
          :slugCategory="categories.slug"
          :nameCategory="categories.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import cardCategoriesToFeed from "~/components/productos/cardCategoriesToFeed.vue";


const categories = ref([]);

const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/categories");
    const data = await response.json();
    categories.value = data.items;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Repetimos los categorias para que el carrusel sea infinito
const repeatedProducts = computed(() => [...categories.value, ...categories.value]);

// Cargar los categorias al montar el componente
onMounted(fetchCategories);
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
  animation: scroll 150s linear infinite;
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
