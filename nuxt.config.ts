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
  hooks: {
    'pages:extend'(routes) {
      // Modificar la ruta de las categorías
      const categoryIndex = routes.findIndex(route => route.path.startsWith('/categories/'));
      if (categoryIndex !== -1) {
        routes[categoryIndex].path = '/:slugCategory';
        routes[categoryIndex].name = 'slugCategory';
        console.log("✅ Ruta de categoría modificada:", routes[categoryIndex]);
      }

      // Modificar la ruta de los productos
      const productIndex = routes.findIndex(route => route.path.startsWith('/products/'));
      if (productIndex !== -1) {
        routes[productIndex].path = '/:slugProduct';
        routes[productIndex].name = 'slugProduct';
        console.log("✅ Ruta de producto modificada:", routes[productIndex]);
      }
    }
  }
});
