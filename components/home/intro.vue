<template>
  <div
    class="bg-gray-800 flex flex-col-reverse items-center lg:flex-row justify-between px-6 sm:px-12 lg:px-50 py-10 sm:py-16 lg:py-20"
  >
    <div
      class="text-white flex-1 lg:w-1/2 text-base lg:text-left pt-10 lg:pt-0"
    >
      <h2 class="text-2xl sm:text-3xl lg:text-8xl font-extrabold font-serif">
        JD Eléctricos
      </h2>
      <h1 class="text-lg sm:text-3xl font-extrabold">
        Productos y Materiales Eléctricos
      </h1>
      <br />
      <p class="text-sm sm:text-base">
        Distribuidores de Cable ACSR, aislador polimérico, pararrayo polimérico,
        aislador pin, aislador carrete, aislador tensor, poste de concreto,
        interruptores, equipos eléctricos, toma de tierra, transformador,
        generadores, cables baja tensión, transformadores, para alta, media y
        baja tensión.
      </p>
    </div>

    <div
      class="flex-1 lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
    >
      <NuxtImg
        src="/img/logo/intro.webp"
        class="lg:w-[34rem] lg:h-[34rem] w-[24rem] h-[24rem] object-contain drop-shadow-lg drop-shadow-stone-400"
        width="544"
        height="544"
        sizes="(max-width: 640px) 384px, 544px"
        format="webp"
        quality="70"
        preload
        fetchpriority="high"
        alt="JD Eléctricos – Equipos y materiales eléctricos"
      />
    </div>
  </div>
</template>

<script setup></script>
