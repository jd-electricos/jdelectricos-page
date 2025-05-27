<template>
  <div
    class="relative inline-block text-left"
    @mouseenter="open = true"
    @mouseleave="closeMenu"
  >
    <!-- Botón principal -->
    <button @click="toggleMenu" class="rounded">
      <NuxtLink to="/tienda-articulos-electricos">Productos</NuxtLink>
    </button>

    <!-- Categorías principales -->
    <div
      v-if="open"
      class="hidden md:block rounded-l bg-white absolute left-0 md:left-auto md:right-0 z-50 lg:min-w-[300px] max-w-screen-xl text-sm"
    >
      <ul
        class="border rounded shadow-md p-2 flex flex-col max-h-[300px] overflow-auto"
      >
        <li
          v-for="(cat, i) in menu"
          :key="i"
          class="group relative"
          @mouseenter="hoverCategory(i)"
          :ref="(el) => setCategoryRef(el, i)"
        >
          <NuxtLink :to="cat.slug">
            <div
              class="min-h-10 text-black text-sm px-2 py-2 hover:bg-gray-100 hover:text-black cursor-pointer flex justify-between items-center"
              :class="{ 'bg-gray-800 text-white': activeCategory === i }"
            >
              {{ cat.name }}
              <svg
                class="w-4 h-4 ml-2 rotate-180"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Subcategorías (fuera del contenedor rojo) -->
    <div
      v-if="activeCategory !== null"
      class="fixed z-50"
      :style="{
        top: `${submenuPosition.top}px`,
        left: `${submenuPosition.left}px`,
      }"
    >
      <ul class="lg:w-56 bg-white text-black border rounded shadow-md">
        <li
          v-for="(sub, j) in menu[activeCategory].subcategories"
          :key="j"
          class="group relative"
          @mouseenter="hoverSubcategory(j)"
        >
          <NuxtLink :to="sub.slug">
            <div
              class="min-h-10 text-sm px-4 py-2 hover:bg-blue-100 hover:text-black cursor-pointer flex justify-between items-center overflow-auto"
              :class="{ 'bg-gray-800 text-white': activeSubcategory === j }"
            >
              {{ sub.name }}
              <svg
                class="w-4 h-4 ml-2 rotate-180"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </NuxtLink>
          <!-- Productos -->
          <ul
            v-if="activeSubcategory === j"
            class="bg-white absolute top-0 left-full md:left-auto md:right-full border rounded shadow-md lg:w-64 w-36 z-50 max-h-50 overflow-auto"
          >
            <li
              v-for="(prod, k) in sub.products"
              :key="k"
              class="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              <NuxtLink :to="prod.slugProduct">
                {{ prod.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<!-- funcional -->
<script setup>
import { ref, onMounted, nextTick } from "vue";

const open = ref(false);
const activeCategory = ref(null);
const activeSubcategory = ref(null);
const categoryRefs = ref([]);
const submenuPosition = ref({ top: 0, left: 0 });

const menu = ref([]);

// Transformar y cargar los datos
const fetchMenuData = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/products/menujd");
    const data = await response.json();

    // Formatear los datos
    const formatted = data.map((cat) => ({
      name: cat.name,
      slug: cat.slug,
      subcategories: cat.subCategories.map((sub) => ({
        name: sub.name,
        slug: sub.slug,
        products: sub.productsInSubcategory.map((prod) => ({
          name: prod.name,
          slugProduct: prod.slugProduct,
        })),
      })),
    }));

    menu.value = formatted;
  } catch (error) {
    console.error("Error al cargar el menú:", error);
  }
};

onMounted(fetchMenuData);

const setCategoryRef = (el, index) => {
  categoryRefs.value[index] = el;
};

const updateSubmenuPosition = async (index) => {
  await nextTick();
  const el = categoryRefs.value[index];
  if (el) {
    const rect = el.getBoundingClientRect();
    const isDesktop = window.innerWidth >= 800;
    submenuPosition.value = {
      top: rect.top,
      left: isDesktop ? rect.left - 232 : rect.left + 130,
    };
  }
};

const toggleMenu = () => {
  open.value = !open.value;
  activeCategory.value = null;
  activeSubcategory.value = null;
};

const hoverCategory = (index) => {
  activeCategory.value = index;
  activeSubcategory.value = null;
  updateSubmenuPosition(index);
};

const hoverSubcategory = (index) => {
  activeSubcategory.value = index;
};

const closeMenu = () => {
  open.value = false;
  activeCategory.value = null;
  activeSubcategory.value = null;
};
</script>
