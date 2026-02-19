<template>
  <section class="relative bg-gray-800 text-white overflow-hidden">

    <!-- Fondo con overlay optimizado -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-cover bg-center opacity-5"
        style="background-image: url('/img/logo/bodega-jd-electricos.jpg');"
      ></div>
    </div>

    <div
      class="relative z-10 max-w-7xl mx-auto
             px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32
             py-14 sm:py-20 lg:py-28
             flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
    >
      <!-- Columna izquierda -->
      <div class="flex-1 text-center lg:text-left max-w-2xl">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                 font-extrabold font-serif leading-tight"
        >
          Productos JD
        </h2>

        <NuxtImg
          src="/img/logo/IMAGE-STORE.webp"
          alt="imagen bodega jd electricos"
          class="mt-8 w-full h-auto rounded-xl shadow-xl object-cover"
          width="1600"
          height="900"
        />
      </div>

      <!-- Columna derecha -->
      <div
        class="flex-1 space-y-6
               text-sm sm:text-base md:text-lg
               text-gray-300 leading-relaxed"
      >
        <p>
          Nuestros materiales electricos como cable ACSR, aislador polimérico,
          pararrayo polimérico, aislador pin, aislador carrete, aislador tensor,
          poste de concreto, interruptores, equipos eléctricos, toma de tierra,
          transformador, generadores, cables baja tensión, transformadores.
        </p>

        <h3
          class="text-lg sm:text-xl md:text-2xl
                 font-extrabold font-serif text-white"
        >
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

    <!-- Texto inferior -->
    <div
      class="relative z-10 text-center
             px-6 sm:px-10 md:px-16 lg:px-24
             pb-12 text-sm sm:text-base"
    >
      <em class="font-bold text-gray-300">
        Distribuimos materiales eléctricos para toda Colombia: industriales
        eléctricos en Bogotá, materiales eléctricos en Medellín, Barranquilla,
        Cali y Bucaramanga.
      </em>
    </div>
  </section>
</template>

<script setup></script>
