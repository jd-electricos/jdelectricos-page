import { Base } from "./.nuxt/components.d";
// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/animationtopage.css"],
  modules: ["@nuxt/image"],
  image: {
    providers: {
      localProvider: {
        name: "localProvider",
        provider: "~/providers/local-provider.ts", // Ruta al proveedor personalizado
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Jd Eléctricos" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/img/logo/logo-jd-electricos.webp",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  nitro: {
    compressPublicAssets: true, // Simplemente true y Nitro aplicará gzip y brotli
    prerender: {
      crawlLinks: true,
    },
    // routeRules: {
    //   // Paginas principales cacheadas 1 semana
    //   "/tienda-articulos-electricos": {
    //     headers: {
    //       "cache-control": "public, max-age=604800, must-revalidate",
    //     },
    //   },
    //   "/contacto-jd-electricos-colombia": {
    //     headers: {
    //       "cache-control": "public, max-age=604800, must-revalidate",
    //     },
    //   },
    //   "/empresa-distribuidora-de-materiales-electricos-en-colombia": {
    //     headers: {
    //       "cache-control": "public, max-age=604800, must-revalidate",
    //     },
    //   },
    //   "/blog": {
    //     headers: {
    //       "cache-control": "public, max-age=604800, must-revalidate",
    //     },
    //   },
    //   // Rutas dinámicas (categorías, productos)
    //   "/:slug": {
    //     headers: {
    //       "cache-control": "public, max-age=604800, must-revalidate",
    //     },
    //   },
    //   // Archivos estáticos de /public (imagenes, logos, etc)
    //   "/logo/**": {
    //     headers: {
    //       "cache-control": "public, max-age=604800, immutable",
    //     },
    //   },
    //   "/images/**": {
    //     headers: {
    //       "cache-control": "public, max-age=604800, immutable",
    //     },
    //   },
    //   "/_nuxt/**": {
    //     headers: {
    //       "cache-control": "public, max-age=31536000, immutable",
    //     },
    //   },
    // },
  },
});
