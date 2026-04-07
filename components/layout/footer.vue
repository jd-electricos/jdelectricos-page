<template>
  <footer class="bg-gray-800 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6">
      <!-- GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- LOGO + DESCRIPCIÓN -->
        <div class="space-y-6 p-5">
          <div class="flex items-center gap-3">
            <NuxtImg
              src="/img/logo/LOGO-JD-ICONO.webp"
              alt="Logo de JD Eléctricos"
              class="w-20 h-20"
              width="80"
              height="80"
            />
            <span class="font-bold text-xl tracking-tight">
              JD Eléctricos
            </span>
          </div>

          <p class="text-gray-400 text-sm leading-relaxed">
            Soluciones con respaldo y calidad... construyendo país.
            Distribuidores líderes en materiales eléctricos.
          </p>
        </div>

        <!-- MENÚ -->
        <div>
          <h4 class="font-semibold mb-6">Enlaces</h4>
          <ul class="space-y-4 text-sm text-gray-400">
            <li v-for="item in itemsMenu" :key="item.href">
              <NuxtLink
                :to="item.href"
                class="hover:text-yellow-400 transition-colors"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- INFORMACIÓN LEGAL -->
        <div>
          <h4 class="font-semibold mb-6">Información</h4>
          <ul class="space-y-4 text-sm text-gray-400">
            <li v-for="item in itemsData" :key="item.href">
              <NuxtLink
                :to="item.href"
                class="hover:text-yellow-400 transition-colors"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- CONTACTO -->
        <div>
          <h4 class="font-semibold mb-6">Contacto</h4>

          <!-- TELÉFONOS -->
          <div class="space-y-3 mb-4">
            <div
              v-for="(phone, i) in itemsInfo.phone"
              :key="i"
              class="flex items-start gap-3 text-sm text-gray-400 hover:text-yellow-400"
            >
              <Phone class="w-4 h-4 text-yellow-500 mt-1 shrink-0" />
              <span>{{ phone }}</span>
            </div>
          </div>

          <!-- EMAIL -->
          <div
            v-for="(email, i) in itemsInfo.email"
            :key="i"
            class="flex items-start gap-3 text-sm text-gray-400 hover:text-yellow-400"
          >
            <Mail class="w-4 h-4 text-yellow-500 mt-1 shrink-0" />
            <span>{{ email }}</span>
          </div>

          <div
            v-for="(a, i) in itemsInfo.addres"
            :key="i"
            class="flex items-start gap-3 text-sm text-gray-400 space-y-3 mt-4 hover:text-yellow-400"
          >
            <MapPinCheckInside class="w-4 h-4 text-yellow-500 mt-1 shrink-0" />
            <span>{{ a }}</span>
          </div>
        </div>
      </div>

      <!-- COPYRIGHT -->
      <div
        class="pt-8 border-t border-white/5 text-center text-xs text-gray-500"
      >
        <p>
          © 2026 JD Eléctricos. Todos los derechos reservados. | Diseño y
          desarrollo por JD Eléctricos.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from "vue";

/* ICONOS */
const Phone = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Phone),
);
const Mail = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Mail),
);

const MapPinCheckInside = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.MapPinCheckInside),
);

/* MENÚ PRINCIPAL */
const itemsMenu = ref([
  { label: "Inicio", href: "/" },
  { label: "Contacto", href: "/contacto-jd-electricos-colombia" },
  { label: "Productos", href: "/tienda-articulos-electricos" },
  { label: "Noticias", href: "/blog" },
]);

/* INFORMACIÓN */
const itemsData = ref([
  {
    label: "Nosotros",
    href: "/empresa-distribuidora-de-materiales-electricos-en-colombia",
  },
  { label: "Devoluciones", href: "/devoluciones" },
  { label: "Politica de Datos", href: "/politica-proteccion-datos" },
  { label: "Terminos y Condiciones", href: "/terminos-y-condiciones" },
]);

/* CONTACTO */
const itemsInfo = ref({
  phone: ["PBX: (+601) 341 10 60", "+57 310 802 32 77"],
  email: ["ventas@jdelectricos.com.co"],
  addres: ["Cra 12 #15-95 - Bogotá Colombia"],
});

/* AÑO DINÁMICO */
const year = computed(() => new Date().getFullYear());
</script>
