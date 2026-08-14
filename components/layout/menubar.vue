<template>
  <nav
    class="flex justify-between items-center bg-slate-950 text-white px-4 lg:px-20 py-2 shadow-xl shadow-gray-900/50"
  >
    <!-- logo de la empresa -->
    <div>
      <NuxtImg
        src="/img/logo/logo-menu-jd.webp"
        alt="logo de jd electricos"
        class="w-16 h-16"
      />
    </div>

    <!-- Botón móvil -->
    <button
      @click="drawer = !drawer"
      class="p-6 rounded-md lg:hidden cursor-pointer"
      aria-label="Menu"
      title="Menu"
    >
      <Menu v-if="!drawer" class="w-6 h-6" />
      <X v-else class="w-6 h-6" />
    </button>

    <!-- Menú de escritorio -->
    <ul class="hidden lg:flex items-center space-x-4 gap-5">
      <li
        v-for="item in items"
        :key="item.label"
        class="relative rounded-xl"
        @mouseenter="item.isOpen = true"
        @mouseleave="item.isOpen = false"
      >
        <!-- Si es el ítem 'Productos', renderizamos el componente -->
        <menuProducts v-if="item.label === 'Productos'" />

        <!-- Otros ítems -->
        <template v-else>
          <NuxtLink :to="item.href">{{ item.label }}</NuxtLink>

          <!-- Submenú -->
          <div
            v-if="item.isOpen && item.items"
            class="absolute right-0 top-full p-4 border-white/10 bg-slate-900 rounded-md min-w-[200px] z-50"
          >
            <ul
              :style="{
                display: 'grid',
                gridTemplateColumns: `repeat(${Math.ceil(
                  item.items.length / 5,
                )}, minmax(200px, 1fr))`,
                gap: '2px',
              }"
            >
              <li
                v-for="subitem in item.items"
                :key="subitem.label"
                class="p-2"
              >
                <NuxtLink
                  :to="subitem.href"
                  class="text-sm hover:text-yellow-300 p-2 hover:bg-slate-950 rounded-md"
                >
                  • {{ subitem.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </template>
      </li>
      <li>
        <NuxtLink to="/pagos">
          <button
            class="cursor-pointer ml-4 px-6 py-2.5 bg-yellow-500 text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-yellow-500/20 flex items-center gap-2"
          >
            <DollarSign size="14" strokeWidth="3" />
            Pagos
          </button>
        </NuxtLink>
      </li>
    </ul>
  </nav>

  <!-- Fondo oscuro cuando el drawer está abierto -->
  <div
    v-if="drawer"
    class="fixed inset-0 bg-black opacity-80 z-40 lg:hidden"
    @click="closeDrawerAndSubmenu"
  ></div>

  <!-- Drawer menú móvil -->
  <nav
    class="fixed top-0 left-0 h-dvh w-[min(92vw,380px)] overflow-y-auto bg-slate-900 z-50 transition-transform duration-300 flex flex-col pt-16 shadow-2xl"
    :class="drawer ? 'translate-x-0' : '-translate-x-full'"
  >
    <button
      @click="closeDrawerAndSubmenu"
      class="absolute top-2 right-2 text-3xl text-white cursor-pointer"
    >
      &times;
    </button>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="text-white px-4 py-2 relative"
      >
        <!-- Productos móvil: dropdown de tres niveles dentro del drawer -->
        <template v-if="item.label === 'Productos'">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded-xl py-3 transition hover:bg-white/10 hover:text-yellow-300"
            :aria-expanded="mobileProductsOpen"
            @click="toggleMobileProducts"
          >
            <span class="flex items-center gap-2">
              Productos
            </span>
            <ChevronDown class="h-4 w-4 transition-transform" :class="{ 'rotate-180': mobileProductsOpen }" aria-hidden="true" />
          </button>

          <div v-if="mobileProductsOpen" class="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
            <div class="flex items-center justify-between border-b border-white/10 px-3 py-3">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Categorías</p>
              <NuxtLink to="/tienda-articulos-electricos" class="text-xs font-bold text-yellow-400" @click="closeDrawerAndSubmenu">Ver todo</NuxtLink>
            </div>

            <div v-if="mobileMenuPending" class="p-5 text-center text-sm text-slate-400">Cargando productos…</div>
            <div v-else class="max-h-[58vh] overflow-y-auto overscroll-contain p-2">
              <section v-for="(category, categoryIndex) in mobileProductMenu" :key="category.slug" class="mb-1 overflow-hidden rounded-xl" :class="{ 'bg-white/[0.05]': mobileCategoryOpen === categoryIndex }">
                <button type="button" class="mobile-menu-row" :aria-expanded="mobileCategoryOpen === categoryIndex" @click="toggleMobileCategory(categoryIndex)">
                  <span>{{ formatMenuName(category.name) }}</span>
                  <ChevronDown class="h-4 w-4 shrink-0 transition-transform" :class="{ 'rotate-180': mobileCategoryOpen === categoryIndex }" />
                </button>

                <div v-if="mobileCategoryOpen === categoryIndex" class="border-t border-white/10 px-2 pb-2 pt-2">
                  <NuxtLink :to="`/${category.slug}`" class="mobile-level-link" @click="closeDrawerAndSubmenu">
                    Ver categoría <ArrowUpRight class="h-3.5 w-3.5" />
                  </NuxtLink>

                  <section v-for="(subcategory, subcategoryIndex) in category.subCategories || []" :key="subcategory.slug" class="mt-1 overflow-hidden rounded-lg bg-slate-950/60">
                    <button type="button" class="mobile-menu-row pl-4 text-sm" :aria-expanded="mobileSubcategoryOpen === `${categoryIndex}-${subcategoryIndex}`" @click="toggleMobileSubcategory(categoryIndex, subcategoryIndex)">
                      <span>{{ formatMenuName(subcategory.name) }}</span>
                      <ChevronDown class="h-4 w-4 shrink-0 transition-transform" :class="{ 'rotate-180': mobileSubcategoryOpen === `${categoryIndex}-${subcategoryIndex}` }" />
                    </button>

                    <div v-if="mobileSubcategoryOpen === `${categoryIndex}-${subcategoryIndex}`" class="border-t border-white/10 p-2">
                      <NuxtLink :to="`/${subcategory.slug}`" class="mobile-level-link" @click="closeDrawerAndSubmenu">
                        Ver subcategoría <ArrowUpRight class="h-3.5 w-3.5" />
                      </NuxtLink>
                      <NuxtLink v-for="product in subcategory.productsInSubcategory || []" :key="product.slugProduct" :to="`/${product.slugProduct}`" class="mobile-product-link" @click="closeDrawerAndSubmenu">
                        <span>{{ formatMenuName(product.name) }}</span>
                        <ArrowRight class="h-3.5 w-3.5 shrink-0 text-yellow-400" />
                      </NuxtLink>
                      <p v-if="!subcategory.productsInSubcategory?.length" class="p-3 text-center text-xs text-slate-500">No hay productos publicados.</p>
                    </div>
                  </section>
                  <p v-if="!category.subCategories?.length" class="p-3 text-center text-xs text-slate-500">No hay subcategorías publicadas.</p>
                </div>
              </section>
              <p v-if="!mobileProductMenu.length" class="p-5 text-center text-sm text-slate-400">No fue posible cargar el catálogo.</p>
            </div>
          </div>
        </template>

        <!-- Otros ítems -->
        <template v-else>
          <div class="flex justify-between items-center cursor-pointer">
            <NuxtLink :to="item.href" @click="closeDrawerAndSubmenu">{{
              item.label
            }}</NuxtLink>
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

          <!-- Submenú lateral -->
          <div
            v-if="activeSubMenu && activeSubMenu.label === item.label"
            class="absolute left-full top-0 bg-gray-700 text-white p-4 min-w-44 rounded-r-lg shadow-lg max-h-72 overflow-y-auto z-50"
          >
            <button
              @click="closeSubMenu"
              class="absolute top-2 right-2 text-xl cursor-pointer"
            >
              &times;
            </button>
            <h2 class="text-lg font-bold mb-4">{{ activeSubMenu.label }}</h2>
            <ul>
              <li
                v-for="subitem in activeSubMenu.items"
                :key="subitem.label"
                class="list-disc"
              >
                <NuxtLink
                  :to="subitem.href"
                  class="block p-2 hover:text-yellow-300 text-sm"
                  @click="closeDrawerAndSubmenu"
                >
                  {{ subitem.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </template>
      </li>
      <li class="p-4">
        <button
          @click="$router.push('/pagos')"
          class="cursor-pointer w-full px-6 py-3 bg-yellow-500 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
        >
          <DollarSign size="14" strokeWidth="3" />
          Pagos
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import menuProducts from "./menuProducts.vue";

// import { Menu, X } from "lucide-vue-next";
const DollarSign = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.DollarSign),
);
const Menu = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Menu),
);
const X = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.X),
);
const PackageOpen = defineAsyncComponent(() => import("lucide-vue-next").then((m) => m.PackageOpen));
const ChevronDown = defineAsyncComponent(() => import("lucide-vue-next").then((m) => m.ChevronDown));
const ArrowUpRight = defineAsyncComponent(() => import("lucide-vue-next").then((m) => m.ArrowUpRight));
const ArrowRight = defineAsyncComponent(() => import("lucide-vue-next").then((m) => m.ArrowRight));
import { computed, ref } from "vue";
const drawer = ref(false);
const activeSubMenu = ref(null);
const mobileProductsOpen = ref(false);
const mobileCategoryOpen = ref(null);
const mobileSubcategoryOpen = ref(null);
const config = useRuntimeConfig();

