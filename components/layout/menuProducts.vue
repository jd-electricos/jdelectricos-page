<template>
  <div
    class="relative inline-block text-left"
    @mouseenter="open = true"
    @mouseleave="closeMenu"
  >
    <button @click="toggleMenu" class="rounded">
      <NuxtLink to="/tienda-articulos-electricos">Productos</NuxtLink>
    </button>

    <div
      v-if="open"
      class="bg-red-500 absolute left-0 md:left-auto md:right-0 z-50 lg:min-w-[300px] max-w-screen-xl text-sm"
    >
      <ul class="border rounded shadow-md p-2 flex flex-col">
        <li v-for="(cat, i) in menu" :key="i" class="group relative">
          <div
            class="min-h-10 text-black text-sm px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer flex justify-between items-center"
            :class="{ 'bg-gray-800 text-white': activeCategory === i }"
            @click.stop="toggleCategory(i)"
          >
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
            {{ cat.name }}
          </div>

          <!-- Subcategorías -->
          <ul
            v-if="activeCategory === i"
            class="absolute left-full md:left-auto md:right-full top-0 lg:w-56 text-black bg-white border rounded shadow-md z-50"
          >
            <li
              v-for="(sub, j) in cat.subcategories"
              :key="j"
              class="group relative"
            >
              <div
                class="min-h-10 text-sm px-4 py-2 hover:bg-blue-100 hover:text-black cursor-pointer flex justify-between items-center"
                :class="{ 'bg-gray-800 text-white': activeSubcategory === j }"
                @mouseenter="hoverSubcategory(j)"
                @click.stop="toggleSubcategory(j)"
              >
                <div>
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
                <div>
                  {{ sub.name }}
                </div>
              </div>

              <!-- Productos -->
              <ul
                v-if="activeSubcategory === j"
                class="absolute top-0 lg:w-64 w-36 bg-white border rounded shadow-md z-50 left-full md:left-auto md:right-full"
              >
                <li
                  v-for="(prod, k) in sub.products"
                  :key="k"
                  class="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {{ prod }}
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<!-- funcional -->
<script setup>
import { ref } from "vue";

const open = ref(false);
const activeCategory = ref(null);
const activeSubcategory = ref(null);

const toggleMenu = () => {
  open.value = !open.value;
  activeCategory.value = null;
  activeSubcategory.value = null;
};

const toggleCategory = (index) => {
  activeCategory.value = activeCategory.value === index ? null : index;
  activeSubcategory.value = null;
};

const hoverCategory = (index) => {
  activeCategory.value = index;
  activeSubcategory.value = null;
};

const toggleSubcategory = (index) => {
  activeSubcategory.value = activeSubcategory.value === index ? null : index;
};

const hoverSubcategory = (index) => {
  activeSubcategory.value = index;
};
const closeMenu = () => {
  open.value = false;
  activeCategory.value = null;
  activeSubcategory.value = null;
};
const closeSubMenu = () => {
  activeSubMenu.value = null;
};
const menu = ref([
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "Aisladores",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
  {
    name: "Alambres y Cables",
    subcategories: [
      {
        name: "Alambre Aislado",
        products: [
          "Alambre de cobre aislado THHN # 14",
          "Alambre de cobre aislado THHN # 12",
          "Alambre de cobre aislado THHN # 10",
          "Alambre de cobre aislado THHN # 8",
        ],
      },
      {
        name: "Alambre Desnudo",
        products: [
          "Alambre de cobre desnudo # 14",
          "Alambre de cobre denudo # 12",
          "Alambre de cobre desnudo # 10",
          "Alambre de cobre desnudo # 8",
        ],
      },
      {
        name: "Cable Aluminio Aislado Serie 8000",
        products: [
          "Cable aluminio serie 8000 # 6",
          "Cable aluminio serie 8000 # 4",
          "Cable aluminio serie 8000 # 2",
          "Cable aluminio serie 8000 # 1/0",
          "Cable aluminio serie 8000 # 2/0",
          "Cable aluminio serie 8000 # 3/0",
          "Cable aluminio serie 8000 # 4/0",
          "Cable aluminio serie 8000 # 250 mcm",
          "Cable aluminio serie 8000 # 350 mcm",
          "Cable aluminio serie 8000 # 400 mcm",
          "Cable aluminio serie 8000 # 500 mcm",
        ],
      },
      {
        name: "Cable Aluminio Desnudo ACSR",
        products: [
          "Cable ACSR # 4 Swan",
          "Cable ACSR # 2 Sparrow",
          "Cable ACSR # 1/0 Raven",
          "Cable ACSR # 2/0 Quail",
          "Cable ACSR # 4/0 Penguin",
          "Cable ACSR # 266.8 Partridge",
        ],
      },
      {
        name: "Cable Aluminio AAAC",
        products: [
          "Cable AAAC # 2 Ames",
          "Cable AAAC # 1/0 Azusa",
          "Cable AAAC # 2/0 Anahelm",
          "Cable AAAC # 4/0 Alliance",
        ],
      },
      {
        name: "Cable Multiplex Aluminio",
        products: [
          "Cable Triplex 2x4+4",
          "Cable Triplex 2x2+2",
          "Cable Triplex 2x1/0+1/0",
          "Cable Triplex 2x4/0+4/0",
          "Cable Cuadruplex 3x35+50 3x2+1/0",
          "Cable Cuadruplex 3x70+50",
          "Cable Cuadruplex 3x95+50",
          "Cable Cuadruplex 3x95+95",
        ],
      },
    ],
  },
  {
    name: "ultima cate",
    subcategories: [
      {
        name: "Aisladores Pin Porcelana",
        products: ["Aislador pin ANSI 55-4", "Aislador pin ANSI 55-5"],
      },
      {
        name: "Aisladores Carretes",
        products: ["Aislador carrete ANSI 53-3", "Aislador carrete ANSI 53-2"],
      },
      {
        name: "Aisladores Line Post",
        products: [
          "Aislador line post ANSI 57-1",
          "Aislador line post ANSI 57-2",
          "Aislador line post ANSI 57-3",
        ],
      },
    ],
  },
]);
</script>
