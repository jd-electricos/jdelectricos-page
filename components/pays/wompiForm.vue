<template>
  <form
    @submit.prevent="submitPayment"
    class="max-w-lg space-y-4 p-6 rounded shadow"
  >
    <NuxtImg
      src="/img/logo/Wompi_LogoPrincipal.svg"
      alt="Logo de Wompi"
      class="w-64 mx-auto"
    />

    <h2 class="text-xl font-bold">Datos del cliente</h2>

    <input
      v-model="form.name"
      type="text"
      placeholder="Nombre del cliente"
      class="input"
      required
    />
    <input
      v-model="form.document"
      type="text"
      placeholder="NIT o CC"
      class="input"
      required
    />
    <input
      v-model="form.concept"
      type="text"
      placeholder="Concepto del pago (factura - 123456)"
      class="input"
      required
    />
    <input
      type="text"
      :value="formattedAmount"
      @input="onAmountInput"
      placeholder="Monto en COP"
      class="input"
      required
    />
    <input
      v-model="form.email"
      type="email"
      placeholder="Correo"
      class="input"
      required
    />
    <input
      v-model="form.phone"
      type="tel"
      placeholder="Celular"
      class="input"
      required
    />

    <WompiButton :customer="form" />
  </form>
</template>

<script setup>
import WompiButton from "./wompiButton.vue";

const form = reactive({
  name: "",
  document: "",
  concept: "",
  amountInCents: null,
  email: "",
  phone: "",
});
const formattedAmount = computed(() => {
  const pesos = form.amountInCents / 100;

  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(pesos);
});

const onAmountInput = (e) => {
  const raw = e.target.value.replace(/\D/g, ""); // solo números
  const pesos = raw ? Number(raw) : 0;
  form.amountInCents = pesos * 100;
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}
</style>
