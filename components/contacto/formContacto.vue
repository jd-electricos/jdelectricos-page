<template>
  <div class="text-white max-w-4xl mx-auto py-16 px-6">
    <!-- Título -->
    <h1 class="lg:text-6xl text-4xl font-bold font-serif text-center pb-12">
      Contacto JD Eléctricos
    </h1>

    <div
      class="flex flex-col lg:flex-row justify-between p-5 gap-12 border-[1px] rounded-2xl border-gray-600"
    >
      <!-- Información de Contacto -->
      <div class="lg:w-1/2 space-y-4">
        <h2 class="lg:text-2xl text-xl font-bold font-serif">
          Nuestros Canales
        </h2>
        <p class="text-lg">
          Si deseas solicitar una cotización o información sobre nuestros
          productos, puedes comunicarte a través de los siguientes canales:
        </p>
        <div class="flex gap-5 items-center">
          <FilePen />
          <p>Formulario de Contacto</p>
        </div>
        <div class="flex gap-5 items-center">
          <Phone />
          <p>Whatsapp</p>
        </div>
        <div class="flex gap-5 items-center">
          <Mail />
          <p>Correo Electrónico: ventas@jdelectricos.com.co</p>
        </div>
        <div>
          <em>
            "En JD Eléctricos somos una empresa distribuidora de materiales
            eléctricos en toda Colombia, con sede en Bogotá. Nuestra misión es
            que usted pueda llevar adelante su proyecto con nosotros, somos
            distribuidores de productos de alta, media y baja tensión."
          </em>
        </div>
      </div>

      <!-- Formulario de Contacto -->
      <div
        class="lg:w-1/2 bg-gray-700 p-8 rounded-2xl shadow-xl shadow-neutral-800/50"
      >
        <form
          @submit.prevent="sendData"
          action="/submit-form"
          method="POST"
          class="space-y-6"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col">
              <label for="nombre" class="text-lg font-semibold">*Nombre:</label>
              <input
                v-model="dataName"
                id="nombre"
                name="nombre"
                type="text"
                required
                placeholder="Ingrese su nombre"
                class="p-3 mt-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p v-if="errors.dataName" class="text-red-500 text-sm">
                {{ errors.dataName }}
              </p>
            </div>
            <div class="flex flex-col">
              <label for="empresa" class="text-lg font-semibold"
                >Empresa:</label
              >
              <input
                v-model="dataCompany"
                id="empresa"
                name="empresa"
                type="text"
                required
                placeholder="Ingrese su empresa"
                class="p-3 mt-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col">
              <label for="email" class="text-lg font-semibold">*Correo :</label>
              <input
                v-model="dataEmail"
                id="correo"
                name="correo"
                type="email"
                required
                placeholder="Ingrese su correo electrónico"
                class="p-3 mt-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p v-if="errors.dataEmail" class="text-red-500 text-sm">
                {{ errors.dataEmail }}
              </p>
            </div>
            <div class="flex flex-col">
              <label for="telefono" class="text-lg font-semibold"
                >*Celular:</label
              >
              <input
                v-model="dataPhone"
                id="telefono"
                name="telefono"
                type="tel"
                required
                placeholder="Ingrese su número de contacto"
                class="p-3 mt-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p v-if="errors.dataPhone" class="text-red-500 text-sm">
                {{ errors.dataPhone }}
              </p>
            </div>
          </div>

          <div class="flex flex-col">
            <label for="asunto" class="text-lg font-semibold">*Asunto:</label>
            <input
              v-model="dataAffair"
              id="asunto"
              name="asunto"
              type="text"
              required
              placeholder="Ingrese el asunto"
              class="p-3 mt-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p v-if="errors.dataAffair" class="text-red-500 text-sm">
              {{ errors.dataAffair }}
            </p>
          </div>

          <div class="flex flex-col">
            <label for="mensaje" class="text-lg font-semibold">*Mensaje:</label>
            <textarea
              v-model="dataMessage"
              id="mensaje"
              name="mensaje"
              required
              placeholder="Escriba su mensaje aquí..."
              class="p-3 mt-2 bg-gray-700 rounded-lg border border-gray-600 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <p v-if="errors.dataMessage" class="text-red-500 text-sm">
            {{ errors.dataMessage }}
          </p>
          <div
            v-if="isRecaptchaVisible"
            class="g-recaptcha"
            :data-sitekey="siteKey"
          ></div>
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
            aria-label="Enviar formulario de contacto"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { FilePen, Phone, Mail } from "lucide-vue-next";
const isLoading = ref(false);
const isRecaptchaVisible = ref(false);

const dataName = ref("");
const dataCompany = ref("");
const dataPhone = ref("");
const dataEmail = ref("");
const dataAffair = ref("");
const dataMessage = ref("");

const errors = ref({});
const siteKey = "6LeRIXgqAAAAAJvfTC0RidvG62l7jYOfQlsO8eQU";

onMounted(() => {
  isRecaptchaVisible.value = true;
  loadRecaptchaScript();
});

const loadRecaptchaScript = () => {
  if (window.grecaptcha) return;

  const script = document.createElement("script");
  script.src = "https://www.google.com/recaptcha/api.js";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
};

const validateForm = () => {
  errors.value = {};

  if (!dataName.value) errors.value.dataName = "El nombre es obligatorio.";
  if (!dataEmail.value) errors.value.dataEmail = "El correo es obligatorio.";
  if (!dataPhone.value) errors.value.dataPhone = "El teléfono es obligatorio.";
  if (!dataAffair.value) errors.value.dataAffair = "El asunto es obligatorio.";
  if (!dataMessage.value)
    errors.value.dataMessage = "El mensaje es obligatorio.";

  return Object.keys(errors.value).length === 0;
};

const verifyRecaptcha = async () => {
  if (!window.grecaptcha) return false;

  const recaptchaResponse = window.grecaptcha.getResponse();
  if (!recaptchaResponse) return false;

  try {
    const response = await axios.post(
      "https://monkfish-app-lsohl.ondigitalocean.app/api/recaptcha/verify-recaptcha",
      { recaptchaResponse }
    );
    return response.data?.success === true;
  } catch {
    return false;
  }
};

const sendData = async () => {
  if (!validateForm()) return;

  isLoading.value = true;

  const isCaptchaVerified = await verifyRecaptcha();
  if (!isCaptchaVerified) {
    isLoading.value = false;
    return;
  }

  const formData = {
    name: dataName.value,
    company: dataCompany.value,
    phone: dataPhone.value,
    email: dataEmail.value,
    affair: "Contacto " + dataAffair.value,
    message: dataMessage.value,
  };

  try {
    await axios.post(
      "https://monkfish-app-lsohl.ondigitalocean.app/api/email/send-email",
      formData
    );

    alert("Formulario enviado con éxito");

    dataName.value = "";
    dataCompany.value = "";
    dataPhone.value = "";
    dataEmail.value = "";
    dataAffair.value = "";
    dataMessage.value = "";

    window.grecaptcha.reset();
  } catch {
    // Manejo silencioso como lo tenías
  } finally {
    isLoading.value = false;
  }
};
</script>
