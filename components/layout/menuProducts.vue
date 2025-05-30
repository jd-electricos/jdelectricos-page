<template>
  <div
    class="relative inline-block text-left"
    @mouseenter="cancelCloseMenu"
    @mouseleave="delayedCloseMenu"
  >
    <!-- Botón principal -->
    <button @mouseenter="toggleMenu" class="rounded">
      <NuxtLink to="/tienda-articulos-electricos">Productos</NuxtLink>
    </button>

    <!-- Categorías -->
    <div
      v-if="open"
      class="hidden md:block absolute bg-white rounded-l z-50 left-0 md:left-auto md:right-0 lg:min-w-[300px] max-w-screen-xl text-sm"
      @mouseenter="cancelCloseMenu"
      @mouseleave="delayedCloseMenu"
    >
      <ul class="border rounded shadow-md p-2 flex flex-col max-h-[300px] overflow-auto">
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
              <svg class="w-4 h-4 ml-2 rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Subcategorías -->
    <div
      v-if="activeCategory !== null"
      class="fixed z-50"
      @mouseenter="cancelCloseMenu"
      @mouseleave="delayedCloseMenu"
      :style="{ top: `${submenuPosition.top}px`, left: `${submenuPosition.left}px` }"
    >
      <ul class="lg:w-56 bg-white text-black border rounded shadow-md max-h-[300px] overflow-auto">
        <li
          v-for="(sub, j) in menu[activeCategory].subcategories"
          :key="j"
          class="group relative"
          @mouseenter="hoverSubcategory(j)"
          :ref="(el) => setSubcategoryRef(el, j)"
        >
          <NuxtLink :to="sub.slug">
            <div
              class="min-h-10 text-sm px-4 py-2 hover:bg-blue-100 hover:text-black cursor-pointer flex justify-between items-center"
              :class="{ 'bg-gray-800 text-white': activeSubcategory === j }"
            >
              {{ sub.name }}
              <svg class="w-4 h-4 ml-2 rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Productos -->
    <div
      v-if="activeCategory !== null && activeSubcategory !== null"
      class="fixed z-50"
      @mouseenter="cancelCloseMenu"
      @mouseleave="delayedCloseMenu"
      :style="{ top: `${productMenuPosition.top}px`, left: `${productMenuPosition.left}px` }"
    >
      <ul class="bg-white text-black border rounded shadow-md lg:w-64 w-36 max-h-[300px] overflow-auto">
        <li
          v-for="(prod, k) in menu[activeCategory].subcategories[activeSubcategory].products"
          :key="k"
          class="px-4 py-2 hover:bg-blue-100 cursor-pointer"
        >
          <NuxtLink :to="prod.slugProduct">{{ prod.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const open = ref(false);
const activeCategory = ref(null);
const activeSubcategory = ref(null);
const categoryRefs = ref([]);
const subcategoryRefs = ref([]);
const submenuPosition = ref({ top: 0, left: 0 });
const productMenuPosition = ref({ top: 0, left: 0 });
const menu = ref([]);
let closeTimeout;

const fetchMenuData = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/products/menujd");
    const data = await response.json();
    menu.value = data.map((cat) => ({
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
  } catch (error) {
    console.error("Error al cargar el menú:", error);
  }
};

onMounted(fetchMenuData);

const setCategoryRef = (el, index) => {
  categoryRefs.value[index] = el;
};

const setSubcategoryRef = (el, index) => {
  subcategoryRefs.value[index] = el;
};

const updateSubmenuPosition = async (index) => {
  await nextTick();
  const el = categoryRefs.value[index];
  if (el) {
    const rect = el.getBoundingClientRect();
    submenuPosition.value = {
      top: rect.top,
      left: rect.left - 230, // Mostrar a la izquierda
    };
  }
};

const updateProductMenuPosition = async (index) => {
  await nextTick();
  const el = subcategoryRefs.value[index];
  if (el) {
    const rect = el.getBoundingClientRect();
    productMenuPosition.value = {
      top: rect.top,
      left: rect.left - 250, // Mostrar a la izquierda
    };
  }
};

const toggleMenu = () => {
  open.value = !open.value;
  activeCategory.value = null;
  activeSubcategory.value = null;
};

const hoverCategory = (index) => {
  clearTimeout(closeTimeout);
  activeCategory.value = index;
  activeSubcategory.value = null;
  updateSubmenuPosition(index);
};

const hoverSubcategory = (index) => {
  clearTimeout(closeTimeout);
  activeSubcategory.value = index;
  updateProductMenuPosition(index);
};

const delayedCloseMenu = () => {
  closeTimeout = setTimeout(() => {
    open.value = false;
    activeCategory.value = null;
    activeSubcategory.value = null;
  }, 150);
};

const cancelCloseMenu = () => {
  clearTimeout(closeTimeout);
};
</script>
