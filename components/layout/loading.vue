<template>
    <div class="flex justify-center items-center h-screen relative">
      <div class="absolute">
        <img src="/public/img/logo/LOGO-JD-ICONO.webp" class="w-40" alt="Logo" />
      </div>
      <div class="spinner"></div>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .spinner {
    width: 160px; /* Tamaño del spinner */
    height: 160px; /* Tamaño del spinner */
    border-top: 4px solid #333; /* Color del borde del spinner */
    border-radius: 50%; /* Hace que el borde sea circular */
    animation: spin 1s linear infinite; /* Animación de giro */
  }


  @keyframes spin {
    0% {
      transform: rotate(0deg); /* Comienza sin rotación */
    }
    100% {
      transform: rotate(360deg); /* Gira 360 grados */
    }
  }
  </style>
  