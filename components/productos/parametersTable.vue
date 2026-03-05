<template>
  <div>
    <postesTable
      v-if="[47, 2].includes(id_category) || [4, 5, 6].includes(id_subcategory)"
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
  id_subcategory: Number,
  name: String
});
</script>