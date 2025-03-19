<template>
  <section class="bg-gray-100 py-2">
    <div class="flex flex-col lg:flex-row items-center justify-center">
      <div class="lg:flex-1/2 flex justify-center">
        <NuxtImg
          src="/img/logo/logo-jd-electricos.webp"
          alt="logo de jd electricos"
          class="w-32 sm:w-48 md:w-56 lg:w-64"
        />
      </div>
      <div class="lg:flex-1/2 lg:pr-80">
        <p
          class="text-justify bg-[#fff9df] p-5 rounded-2xl font-serif max-w-xl mx-auto"
        >
          <em class="font-bold"> JD ELECTRICOS </em> contamos con una
          trayectoria y experiencia para la Venta de Material Electrico en
          Bogota y otras ciudades. Manejamos un portafolio de suministros
          electricos y Productos Electricos asequibles, de calidad, extensos y
          óptimo para las Instalaciones Electricas con entregas oportunas en
          todo Colombia.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { NuxtImg } from "#components";
</script>
