<template>
  <div
    ref="menuRoot"
    class="products-menu lg:relative"
    @mouseenter="openDesktop"
    @mouseleave="scheduleClose"
  >
    <button
      type="button"
      class="flex w-full items-center justify-between gap-2 rounded-xl py-2.5 text-white transition  hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 lg:w-auto"
      :aria-expanded="open"
      aria-controls="products-dropdown"
      @click="toggleMenu"
      @keydown.esc="closeMenu"
    >
      <span class="flex items-center gap-2"> Productos </span>
      <ChevronDown
        class="h-4 w-4 transition-transform duration-200"
        :class="{ 'rotate-180': open }"
        aria-hidden="true"
      />
    </button>

    <Transition name="dropdown">
      <div
        v-if="open"
        id="products-dropdown"
        class="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50 lg:absolute lg:-left-150 lg:top-full lg:z-[70] lg:mt-3 lg:w-[min(880px,calc(100vw-3rem))]"
        @mouseenter="cancelClose"
        @mouseleave="scheduleClose"
      >
        <header
          class="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-4 sm:px-5"
        >
          <div>
            <p class="font-bold text-white">Catálogo de productos eléctricos</p>
            <p class="mt-0.5 text-xs text-slate-400">
              Categorías, subcategorías y productos
            </p>
          </div>
          <NuxtLink
            to="/tienda-articulos-electricos"
            class="rounded-lg bg-yellow-400 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-yellow-300"
            @click="selectLink"
          >
            Ver catálogo
          </NuxtLink>
        </header>

        <div
          v-if="pending"
          class="grid h-80 place-items-center text-sm text-slate-400"
        >
          Cargando catálogo…
        </div>

        <!-- Escritorio: los tres niveles permanecen visibles. -->
        <div
          v-else-if="categories.length"
          class="hidden h-[460px] grid-cols-[0.9fr_1fr_1.2fr] divide-x divide-white/10 lg:grid"
        >
          <MenuColumn title="Categorías" :count="categories.length">
            <button
              v-for="(category, index) in categories"
              :key="category.slug"
              type="button"
              class="menu-row"
              :class="{ 'menu-row-active': activeCategoryIndex === index }"
              @mouseenter="selectCategory(index)"
              @focus="selectCategory(index)"
              @click="selectCategory(index)"
            >
              <span>{{ formatName(category.name) }}</span>
              <ChevronRight class="h-4 w-4 shrink-0" aria-hidden="true" />
            </button>
          </MenuColumn>

          <MenuColumn title="Subcategorías" :count="subcategories.length">
            <NuxtLink
              v-if="activeCategory"
              :to="`/${activeCategory.slug}`"
              class="level-link"
              @click="selectLink"
            >
              Ver {{ formatName(activeCategory.name) }}
              <ArrowUpRight class="h-3.5 w-3.5" />
            </NuxtLink>
            <button
              v-for="(subcategory, index) in subcategories"
              :key="subcategory.slug"
              type="button"
              class="menu-row"
              :class="{ 'menu-row-active': activeSubcategoryIndex === index }"
              @mouseenter="selectSubcategory(index)"
              @focus="selectSubcategory(index)"
              @click="selectSubcategory(index)"
            >
              <span>{{ formatName(subcategory.name) }}</span>
              <ChevronRight class="h-4 w-4 shrink-0" aria-hidden="true" />
            </button>
            <p v-if="!subcategories.length" class="empty-message">
              Esta categoría no tiene subcategorías.
            </p>
          </MenuColumn>

          <MenuColumn title="Productos" :count="products.length">
            <NuxtLink
              v-if="activeSubcategory"
              :to="`/${activeSubcategory.slug}`"
              class="level-link"
              @click="selectLink"
            >
              Ver {{ formatName(activeSubcategory.name) }}
              <ArrowUpRight class="h-3.5 w-3.5" />
            </NuxtLink>
            <NuxtLink
              v-for="product in products"
              :key="product.slugProduct"
              :to="`/${product.slugProduct}`"
              class="menu-row group"
              @click="selectLink"
            >
              <span>{{ formatName(product.name) }}</span>
              <ArrowRight
                class="h-4 w-4 shrink-0 text-yellow-400 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                aria-hidden="true"
              />
            </NuxtLink>
            <p v-if="!products.length" class="empty-message">
              Selecciona una subcategoría para ver sus productos.
            </p>
          </MenuColumn>
        </div>

        <!-- Móvil: dropdown jerárquico completo dentro del drawer. -->
        <div
          v-else-if="categories.length"
          class="max-h-[62vh] overflow-y-auto overscroll-contain p-2 lg:hidden"
        >
          <p
            class="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            Categorías
          </p>
          <section
            v-for="(category, categoryIndex) in categories"
            :key="category.slug"
            class="mb-1 overflow-hidden rounded-xl border border-transparent"
            :class="{
              'border-white/10 bg-white/[0.035]':
                expandedCategoryIndex === categoryIndex,
            }"
          >
            <button
              type="button"
              class="menu-row"
              :aria-expanded="expandedCategoryIndex === categoryIndex"
              @click="toggleMobileCategory(categoryIndex)"
            >
              <span>{{ formatName(category.name) }}</span>
              <ChevronDown
                class="h-4 w-4 shrink-0 transition-transform"
                :class="{
                  'rotate-180': expandedCategoryIndex === categoryIndex,
                }"
              />
            </button>

            <div
              v-if="expandedCategoryIndex === categoryIndex"
              class="border-t border-white/10 px-2 pb-2 pt-2"
            >
              <NuxtLink
                :to="`/${category.slug}`"
                class="level-link mb-2"
                @click="selectLink"
              >
                Ver toda la categoría <ArrowUpRight class="h-3.5 w-3.5" />
              </NuxtLink>

              <p
                class="px-2 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-500"
              >
                Subcategorías
              </p>
              <section
                v-for="(
                  subcategory, subcategoryIndex
                ) in category.subCategories || []"
                :key="subcategory.slug"
                class="mb-1 overflow-hidden rounded-lg bg-slate-950/40"
              >
                <button
                  type="button"
                  class="menu-row pl-4"
                  :aria-expanded="
                    expandedSubcategoryKey ===
                    `${categoryIndex}-${subcategoryIndex}`
                  "
                  @click="
                    toggleMobileSubcategory(categoryIndex, subcategoryIndex)
                  "
                >
                  <span>{{ formatName(subcategory.name) }}</span>
                  <ChevronDown
                    class="h-4 w-4 shrink-0 transition-transform"
                    :class="{
                      'rotate-180':
                        expandedSubcategoryKey ===
                        `${categoryIndex}-${subcategoryIndex}`,
                    }"
                  />
                </button>

                <div
                  v-if="
                    expandedSubcategoryKey ===
                    `${categoryIndex}-${subcategoryIndex}`
                  "
                  class="border-t border-white/10 bg-slate-950/60 p-2"
                >
                  <NuxtLink
                    :to="`/${subcategory.slug}`"
                    class="level-link mb-2"
                    @click="selectLink"
                  >
                    Ver toda la subcategoría
                    <ArrowUpRight class="h-3.5 w-3.5" />
                  </NuxtLink>
                  <NuxtLink
                    v-for="product in subcategory.productsInSubcategory || []"
                    :key="product.slugProduct"
                    :to="`/${product.slugProduct}`"
                    class="menu-row pl-5 text-xs"
                    @click="selectLink"
                  >
                    <span>{{ formatName(product.name) }}</span
                    ><ArrowRight class="h-3.5 w-3.5 shrink-0 text-yellow-400" />
                  </NuxtLink>
                  <p
                    v-if="!subcategory.productsInSubcategory?.length"
                    class="empty-message"
                  >
                    No hay productos publicados.
                  </p>
                </div>
              </section>
              <p v-if="!category.subCategories?.length" class="empty-message">
                Esta categoría no tiene subcategorías.
              </p>
            </div>
          </section>
        </div>

        <p v-else class="p-8 text-center text-sm text-slate-400">
          No fue posible cargar el catálogo.
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import {
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { useRoute } from "vue-router";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  PackageOpen,
} from "lucide-vue-next";

