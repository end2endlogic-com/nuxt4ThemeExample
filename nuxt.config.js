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

  css: ["primeicons/primeicons.css"],

  modules: ["@unocss/nuxt", "@vueuse/nuxt", "@primevue/nuxt-module"],

  unocss: {
    nuxtLayers: true,
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

  compatibilityDate: "2024-07-21",
});
