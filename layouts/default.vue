<template>
  <div class="flex flex-col min-h-screen">
    <!-- Encabezado fijo -->
    <div class="w-full z-50 lg:fixed absolute top-0">
      <bannerPhone />
      <menubar />
    </div>

    <!-- Contenido principal (Empuja el footer hacia abajo) -->
    <div class="flex-grow mt-[19.5rem] md:mt-24">
      <NuxtPage />
    </div>

    <!-- Footer -->
    <footerJd />
    <buttonWp/>

    <!-- cookies -->
    <cookies />
  </div>
</template>

<script setup>
import menubar from "../components/layout/menubar.vue";
import bannerPhone from "../components/layout/bannerPhone.vue";
import footerJd from "../components/layout/footer.vue";
import buttonWp from "~/components/layout/buttonWp.vue";
import cookies from "~/components/home/cookies.vue";
</script>
