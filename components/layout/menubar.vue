<template>
  <nav class="flex justify-between items-center bg-gray-800 text-white px-20">
    <!-- logo de la empresa -->
    <div>
      <NuxtImg
        src="/img/logo/logo-jd-electricos.webp"
        alt="logo de jd electricos"
        class="w-16 h-16"
      />
    </div>

    <button
      @click="drawer = !drawer"
      class="p-4 rounded-md lg:hidden"
    >
      <Menu v-if="!drawer" class="w-6 h-6" />
      <X v-else class="w-6 h-6" />
    </button>

    <!-- labels del menu -->
    <div class="hidden lg:flex">
      <ul class="flex flex-row justify-center items-center">
        <li
          v-for="item in items"
          :key="item.label"
          class="px-8 relative group hover:bg-gray-600 rounded-t-md"
          @mouseenter="item.isOpen = true"
          @mouseleave="item.isOpen = false"
        >
          <NuxtLink :to="item.href">{{ item.label }}</NuxtLink>

          <!-- Submenú -->
          <div
            v-if="item.isOpen && item.items"
            class="absolute right-0 top-full p-4 w-auto min-w-[200px] bg-gray-600 rounded-b-md rounded-tl-md overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div class="max-h-96 overflow-y-auto">
              <!-- Grid dinámico -->
              <ul
                :style="{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${Math.ceil(
                    item.items.length / 5
                  )}, minmax(200px, 1fr))`,
                  gap: '2px',
                }"
              >
                <li v-for="subitem in item.items" :key="subitem.label">
                  <NuxtLink
                    :to="subitem.href"
                    class="flex text-center items-center justify-center hover:text-yellow-300 border-dashed border-1 border-gray-500 p-2 w-full h-full text-sm"
                  >
                    {{ subitem.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>

  <!-- drawer para el menu responsivo -->
  <nav
    class="fixed top-0 left-0 h-screen w-44 bg-gray-800 z-50 transition-transform duration-300 flex flex-col pt-16"
    :class="drawer ? 'translate-x-0' : '-translate-x-full'"
  >
    <button
      @click="drawer = false"
      class="absolute top-2 right-2 text-xl text-white"
    >
      &times;
    </button>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="text-white p-4 relative"
      >
        <div class="flex justify-between items-center cursor-pointer">
          <NuxtLink :to="item.href">{{ item.label }}</NuxtLink>
          <span v-if="item.items" @click="toggleSubMenu(index)">
            <svg
              :class="{ 'rotate-180': item.isOpen }"
              class="w-4 h-4 ml-2 transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>

        <!-- Popover de submenú -->
        <div
          v-if="activeSubMenu && activeSubMenu.label === item.label"
          class="absolute left-full top-0 bg-gray-700 text-white p-4 min-w-44 rounded-r-lg shadow-lg max-h-72 overflow-y-auto"
        >
          <button @click="closeSubMenu" class="absolute top-2 right-2 text-xl">
            &times;
          </button>
          <h2 class="text-lg font-bold mb-4">{{ activeSubMenu.label }}</h2>
          <ul>
            <li v-for="subitem in activeSubMenu.items" :key="subitem.label">
              <NuxtLink
                :to="subitem.href"
                class="block p-2 hover:text-yellow-300 text-sm"
              >
                {{ subitem.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { Menu, X } from "lucide-vue-next";
import { ref } from "vue";
const drawer = ref(false);
const activeSubMenu = ref(null);
const items = ref([
  { label: "Inicio", href: "/" },
  {
    label: "Nosotros",
    href: "/empresa-distribuidora-de-materiales-electricos-en-colombia",
  },
  {
    label: "Certificados",
    items: [
      { label: "Aisladores", href: "/" },
      { label: "Cables", href: "/" },
      { label: "Cintas y Hebillas", href: "/" },
      { label: "Herrajes", href: "/" },
      { label: "Luminarias", href: "/" },
      { label: "Pararrayos", href: "/" },
      { label: "Postes de Concreto", href: "/" },
    ],
    isOpen: false,
  },
  {
    label: "Catálogo",
    items: [
      { label: "Postes de Concreto", href: "/" },
      { label: "Transformadores abb", href: "/" },
    ],
    isOpen: false,
  },
  { label: "Contacto", href: "/contacto-jd-electricos-colombia" },
  {
    label: "Productos",
    href: "/tienda-articulos-electricos",
    items: [
      { label: "AISLADORES ELECTRICOS", href: "/" },
      { label: "ALAMBRES Y CABLES ELECTRICOS", href: "/" },
      { label: "ARTICULOS VARIOS", href: "/" },
      { label: "BREAKERS ELECTRICOS", href: "/" },
      { label: "CABLOFIL", href: "/" },
      { label: "CAJAS Y TABLEROS", href: "/" },
      { label: "CINTAS AISLANTES", href: "/" },
      { label: "CINTAS BAND IT", href: "/" },
      { label: "CONDENSADORES", href: "/" },
      { label: "CORTACIRCUITOS", href: "/" },
      { label: "CRUCETAS Y VIGAS", href: "/" },
      { label: "HERRAJES", href: "/" },
      { label: "HERRAMIENTAS", href: "/" },
      { label: "ILUMINACION", href: "/" },
      { label: "ILUMINACION LED", href: "/" },
      { label: "INDUSTRIA", href: "/" },
      { label: "INTERRUPTORES", href: "/" },
      { label: "MEDIDORES", href: "/" },
      { label: "MOTORES ELECTRICOS", href: "/" },
      { label: "PARARRAYOS", href: "/" },
      { label: "PREMOLDEADOS", href: "/" },
      { label: "POSTES DE CONCRETO", href: "/" },
      { label: "promociones", href: "/" },
      { label: "PROTECCION", href: "/" },
      { label: "PUESTA A TIERRA", href: "/" },
      { label: "RECONECTADOR", href: "/" },
      { label: "RED ESTRUCTURADA", href: "/" },
      { label: "RED TRENZADA", href: "/" },
      { label: "SECTOR PETROLEO", href: "/" },
      { label: "SEGURIDAD INDUSTRIAL", href: "/" },
      { label: "SOLDADURA EXOTERMICA", href: "/" },
      { label: "SUBESTACIONES", href: "/" },
      { label: "TRANSFORMADORES", href: "/" },
      { label: "TERMINALES PREMOLDEADAS", href: "/" },
      { label: "TUBERIA", href: "/" },
    ],
    isOpen: false,
  },
  {
    label: "Noticias",
    href: "/blog",
    items: [
      { label: "Cables Electricos", href: "/" },
      { label: "Herrajes Electricos", href: "/" },
      { label: "Materiales Electricos", href: "/" },
      { label: "Productos Electricos", href: "/" },
      { label: "Blog", href: "/" },
      { label: "News", href: "/" },
    ],
    isOpen: false,
  },
]);
const toggleSubMenu = (index) => {
  // Cerrar el submenú si ya está abierto, de lo contrario, abrirlo
  items.value.forEach((item, i) => {
    if (i === index) {
      item.isOpen = !item.isOpen;
      activeSubMenu.value = item.isOpen ? item : null;
    } else {
      item.isOpen = false;
    }
  });
};

const closeSubMenu = () => {
  activeSubMenu.value = null;
  items.value.forEach((item) => (item.isOpen = false));
};
</script>
