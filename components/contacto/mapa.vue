<template>
  <div class="flex flex-col gap-4 items-center justify-center bg-white p-10">
    <h1
      class="lg:text-6xl text-4xl font-bold font-serif text-center pb-12 text-gray-800"
    >
      Estamos Ubicados
    </h1>
    <div
      class="rounded-2xl z-10"
      id="map"
      style="height: 500px; width: 80%"
    ></div>
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

onMounted(async () => {
  const L = (await import("leaflet")).default;
  await import("leaflet/dist/leaflet.css");

  try {
    const map = L.map("map").setView(
      [4.605074062036395, -74.0763889323775],
      15
    ); // Ubicación específica en Bogotá

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Agregar marcador en la ubicación específica
    const marker = L.marker([4.605074062036395, -74.0763889323775]).addTo(map);
    marker
      .bindPopup(
        `
        <div class='flex flex-col items-center gap-1'>
          <img src="/img/logo/logo-jd-electricos.webp" alt="logo de jd electricos" class="w-16 h-16" />
          <p class="font-extrabold">JD Eléctricos</p>
          <p>Cr 12 #15-85, Bogotá, Colombia</p>
        </div>
      `
      )
      .openPopup();
  } catch (error) {
    console.error("Error al inicializar el mapa", error);
  }
});
</script>

<style scoped>
#map {
  height: 500px;
  width: 100%;
}
</style>
