import { Base } from "./.nuxt/components.d";
// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || "https://apijd.jdelectricos.com.co/api",
      apiBasesDos:
        process.env.API_BASE_DOS || "https://apijaps.jdelectricos.com.co/api",
    },
  },
  experimental: {
    inlineSSRStyles: true,
  },
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/animationtopage.css"],
  modules: ["@nuxt/image", "@nuxtjs/sitemap"],
  sitemap: {
    siteUrl: "https://jdelectricos.com.co",
    sources: ["/api/urls"],
    includeAppSources: true, // 👈 ESTA ES LA CLAVE
    trailingSlash: false,
  },
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
    build: {
      sourcemap: false,
    },
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
          href: "/img/logo/logo-menu-jd.webp",
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
    routeRules: {
      // Páginas principales
      "/": {
        headers: {
          "cache-control": "public, max-age=3600, stale-while-revalidate=600",
        },
      },
      "/tienda-articulos-electricos": {
        headers: {
          "cache-control": "public, max-age=3600, stale-while-revalidate=600",
        },
      },
      // Imágenes y logos
      "/img/logo/**": {
        headers: {
          "cache-control": "public, max-age=31536000, immutable",
        },
      },
      "/img/mobile/**": {
        headers: {
          "cache-control": "public, max-age=31536000, immutable",
        },
      },
      "/img/desktop/**": {
        headers: {
          "cache-control": "public, max-age=31536000, immutable",
        },
      },
      "/_nuxt/**": {
        headers: {
          "cache-control": "public, max-age=31536000, immutable",
        },
      },
      // APIs (si quieres caché SSR)
      "/api/**": {
        headers: {
          "cache-control": "public, max-age=60, stale-while-revalidate=30",
        },
      },
    },
  },
});
