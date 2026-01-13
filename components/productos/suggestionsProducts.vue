<template>
  <section class="flex flex-col items-center gap-6 overflow-hidden">
    <h3 class="text-2xl md:text-4xl font-bold">Productos Similares</h3>

    <!-- VIEWPORT -->
    <div class="relative w-full overflow-hidden">
      <!-- TRACK -->
      <div class="flex flex-nowrap gap-4 animate-carousel carousel-track">
        <div
          v-for="product in duplicatedProducts"
          :key="product.uid"
          class="w-48 shrink-0 flex flex-col items-center justify-between border-2 border-gray-600 rounded-2xl hover:border-yellow-500 hover:bg-white gap-3 p-4"
        >
          <NuxtLink :to="`/${product.slugProduct}`">
            <NuxtImg
              :src="product.previewImg"
              :alt="product.name"
              class="w-40 rounded-2xl hover:mask-b-from-50%"
              width="160"
              height="160"
            />
          </NuxtLink>

          <div class="flex flex-col items-center gap-3 text-center">
            <NuxtLink :to="`/${product.slugProduct}`">
              <h3 class="font-bold hover:text-gray-500">
                {{ product.name }}
              </h3>
            </NuxtLink>
            <NuxtLink :to="`/${product.slugProduct}`">
              <p class="font-semibold hover:text-gray-500">Saber más</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  dataSlug: String,
});

const products = ref([]);

const duplicatedProducts = computed(() =>
  [...products.value, ...products.value].map((p, i) => ({
    ...p,
    uid: `${p.id}-${i}`,
  }))
);
const fetchData = async () => {
  const response = await fetch(
    `https://clownfish-app-xjood.ondigitalocean.app/api/subcategories/slug/${props.dataSlug}`
  );
  const data = await response.json();
  products.value = data.productsInSubcategory;
};
onMounted(fetchData);
</script>
<style scoped>
@keyframes carousel {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-80%);
  }
}
.animate-carousel {
  animation: carousel 20s linear infinite;
}
/* PAUSA cuando el mouse está sobre cualquier card */
.carousel-track:hover {
  animation-play-state: paused;
}
</style>