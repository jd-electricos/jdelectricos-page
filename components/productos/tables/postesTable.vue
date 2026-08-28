<template>
  <div class="overflow-x-auto rounded-2xl border border-slate-200" tabindex="0" aria-label="Desplaza horizontalmente para consultar toda la tabla">
    <table
      class="min-w-[720px] w-full border-collapse bg-white text-center text-sm"
      :aria-label="`Tabla de parámetros técnicos del producto ${props.name}`"
      :title="`Tabla de parámetros técnicos del producto ${props.name}`"
      role="table"
    >
      <thead>
        <!-- Encabezado principal -->
        <tr class="bg-[#0B4168] text-white">
          <template v-for="(item, index) in data" :key="'group-' + index">
            <th
              :colspan="Array.isArray(item.value) ? item.value.length : 1"
              class="border-r border-white/15 px-4 py-4 text-xs font-bold uppercase tracking-wider"
              scope="col"
            >
              {{ item.label }}
            </th>
          </template>
        </tr>

        <!-- Subencabezados si existen -->
        <tr class="bg-[#083552] text-white">
          <template v-for="(item, index) in data" :key="'subheader-' + index">
            <template v-if="Array.isArray(item.value)">
              <th
                v-for="(sub, i) in item.value"
                :key="'sub-' + i"
                class="border-r border-white/15 px-4 py-3 text-xs font-semibold"
              >
                {{ sub.label }}
              </th>
            </template>
            <th v-else class="border-r border-white/15 px-4 py-3 text-xs"></th>
          </template>
        </tr>
      </thead>

      <!-- Cuerpo de la tabla -->
      <tbody>
        <tr class="transition-colors hover:bg-[#F1B81A]/10">
          <template v-for="(item, index) in data" :key="'row-' + index">
            <template v-if="Array.isArray(item.value)">
              <td
                v-for="(sub, i) in item.value"
                :key="'value-' + i"
                class="break-words border-r border-t border-slate-200 px-4 py-4 text-slate-700"
              >
                {{ sub.value }}
              </td>
            </template>
            <td v-else class="break-words border-r border-t border-slate-200 px-4 py-4 text-slate-700">
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
