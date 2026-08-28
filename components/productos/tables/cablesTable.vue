<template>
  <div class="overflow-hidden rounded-2xl border border-slate-200">
    <table
      class="w-full border-collapse bg-white text-left text-sm"
      :aria-label="`Tabla de parámetros técnicos del producto ${props.name}`"
      :title="`Tabla de parámetros técnicos del producto ${props.name}`"
      role="table"
    >
      <thead class="bg-[#0B4168] text-white">
        <tr>
          <th
            scope="col"
            class="w-2/5 px-4 py-4 text-xs font-bold uppercase tracking-wider sm:px-6"
          >
            Especificación
          </th>
          <th
            scope="col"
            class="px-4 py-4 text-xs font-bold uppercase tracking-wider sm:px-6"
          >
            Detalle
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(param, index) in technicalParameters"
          :key="`${param.label}-${index}`"
          class="border-t border-slate-200 odd:bg-white even:bg-slate-50/70 hover:bg-[#F1B81A]/10"
        >
          <th
            scope="row"
            class="break-words px-4 py-4 align-top font-bold text-[#0B4168] sm:px-6"
          >
            {{ param.label }}
          </th>
          <td class="break-words px-4 py-4 leading-6 text-slate-700 sm:px-6">
            {{ formatValue(param.value) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  technicalParameters: Array,
  name: String,
});

const formatValue = (value) => {
  if (value === null || value === undefined || value === "")
    return "No especificado";
  const text = String(value);
  return text.charAt(0).toLocaleUpperCase("es-CO") + text.slice(1);
};
</script>
