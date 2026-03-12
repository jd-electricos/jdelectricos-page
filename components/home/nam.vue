<template>
  <section class="relative py-24 overflow-hidden bg-gray-800">
    <!-- Background Effects -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-20 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px]" />
      <div class="absolute bottom-10 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <ClientOnly>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <!-- Información empresa -->
          <Motion
            :initial="{ opacity: 0, x: -40 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8 }"
          >
    

            <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">
              JD Eléctricos <span class="text-yellow-400">| materiales eléctricos</span>
            </h2>

            <p class="text-gray-300 text-lg mb-8 leading-relaxed">
              En JD Eléctricos somos proveedores de materiales eléctricos para proyectos de alta, media y baja tensión. 
              Ofrecemos aisladores eléctricos, cables, conectores, cortacircuitos, herrajes galvanizados, pararrayos, 
              postes, transformadores y soldadura exotérmica con calidad certificada.
            </p>

            <!-- Datos -->
            <div class="space-y-4 mb-10">

              <div class="flex items-start gap-4">
                <MapPin class="text-yellow-400 mt-1" :size="22"/>
                <div>
                  <p class="text-white font-semibold">Dirección</p>
                  <p class="text-gray-400">
                    Cra. 12 #15-95, Santa Fé, Bogotá, Cundinamarca
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <Phone class="text-yellow-400 mt-1" :size="22"/>
                <div>
                  <p class="text-white font-semibold">Teléfono</p>
                  <a
                    href="tel:+573108023277"
                    class="text-gray-400 hover:text-yellow-400 transition"
                  >
                    310 8023277
                  </a>
                </div>
              </div>

            </div>

            <!-- Botones -->
            <div class="flex flex-wrap gap-4">

              <a
                href="https://wa.me/573108023277?text=Hola JD Eléctricos, quiero asesoría sobre materiales eléctricos"
                target="_blank"
                class="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-white transition flex items-center gap-2"
              >
                <MessageCircle :size="18"/>
                WhatsApp
              </a>

              <a
                href="https://maps.app.goo.gl/6iqXsK2RhPQpqeLDA"
                target="_blank"
                class="px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition flex items-center gap-2"
              >
                <Map :size="18"/>
                Ver en Google Maps
              </a>

            </div>

          </Motion>


          <!-- Mapa -->
          <Motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.9 }"
            class="relative"
          >

            <div class="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4924.569804768936!2d-74.07895312502123!3d4.60482809536986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a07b37c3b7%3A0x2196eb34bd341d1f!2sJD%20El%C3%A9ctricos%20%7C%20materiales%20el%C3%A9ctricos!5e1!3m2!1ses-419!2sco!4v1773348992690!5m2!1ses-419!2sco"
                width="100%"
                height="420"
                style="border:0;"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full"
              ></iframe>

            </div>

            <!-- Badge -->
            <div class="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 w-20 h-20 rounded-full flex items-center justify-center shadow-xl">
              <Store :size="30"/>
            </div>

          </Motion>

        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>

import { Motion } from "@motionone/vue"

const MapPin = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.MapPin)
)

const Phone = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Phone)
)

const MessageCircle = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.MessageCircle)
)

const Map = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Map)
)

const Store = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Store)
)

const Zap = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Zap)
)

</script>