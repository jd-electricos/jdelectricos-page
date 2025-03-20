import { Base } from "./.nuxt/components.d";
// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
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
      link: [{ rel: "icon", type: "image/png", href: "/img/logo/logo-jd-electricos.webp" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
});
