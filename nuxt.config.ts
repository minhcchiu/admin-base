import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-11-01",
  future: { compatibilityVersion: 4 },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
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
  colorMode: {
    classSuffix: "",
  },
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
      pathPrefix: false,
    },
  ],
});
