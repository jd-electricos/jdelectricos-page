<template>
  <Transition name="slide">
    <div v-if="open" class="fixed inset-0 z-50 flex">
      <!-- Overlay -->
      <div class="fixed inset-0 bg-black/50" @click="closeMenu" />

      <!-- Drawer -->
      <div
        class="relative w-72 shadow-xl/30 overflow-y-auto max-h-screen bg-gray-800 text-white pt-10"
      >
        <!-- Botón cerrar -->
        <div class="absolute top-4 right-4 cursor-pointer" @click="closeMenu">
          <X />
        </div>

        <!-- CATEGORIAS -->
        <div
          class="p-5 flex flex-col"
          v-for="(i, catIndex) in menu"
          :key="i.name"
        >
          <!-- Categoria -->
          <div
            class="flex items-center justify-between font-semibold text-[15px] hover:bg-gray-700/70 rounded-lg py-3 px-3 cursor-pointer transition-all duration-200 group"
            @click="toggleCategory(catIndex)"
          >
            <span class="tracking-wide">{{ textFormat(i.name) }}</span>

            <Chevron
              class="w-4 h-4 opacity-70 transition-transform duration-300 group-hover:opacity-100"
              :class="{ 'rotate-180': openCategory === catIndex }"
            />
          </div>

          <!-- SUBCATEGORIAS -->
          <Transition name="accordion">
            <ul
              v-if="openCategory === catIndex"
              class="mt-2 ml-1 border-l border-gray-700 pl-3 space-y-1"
            >
              <li
                class="py-2"
                v-for="(sub, subIndex) in i.subcategories"
                :key="sub.name"
              >
                <!-- Subcategoria -->
                <div
                  class="flex items-center justify-between text-sm font-medium hover:bg-gray-700/60 rounded-md p-2 cursor-pointer transition-all duration-200 group"
                  @click="toggleSubcategory(catIndex, subIndex)"
                >
                  <span class="text-gray-200">{{ textFormat(sub.name) }}</span>

                  <Chevron
                    class="w-3.5 h-3.5 opacity-60 transition-transform duration-300 group-hover:opacity-100"
                    :class="{ 'rotate-180': isSubOpen(catIndex, subIndex) }"
                  />
                </div>

                <!-- PRODUCTOS -->
                <Transition name="accordion">
                  <ul v-if="isSubOpen(catIndex, subIndex)" class="disc ml-3">
                    <NuxtLink
                      v-for="prod in sub.products"
                      :key="prod.name"
                      :to="prod.slugProduct"
                    >
                      <li
                        class="pl-5 py-2 hover:bg-gray-700 rounded text-sm transition"
                      >
                        • {{ textFormat(prod.name) }}
                      </li>
                    </NuxtLink>
                  </ul>
                </Transition>
              </li>
            </ul>
          </Transition>

          <hr />
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

const openCategory = ref(null);
const openSubcategory = ref({});

const toggleCategory = (index) => {
  openCategory.value = openCategory.value === index ? null : index;
};

const toggleSubcategory = (catIndex, subIndex) => {
  const key = `${catIndex}-${subIndex}`;
  openSubcategory.value[key] = !openSubcategory.value[key];
};

const isSubOpen = (catIndex, subIndex) => {
  const key = `${catIndex}-${subIndex}`;
  return openSubcategory.value[key];
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

const textFormat = (str) => {
  return str
    .toLocaleLowerCase("es-ES")
    .split(" ")
    .map((w) => w.charAt(0).toLocaleUpperCase("es-ES") + w.slice(1))
    .join(" ");
};

onMounted(fetchMenuData);

watch(
  () => route.fullPath,
  () => {
    if (props.open) closeMenu();
  },
);
</script>

<style scoped>
/* slide menu */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* accordion animation */

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 600px;
  opacity: 1;
}
</style>
