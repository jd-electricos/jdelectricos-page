<template>
    <div class="flex flex-row gap-4 items-center justify-center">
      <div class="flex flex-col gap-9">
        <div
          class="flex items-center gap-2"
          v-for="asesor in asesores"
          :key="asesor.name"
        >
          <div
            :style="{ backgroundColor: asesor.bg }"
            class="w-10 h-10 rounded-3xl"
          ></div>
          <div class="flex flex-col">
            <div>
              <p><i class="pi pi-user"></i> {{ asesor.name }}</p>
            </div>
            <p><i class="pi pi-whatsapp"></i> {{ asesor.number }}</p>
          </div>
        </div>
      </div>
      <div class="rounded-2xl shadow-xl shadow-neutral-800/50" id="map" style="height: 500px; width: 80%"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import axios from "axios";
  let colombiaGeoJSON;
  
  const asesores = [
    {
      bg: "#ec7063",
      name: "Nicolas Bernal",
      number: "+57 323 573 01 00",
    },
    {
      bg: "#58d68d",
      name: "Juan David Moreno",
      number: "+57 323 225 74 26",
    },
    {
      bg: "#58db",
      name: "Miguel Lozano",
      number: "+57 310 492 84 93",
    },
    {
      bg: "#a569bd",
      name: "Stefany Camila Forero",
      number: "+57 320 339 25 65",
    },
    {
      bg: "#f4d03f",
      name: "JD Eléctricos",
      number: "+57 310 862 80 14",
    },
    {
      bg: "#eb984e",
      name: "JD Eléctricos",
      number: "+57 320 270 57 34",
    },
  ];
  
  onMounted(async () => {
    const config = useRuntimeConfig();
    const L = (await import("leaflet")).default;
    await import("leaflet/dist/leaflet.css");
  
    try {
      // Obtener el GeoJSON desde el repositorio de GitHub
      const response = await fetch(
        "https://raw.githubusercontent.com/jd-electricos/geo-data-col/main/Colombia.geo.json"
      );
      if (!response.ok) throw new Error("Error al cargar el archivo GeoJSON");
      colombiaGeoJSON = await response.json();
  
      // Inicializar el mapa después de cargar el GeoJSON
      const map = L.map("map").setView([4.570868, -74.2973328], 5);
  
      // Capa base (OpenStreetMap)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);
  
      // Función para definir el color basado en el grupo
      const getColor = (department) => {
        const group1 = [
          "ATLÁNTICO",
          "BOLÍVAR",
          "CÓRDOBA",
          "SUCRE",
          "MAGDALENA",
          "LA GUAJIRA",
          "CESAR",
          "CORDOBA",
          "BOLIVAR",
          "ATLANTICO",
        ];
        const group2 = ["SANTANDER", "NORTE DE SANTANDER", "HUILA", "TOLIMA"];
        const group3 = ["GUAVIARE", "META", "CASANARE", "ARAUCA"];
        const group4 = ["BOGOTA", "CUNDINAMARCA", "BOYACA"];
        const group5 = ["ANTIOQUIA"];
        const group6 = [
          "CHOCO",
          "CALDAS",
          "RISARALDA",
          "NARIÑO",
          "VALLE DEL CAUCA",
          "CAUCA",
          "QUINDIO",
          "PUTUMAYO",
          "CAQUETA",
          "AMAZONAS",
        ];
  
        if (group1.includes(department)) return "#ec7063 "; // Amarillo claro
        if (group2.includes(department)) return "#58d68d "; // Naranja
        if (group3.includes(department)) return "#58db"; // Rojo claro
        if (group4.includes(department)) return "#a569bd "; // Rojo intenso
        if (group5.includes(department)) return "#f4d03f"; // Rojo oscuro
        if (group6.includes(department)) return "#eb984e"; // Rojo oscuro
  
        return "#CCCCCC"; // Gris para departamentos no clasificados
      };
  
      // Función para obtener información del pop-up basado en el grupo
      const getPopupContent = (department) => {
        const group1 = [
          "ATLÁNTICO",
          "BOLÍVAR",
          "CÓRDOBA",
          "SUCRE",
          "MAGDALENA",
          "LA GUAJIRA",
          "CESAR",
          "CORDOBA",
          "BOLIVAR",
          "ATLANTICO",
        ];
        const group2 = ["SANTANDER", "NORTE DE SANTANDER", "HUILA", "TOLIMA"];
        const group3 = ["GUAVIARE", "META", "CASANARE", "ARAUCA"];
        const group4 = ["BOGOTA", "CUNDINAMARCA", "BOYACA"];
        const group5 = ["ANTIOQUIA"];
        const group6 = [
          "CHOCO",
          "CALDAS",
          "RISARALDA",
          "NARIÑO",
          "VALLE DEL CAUCA",
          "CAUCA",
          "QUINDIO",
          "PUTUMAYO",
          "CAQUETA",
          "AMAZONAS",
        ];
  
        if (group1.includes(department)) {
          return `
          <div class="flex flex-col gap-7">
      <div class="flex flex-col items-center ">
        <img
          src="/img/logo/logo-jd-electricos.webp"
          style="width: 80px; border-radius: 50%; margin-bottom: 10px"
        />
        <strong><div>
          <b><i class="pi pi-map"></i> ${department}</b>
        </div></strong>
      </div>
      <div class="flex flex-col items-start gap-3">
        <div>
          <b><i class="pi pi-user"></i> Nicolas Bernal</b>
        </div>
        <div>
          <b><i class="pi pi-whatsapp"></i> Tel:</b> 323 573 01 00
        </div>
      </div>
    </div>`;
        }
        if (group2.includes(department)) {
          return `
          <div class="flex flex-col gap-7">
      <div class="flex flex-col items-center ">
        <img
          src="/img/logo/logo-jd-electricos.webp"
          style="width: 80px; border-radius: 50%; margin-bottom: 10px"
        />
        <strong><div>
          <b><i class="pi pi-map"></i> ${department}</b>
        </div></strong>
      </div>
      <div class="flex flex-col items-start gap-3">
        <div>
          <b><i class="pi pi-user"></i> Juan David Moreno</b>
        </div>
        <div>
          <b><i class="pi pi-whatsapp"></i> Tel:</b> 323 225 74 26
        </div>
      </div>
    </div>
          `;
        }
        if (group3.includes(department)) {
          return `
          <div class="flex flex-col gap-7">
      <div class="flex flex-col items-center ">
        <img
          src="/img/logo/logo-jd-electricos.webp"
          style="width: 80px; border-radius: 50%; margin-bottom: 10px"
        />
        <strong><div>
          <b><i class="pi pi-map"></i> ${department}</b>
        </div></strong>
      </div>
      <div class="flex flex-col items-start gap-3">
        <div>
          <b><i class="pi pi-user"></i> Miguel lozada</b>
        </div>
        <div>
          <b><i class="pi pi-whatsapp"></i> Tel:</b> 310 492 84 93
        </div>
      </div>
    </div>
          `;
        }
        if (group4.includes(department)) {
          return `
          <div class="flex flex-col gap-7">
      <div class="flex flex-col items-center ">
        <img
          src="/img/logo/logo-jd-electricos.webp"
          style="width: 80px; border-radius: 50%; margin-bottom: 10px"
        />
        <strong><div>
          <b><i class="pi pi-map"></i> ${department}</b>
        </div></strong>
      </div>
      <div class="flex flex-col items-start gap-3">
        <div>
          <b><i class="pi pi-user"></i> Stefany Camila Forero</b>
        </div>
        <div>
          <b><i class="pi pi-whatsapp"></i> Tel:</b> 320 339 25 65
        </div>
      </div>
    </div>`;
        }
        if (group5.includes(department)) {
          return `
          <div class="flex flex-col gap-7">
      <div class="flex flex-col items-center ">
        <img
          src="/img/logo/logo-jd-electricos.webp"
          style="width: 80px; border-radius: 50%; margin-bottom: 10px"
        />
        <strong><div>
          <b><i class="pi pi-map"></i> ${department}</b>
        </div></strong>
      </div>
      <div class="flex flex-col items-start gap-3">
        <div>
          <b><i class="pi pi-user"></i> JD Eléctricos</b>
        </div>
        <div>
          <b><i class="pi pi-whatsapp"></i> Tel:</b> 310 862 80 14
        </div>
      </div>
    </div>`;
        }
        if (group6.includes(department)) {
          return `
          <div class="flex flex-col gap-7">
      <div class="flex flex-col items-center ">
        <img
          src="/img/logo/logo-jd-electricos.webp"
          style="width: 80px; border-radius: 50%; margin-bottom: 10px"
        />
        <strong><div>
          <b><i class="pi pi-map"></i> ${department}</b>
        </div></strong>
      </div>
      <div class="flex flex-col items-start gap-3">
        <div>
          <b><i class="pi pi-user"></i> JD Eléctricos</b>
        </div>
        <div>
          <b><i class="pi pi-whatsapp"></i> Tel:</b> 320 270 57 34
        </div>
      </div>
    </div>
          `;
        }
        return "<strong>Información no disponible</strong>";
      };
  
      // Estilo de los polígonos
      const style = (feature) => ({
        fillColor: getColor(feature.properties.NOMBRE_DPT || ""),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
      });
  
      // Agregar datos geoJSON al mapa
      L.geoJSON(colombiaGeoJSON, {
        style: style,
        onEachFeature: (feature, layer) => {
          // Pop-up al hacer clic en una región
          const department = feature.properties.NOMBRE_DPT || "";
          layer.bindPopup(getPopupContent(department));
        },
      }).addTo(map);
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