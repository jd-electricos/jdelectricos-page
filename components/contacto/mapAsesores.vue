<template>
  <div class="flex lg:flex-row flex-col gap-4 items-center justify-center">
    <div class="flex lg:flex-col flex-wrap justify-center gap-9">
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
    <div
      class="rounded-2xl shadow-xl shadow-neutral-800/50 w-[80%] h-[250px] md:h-[400px] lg:h-[500px]"
      id="map"
    ></div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";

let colombiaGeoJSON;

const asesores = [
  {
    bg: "#f4d03f",
    name: "JD Eléctricos",
    number: "+57 320 339 25 65",
  },
  {
    bg: "#eb984e",
    name: "Dianie Novoa",
    number: "+57 320 270 57 34",
  },
  {
    bg: "#e74c3c",
    name: "Esteban Ramirez",
    number: "+57 310 492 84 93",
  },
  {
    bg: "#58dbdb", // color cambiado
    name: "Juan David Moreno",
    number: "+57 323 225 74 26",
  },
  {
    bg: "#9b59b6", // color cambiado
    name: "Mauricio Peña",
    number: "+57 313 406 42 11",
  },
  {
    bg: "#ec7063",
    name: "Nicolas Bernal",
    number: "+57 323 573 01 00",
  },
  {
    bg: "#2ecc71", // color cambiado
    name: "Vladimir Molina",
    number: "+57 311 203 11 38",
  },
];

onMounted(async () => {
  const L = (await import("leaflet")).default;
  await import("leaflet/dist/leaflet.css");

  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/jd-electricos/geo-data-col/main/Colombia.geo.json",
    );
    if (!response.ok) throw new Error("Error al cargar GeoJSON");
    colombiaGeoJSON = await response.json();

    console.log(colombiaGeoJSON);

    const map = L.map("map").setView([4.570868, -74.2973328], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    /* =============================
       COLORES POR ASESOR
    ============================= */
    const getColor = (department) => {
      const nicolas = [
        "ATLÁNTICO",
        "ATLANTICO",
        "BOLÍVAR",
        "BOLIVAR",
        "MAGDALENA",
      ];

      const juan = [
        "BOGOTA",
        "CUNDINAMARCA",
        "HUILA",
        "NORTE DE SANTANDER",
        "SANTANDER",
        "TOLIMA",
      ];

      const esteban = [
        "BOYACA",
        "BOYACÁ",
        "META",
        "SAN ANDRES",
        "SAN ANDRÉS",
        "CASANARE",
      ];

      const dianie = [
        "CALDAS",
        "CAUCA",
        "NARIÑO",
        "QUINDIO",
        "QUINDÍO",
        "RISARALDA",
        "VALLE DEL CAUCA",
      ];

      const mauricio = ["CORDOBA", "CÓRDOBA", "SUCRE"];

      const vladimir = ["CESAR", "LA GUAJIRA"];

      const japs = [
        "AMAZONAS",
        "CAQUETA",
        "GUAVIARE",
        "QUIBDO",
        "CHOCO",
        "ARAUCA",
        "VAUPES",
        "VICHADA",
        "GUAINIA",
      ];

      const jd = ["ANTIOQUIA"];

      if (jd.includes(department)) return "#f4d03f";
      if (dianie.includes(department)) return "#eb984e";
      if (esteban.includes(department)) return "#e74c3c";
      if (juan.includes(department)) return "#58dbdb";
      if (mauricio.includes(department)) return "#9b59b6";
      if (nicolas.includes(department)) return "#ec7063";
      if (vladimir.includes(department)) return "#2ecc71";
      if (japs.includes(department)) return "#58db";

      return "#CCCCCC";
    };

    /* =============================
       TEMPLATE POPUP
    ============================= */
    const popupTemplate = (department, name, phone) => `
      <div class="flex flex-col gap-7">
        <div class="flex flex-col items-center">
          <img
            src="/img/logo/logo-jd-electricos.webp"
            style="width:80px;border-radius:50%;margin-bottom:10px"
          />
          <strong>
            <b><i class="pi pi-map"></i> ${department}</b>
          </strong>
        </div>
        <div class="flex flex-col items-start gap-3">
          <div>
            <b><i class="pi pi-user"></i> ${name}</b>
          </div>
          <div>
            <b><i class="pi pi-whatsapp"></i> Tel:</b> ${phone}
          </div>
        </div>
      </div>
    `;

    /* =============================
       POPUP POR ZONA
    ============================= */
    const getPopupContent = (department) => {
      const nicolas = [
        "ATLÁNTICO",
        "ATLANTICO",
        "BOLÍVAR",
        "BOLIVAR",
        "MAGDALENA",
      ];

      const juan = [
        "BOGOTA",
        "CUNDINAMARCA",
        "HUILA",
        "NORTE DE SANTANDER",
        "SANTANDER",
        "TOLIMA",
      ];

      const esteban = [
        "BOYACA",
        "BOYACÁ",
        "META",
        "SAN ANDRES",
        "SAN ANDRÉS",
        "CASANARE",
      ];

      const dianie = [
        "CALDAS",
        "CAUCA",
        "NARIÑO",
        "QUINDIO",
        "QUINDÍO",
        "RISARALDA",
        "VALLE DEL CAUCA",
      ];

      const mauricio = ["CORDOBA", "CÓRDOBA", "SUCRE"];

      const vladimir = ["CESAR", "LA GUAJIRA"];

      const japs = [
        "AMAZONAS",
        "CAQUETA",
        "GUAVIARE",
        "QUIBDO",
        "CHOCO",
        "ARAUCA",
        "VAUPES",
        "VICHADA",
        "GUAINIA",
      ];

      const jd = ["ANTIOQUIA"];

      if (vladimir.includes(department))
        return popupTemplate(department, "Vladimir Molina", "323 573 01 00");

      if (mauricio.includes(department))
        return popupTemplate(department, "Mauricio Peña", "323 573 01 00");

      if (nicolas.includes(department))
        return popupTemplate(department, "Nicolas Bernal", "323 573 01 00");

      if (juan.includes(department))
        return popupTemplate(department, "Juan David Moreno", "323 225 74 26");

      if (esteban.includes(department))
        return popupTemplate(department, "Esteban Ramirez", "310 492 84 93");

      if (dianie.includes(department))
        return popupTemplate(department, "Dianie Novoa", "320 270 57 34");

      if (jd.includes(department))
        return popupTemplate(department, "JD Eléctricos", "320 339 25 65");

      if (japs.includes(department))
        return popupTemplate(department, "JD Eléctricos", "310 802 32 77");

      return "<strong>Información no disponible</strong>";
    };

    /* =============================
       ESTILO
    ============================= */
    const style = (feature) => ({
      fillColor: getColor(feature.properties.NOMBRE_DPT || ""),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    });

    L.geoJSON(colombiaGeoJSON, {
      style,
      onEachFeature: (feature, layer) => {
        const department = feature.properties.NOMBRE_DPT || "";
        layer.bindPopup(getPopupContent(department));
      },
    }).addTo(map);
  } catch (error) {
    console.error("Error al inicializar el mapa", error);
  }
});
</script>

<style scoped></style>
