<template>
  <footer class="bg-gray-800 text-white">
    <div
      class="container mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between"
    >
      <!-- Logo -->
      <NuxtImg
        src="/img/logo/LOGO-JD-ICONO.webp"
        alt="Logo de JD Eléctricos"
        width="176"
        height="176"
        loading="lazy"
        decoding="async"
        sizes="176px"
        densities="1"
        quality="65"
      />

      <!-- Secciones del Footer -->
      <div
        class="flex flex-col sm:flex-row gap-10 lg:gap-20 md:gap-14 text-center sm:text-left w-full justify-end pt-5"
      >
        <!-- Menú de navegación -->
        <nav aria-label="Menú principal" role="navigation">
          <h2
            class="flex items-center justify-center sm:justify-start gap-2 font-black pb-5"
          >
            <SquareMenu />
            <span>Menú</span>
          </h2>
          <ul class="space-y-2">
            <li v-for="item in itemsMenu" :key="item.label">
              <NuxtLink
                :to="item.href"
                class="hover:text-gray-300 transition-colors underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Teléfonos -->
        <section aria-label="Teléfonos de contacto">
          <h2
            class="flex items-center justify-center sm:justify-start gap-2 font-black pb-5"
          >
            <Phone />
            <span>Teléfonos</span>
          </h2>
          <address class="not-italic">
            <ul class="space-y-2">
              <li v-for="phone in itemsInfo.phone" :key="phone">
                <a
                  :href="`https://wa.me/${phone.replace(/\s+/g, '')}?text=Hola%20JD%20Eléctricos`"
                  class="hover:text-gray-300 transition-colors underline focus:outline-none focus:ring-2 focus:ring-white"
                  target="_blank"
                >
                  {{ phone }}
                </a>
              </li>
            </ul>
          </address>
        </section>

        <!-- Correo electrónico -->
        <section aria-label="Correo electrónico">
          <h2
            class="flex items-center justify-center sm:justify-start gap-2 font-black pb-5"
          >
            <Mail />
            <span>Correo</span>
          </h2>
          <address class="not-italic">
            <ul class="space-y-2">
              <li v-for="email in itemsInfo.email" :key="email">
                <a
                  :href="'mailto:' + email.trim()"
                  class="hover:text-gray-300 transition-colors underline focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {{ email.trim() }}
                </a>
              </li>
            </ul>
          </address>
        </section>
      </div>
    </div>

    <!-- Créditos -->
    <div class="w-full text-center bg-gray-700 p-5 lg:p-2">
      <p class="text-sm">
        © 2025 JD Eléctricos. Todos los derechos reservados. | Diseño y
        desarrollo por JD Eléctricos.
      </p>
    </div>
  </footer>
</template>

<script setup>
// import { SquareMenu, Phone, Mail } from "lucide-vue-next";
const SquareMenu = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.SquareMenu),
);
const Phone = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Phone),
);
const Mail = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Mail),
);
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
  phone: [
    "PBX:(+601) 341 10 60",
    "+57 320 270 57 34",
    "+57 320 339 25 65",
    "+57 310 492 84 93",
  ],
  email: ["ventas@jdelectricos.com.co"],
});
</script>

<style scoped></style>
