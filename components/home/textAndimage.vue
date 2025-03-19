<template>
  <section
    class="xl:grid xl:grid-cols-2 lg:flex lg:flex-col gap-12 xl:px-44 xl:py-24 p-8 items-center"
  >
    <!-- Sección de texto -->
    <div class="space-y-4">
      <h2 class="font-bold text-xl md:text-4xl text-gray-800">
        PRODCUTOS QUE MANEJAMOS
      </h2>
      <p>
        Cable ACSR, aislador polimérico, pararrayo polimérico, aislador pin,
        aislador carrete, aislador tensor, poste de concreto, interruptores,
        equipos eléctricos, toma de tierra, transformador, generadores, cables
        baja tensión, transformadores.
      </p>
      <h3 class="font-bold text-xl md:text-4xl text-gray-800">
        DISTRIBUIMOS CABLES ELÉCTRICOS AL POR MAYOR
      </h3>
      <p>
        En el marco de la iniciativa MVC Colombia, la Fundación Natura, la
        Cámara de Comercio de Bogotá y la Corporación Ambiental Empresarial, con
        el apoyo del Fondo para el Medio Ambiente Mundial a través del BID, han
        desarrollado un programa nacional. Estas actividades corporativas e
        institucionales de mitigación y compensación voluntarias con el
        propósito de fortalecer el componente de demanda del mercado voluntario
        de Carbono.
      </p>
      <p>
        Procables, a través de sus cables eléctricos, es un caso exitoso de
        Identificación de Mejoras Tecnológicas a partir de la Huella de Carbono.
        Esta representa el compromiso de los empresarios en la gestión integral
        frente al cambio climático. Por eso, JD Eléctricos, con la distribución
        de sus materiales eléctricos, también está preocupado por el desarrollo
        sustentable de nuestro país.
      </p>
      <p class="font-bold text-gray-800">
        Distribuimos materiales eléctricos para toda Colombia: industriales
        eléctricos en Bogotá, materiales eléctricos en Medellín, Barranquilla,
        Cali y Bucaramanga.
      </p>
    </div>

    <!-- Sección de imágenes -->
    <div class="flex flex-col gap-8">
     
      <h2 class="font-bold text-gray-800 text-center">
        CABLES ELÉCTRICOS Y Mejoras Tecnológicas a partir de la Huella de
        Carbono
      </h2>
      <NuxtImg
        src="https://jdelectricos.com.co/wp-content/uploads/2015/05/bodega-jd-electricos.jpg"
        alt="Bodega JD Eléctricos"
        class="w-full h-auto rounded-lg shadow-md"
      />
    </div>
    <!-- Botón centrado en la parte inferior -->
    <div class="flex justify-center mt-8 col-span-2">
      <NuxtLink
        to="/contacto-jd-electricos-colombia"
        class="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition"
      >
        Déjenos aquí tus datos de contacto
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
