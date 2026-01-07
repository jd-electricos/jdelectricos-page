<template>
  <!-- Overlay -->
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex items-end justify-center bg-black/50"
  >
    <!-- Drawer -->
    <div
      class="w-full max-w-md bg-white rounded-t-2xl p-6 shadow-2xl animate-slide-up"
    >
      <div class="flex flex-col gap-4 text-center">
        <p class="text-gray-700 text-sm">
          Utilizamos cookies necesarias y analíticas para mejorar tu experiencia.
          Puedes aceptar todas, rechazarlas o configurar tus preferencias.
        </p>

        <a
          href="/politica-de-cookies"
          class="text-xs text-blue-600 underline"
        >
          Ver política de cookies
        </a>

        <!-- Botones -->
        <div class="flex flex-col sm:flex-row gap-2 mt-4">
          <button
            @click="rejectCookies"
            class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-lg transition"
          >
            Rechazar
          </button>

          <button
            @click="acceptCookies"
            class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from "#imports";

const visible = ref(false);
const config = useRuntimeConfig();

onMounted(() => {
  // Mostrar después del LCP
  setTimeout(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      visible.value = true;
    } else if (consent === "accepted") {
      loadAnalytics();
    }
  }, 2000);
});

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted");
  localStorage.setItem("analytics", "true");
  visible.value = false;
  loadAnalytics();
}

function rejectCookies() {
  localStorage.setItem("cookieConsent", "rejected");
  localStorage.setItem("analytics", "false");
  visible.value = false;
}

function loadAnalytics() {
  if (localStorage.getItem("analytics") !== "true") return;

  // Evitar doble carga
  if (window.gtagLoaded) return;
  window.gtagLoaded = true;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-N3QD7X9PCW`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-N3QD7X9PCW", {
      anonymize_ip: true,
    });
  };
}
</script>
