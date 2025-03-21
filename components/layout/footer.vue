<template>
  <footer class="bg-gray-800 text-white">
    <div
      class="container mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between"
    >
      <!-- Logo -->
      <NuxtImg
        src="/img/logo/logo-jd-electricos.webp"
        alt="Logo de JD Eléctricos"
        class="w-32 sm:w-28 md:w-36 lg:w-44 mb-6 md:mb-0"
      />

      <!-- Secciones del footer -->
      <div
        class="flex flex-col sm:flex-row gap-10 md:gap-20 text-center sm:text-left"
      >
        <!-- Menú -->
        <ul>
          <div
            class="flex items-center justify-center sm:justify-start gap-2 font-black pb-5"
          >
            <SquareMenu />
            <p>Menú</p>
          </div>
          <li v-for="item in itemsMenu" :key="item.label">
            <NuxtLink
              :to="item.href"
              class="hover:text-gray-300 transition-colors underline"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Teléfonos -->
        <ul>
          <div
            class="flex items-center justify-center sm:justify-start gap-2 font-black pb-5"
          >
            <Phone />
            <p>Teléfonos</p>
          </div>
          <li v-for="phone in itemsInfo.phone" :key="phone">
            <a
              :href="'tel:' + phone"
              class="hover:text-gray-300 transition-colors underline"
            >
              {{ phone }}
            </a>
          </li>
        </ul>

        <!-- Correo -->
        <ul>
          <div
            class="flex items-center justify-center sm:justify-start gap-2 font-black pb-5"
          >
            <Mail />
            <p>Correo</p>
          </div>
          <li v-for="email in itemsInfo.email" :key="email">
            <a
              :href="'mailto:' + email.trim()"
              class="hover:text-gray-300 transition-colors underline"
            >
              {{ email.trim() }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full text-center bg-gray-700 p-5 lg:p-2">
      <p class="text-sm">© 2025 JD Eléctricos. Todos los derechos reservados. | Diseño y desarrollo por Jd Eléctricos.</p>
    </div>
  </footer>
</template>

<script setup>
import { SquareMenu, Phone, Mail } from "lucide-vue-next";
import { ref } from "vue";

const itemsMenu = ref([
  { label: "Inicio", href: "/" },
  {
    label: "Nosotros",
    href: "/empresa-distribuidora-de-materiales-electricos-en-colombia",
  },
  { label: "Contacto", href: "/contacto-jd-electricos-colombia" },
  { label: "Productos", href: "/tienda-articulos-electricos" },
  { label: "Noticias", href: "/blog" },
]);

const itemsInfo = ref({
  phone: ["301 234 5678", "301 234 5678", "301 234 5678"],
  email: ["ventas@jdelectricos.com.co"],
});
</script>

<style scoped></style>
