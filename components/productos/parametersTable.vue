<template>
  <div>
    <postesTable
      v-if="id_category === 47 || 2"
      :technicalParameters="technicalParameters"
      :name="name"
    />
    <cablesTable
      v-else
      :technicalParameters="technicalParameters"
      :name="name"
    />
  </div>
</template>

<script setup>
import cablesTable from "./tables/cablesTable.vue";
import postesTable from "./tables/postesTable.vue";
const props = defineProps({
  technicalParameters: Array,
  id_category: Number,
  name: String
});
</script>