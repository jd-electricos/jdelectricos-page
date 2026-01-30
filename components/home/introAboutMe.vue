<template>
  <section class="py-2">
    <div class="flex flex-col lg:flex-row items-center justify-center">
      <div class="lg:flex-1/2 flex justify-center">
        <NuxtImg
          src="/img/logo/resize-LOGO-JD-CTA.webp"
          alt="logo de jd electricos"
          width="256"
          height="256"
          sizes="(max-width: 640px) 128px,
         (max-width: 768px) 192px,
         256px"
          format="webp"
          quality="70"
          class="w-32 sm:w-48 md:w-56 lg:w-64"
        />
      </div>
      <div class="lg:flex-1/2 lg:pr-80 p-6">
        <p
          class="text-justify bg-[#fff9df] p-5 rounded-2xl font-serif max-w-xl mx-auto shadow-xl shadow-neutral-800/50"
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