const MenuColumn = defineComponent({
  props: { title: String, count: Number },
  setup(props, { slots }) {
    return () =>
      h("section", { class: "min-w-0 overflow-hidden" }, [
        h(
          "div",
          {
            class:
              "flex items-center justify-between border-b border-white/10 px-4 py-3",
          },
          [
            h(
              "h3",
              {
                class:
                  "text-xs font-bold uppercase tracking-wider text-slate-400",
              },
              props.title,
            ),
            h(
              "span",
              {
                class:
                  "rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-slate-500",
              },
              String(props.count ?? 0),
            ),
          ],
        ),
        h(
          "div",
          { class: "h-[414px] overflow-y-auto overscroll-contain p-2" },
          slots.default?.(),
        ),
      ]);
  },
});

const emit = defineEmits(["closeDrawer"]);
const config = useRuntimeConfig();
const route = useRoute();
const open = ref(false);
const menuRoot = ref(null);
const activeCategoryIndex = ref(0);
const activeSubcategoryIndex = ref(0);
const expandedCategoryIndex = ref(null);
const expandedSubcategoryKey = ref(null);
let closeTimer;

const { data, pending } = useFetch(`${config.public.apiBase}/products/menujd`, {
  key: "navigation-products",
  server: true,
  timeout: 5000,
  default: () => [],
});

