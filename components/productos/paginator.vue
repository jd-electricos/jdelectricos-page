<template>
    <div class="flex justify-center items-center gap-4 m-8 text-white">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="bg-gray-600 hover:bg-gray-900 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer disabled:cursor-default"
      >
        Anterior
      </button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage >= totalPages"
        class="bg-gray-600 hover:bg-gray-900 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer disabled:cursor-default"
      >
        Siguiente
      </button>
    </div>
  </template>
  
  <script setup>  
  const props = defineProps({
    currentPage: Number,
    totalPages: Number
  });
  
  const emit = defineEmits(["update:page"]);
  
  const nextPage = () => {
    if (props.currentPage < props.totalPages) {
      emit("update:page", props.currentPage + 1);
      scrollToTop();
    }
  };
  
  const prevPage = () => {
    if (props.currentPage > 1) {
      emit("update:page", props.currentPage - 1);
      scrollToTop();
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  </script>
  