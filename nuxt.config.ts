// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "shadcn-nuxt",
    "@nuxtjs/tailwindcss",
    "radix-vue/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  image: { domains: ["https://cdn.dummyjson.com"] },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
