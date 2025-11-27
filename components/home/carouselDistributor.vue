<template>
  <section class="scrollAnimation">
    <div
      class="slider w-full mx-auto overflow-hidden relative flex flex-col items-center justify-center p-16"
    >
      <div class="flex flex-col items-center justify-center text-center">
        <h2 class="sm:text-5xl text-3xl font-extrabold text-gray-800 font-serif">
          Conoce algunos de nuestros clientes
        </h2>
      </div>
      <!-- Contenedor del fondo con opacidad -->
      <div class="absolute inset-0 -z-20"></div>

      <div class="slide-track flex animate-scroll w-full">
        <div
          class="slide p-10 flex justify-center items-center"
          v-for="(image, index) in images"
          :key="index"
        >
          <img
            :src="image.itemImageSrc"
            :alt="image.alt"
            class="w-full max-w-xs"
            width="400"
            height="300"
            loading="lazy"
          />
        </div>
        <div
          class="slide p-10 flex justify-center items-center"
          v-for="(image, index) in images"
          :key="'duplicate-' + index"
        >
          <img
            :src="image.itemImageSrc"
            :alt="image.alt"
            class="w-full max-w-xs"
            width="400"
            height="300"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = ref([]);

onMounted(() => {
  images.value = [
    {
      itemImageSrc:
        "/img/carousel-customers/logo-air-e.webp",
      alt: "logo air-e",
    },
    {
      itemImageSrc:
        "/img/carousel-customers/logo-cedenar.webp",
      alt: "logo cedenar",
    },
    {
      itemImageSrc:
        "/img/carousel-customers/logo-cens.webp",
      alt: "logo cens",
    },
    {
      itemImageSrc:
        "/img/carousel-customers/logo-edeq.webp",
      alt: "logo edeq",
    },
    {
      itemImageSrc:
        "/img/carousel-customers/logo-emcali.webp",
      alt: "logo emcali",
    },
    {
      itemImageSrc:
        "/img/carousel-customers/logo-emsa.webp",
      alt: "logo emsa",
    },
    {
      itemImageSrc:
        "/img/carousel-customers/logo-enam.webp",
      alt: "logo enam",
    },
    {
      itemImageSrc:
        "/img/carousel-customers/logo-energiapereira.webp",
      alt: "logo energiapereira",
    },
    {
      itemImageSrc:
        "/img/carousel-customers/logo-epm.webp",
      alt: "logo epm",
    },
  ];
});
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