const { data: mobileMenuData, pending: mobileMenuPending } = useFetch(
  `${config.public.apiBase}/products/menujd`,
  { key: "navigation-products", server: true, timeout: 5000, default: () => [] },
);
const mobileProductMenu = computed(() => Array.isArray(mobileMenuData.value) ? mobileMenuData.value : []);
const formatMenuName = (name = "") => name.toLocaleLowerCase("es-CO").replace(/(^|\s)\S/g, (letter) => letter.toLocaleUpperCase("es-CO"));
const toggleMobileProducts = () => {
  mobileProductsOpen.value = !mobileProductsOpen.value;
  if (!mobileProductsOpen.value) {
    mobileCategoryOpen.value = null;
    mobileSubcategoryOpen.value = null;
  }
};
const toggleMobileCategory = (index) => {
  mobileCategoryOpen.value = mobileCategoryOpen.value === index ? null : index;
  mobileSubcategoryOpen.value = null;
};
const toggleMobileSubcategory = (categoryIndex, subcategoryIndex) => {
  const key = `${categoryIndex}-${subcategoryIndex}`;
  mobileSubcategoryOpen.value = mobileSubcategoryOpen.value === key ? null : key;
};
const items = ref([
  { label: "Inicio", href: "/" },
  // {
  //   label: "Nosotros",
  //   href: "/empresa-distribuidora-de-materiales-electricos-en-colombia",
  // },
  // {
  //   label: "Certificados",
  //   items: [
  //     { label: "Aisladores", href: "/" },
  //     { label: "Cables", href: "/" },
  //     { label: "Cintas y Hebillas", href: "/" },
  //     { label: "Herrajes", href: "/" },
  //     { label: "Luminarias", href: "/" },
  //     { label: "Pararrayos", href: "/" },
  //     { label: "Postes de Concreto", href: "/" },
  //   ],
  //   isOpen: false,
  // },
  { label: "Contacto", href: "/contacto-jd-electricos-colombia" },
  {
    label: "Productos",
    href: "/tienda-articulos-electricos",
    items: [
      { label: "AISLADORES ELECTRICOS", href: "/aisladores-electricos" },
      {
        label: "ALAMBRES Y CABLES ELECTRICOS",
        href: "/alambres-y-cables-electricos",
      },
      {
        label: "ARTICULOS ELECTRICOS VARIOS",
        href: "/articulos-electricos-varios-bogota",
      },
      { label: "BREAKERS ELECTRICOS", href: "/breakers-electricos" },
      { label: "CABLOFIL", href: "/cablofil-bogota" },
      { label: "CAJAS Y TABLEROS", href: "/cajas-y-tableros-bogota" },
      { label: "CINTAS AISLANTES", href: "/cintas-aislantes-bogota" },
      { label: "CINTAS BAND IT", href: "/cintas-band-it-acero-inoxidable" },
      { label: "CONDENSADORES", href: "/bancos-de-condensadores-bogota" },
      {
        label: "CORTACIRCUITOS Y PARARRAYOS",
        href: "/cortacircuitos-y-pararrayos",
      },
      { label: "CRUCETAS Y VIGAS", href: "/crucetas-y-vigas-en-bogota" },
      { label: "HERRAJES", href: "/herrajes-electricos-en-colombia" },
      { label: "HERRAMIENTAS", href: "/herramientas-en-bogota" },
      { label: "ILUMINACION", href: "/iluminacion-en-bogota" },
      { label: "ILUMINACION LED", href: "/iluminacion-led-colombia" },
      { label: "INDUSTRIA", href: "/maniobra-e-industria-en-bogota" },
      { label: "INTERRUPTORES", href: "/interruptores-y-tomas-en-bogota" },
      { label: "MEDIDORES", href: "/medidores-de-energia-en-bogota" },
      { label: "MOTORES ELECTRICOS", href: "/motores-electricos-en-bogota" },
      { label: "PARARRAYOS", href: "/cortacircuitos-y-pararrayos" },
      {
        label: "PREMOLDEADOS",
        href: "/accesorios-premoldeados-mtension-bogota",
      },
      { label: "POSTES DE CONCRETO", href: "/postes-de-concreto-colombia" },
      { label: "promociones", href: "/promociones" },
      {
        label: "PROTECCION",
        href: "/apantallamiento-para-proteccion-contra-rayos-bogota",
      },
      {
        label: "PUESTA A TIERRA",
        href: "/accesorios-para-puesta-a-tierra-bogota",
      },
      { label: "RECONECTADOR", href: "/reconectadores-reclosers-en-bogota" },
      { label: "RED ESTRUCTURADA", href: "/redes-estructuradas-en-bogota" },
      { label: "RED TRENZADA", href: "/red-trenzada-en-bogota" },
      {
        label: "SECTOR PETROLEO",
        href: "/materiales-sector-petroleo-en-bogota",
      },
      { label: "SEGURIDAD INDUSTRIAL", href: "/seguridad-industrial" },
      { label: "SOLDADURA EXOTERMICA", href: "/soldadura-exotermica" },
      {
        label: "SUBESTACIONES",
        href: "/subestaciones-capsuladas-y-celdas-en-bogota",
      },
      { label: "TRANSFORMADORES", href: "/transformadores-en-bogota" },
      {
        label: "TERMINALES PREMOLDEADAS",
        href: "/terminales-premoldeadas-en-bogota",
      },
      { label: "TUBERIA", href: "/tuberia-metalica-y-pvc-en-bogota" },
    ],
    isOpen: false,
  },
  {
    label: "Catálogo",
    href: "/catalogo-materiales-electricos",
  },
  {
    label: "Información",
    href: "/",
    items: [
      { label: "Pagos ", href: "/pagos" },
      {
        label: "Nosotros",
        href: "/empresa-distribuidora-de-materiales-electricos-en-colombia",
      },
      { label: "Devoluciones", href: "/devoluciones" },
    ],
    isOpen: false,
  },

  {
    label: "Noticias",
    href: "/blog",
    items: [
      { label: "Cables Eléctricos", href: "/blog-cables-electricos" },
      { label: "Herrajes Eléctricos", href: "/blog-herrajes-electricos" },
      { label: "Materiales Eléctricos", href: "/blog-materiales-electricos" },
      { label: "Productos Eléctricos", href: "/blog-productos-electricos" },
      { label: "Blog", href: "/blog" },
      { label: "News", href: "/news" },
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
const closeDrawerAndSubmenu = () => {
  drawer.value = false;
  mobileProductsOpen.value = false;
  mobileCategoryOpen.value = null;
  mobileSubcategoryOpen.value = null;
  closeSubMenu();
};

function closeDrawerOfChild(value) {
  drawer.value = value;
}
</script>

<style scoped>
.mobile-menu-row {
  display: flex;
  width: 100%;
  min-height: 2.75rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  border-radius: 0.75rem;
  padding: 0.65rem 0.75rem;
  text-align: left;
  font-size: 0.8125rem;
  font-weight: 700;
  color: rgb(226 232 240);
}
.mobile-menu-row:hover,
.mobile-menu-row:focus-visible {
  background: rgb(250 204 21);
  color: rgb(2 6 23);
  outline: none;
}
.mobile-level-link,
.mobile-product-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 0.65rem;
  padding: 0.6rem 0.75rem;
}
.mobile-level-link {
  background: rgb(255 255 255 / 0.06);
  color: rgb(250 204 21);
  font-size: 0.75rem;
  font-weight: 700;
}
.mobile-product-link {
  margin-top: 0.2rem;
  padding-left: 1rem;
  color: rgb(203 213 225);
  font-size: 0.75rem;
  line-height: 1.15rem;
}
.mobile-product-link:hover,
.mobile-product-link:focus-visible {
  background: rgb(255 255 255 / 0.08);
  color: white;
  outline: none;
}
</style>
