<template>
  <div class="rounded-2xl shadow p-6 space-y-10 bg-blue-50 flex flex-col justify-center">
    <!-- Header -->
    <div class="flex items-center gap-4 bg-white rounded-xl shadow-sm p-6">
      <div class="bg-blue-100 text-blue-600 p-3 rounded-2xl">
        <Landmark class="w-6 h-6" />
      </div>
      <div>
        <h2 class="text-xl font-bold text-blue-700">Cuentas Bancarias</h2>
        <p class="text-sm text-gray-500">
          Transferencias nacionales e internacionales
        </p>
      </div>
    </div>

    <!-- Cuentas -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Bancolombia -->
      <div class="bg-white rounded-xl shadow-sm p-6 space-y-4">
        <div class="flex items-center justify-between">
          <p class="font-bold text-blue-700">BANCOLOMBIA</p>
          <a
            href="/pdfs/certificacion bancaria bancolombia enero 2026.pdf"
            target="_blank"
          >
            <FileDown class="w-5 h-5 text-gray-400 hover:text-blue-600" />
          </a>
        </div>

        <div>
          <p class="text-xs text-gray-500 uppercase">Cuenta corriente</p>
          <div class="flex items-center justify-between mt-1">
            <p class="font-semibold text-gray-800">80677474228</p>
            <Copy
              class="w-4 h-4 cursor-pointer"
              :class="
                copied === 'bancolombia'
                  ? 'text-green-600'
                  : 'text-blue-600 hover:text-blue-800'
              "
              @click="copyToClipboard('80677474228', 'bancolombia')"
            />
          </div>
        </div>
      </div>

      <!-- Banco de Occidente -->
      <div class="bg-white rounded-xl shadow-sm p-6 space-y-4">
        <div class="flex items-center justify-between gap-4">
          <p class="font-bold text-blue-700">BANCO DE OCCIDENTE</p>
          <a href="/pdfs/Certificacion Banco de occidente.pdf" target="_blank">
            <FileDown class="w-5 h-5 text-gray-400 hover:text-blue-600" />
          </a>
        </div>

        <div>
          <p class="text-xs text-gray-500 uppercase">Cuenta corriente</p>
          <div class="flex items-center justify-between mt-1">
            <p class="font-semibold text-gray-800">256083346</p>
            <Copy
              class="w-4 h-4 cursor-pointer"
              :class="
                copied === 'occidente'
                  ? 'text-green-600'
                  : 'text-blue-600 hover:text-blue-800'
              "
              @click="copyToClipboard('256083346', 'occidente')"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Titular -->
    <div
      class="flex items-start gap-4 bg-white rounded-xl p-6 border-l-4 border-blue-600"
    >
      <div class="text-blue-600">
        <Building2 class="w-6 h-6" />
      </div>
      <div>
        <p class="text-xs text-gray-500 uppercase">Titular de la cuenta</p>
        <p class="font-bold text-gray-800">JD ELÉCTRICOS E INDUSTRIA LTDA</p>
        <span
          class="inline-block mt-2 px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full"
        >
          NIT: 900.313.054-6
        </span>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="flex flex-col items-center rounded-2xl shadow p-3 bg-white">
        <p>⚡</p>
        <h3 class="font-bold">Acreditacion Rapida</h3>
        <p class="text-[10px] w-40 text-center">
          Pagos en linea se reflejan de inmediato
        </p>
      </div>
      <div class="flex flex-col items-center rounded-2xl shadow p-3 bg-white">
        <p>🔒</p>
        <h3 class="font-bold">Datos Protegidos</h3>
        <p class="text-[10px] w-40 text-center">
          Cumplimos con estandares de seguridad PCI
        </p>
      </div>
      <div class="flex flex-col items-center rounded-2xl shadow p-3 bg-white">
        <p>📄</p>
        <h3 class="font-bold">Soporte Digital</h3>
        <p class="text-[10px] w-40 text-center">
          Certificaciones bancarias disponibles
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const FileDown = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.FileDown),
);
const Landmark = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Landmark),
);
const Building2 = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Building2),
);
const Copy = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Copy),
);
const copied = ref(null);

const copyToClipboard = async (text, key) => {
  try {
    await navigator.clipboard.writeText(text);
    copied.value = key;

    setTimeout(() => {
      copied.value = null;
    }, 2000);
  } catch (err) {
    console.error("Error copiando:", err);
  }
};
</script>

<style></style>
