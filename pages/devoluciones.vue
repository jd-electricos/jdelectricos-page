<template>
  <div class="flex flex-col">
    
    <!-- HERO PART -->
    <section class="relative py-20 bg-gray-800 overflow-hidden">
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-700/30 to-transparent pointer-events-none" />
      
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="max-w-2xl">
          <span class="inline-block px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-xs font-semibold tracking-widest uppercase mb-6">
            Servicio al Cliente
          </span>

          <h1 class="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight font-serif">
            Devoluciones sin <br />
            <span class="text-gray-400 italic font-light">complicaciones.</span>
          </h1>

          <p class="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
            Creemos en un proceso de compra transparente. Si no estás satisfecho con tu pedido, estamos aquí para ayudarte a solucionarlo de la forma más rápida posible.
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              href="#download-form"
              class="bg-white text-gray-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-xl"
            >
              Descargar Formato
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS PART -->
    <section class="py-24 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-800 mb-4 tracking-tight font-serif">
            Cómo funciona el proceso
          </h2>
          <div class="w-20 h-1.5 bg-gray-800"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div
            v-for="step in steps"
            :key="step.number"
            class="group cursor-default"
          >
            <div class="text-6xl font-black text-gray-100 group-hover:text-gray-800 transition-colors duration-500 mb-4">
              {{ step.number }}
            </div>

            <h3 class="text-xl font-bold text-gray-800 mb-3">
              {{ step.title }}
            </h3>

            <p class="text-gray-500 leading-relaxed text-sm">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- DOWNLOAD PART -->
    <section id="download-form" class="py-24 bg-gray-50">
      <div class="max-w-4xl mx-auto px-6">
        <div class="bg-gray-800 rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          
          <div class="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-br-full"></div>

          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
              ¿Todo listo para devolver?
            </h2>

            <p class="text-gray-400 text-lg mb-10 max-w-md mx-auto">
              Descarga nuestro formato oficial, llénalo y envíanoslo junto con el producto. Nosotros nos encargamos del resto.
            </p>

            <button
              @click="handleDownload"
              :disabled="isDownloading"
              :class="[
                'group relative inline-flex items-center justify-center px-10 py-5 font-bold text-gray-800 transition-all duration-200 bg-white rounded-2xl cursor-pointer',
                isDownloading
                  ? 'opacity-75 cursor-wait'
                  : 'hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-lg'
              ]"
            >
              <span v-if="isDownloading" class="flex items-center">
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Generando archivo...
              </span>

              <span v-else class="flex items-center">
                Descargar Formato PDF
                <svg
                  class="ml-3 w-6 h-6 transform transition-transform group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
              </span>
            </button>

            <div class="mt-8 text-gray-500 text-xs uppercase tracking-widest font-semibold">
              Peso estimado: 1.2 MB • Versión 2026.1
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDownloading = ref(false)

const steps = [
  {
    number: '01',
    title: 'Prepara tu paquete',
    description:
      'Asegúrate de que los productos estén en su estado original y con sus etiquetas puestas.'
  },
  {
    number: '02',
    title: 'Descarga el formato',
    description:
      'Completa el formulario de devolución que encontrarás al final de esta página.'
  },
  {
    number: '03',
    title: 'Solicita la recogida',
    description:
      'Contáctanos para programar la recogida o entrega en el punto más cercano.'
  },
  {
    number: '04',
    title: 'Recibe tu reembolso',
    description:
      'Una vez verificado el estado, procesaremos el reembolso.'
  }
]

const handleDownload = () => {
  isDownloading.value = true

  setTimeout(() => {
    const filePath = encodeURI(
      '/pdfs/Formato solicitud de Devolucion de Material JD Eléctricos e Industria LTDA.pdf'
    )

    const link = document.createElement('a')
    link.href = filePath
    link.download = 'Formato_Devolucion_JD_Electricos.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    isDownloading.value = false
  }, 800)
}
</script>

