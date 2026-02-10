<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div
      class="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full text-center space-y-4"
    >
      <div v-if="status === 'APPROVED'" class="text-green-600 text-5xl">✅</div>
      <div v-else-if="status === 'DECLINED'" class="text-red-600 text-5xl">❌</div>
      <div v-else class="text-yellow-500 text-5xl">⚠️</div>

      <h2 class="text-xl font-bold">
        {{ title }}
      </h2>

      <p class="text-gray-600 text-sm whitespace-pre-line">
        {{ message }}
      </p>

      <button
        class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
        @click="$emit('close')"
      >
        Cerrar
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  status: String,
  title: String,
  message: String,
});
</script>
