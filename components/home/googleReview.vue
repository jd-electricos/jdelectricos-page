<script setup lang="ts">
const { data, pending, error } = await useFetch("/api/google-reviews");

const getStars = (rating: number | null) => Math.round(rating || 0);
const emptyStars = (rating: number | null) => 5 - Math.round(rating || 0);
</script>

<template>
  <section class="py-20 bg-gray-50 relative">
    <div class="max-w-6xl mx-auto px-6">
      <div
        class="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 text-center"
      >
        <p class="text-sm font-bold text-yellow-600 uppercase">
          Reseñas en Google
        </p>

        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Nuestros clientes nos califican en Google
        </h2>

        <div v-if="pending" class="mt-8 text-gray-500">
          Cargando calificación...
        </div>

        <div v-else-if="error" class="mt-8 text-red-500">
          No se pudo cargar la calificación de Google.
        </div>

        <div v-else-if="data" class="mt-8">
          <h3 class="text-xl md:text-2xl font-bold text-gray-900">
            {{ data.name }}
          </h3>

          <div class="mt-6 flex flex-wrap justify-center items-center gap-4">
            <strong class="text-5xl text-gray-900">
              {{ data.rating }}
            </strong>

            <div class="text-4xl tracking-wide">
              <span
                v-for="star in getStars(data.rating)"
                :key="`full-${star}`"
                class="text-yellow-500"
              >
                ★
              </span>

              <span
                v-for="star in emptyStars(data.rating)"
                :key="`empty-${star}`"
                class="text-gray-300"
              >
                ★
              </span>
            </div>
          </div>

          <p class="mt-4 text-lg text-gray-700">
            Basado en <strong>{{ data.totalReviews }}</strong> reseñas
            verificadas en Google.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            <div class="rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <p class="text-3xl font-bold text-gray-900">
                {{ data.rating }}/5
              </p>
              <p class="text-sm text-gray-600 mt-2">Calificación promedio</p>
            </div>

            <div class="rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <p class="text-3xl font-bold text-gray-900">
                {{ data.totalReviews }}
              </p>
              <p class="text-sm text-gray-600 mt-2">Opiniones registradas</p>
            </div>

            <div class="rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <p class="text-3xl font-bold text-gray-900">Google</p>
              <p class="text-sm text-gray-600 mt-2">Fuente de calificación</p>
            </div>
          </div>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <!-- Botón principal -->
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJt8M3e6CZP44RHx00vTTrliE"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-yellow-400 text-gray-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:bg-yellow-300 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.167 3.59a1 1 0 00.95.69h3.775c.969 0 1.371 1.24.588 1.81l-3.055 2.22a1 1 0 00-.364 1.118l1.167 3.59c.3.922-.755 1.688-1.539 1.118l-3.055-2.22a1 1 0 00-1.176 0l-3.055 2.22c-.783.57-1.838-.196-1.539-1.118l1.167-3.59a1 1 0 00-.364-1.118L2.62 9.017c-.783-.57-.38-1.81.588-1.81h3.775a1 1 0 00.95-.69l1.167-3.59z"
                />
              </svg>
              Crear reseña
            </a>

            <!-- Botón secundario -->
            <a
              v-if="data.googleUrl"
              :href="data.googleUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-gray-300 bg-white text-gray-800 font-semibold hover:border-yellow-400 hover:text-yellow-500 hover:shadow-lg transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2m0 18l6-2m-6 2V2m6 16l5.447-2.724A1 1 0 0021 14.382V3.618a1 1 0 00-.553-.894L15 0m0 18V0"
                />
              </svg>
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
