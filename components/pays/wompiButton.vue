<template>
  <ClientOnly>
    <button
      @click="pay"
      class="bg-[#b0f2ae] font-bold px-4 py-2 rounded w-full"
    >
      Pagar con Wompi
    </button>
  </ClientOnly>
</template>

<script setup>
import axios from "axios";
const props = defineProps({
  customer: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["loading:start", "loading:end"]);

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
  emit("loading:start");
  await loadWompi();

  const data = await $fetch(
    "https://apijd.jdelectricos.com.co/api/payments/create",
    {
      method: "POST",
      body: { amountInCents: props.customer.amountInCents },
    },
  );
  const checkout = new window.WidgetCheckout({
    publicKey: data.publicKey, // 🔐 SIEMPRE definido
    currency: data.currency,
    amountInCents: data.amountInCents,
    reference: data.reference,
    signature: {
      integrity: data.signature,
    },
    redirectUrl: "https://tusitio.com/pagos",
  });

  checkout.open((result) => {
    console.log("Resultado:", result);
    sendmail(result);
  });
};

const sendmail = async (result) => {
  const formData = {
    name: props.customer.name,
    company: `${result.transaction.merchant.legalName} / razon social o cc o documento: ${result.transaction.merchant.legalId}`,
    phone: props.customer.phone,
    email: `${props.customer.email} / ${result.transaction.customerEmail}`,
    affair: `Confirmación de pago Wompi - ${props.customer.concept} - Referencia Wompi: ${result.transaction.reference}`,
    message: `
      Pago realizado correctamente.

      Cliente: ${props.customer.name}
      Documento: ${result.transaction.merchant.legalName} / razon social o cc o documento: ${result.transaction.merchant.legalId}
      Metodo y Monto: ${result.transaction.paymentMethod.type} / ${result.transaction.amountInCents / 100} COP
      Referencia Wompi: ${result.transaction.reference}
      Estado: ${result.transaction.status}
    `,
  };
  console.log("Enviando email con datos:", formData);
  try {
    await axios.post(
      "https://apijaps.jdelectricos.com.co/api/email/send-email-pays",
      formData,
    );
    emit("loading:end");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};
</script>
