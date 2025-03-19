<template>
  <section class="scrollAnimation">
    <div
      class="slider w-full mx-auto overflow-hidden relative flex flex-col items-center justify-center p-5"
    >
      <div class="flex flex-col items-center justify-center gap-5 text-center">
        <span class="sm:text-4xl text-2xl font-extrabold opacity-55"
          >Conoce</span
        >
        <h2 class="sm:text-6xl text-3xl font-extrabold text-gray-800">
          Algunos de nuestros proveedores
        </h2>
      </div>
      <!-- Contenedor del fondo con opacidad -->
      <div
        class="absolute inset-0 dark:bg-[#201c1c] bg-blueJaps opacity-25"
      ></div>

      <div class="slide-track flex animate-scroll w-full py-8">
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
      <div class="flex flex-col items-center justify-center gap-5 text-center">
        <h2 class="sm:text-6xl text-3xl font-extrabold text-gray-800">
          de iluminación y productos eléctricos
        </h2>
        <span class="sm:text-4xl text-2xl font-extrabold opacity-55">
          industriales en Colombia.
        </span>
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
        "https://jdelectricos.com.co/wp-content/uploads/2015/05/logo_abb-80x80.jpg",
      alt: "cedenar",
    },
    {
      itemImageSrc:
        "https://jdelectricos.com.co/wp-content/uploads/2015/05/logo_abb-80x80.jpg",
      alt: "edeq",
    },
    {
      itemImageSrc:
        "https://jdelectricos.com.co/wp-content/uploads/2015/05/logo_abb-80x80.jpg",
      alt: "emcali",
    },
    {
      itemImageSrc:
        "https://jdelectricos.com.co/wp-content/uploads/2015/05/logo_abb-80x80.jpg",
      alt: "epm",
    },
    {
      itemImageSrc:
        "https://jdelectricos.com.co/wp-content/uploads/2015/05/logo_abb-80x80.jpg",
      alt: "cens",
    },
    {
      itemImageSrc:
        "https://jdelectricos.com.co/wp-content/uploads/2015/05/logo_abb-80x80.jpg",
      alt: "air-e",
    },
    {
      itemImageSrc:
        "https://jdelectricos.com.co/wp-content/uploads/2015/05/logo_abb-80x80.jpg",
      alt: "emsa",
    },
    {
      itemImageSrc:
        "https://jdelectricos.com.co/wp-content/uploads/2015/05/logo_abb-80x80.jpg",
      alt: "enam",
    },
    {
      itemImageSrc:
        "https://jdelectricos.com.co/wp-content/uploads/2015/05/logo_abb-80x80.jpg",
      alt: "energiapereira",
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
