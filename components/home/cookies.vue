<template>
  <!-- Overlay -->
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex items-end justify-center bg-black/50"
  >
    <!-- Drawer inferior -->
    <div
      class="w-full max-w-md bg-white rounded-t-xl p-6 shadow-2xl animate-slide-up"
    >
      <div class="flex flex-col justify-center items-center gap-5 text-center">
        <p class="text-gray-700">
          Este sitio web utiliza cookies para mejorar la experiencia del
          usuario. Al continuar navegando, acepta el uso de cookies.
        </p>

        <button
          @click="acceptCookies"
          class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Aceptar
        </button>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted } from "vue";

const visible = ref(false);

onMounted(() => {
  // Show cookies consent drawer only after LCP is rendered
  setTimeout(() => {
    // Check if consent was already given
    if (!localStorage.getItem("cookieConsent")) {
      visible.value = true;
    }
  }, 2000); // Delay to make sure LCP is prioritized
});

function acceptCookies() {
  // Save consent and hide the dialog
  localStorage.setItem('cookieConsent', 'true');
  visible.value = false;

  // Load gtag.js only after the user accepts cookies
  loadGtagScript();
}

function loadGtagScript() {
  // Dynamically load the gtag.js script
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-N3QD7X9PCW"; // Reemplaza con tu ID de GTM
  script.async = true;
  document.head.appendChild(script);

  // Initialize Google Analytics/GTAG after the script has loaded
  script.onload = () => {
    // Initialize the dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', 'G-N3QD7X9PCW'); // Reemplaza con tu ID de GTM
  };
}
</script>