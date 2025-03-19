<template>
  <div>
    <div class="w-full z-10 lg:fixed absolute top-0">
      <bannerPhone />
      <menubar />
    </div>
    <NuxtPage />
  </div>
</template>
<script setup>
import menubar from "../components/layout/menubar.vue";
import bannerPhone from "../components/layout/bannerPhone.vue";
</script>
