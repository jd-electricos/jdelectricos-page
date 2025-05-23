<template>
  <div class="overflow-x-auto p-4">
    <table
      class="min-w-full text-sm text-center bg-white border border-gray-300 rounded-lg shadow-md"
      aria-label="Tabla de parámetros técnicos del producto"
      role="table"
    >
      <thead class="bg-gray-100 text-gray-700">
        <tr>
          <th
            v-for="param in technicalParameters"
            :key="param.label"
            scope="col"
            class="px-4 py-3 border text-sm font-semibold tracking-wide"
          >
            {{ param.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-gray-50 transition-colors">
          <td
            v-for="param in technicalParameters"
            :key="param.label"
            class="px-4 py-3 border text-gray-800"
          >
            {{ param.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({
  technicalParameters: Array,
});

const columns = [
  { field: "label", header: "Especificaciones" },
  { field: "value", header: "Detalles" },
];

const products = ref([]);

const formattedProducts = computed(() =>
  props.technicalParameters?.map((param) => ({
    label: param.label,
    value: param.value,
  })) || []
);

watch(
  formattedProducts,
  (newValue) => {
    if (JSON.stringify(newValue) !== JSON.stringify(products.value)) {
      products.value = newValue;
    }
  },
  { immediate: true }
);
</script>
