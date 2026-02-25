<template>
  <section
    class="relative min-h-screen flex items-center pt-20 xl:pt-2 lg:pt-20 pb-20 md:p-4 md:pt-16 overflow-hidden bg-gray-800"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div
        class="absolute top-1/4 -left-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px]"
      />
      <div
        class="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
      />
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 xl:gap-46 items-center"
      >
        <ClientOnly>
          <!-- Text Content -->
          <Motion
            :initial="{ opacity: 0, x: -30 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, ease: 'easeOut' }"
          >
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ delay: 0.2 }"
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-8 text-yellow-400"
            >
              <Zap :size="14" />
              <span>Líderes en Materiales Eléctricos</span>
            </Motion>

            <h1
              class="font-display text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight mb-6 text-white font-serif"
            >
              JD <span class="text-brand-yellow">Eléctricos</span>
            </h1>

            <h2
              class="text-2xl lg:text-2xl font-medium text-gray-300 mb-5 leading-tight"
            >
              Productos y Materiales Eléctricos
            </h2>

            <p
              class="text-lg text-white opacity-85 mb-5 leading-relaxed max-w-xl"
            >
              Distribuidores de Cable ACSR, aislador polimérico, pararrayo
              polimérico, aislador pin, aislador carrete, aislador tensor, poste
              de concreto, interruptores, equipos eléctricos, toma de tierra,
              transformador, generadores y cables de baja tensión para proyectos
              de alta, media y baja tensión.
            </p>

            <div class="flex flex-wrap gap-4 mb-12">
              <NuxtLink to="/catalogo-materiales-electricos">
                <button
                  class="cursor-pointer px-8 py-4 bg-brand-yellow text-brand-navy font-bold rounded-xl bg-yellow-400 hover:bg-white transition-all duration-300 flex items-center gap-2 group"
                >
                  Ver Catálogo
                  <ArrowRight
                    :size="18"
                    class="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </NuxtLink>

              <NuxtLink
                to="https://wa.me/573108023277?text=Hola JD Eléctricos, quiero asesorarme sobre sus materiales eléctricos"
              >
                <button
                  class="cursor-pointer px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Contactar Asesor
                </button>
              </NuxtLink>
            </div>

            <div class="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
              <div class="flex flex-col gap-1">
                <span
                  class="text-brand-yellow font-display text-2xl font-bold text-white"
                  >17+</span
                >
                <span
                  class="text-[10px] uppercase tracking-widest text-white opacity-90 font-semibold"
                >
                  Años de Experiencia
                </span>
              </div>

              <div class="flex flex-col gap-1">
                <span
                  class="text-brand-yellow font-display text-2xl font-bold text-white"
                  >1000+</span
                >
                <span
                  class="text-[10px] uppercase tracking-widest text-white opacity-90 font-semibold"
                >
                  Productos
                </span>
              </div>

              <div class="flex flex-col gap-1">
                <span
                  class="text-brand-yellow font-display text-2xl font-bold text-white"
                  >100%</span
                >
                <span
                  class="text-[10px] uppercase tracking-widest text-white opacity-90 font-semibold"
                >
                  Productos Certificados
                </span>
              </div>
            </div>
          </Motion>

          <!-- Image Content -->
          <Motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 1, ease: 'easeOut' }"
            class="relative"
          >
            <div
              class="relative z-10 rounded-4xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-4/5 lg:aspect-square"
            >
              <img
                src="../../public/img/logo/Aislamientos.jpg"
                alt="Infraestructura Eléctrica"
                class="w-full h-full object-cover"
                referrerpolicy="no-referrer"
              />

              <div
                class="absolute inset-0 bg-linear-to-t from-brand-navy/80 via-transparent to-transparent"
              />

              <!-- Floating Badge -->
              <div
                class="absolute bottom-8 left-8 right-8 bg-white/50 backdrop-blur-md border border-white/20 p-6 rounded-2xl"
              >
                <p class="font-display italic text-xl font-bold text-gray-900">
                  "Soluciones eléctricas con respaldo y calidad... construyendo
                  país"
                </p>
              </div>
            </div>
            <div
              class="absolute -top-6 -right-6 w-32 h-32 bg-brand-yellow rounded-full flex items-center justify-center text-brand-navy font-bold text-3xl shadow-xl z-20"
            >
              <img
                src="../../public/img/logo/LOGO-JD-ICONO.webp"
                alt="JD Eléctricos Logo"
              />
            </div>
            <div
              class="absolute -bottom-10 -left-10 w-48 h-48 border-2 border-brand-yellow/20 rounded-full z-0 text-amber-400"
            />
          </Motion>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Motion } from "@motionone/vue";
import { ArrowRight, Zap } from "lucide-vue-next";
</script>
