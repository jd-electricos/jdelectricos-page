<template>
  <section>
    <!-- Imagen para escritorio -->
    <NuxtImg
      :src="desktopBanner"
      alt="Promoción JD Eléctricos Materiales Eléctricos"
      class="hidden md:block w-full h-auto"
      :class="roundedStyle"
      width="100%"
      height="400"
      loading="lazy"
      decoding="async"
      format="webp"
    />
    <!-- Imagen para móvil -->
    <NuxtImg
      :src="mobileBanner"
      alt="Promoción JD Eléctricos Materiales Eléctricos"
      class="block md:hidden w-full h-auto"
      :class="roundedStyle"
      width="767"
      height="600"
      loading="lazy"
      decoding="async"
      format="webp"
    />
  </section>
</template>

<script setup>
import desktopBanner from "/img/desktop/aislador-ansi-54-4-promo-desktop.webp";
import mobileBanner from "/img/mobile/aislador-ansi-54-4-promo-mobile.webp";
defineProps({
  roundedStyle: String,
});
</script>

<style scoped></style>
