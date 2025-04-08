<template>
  <div class="flex flex-col gap-4 items-center justify-center bg-white p-10">
    <h1
      class="lg:text-6xl text-4xl font-bold font-serif text-center pb-12 text-gray-800"
    >
      Estamos Ubicados
    </h1>
    <div class="rounded-2xl z-10 map">
      <mapAsesores />
    </div>
    <br /><br />
    <em
      >“Somos una empresa comercializadora de materiales eléctricos, cables
      electricos, alambres y cables, alambre de cobre desnudo y postes de
      concreto, de productos para la generación, transmisión y distribución de
      energía de baja, media y alta tensión, capaces de desarrollar soluciones
      energéticas para todos nuestros clientes a lo largo de Colombia.”</em
    >
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import mapAsesores from "./mapAsesores.vue";
</script>

<style scoped>
.map {
  height: 500px;
  width: 100%;
}
</style>
