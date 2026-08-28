<template>
  <div class="fixed bottom-28 right-10 z-100">
    <button
      @click="goToPayments"
      class="cursor-pointer relative w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-100/40 group overflow-hidden transition-transform duration-300 hover:scale-110 active:scale-90"
    >
      <!-- Icono -->
      <div class="animate-spin-slow">
        <DollarSign :size="28" :stroke-width="2.5" />
      </div>

      <!-- Tooltip -->
      <span
        class="absolute right-full mr-4 bg-brand-dark text-brand-yellow border border-brand-yellow/30 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl translate-x-4 group-hover:translate-x-0"
      >
        PAGAR FACTURA
      </span>

      <!-- Ripple -->
      <span
        class="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full"
      />
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { CreditCard, DollarSign } from 'lucide-vue-next'


const router = useRouter()

const goToPayments = () => {
  router.push('/pagos')
}
</script>

<style scoped>
/* Animación de rotación similar a rotateY */
@keyframes spin-slow {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s ease-in-out infinite;
}
</style>