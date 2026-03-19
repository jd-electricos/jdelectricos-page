<template>
  <div class="min-h-screen relative overflow-hidden font-sans selection:bg-emerald-500/30">
    
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]" />
      <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[150px]" />
    </div>

    <main class="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-32 lg:pt-40">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left -->
        <div class="animate-fade-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wider uppercase mb-8">
            <ShieldCheck :size="14" />
            Servicio al Cliente
          </div>

          <h1 class="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.9] mb-8 text-gradient">
            Devoluciones <br />
            <span class="italic font-normal text-slate-400">sin complicaciones.</span>
          </h1>

          <p class="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-12">
            Creemos en un proceso de compra transparente. Si no estás satisfecho con tu pedido,
            nuestro equipo está listo para ayudarte a encontrar la mejor solución.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <!-- Botón primario -->
            <button class="px-8 py-4 bg-white text-slate-950 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-100 transition">
              <Download :size="20" />
              Descargar Formato
            </button>

            <!-- Botón secundario -->
            <button class="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition">
              Ver Tutorial
              <ArrowRight :size="20" />
            </button>
          </div>
        </div>

        <!-- Right -->
        <div class="space-y-6 animate-fade-up">
          <div class="rounded-[2rem] p-8 md:p-10 relative overflow-hidden group bg-white/5 border border-white/10 backdrop-blur-xl">
            
            <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileText :size="120" />
            </div>

            <div class="flex items-start gap-5 mb-8">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-blue-500/20 text-blue-400">
                <Info :size="24" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">Política de Devoluciones</h3>
                <p class="text-slate-400">
                  Revisa los términos clave de nuestra política de servicio.
                </p>
              </div>
            </div>

            <div class="space-y-6">
              <div class="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-emerald-500/20 text-emerald-400">
                  <Clock :size="20" />
                </div>
                <div>
                  <p class="text-sm font-medium text-white mb-1">Plazo de Solicitud</p>
                  <p class="text-sm text-slate-400">
                    Dentro de <span class="text-emerald-400 font-bold">4 días</span>.
                  </p>
                </div>
              </div>

              <div class="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-blue-500/20 text-blue-400">
                  <ShieldCheck :size="20" />
                </div>
                <div>
                  <p class="text-sm font-medium text-white mb-1">Estado del Producto</p>
                  <p class="text-sm text-slate-400">
                    Empaque original y sin uso.
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-8 border-t border-white/10">
              <p class="text-xs text-slate-500 uppercase tracking-widest">
                Pasado el plazo de 4 días, no se aceptan devoluciones.
              </p>
            </div>
          </div>

          <!-- Badges -->
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-emerald-500/10 text-emerald-400">
                <ShieldCheck :size="16" />
              </div>
              <span class="text-sm text-white">Garantía Total</span>
            </div>

            <div class="p-4 flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10 text-blue-400">
                <Clock :size="16" />
              </div>
              <span class="text-sm text-white">Soporte 24/7</span>
            </div>
          </div>
        </div>

      </div>
    </main>

    <!-- Footer -->
    <footer class="fixed bottom-8 left-1/2 -translate-x-1/2 z-20">
      <div class="flex items-center gap-6 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-semibold">
        <span>Términos</span>
        <div class="w-1 h-1 rounded-full bg-slate-700" />
        <span>Privacidad</span>
        <div class="w-1 h-1 rounded-full bg-slate-700" />
        <span>© 2026 Premium Portal</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ArrowRight, Download, Info, ShieldCheck, Clock, FileText } from "lucide-vue-next";
</script>

<style scoped>
/* Animaciones */
.animate-fade-left {
  animation: fadeLeft 0.8s ease-out;
}

.animate-fade-up {
  animation: fadeUp 0.8s ease-out;
}

@keyframes fadeLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>