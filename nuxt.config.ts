// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
  ],
  css: ["./assets/css/tailwind.css"],
  vite: { plugins: [tailwindcss()] },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
  ssr: false,
  colorMode: {
    classSuffix: "",
  },
  runtimeConfig: {
    app: {},
    public: {
      apiBase: "",
      tinyEditorApiKey: "",
      firebaseConfig: JSON.stringify({
        apiKey: "AIzaSyBbLtFYvYm4Hsi5-Wm2HkO02dPkpywB0uo",
        authDomain: "neste-e98ac.firebaseapp.com",
        projectId: "neste-e98ac",
        storageBucket: "neste-e98ac.appspot.com",
        messagingSenderId: "666248768541",
        appId: "1:666248768541:web:14229321d69ad91c28aaf4",
        measurementId: "G-PHKNRTDMZ5",
      }),
    },
  },
  fonts: {
    families: [
      { name: "Plus Jakarta Sans", provider: "google" },
      { name: "Space Grotesk", provider: "google" },
    ],
    experimental: {
      processCSSVariables: true,
    },
  },
});
