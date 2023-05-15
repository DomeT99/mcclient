export default defineNuxtConfig({
  modules: ["@vite-pwa/nuxt", "@pinia/nuxt", "nuxt-vitest"],
  pwa: {
    includeAssets: ["favicon.ico", "apple-touch-icon.png", "logo.svg"],
    manifest: {
      name: "Micro-Commerce",
      short_name: "Micro-Commerce",
      description: "Everything you are looking for!✨",
      icons: [
        {
          src: "icons/icon-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/icon-120x120.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          src: "icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  css: ["/assets/scss/main.scss"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
