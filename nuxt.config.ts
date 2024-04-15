// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt", "@nuxtjs/google-fonts"],
  css: ["~/assets/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/element/index.scss" as *;',
        },
      },
    },
  },
  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
  },
  googleFonts: {
    families: {
      "Noto Sans TC": "200..700",
      "Noto Sans": "200..700",
    },
  },
});
