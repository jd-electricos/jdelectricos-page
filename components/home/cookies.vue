<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex items-end justify-center bg-black/50"
  >
    <div
      class="w-full max-w-md bg-white rounded-t-2xl p-6 shadow-2xl animate-slide-up"
    >
      <div class="flex flex-col gap-4 text-center">
        <p class="text-gray-700 text-sm">
          Utilizamos cookies analíticas para medir y mejorar tu experiencia en
          el sitio. Al continuar navegando, entendemos que aceptas su uso.
        </p>
        <!-- Botones -->
        <div class="flex flex-col sm:flex-row gap-2 mt-4 justify-center">
          <button
            @click="closeBanner"
            class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-lg transition"
          >
            Rechazar
          </button>

          <button
            @click="closeBanner"
            class="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold px-4 py-2 rounded-lg transition"
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

const visible = ref(false);

onMounted(() => {
  const informed = localStorage.getItem("cookieInformed");

  if (!informed) {
    visible.value = true;
    localStorage.setItem("cookieInformed", "true");
  }

});

function closeBanner() {
  visible.value = false;
  loadAnalytics();
}

function loadAnalytics() {
  // Evitar doble carga
  if (window.gtagLoaded) return;
  window.gtagLoaded = true;

  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-N3QD7X9PCW";
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
