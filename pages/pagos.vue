<template>
  <div
    class="flex flex-col bg-linear-to-b from-gray-950 via-gray-800 to-gray-700 min-h-screen"
  >
    <PaymentResultModal
      v-if="showModal"
      :status="paymentResult.status"
      :title="
        paymentResult.status === 'APPROVED'
          ? 'Pago exitoso'
          : paymentResult.status === 'DECLINED'
            ? 'Pago rechazado'
            : 'Error en el pago'
      "
      :message="
        paymentResult.status === 'APPROVED'
          ? `Tu pago fue aprobado correctamente.
Referencia: ${paymentResult.reference}`
          : paymentResult.status === 'DECLINED'
            ? 'El pago fue rechazado por la entidad financiera.'
            : paymentResult.message
      "
      @close="showModal = false"
    />
    <loading class="bg-white" v-if="isLoading" />
    <div v-else>
      <Header />
    </div>
    <div class="flex gap-10 p-6 justify-center md:flex-row flex-col">
      <div>
        <ClientOnly>
          <WompiForm
            @loading:start="isLoading = true"
            @loading:end="isLoading = false"
            @payment:result="handlePaymentResult"
          />
        </ClientOnly>
      </div>
      <div>
        <div class="hidden md:block h-full border-l border-gray-300" />
      </div>
      <div>
        <info />
      </div>
    </div>
  </div>
</template>

<script setup>
import WompiForm from "@/components/pays/wompiForm.vue";
import Info from "@/components/pays/info.vue";
import Header from "@/components/pays/header.vue";
import loading from "~/components/layout/loading.vue";
import PaymentResultModal from "~/components/pays/paymentResultModal.vue";

const isLoading = ref(false);
const showModal = ref(false);
const paymentResult = ref(null);

const handlePaymentResult = (result) => {
  paymentResult.value = result;
  showModal.value = true;
};

useSeoMeta({
  title: "Pago seguro en línea | JD Eléctricos Colombia",
  description:
    "Realiza tus pagos en línea de forma rápida y segura con JD Eléctricos. Aceptamos pagos con Wompi, tarjetas de crédito, débito y otros métodos confiables en Colombia.",
  keywords:
    "JD Eléctricos, pagos JD Eléctricos, pago en línea Colombia, pago seguro, Wompi, pagos electrónicos, pagar factura eléctrica, pago con tarjeta",
  robots: "index, follow",
  author: "JD Eléctricos",
  viewport: "width=device-width, initial-scale=1",

  ogTitle: "Pago seguro en línea | JD Eléctricos",
  ogDescription:
    "Paga tus servicios con JD Eléctricos de forma fácil y segura usando Wompi. Plataforma protegida y confiable en Colombia.",
  ogType: "website",
  ogLocale: "es_CO",
  ogSiteName: "JD Eléctricos",

  twitterCard: "summary_large_image",
  twitterTitle: "Pago seguro en línea | JD Eléctricos",
  twitterDescription:
    "Realiza tu pago en línea de forma rápida y segura con JD Eléctricos a través de Wompi.",
});
</script>

<style></style>
