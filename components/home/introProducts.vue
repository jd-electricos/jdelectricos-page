<template>
  <section class="relative isolate overflow-hidden bg-slate-950 text-white">
    <div class="absolute inset-0 -z-20 bg-cover bg-center opacity-[0.035]" style="background-image: url('/img/logo/bodega-jd-electricos.jpg')" aria-hidden="true" />
    <div class="absolute -left-32 top-16 -z-10 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" aria-hidden="true" />
    <div class="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />

    <div class="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-28">
      <div>
        <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
          <span class="h-2 w-2 rounded-full bg-yellow-400" aria-hidden="true" />
          Distribución para empresas y proyectos
        </div>
        <h2 class="max-w-2xl font-serif text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          Distribuidores de materiales eléctricos
          <span class="text-yellow-400">en Colombia</span>
        </h2>
        <p class="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
          Atendemos empresas de ingeniería, contratistas, constructoras,
          industrias y operadores de redes que requieren productos eléctricos
          para construcción, mantenimiento e infraestructura.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink to="/tienda-articulos-electricos" class="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
            Explorar productos eléctricos <span class="ml-2" aria-hidden="true">→</span>
          </NuxtLink>
          <NuxtLink to="/contacto-jd-electricos-colombia" class="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Solicitar cotización
          </NuxtLink>
        </div>
      </div>

      <div class="relative mb-5">
        <div class="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/30">
          <NuxtImg src="/img/logo/IMAGE-STORE.webp" alt="Bodega y catálogo de productos eléctricos de JD Eléctricos" class="aspect-[4/3] w-full rounded-[1.25rem] object-cover" width="1600" height="1200" sizes="sm:100vw lg:50vw" loading="lazy" />
        </div>
        <div class="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/10 bg-slate-900/95 px-5 py-4 shadow-xl backdrop-blur sm:left-8 sm:right-auto sm:max-w-sm">
          <p class="text-sm font-semibold leading-6 text-slate-200">
            Cables, aisladores, pararrayos, herrajes, transformadores,
            interruptores y componentes de puesta a tierra.
          </p>
        </div>
      </div>
    </div>

    <div class="mx-auto grid max-w-7xl gap-4 px-6 pb-16 pt-4 sm:grid-cols-3 sm:px-10 lg:px-12 lg:pb-24">
      <article v-for="item in benefits" :key="item.title" class="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/[0.07]">
        <p class="text-sm font-bold uppercase tracking-wider text-yellow-400">{{ item.label }}</p>
        <h3 class="mt-2 text-lg font-bold">{{ item.title }}</h3>
        <p class="mt-2 text-sm leading-6 text-slate-400">{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  { label: "Asesoría", title: "Equipos eléctricos para proyectos", description: "Orientación para seleccionar referencias según las condiciones de cada instalación o red." },
  { label: "Proyectos", title: "Insumos eléctricos para empresas", description: "Cotizaciones para construcción, mantenimiento e infraestructura eléctrica." },
  { label: "Cobertura", title: "Suministros eléctricos en Colombia", description: "Distribución nacional coordinada desde nuestra sede en Bogotá." },
];
</script>
