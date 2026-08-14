<template>
  <section
    class="relative min-h-screen flex items-center pt-20 xl:pt-2 lg:pt-20 pb-20 md:p-4 md:pt-16 md:pb-16 overflow-hidden bg-slate-950"
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
          <!-- Text Content -->
          <div>
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-8 text-yellow-400"
            >
              <Zap :size="14" />
              <span>Especialistas en materiales eléctricos</span>
            </div>

            <h1
              class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[0.95] tracking-tight mb-6 text-white font-serif"
            >
              Materiales Eléctricos y Productos Eléctricos
              <span class="text-brand-yellow">en Colombia</span>
            </h1>

            <p
              class="text-xl lg:text-xl font-medium text-gray-300 mb-5 leading-tight"
            >
              Soluciones para proyectos de baja, media y alta tensión
            </p>

            <p
              class="text-lg text-white opacity-85 mb-5 leading-relaxed max-w-xl"
            >
              Comercializamos materiales eléctricos para proyectos de baja,
              media y alta tensión, con productos eléctricos, equipos eléctricos,
              insumos eléctricos y suministros eléctricos para empresas,
              contratistas e infraestructura en Colombia.
            </p>

            <div class="flex flex-wrap gap-4 mb-12">
              <NuxtLink
                to="/catalogo-materiales-electricos"
                class="cursor-pointer px-8 py-4 bg-brand-yellow text-brand-navy font-bold rounded-xl bg-yellow-400 hover:bg-white transition-all duration-300 flex items-center gap-2 group"
              >
                  Ver materiales eléctricos
                  <ArrowRight
                    :size="18"
                    class="group-hover:translate-x-1 transition-transform"
                  />
              </NuxtLink>

              <a
                href="https://wa.me/573108023277?text=Hola JD Eléctricos, quiero asesorarme sobre sus materiales eléctricos"
                target="_blank"
                rel="noopener noreferrer"
                class="cursor-pointer px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                  Hablar con un asesor
              </a>
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
          </div>

          <!-- Image Content -->
          <div class="relative">
            <div
              class="relative z-10 rounded-4xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-4/5 lg:aspect-square"
            >
              <NuxtImg
                src="/img/logo/Aislamientos.jpg"
                alt="Materiales eléctricos para redes de baja, media y alta tensión"
                width="800"
                height="1000"
                format="webp"
                quality="80"
                preload
                fetchpriority="high"
                class="w-full h-full object-cover"
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
              <NuxtImg
                src="/img/logo/LOGO-JD-ICONO.webp"
                alt=""
                width="128"
                height="128"
                quality="70"
              />
            </div>
            <div
              class="absolute -bottom-10 -left-10 w-48 h-48 border-2 border-brand-yellow/20 rounded-full z-0 text-amber-400"
            />
          </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const ArrowRight = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.ArrowRight),
);
const Zap = defineAsyncComponent(() =>
  import("lucide-vue-next").then((m) => m.Zap),
);
</script>
