<template>
  <div>
    <div class="fixed w-full z-10">
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
