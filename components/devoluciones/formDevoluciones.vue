<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-4xl mx-auto px-6">
      <div
        class="bg-gray-800 rounded-[2.5rem] p-12 md:p-20 shadow-2xl relative overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-br-full"
        ></div>

        <div class="relative z-10">

          <!-- PASO 3 -->
          <div class="text-center mb-12">
            <span
              class="text-2xl md:text-2xl font-bold text-white mb-6 font-serif underline decoration-gray-500 decoration-4"
            >
              Paso 3
            </span>

            <h2
              class="text-3xl md:text-4xl font-bold text-white mt-4 mb-4 font-serif"
            >
              Enviar formulario de devolución
            </h2>

            <p class="text-gray-400 text-lg max-w-md mx-auto">
              Adjunta el formato que descargaste y completa la información
              solicitada para procesar tu solicitud de devolución.
            </p>
          </div>

          <!-- FORM -->
          <form @submit.prevent="handleSubmit" class="space-y-8">

            <!-- Archivo -->
            <div>
              <label class="block text-gray-300 mb-2 font-semibold">
                Adjuntar archivo
              </label>

              <input
                type="file"
                @change="handleFile"
                accept=".pdf,.jpg,.jpeg,.png"
                class="w-full bg-gray-700 text-white p-4 rounded-xl border border-gray-600 focus:outline-none focus:border-white"
              />

              <p class="text-yellow-400 text-sm mt-2">
                El archivo no debe superar los 5 MB. Formatos permitidos: PDF, JPG, PNG.
              </p>

              <p v-if="form.file" class="text-green-400 text-sm mt-1">
                Archivo seleccionado:
                {{ form.file.name }}
                ({{ (form.file.size / 1024 / 1024).toFixed(2) }} MB)
              </p>

              <p v-if="errors.file" class="text-red-400 text-sm mt-1">
                {{ errors.file }}
              </p>
            </div>

            <!-- Asesor -->
            <div>
              <label class="block text-gray-300 mb-2 font-semibold">
                Asesor
              </label>

              <select
                v-model="form.asesor"
                class="w-full bg-gray-700 text-white p-4 rounded-xl border border-gray-600 focus:outline-none focus:border-white"
              >
                <option disabled value="">Selecciona un asesor</option>
                <option v-for="a in asesores" :key="a">
                  {{ a }}
                </option>
              </select>

              <p v-if="errors.asesor" class="text-red-400 text-sm mt-1">
                {{ errors.asesor }}
              </p>
            </div>

            <!-- Número de factura -->
            <div>
              <label class="block text-gray-300 mb-2 font-semibold">
                Número de factura
              </label>

              <input
                v-model="form.factura"
                type="text"
                placeholder="Ej: FAC-12345"
                class="w-full bg-gray-700 text-white p-4 rounded-xl border border-gray-600 focus:outline-none focus:border-white"
              />

              <p v-if="errors.factura" class="text-red-400 text-sm mt-1">
                {{ errors.factura }}
              </p>
            </div>

            <!-- Empresa -->
            <div>
              <label class="block text-gray-300 mb-2 font-semibold">
                Nombre de la empresa
              </label>

              <input
                v-model="form.empresa"
                type="text"
                placeholder="Nombre de la empresa"
                class="w-full bg-gray-700 text-white p-4 rounded-xl border border-gray-600 focus:outline-none focus:border-white"
              />

              <p v-if="errors.empresa" class="text-red-400 text-sm mt-1">
                {{ errors.empresa }}
              </p>
            </div>

            <!-- Asunto -->
            <div>
              <label class="block text-gray-300 mb-2 font-semibold">
                Asunto
              </label>

              <input
                v-model="form.asunto"
                type="text"
                placeholder="Motivo de la devolución"
                class="w-full bg-gray-700 text-white p-4 rounded-xl border border-gray-600 focus:outline-none focus:border-white"
              />

              <p v-if="errors.asunto" class="text-red-400 text-sm mt-1">
                {{ errors.asunto }}
              </p>
            </div>

            <!-- Botón -->
            <div class="text-center pt-4">
              <button
                type="submit"
                :disabled="isSending"
                :class="[
                  'group relative inline-flex items-center justify-center px-10 py-5 font-bold text-gray-800 transition-all duration-200 bg-white rounded-2xl',
                  isSending
                    ? 'opacity-70 cursor-wait'
                    : 'hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-lg',
                ]"
              >
                <span v-if="isSending" class="flex items-center">
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>

                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 
                      0 0 5.373 0 12h4zm2 5.291A7.962 
                      7.962 0 014 12H0c0 3.042 
                      1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>

                  Enviando...
                </span>

                <span v-else> Enviar Solicitud </span>
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const config = useRuntimeConfig();

const isSending = ref(false);

const asesores = [
  "Carolina Cerquera",
  "Dianie Novoa",
  "Esteban Ramirez",
  "Juan Moreno",
  "Nicolas Bernal",
  "William Camelo",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const allowedTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png"
];

const form = ref({
  asesor: "",
  factura: "",
  empresa: "",
  asunto: "",
  file: null,
});

const errors = ref({});

const handleFile = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  if (!allowedTypes.includes(file.type)) {
    errors.value.file = "Solo se permiten archivos PDF, JPG o PNG";
    form.value.file = null;
    e.target.value = "";
    return;
  }

  if (file.size > MAX_FILE_SIZE) {
    errors.value.file = "El archivo no debe superar los 5 MB";
    form.value.file = null;
    e.target.value = "";
    return;
  }

  errors.value.file = "";
  form.value.file = file;
};

const validate = () => {
  errors.value = {};

  if (!form.value.file) errors.value.file = "Debes adjuntar un archivo";
  if (!form.value.asesor) errors.value.asesor = "Selecciona un asesor";
  if (!form.value.factura)
    errors.value.factura = "Ingresa el número de factura";
  if (!form.value.empresa)
    errors.value.empresa = "Ingresa el nombre de la empresa";
  if (!form.value.asunto)
    errors.value.asunto = "Ingresa un asunto";

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = async () => {
  if (!validate()) return;

  isSending.value = true;

  try {
    const data = new FormData();

    data.append("file", form.value.file);
    data.append("asesor", form.value.asesor);
    data.append("factura", form.value.factura);
    data.append("empresa", form.value.empresa);
    data.append("asunto", form.value.asunto);

    await fetch(`${config.public.apiBasesDos}/email/send-return-email`, {
      method: "POST",
      body: data,
    });

    alert("Solicitud enviada correctamente");

  } catch (error) {

    console.log(error);
    alert("Ocurrió un error al enviar el formulario");

  }

  isSending.value = false;
};
</script>