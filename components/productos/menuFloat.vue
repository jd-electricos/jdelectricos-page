<template>
  <Transition name="slide">
    <div v-if="open" class="fixed inset-0 z-50 flex">
      <!-- Overlay -->
      <div
        class="fixed inset-0 bg-black/60 backdrop-blur-[2px] transition"
        @click="closeMenu"
      />

      <!-- Drawer -->
      <div
        class="relative w-80 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl border-r border-gray-700/50 flex flex-col"
      >
        <!-- HEADER -->
        <div
          class="sticky top-0 z-10 bg-gray-900/90 backdrop-blur border-b border-white/10 px-5 py-4 flex justify-between items-center"
        >
          <h2 class="text-lg font-semibold tracking-wide">Categorías</h2>

          <div
            class="p-2 rounded-full hover:bg-white/10 transition cursor-pointer"
            @click="closeMenu"
          >
            <X class="w-5 h-5" />
          </div>
        </div>

        <!-- BUSCADOR -->
        <div class="px-4 py-3 border-b border-white/5">
          <input
            v-model="search"
            type="text"
            placeholder="Buscar producto..."
            class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- CONTENIDO SCROLL -->
        <div class="overflow-y-auto flex-1 px-2 py-3">
          <div
            v-for="(i, catIndex) in filteredMenu"
            :key="i.name"
            class="mb-2"
          >
            <!-- CATEGORIA -->
            <div
              class="flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer 
              transition-all duration-300 group
              hover:bg-white/10 hover:shadow-md hover:shadow-black/20
              active:scale-[0.98]"
              :class="openCategory === catIndex ? 'bg-white/10 shadow-inner' : ''"
              @click="toggleCategory(catIndex)"
            >
              <span class="text-sm font-semibold tracking-wide">
                {{ textFormat(i.name) }}
              </span>

              <Chevron
                class="w-4 h-4 opacity-60 transition-all duration-300"
                :class="{ 'rotate-180': openCategory === catIndex }"
              />
            </div>

            <!-- SUBCATEGORIAS -->
            <Transition name="accordion">
              <ul
                v-if="openCategory === catIndex"
                class="mt-2 ml-2 border-l border-gray-600/40 pl-3 space-y-1"
              >
                <li
                  v-for="(sub, subIndex) in i.subcategories"
                  :key="sub.name"
                >
                  <!-- SUBCATEGORIA -->
                  <div
                    class="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer
                    transition-all duration-200
                    hover:bg-white/5 hover:pl-4"
                    :class="isSubOpen(catIndex, subIndex) ? 'bg-white/5' : ''"
                    @click="toggleSubcategory(catIndex, subIndex)"
                  >
                    <span class="text-sm text-gray-300">
                      {{ textFormat(sub.name) }}
                    </span>

                    <Chevron
                      class="w-3.5 h-3.5 opacity-50 transition-transform duration-300"
                      :class="{ 'rotate-180': isSubOpen(catIndex, subIndex) }"
                    />
                  </div>

                  <!-- PRODUCTOS -->
                  <Transition name="accordion">
                    <ul v-if="isSubOpen(catIndex, subIndex)" class="ml-2">
                      <NuxtLink
                        v-for="prod in sub.products"
                        :key="prod.name"
                        :to="prod.slugProduct"
                      >
                        <li
                          class="flex items-center gap-2 pl-6 pr-2 py-2 rounded-md
                          text-sm text-gray-400 cursor-pointer
                          transition-all duration-200
                          hover:bg-white/5 hover:text-white hover:pl-7"
                        >
                          <span class="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                          {{ textFormat(prod.name) }}
                        </li>
                      </NuxtLink>
                    </ul>
                  </Transition>
                </li>
              </ul>
            </Transition>

            <hr class="border-white/5 my-2" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useRoute } from "vue-router";

const X = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.X),
);

const Chevron = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.ChevronDown),
);

const config = useRuntimeConfig();
const route = useRoute();

const menu = ref([]);
const search = ref("");

const openCategory = ref(null);
const openSubcategory = ref(null);

const toggleCategory = (index) => {
  if (openCategory.value === index) {
    openCategory.value = null;
    openSubcategory.value = null;
  } else {
    openCategory.value = index;
    openSubcategory.value = null;
  }
};

const toggleSubcategory = (catIndex, subIndex) => {
  const key = `${catIndex}-${subIndex}`;
  openSubcategory.value =
    openSubcategory.value === key ? null : key;
};

const isSubOpen = (catIndex, subIndex) => {
  return openSubcategory.value === `${catIndex}-${subIndex}`;
};

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const closeMenu = () => {
  emit("close");
};

const fetchMenuData = async () => {
  try {
    const response = await fetch(`${config.public.apiBase}/products/menujd`);
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

const filteredMenu = computed(() => {
  if (!search.value) return menu.value;

  return menu.value
    .map((cat) => ({
      ...cat,
      subcategories: cat.subcategories
        .map((sub) => ({
          ...sub,
          products: sub.products.filter((p) =>
            p.name.toLowerCase().includes(search.value.toLowerCase())
          ),
        }))
        .filter((sub) => sub.products.length),
    }))
    .filter((cat) => cat.subcategories.length);
});

const textFormat = (str) => {
  return str
    .toLocaleLowerCase("es-ES")
    .split(" ")
    .map((w) => w.charAt(0).toLocaleUpperCase("es-ES") + w.slice(1))
    .join(" ");
};

onMounted(fetchMenuData);

watch(
  () => props.open,
  (val) => {
    if (val) {
      openCategory.value = null;
      openSubcategory.value = null;
      search.value = "";
    }
  },
);

watch(
  () => route.fullPath,
  () => {
    if (props.open) closeMenu();
  },
);
</script>

<style scoped>
/* SLIDE */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* ACCORDION */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-5px);
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}

/* SCROLLBAR */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
</style>