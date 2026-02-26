<template>
  <Transition name="slide">
    <div v-if="open" class="fixed inset-0 z-50 flex">
      <!-- Overlay -->
      <div class="fixed inset-0 bg-black/50" @click="closeMenu" />

      <!-- Drawer -->
      <div
        class="relative w-96 shadow-xl/30 overflow-y-auto max-h-screen bg-gray-800 text-white pt-10"
      >
        <!-- Botón cerrar -->
        <div class="absolute top-4 right-4 cursor-pointer" @click="closeMenu">
          <X />
        </div>

        <div class="p-5 flex flex-col" v-for="i in menu" :key="i.name">
          <NuxtLink :to="i.slug">
            <p class="text-xl font-bold hover:bg-gray-500 rounded py-3">
              {{ textFormat(i.name) }}
            </p>
          </NuxtLink>

          <ul>
            <li class="py-2" v-for="sub in i.subcategories" :key="sub.name">
              <NuxtLink :to="sub.slug">
                <p class="font-bold hover:bg-gray-600 rounded p-2 text">
                  {{ textFormat(sub.name) }}
                </p>
              </NuxtLink>

              <ul class="disc" v-for="prod in sub.products" :key="prod.name">
                <NuxtLink :to="prod.slugProduct">
                  <li class="pl-5 py-2 hover:bg-gray-700 rounded text-sm">
                    • {{ textFormat(prod.name) }}
                  </li>
                </NuxtLink>
              </ul>
            </li>
          </ul>
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

const config = useRuntimeConfig();
const route = useRoute();

const menu = ref([]);

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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
