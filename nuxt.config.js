import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{blue.50}",
      100: "{blue.100}",
      200: "{blue.200}",
      300: "{blue.300}",
      400: "{blue.400}",
      500: "{blue.500}",
      600: "{blue.600}",
      700: "{blue.700}",
      800: "{blue.800}",
      900: "{blue.900}",
      950: "{blue.950}",
    },
  },
});

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-07-04",

  ssr: true,

  app: {
    head: {
      title: "Theme Tester",
    },
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  devtools: { enabled: true },

  css: ["primeicons/primeicons.css",
    "@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss"],

  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@primevue/nuxt-module",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
    "@formkit/nuxt",
  ],

  unocss: {
    nuxtLayers: true,
  },
  formkit: {
    autoImport: true
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    defaultLocale: "en",
    strategy: "no_prefix",
    locales: [
      { code: "en", file: "en.json", name: "English" },
      { code: "de", file: "de.json", name: "German" },
    ],
    vueI18n: "./vue-i18n.options.ts",
  },

  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: ".dark",
        },
      },
      ripple: true,
    },
    autoImport: false,
  },

  build: {
    transpile: ['formkit-primevue'],
  },

  sourcemap: {
    client: false,
    server: false,
  },
});
