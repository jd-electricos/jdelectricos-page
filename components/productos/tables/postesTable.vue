<template>
  <div class="overflow-x-auto p-4">
    <table
      class="min-w-full text-sm text-center bg-white border border-gray-300 rounded-lg shadow-md"
      :aria-label="`Tabla de parámetros técnicos del producto ${props.name}`"
      :title="`Tabla de parámetros técnicos del producto ${props.name}`"
      role="table"
    >
      <thead>
        <!-- Encabezado principal -->
        <tr class="bg-gray-800 text-white">
          <template v-for="(item, index) in data" :key="'group-' + index">
            <th
              :colspan="Array.isArray(item.value) ? item.value.length : 1"
              class="px-4 py-3 border text-sm font-semibold tracking-wide"
              scope="col"
            >
              {{ item.label }}
            </th>
          </template>
        </tr>

        <!-- Subencabezados si existen -->
        <tr class="bg-gray-700 text-white">
          <template v-for="(item, index) in data" :key="'subheader-' + index">
            <template v-if="Array.isArray(item.value)">
              <th
                v-for="(sub, i) in item.value"
                :key="'sub-' + i"
                class="px-4 py-2 border text-xs"
              >
                {{ sub.label }}
              </th>
            </template>
            <th v-else class="px-4 py-2 border text-xs"></th>
          </template>
        </tr>
      </thead>

      <!-- Cuerpo de la tabla -->
      <tbody>
        <tr class="hover:bg-gray-50 transition-colors">
          <template v-for="(item, index) in data" :key="'row-' + index">
            <template v-if="Array.isArray(item.value)">
              <td
                v-for="(sub, i) in item.value"
                :key="'value-' + i"
                class="px-4 py-2 border text-gray-800"
              >
                {{ sub.value }}
              </td>
            </template>
            <td v-else class="px-4 py-2 border text-gray-800">
              {{ item.value }}
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  technicalParameters: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

// Formatear los datos como en el ejemplo original
const data = props.technicalParameters;
</script>
