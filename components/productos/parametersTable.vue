<template>
  <div>
    <cablesTable
      v-if="id_category === 42"
      :technicalParameters="technicalParameters"
      :name="name"
    />
    <postesTable
      v-else-if="id_category === 47"
      :technicalParameters="technicalParameters"
      :name="name"
    />
  </div>
  <cablesTable
      v-if="id_category === 48 || 49 || 50 || 51 || 52"
      :technicalParameters="technicalParameters"
      :name="name"
    />
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
