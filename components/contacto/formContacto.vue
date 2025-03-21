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
      <div class="lg:w-1/2 bg-gray-700 p-8 rounded-2xl">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col">
              <label for="nombre" class="text-lg font-semibold">*Nombre:</label>
              <input
                v-model="form.name"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingrese su nombre"
                class="p-3 mt-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p v-if="errors.name" class="text-red-500 text-sm">
                {{ errors.name }}
              </p>
            </div>
            <div class="flex flex-col">
              <label for="empresa" class="text-lg font-semibold"
                >Empresa:</label
              >
              <input
                v-model="form.company"
                type="text"
                id="empresa"
                name="empresa"
                placeholder="Ingrese su empresa"
                class="p-3 mt-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col">
              <label for="email" class="text-lg font-semibold"
                >*Correo :</label
              >
              <input
                v-model="form.email"
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
                class="p-3 mt-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p v-if="errors.email" class="text-red-500 text-sm">
                {{ errors.email }}
              </p>
            </div>
            <div class="flex flex-col">
              <label for="telefono" class="text-lg font-semibold"
                >*Celular:</label
              >
              <input
                v-model="form.phone"
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Ingrese su número de contacto"
                class="p-3 mt-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p v-if="errors.phone" class="text-red-500 text-sm">
                {{ errors.phone }}
              </p>
            </div>
          </div>

          <div class="flex flex-col">
            <label for="asunto" class="text-lg font-semibold">*Asunto:</label>
            <input
              v-model="form.affair"
              type="text"
              id="asunto"
              name="asunto"
              placeholder="Ingrese el asunto"
              class="p-3 mt-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p v-if="errors.affair" class="text-red-500 text-sm">
              {{ errors.affair }}
            </p>
          </div>

          <div class="flex flex-col">
            <label for="mensaje" class="text-lg font-semibold">*Mensaje:</label>
            <textarea
              v-model="form.message"
              id="mensaje"
              name="mensaje"
              placeholder="Escriba su mensaje aquí..."
              class="p-3 mt-2 bg-gray-700 rounded-lg border border-gray-600 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <p v-if="errors.message" class="text-red-500 text-sm">
            {{ errors.message }}
          </p>
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FilePen, Phone, Mail } from "lucide-vue-next";
const form = ref({
  name: "",
  company: "",
  email: "",
  phone: "",
  affair: "",
  message: "",
});
const errors = ref({});

const validateForm = () => {
  errors.value = {}; // Reiniciar errores

  if (!form.value.name) errors.value.name = "El nombre es obligatorio.";
  if (!form.value.email) errors.value.email = "El correo es obligatorio.";
  if (!form.value.phone) errors.value.phone = "El teléfono es obligatorio.";
  if (!form.value.affair) errors.value.affair = "El asunto es obligatorio.";
  if (!form.value.message) errors.value.message = "El mensaje es obligatorio.";

  return Object.keys(errors.value).length === 0;
};

const submitForm = () => {
  if (!validateForm()) return;

  console.log("Formulario enviado con éxito:", form.value);
};
</script>

<style scoped></style>
