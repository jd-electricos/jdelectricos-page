<template>
  <ClientOnly>
    <button @click="pay" class="bg-green-600 text-white px-4 py-2 rounded">
      Pagar con Wompi
    </button>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  customer: {
    type: Object,
    required: true,
  },
});
const loadWompi = () => {
  return new Promise((resolve) => {
    if (window.WidgetCheckout) return resolve();

    const script = document.createElement("script");
    script.src = "https://checkout.wompi.co/widget.js";
    script.onload = resolve;
    document.body.appendChild(script);
  });
};

const pay = async () => {
  await loadWompi();

  const data = await $fetch("https://apijd.jdelectricos.com.co/api/payments/create", {
    method: "POST",
    body: { amountInCents: props.customer.amountInCents },
  });
  const checkout = new window.WidgetCheckout({
    publicKey: data.publicKey, // 🔐 SIEMPRE definido
    currency: data.currency,
    amountInCents: data.amountInCents,
    reference: data.reference,
    signature: {
      integrity: data.signature,
    },
    redirectUrl: "https://tusitio.com/pagos/respuesta",
  });

  checkout.open((result) => {
    console.log("Resultado:", result);
  });
};
</script>