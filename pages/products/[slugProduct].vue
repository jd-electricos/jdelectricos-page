<template>
  <div>
componente productros
componente productros
componente productros
componente productros
componente productros
componente productros
componente productros
componente productros
componente productros
componente productros
componente productros
componente productros
componente productros
componente productros
componente productros
componente productros
componente productros
{{ categorySlug }}

  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
const route = useRoute();


const categorySlug = route.params.slugProduct;


</script>

<style scoped>

</style>