<template>
  <div class="relative flex flex-col bg-gray-800 text-white items-center p-5">
    <div
      class="flex flex-col lg:flex-row bg-gray-800 text-white justify-between lg:gap-50 gap-10 px-6 sm:px-12 lg:px-50 py-10 sm:py-16 lg:py-20"
    >
      <!-- Fondo con imagen y overlay -->
      <div class="absolute inset-0 bg-gray-800 opacity-5">
        <div class="absolute inset-0 bg-cover bg-center parallax-bg"></div>
      </div>

      <div class="relative flex-1/2 z-10">
        <h2 class="text-4xl lg:text-7xl font-extrabold font-serif">
          Productos JD
        </h2>
        <br />
        <NuxtImg
          src="/img/logo/IMAGE-STORE.webp"
          alt="imagen bodega jd electricos"
          width="1600"
          height="900"
          sizes="100vw"
          format="webp"
          quality="75"
          class="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div class="relative flex-1/2 space-y-6 z-10">
        <p>
          Nuestros materiales electricos como cable ACSR, aislador polimérico,
          pararrayo polimérico, aislador pin, aislador carrete, aislador tensor,
          poste de concreto, interruptores, equipos eléctricos, toma de tierra,
          transformador, generadores, cables baja tensión, transformadores.
        </p>
        <h3 class="text-xl sm:text-xl lg:text-2xl font-extrabold font-serif">
          DISTRIBUIMOS CABLES ELÉCTRICOS AL POR MAYOR
        </h3>
        <p>
          En el marco de la iniciativa MVC Colombia, la Fundación Natura, la
          Cámara de Comercio de Bogotá y la Corporación Ambiental Empresarial,
          con el apoyo del Fondo para el Medio Ambiente Mundial a través del
          BID, han desarrollado un programa nacional. Estas actividades
          corporativas e institucionales de mitigación y compensación
          voluntarias con el propósito de fortalecer el componente de demanda
          del mercado voluntario de Carbono.
        </p>
        <p>
          Procables, a través de sus cables eléctricos, es un caso exitoso de
          Identificación de Mejoras Tecnológicas a partir de la Huella de
          Carbono. Esta representa el compromiso de los empresarios en la
          gestión integral frente al cambio climático. Por eso, JD Eléctricos,
          con la distribución de sus materiales eléctricos, también está
          preocupado por el desarrollo sustentable de nuestro país.
        </p>
      </div>
    </div>
    <em class="font-bold"
      >Distribuimos materiales eléctricos para toda Colombia: industriales
      eléctricos en Bogotá, materiales eléctricos en Medellín, Barranquilla,
      Cali y Bucaramanga.</em
    >
  </div>
</template>

<script setup></script>

<style scoped>
.parallax-bg {
  background-image: url("/img/logo/bodega-jd-electricos.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}
</style>
