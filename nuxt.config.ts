export default defineNuxtConfig({
  modules: ["@vite-pwa/nuxt", "@pinia/nuxt", "nuxt-vitest"],
  pwa: {
    includeAssets: ["favicon.ico", "apple-touch-icon.png", "logo.svg"],
    manifest: {
      name: "Micro-Commerce",
      short_name: "Micro-Commerce",
      description: "Everything you are looking for!✨",
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions:{
      enabled: true,
      type: "module",
    }
  },
});
