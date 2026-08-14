<template>
  <section class="xl:grid xl:grid-cols-2 lg:flex lg:flex-col gap-12 xl:px-44 xl:py-24 p-8 items-center" aria-labelledby="tension-title">
    <div class="flex flex-col gap-8">
      <h2 id="tension-title" class="font-bold text-3xl sm:text-4xl text-gray-800 text-center">
        Materiales eléctricos para redes de baja, media y alta tensión
      </h2>
      <NuxtImg
        src="/img/logo/banner-distribuidores.webp"
        width="1600"
        height="900"
        sizes="sm:100vw lg:50vw"
        loading="lazy"
        alt="Materiales eléctricos para redes de distribución e infraestructura"
        class="w-full h-auto rounded-lg shadow-md"
      />
      <p class="font-bold text-sm text-gray-800 text-center">
        Distribución nacional desde nuestra sede en Bogotá.
      </p>
    </div>

    <div class="space-y-6">
      <article>
        <h3 class="text-xl font-bold text-gray-900">Materiales eléctricos de baja tensión</h3>
        <p class="mt-2">
          Suministramos cables, interruptores, componentes de puesta a tierra y
          equipos para instalaciones eléctricas, tableros y aplicaciones industriales.
        </p>
      </article>
      <article>
        <h3 class="text-xl font-bold text-gray-900">Productos eléctricos para redes de media tensión</h3>
        <p class="mt-2">
          Contamos con aisladores, pararrayos, cortacircuitos, conectores,
          herrajes y cables para construcción, mantenimiento y expansión de redes.
        </p>
      </article>
      <article>
        <h3 class="text-xl font-bold text-gray-900">Soluciones para infraestructura de alta tensión</h3>
        <p class="mt-2">
          Asesoramos la compra de componentes para infraestructura y proyectos
          de transmisión, de acuerdo con las referencias disponibles en nuestro catálogo.
        </p>
      </article>
      <p>
        Como distribuidor para el sector eléctrico, apoyamos la planeación de
        compras, la selección de equipos eléctricos y el despacho de insumos
        para proyectos en Colombia.
      </p>
      <NuxtLink
        to="/tienda-articulos-electricos"
        class="inline-flex font-bold text-gray-900 underline decoration-yellow-400 decoration-2 underline-offset-4"
      >
        Explorar productos para redes eléctricas
      </NuxtLink>
    </div>
  </section>
</template>
