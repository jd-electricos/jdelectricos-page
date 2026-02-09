<template>
  <form
    @submit.prevent="submitPayment"
    class="max-w-lg space-y-6 p-6 rounded-2xl shadow bg-green-50"
  >
    <div class="flex items-center gap-4 bg-white rounded-xl shadow-sm p-2">
      <div class="bg-blue-100 text-blue-600 p-3 rounded-xl">
        <CreditCard class="w-6 h-6" />
      </div>
      <div>
        <h2 class="text-xl font-bold text-blue-700">Pago en línea</h2>
        <p class="text-sm text-gray-500">
          Proceso de forma segura con Wompi, Nuestro aliado de pagos digitales
          de Bancolombia
        </p>
      </div>
    </div>

    <div class="flex gap-2">
      <div>
        <label for="customerName">Nombre del cliente</label>
        <input
          v-model="form.name"
          type="text"
          id="customerName"
          placeholder="John Doe"
          class="input"
          required
        />
      </div>
      <div>
        <label for="customerDocument">NIT o CC</label>
        <input
          v-model="form.document"
          type="text"
          id="customerDocument"
          placeholder="1234567890"
          class="input"
          required
        />
      </div>
    </div>
    <div class="flex gap-2">
      <div>
        <label for="customerConcept">Concepto del pago</label>
        <input
          v-model="form.concept"
          type="text"
          id="customerConcept"
          placeholder="factura - 123456"
          class="input"
          required
        />
      </div>
      <div>
        <label for="customerAmount">Monto del pago</label>
        <input
          type="text"
          :value="formattedAmount"
          @input="onAmountInput"
          placeholder="Monto en COP"
          class="input"
          required
        />
      </div>
    </div>
    <div>
      <label for="customerEmail">Correo electrónico</label>
      <input
        v-model="form.email"
        type="email"
        placeholder="Correo"
        class="input"
        required
      />
    </div>
    <div>
      <label for="customerPhone">Celular</label>
      <input
        v-model="form.phone"
        type="tel"
        placeholder="Celular"
        class="input"
        required
      />
    </div>
    <div
      class="flex items-center justify-center gap-2 text-sm text-green-600 pt-2 border-t"
    >
      <ShieldCheck class="w-4 h-4" />
      <span class="font-semibold"> Transacción 100% segura </span>
    </div>
    <WompiButton :customer="form" />
  </form>
</template>

<script setup>
import WompiButton from "./wompiButton.vue";
const CreditCard = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.CreditCard),
);
const ShieldCheck = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.ShieldCheck),
);
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
label{
    font: bold 0.9rem Inter, sans-serif;
}
</style>
