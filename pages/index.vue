<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <p class="">{{ message }}</p>
    <br>
    <div>
        <li><NuxtLink to="/">home</NuxtLink></li>
        <li><NuxtLink to="/empresa-distribuidora-de-materiales-electricos-en-colombia">nosotros</NuxtLink></li>
        <li><NuxtLink to="/contacto-jd-electricos-colombia">contacto</NuxtLink></li>
        <li><NuxtLink to="/tienda-articulos-electricos">productos</NuxtLink></li>
        <li><NuxtLink to="/blog">noticias</NuxtLink></li>
    </div>
  </div>
</template>
<script setup>
const message = "home";
</script>
