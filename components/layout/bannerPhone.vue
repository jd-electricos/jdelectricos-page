<template>
  <div
    v-for="item in items"
    :key="item.label"
    class="flex flex-col items-center md:flex-row gap-5 justify-center bg-gray-700 text-white py-1"
  >
    <PhoneCall />
    <p>{{ item.label }}</p>
    <div v-for="(number, index) in item.numbers" :key="index">
      <p>
        {{ number }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { PhoneCall } from "lucide-vue-next";
import { ref } from "vue";
const items = ref([
  {
    label: "Telefono de ventas",
    numbers: [
      "PBX:(+601) 341 10 60",
      "+57 320 270 57 34",
      "+57 320 339 25 65",
      "+57 310 492 84 93",
    ],
  },
]);
</script>

<style scoped></style>
