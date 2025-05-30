<template>
  <div>
    <cablesTable
      v-if="id_category === 42"
      :technicalParameters="technicalParameters"
    />
    <postesTable
      v-else-if="id_category === 47"
      :technicalParameters="technicalParameters"
    />
  </div>
</template>

<script setup>
import cablesTable from "./tables/cablesTable.vue";
import postesTable from "./tables/postesTable.vue";
const props = defineProps({
  technicalParameters: Array,
  id_category: Number,
});
</script>