const categories = computed(() =>
  Array.isArray(data.value) ? data.value : [],
);
const activeCategory = computed(
  () => categories.value[activeCategoryIndex.value] ?? null,
);
const subcategories = computed(() => activeCategory.value?.subCategories ?? []);
const activeSubcategory = computed(
  () => subcategories.value[activeSubcategoryIndex.value] ?? null,
);
const products = computed(
  () => activeSubcategory.value?.productsInSubcategory ?? [],
);

const formatName = (name = "") =>
  name
    .toLocaleLowerCase("es-CO")
    .replace(/(^|\s)\S/g, (letter) => letter.toLocaleUpperCase("es-CO"));
const resetLevels = () => {
  activeCategoryIndex.value = 0;
  activeSubcategoryIndex.value = 0;
  expandedCategoryIndex.value = null;
  expandedSubcategoryKey.value = null;
};
const toggleMenu = () => {
  open.value = !open.value;
  if (open.value) resetLevels();
};
const closeMenu = () => {
  open.value = false;
  expandedCategoryIndex.value = null;
  expandedSubcategoryKey.value = null;
};
const selectLink = () => {
  closeMenu();
  emit("closeDrawer", false);
};
const selectCategory = (index) => {
  activeCategoryIndex.value = index;
  activeSubcategoryIndex.value = 0;
};
const selectSubcategory = (index) => {
  activeSubcategoryIndex.value = index;
};
const toggleMobileCategory = (index) => {
  expandedCategoryIndex.value =
    expandedCategoryIndex.value === index ? null : index;
  expandedSubcategoryKey.value = null;
};
const toggleMobileSubcategory = (categoryIndex, subcategoryIndex) => {
  const key = `${categoryIndex}-${subcategoryIndex}`;
  expandedSubcategoryKey.value =
    expandedSubcategoryKey.value === key ? null : key;
};
const openDesktop = () => {
  if (window.innerWidth >= 1024) {
    clearTimeout(closeTimer);
    open.value = true;
  }
};
const scheduleClose = () => {
  if (window.innerWidth >= 1024) closeTimer = setTimeout(closeMenu, 220);
};
const cancelClose = () => clearTimeout(closeTimer);
const handleOutside = (event) => {
  if (open.value && menuRoot.value && !menuRoot.value.contains(event.target))
    closeMenu();
};

watch(() => route.fullPath, closeMenu);
watch(categories, () => resetLevels());
onMounted(() => document.addEventListener("click", handleOutside));
onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutside);
  clearTimeout(closeTimer);
});
</script>

<style scoped>
.menu-row {
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
  font-weight: 600;
  line-height: 1.25rem;
  color: rgb(203 213 225);
  transition:
    background-color 150ms ease,
    color 150ms ease;
}
.menu-row:hover,
.menu-row:focus-visible,
.menu-row-active {
  background: rgb(250 204 21);
  color: rgb(2 6 23);
  outline: none;
}
.level-link {
  display: flex;
  min-height: 2.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 0.75rem;
  background: rgb(255 255 255 / 0.055);
  padding: 0.6rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: rgb(250 204 21);
}
.level-link:hover,
.level-link:focus-visible {
  background: rgb(255 255 255 / 0.1);
  outline: none;
}
.empty-message {
  padding: 1.5rem 0.75rem;
  text-align: center;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: rgb(100 116 139);
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 160ms ease,
    transform 160ms ease;
  transform-origin: top;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.985);
}
</style>
