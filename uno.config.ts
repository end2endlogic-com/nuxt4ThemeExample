// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    [
      "btn",
      "px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50",
    ],
  ],
  theme: {
    colors: {
      primary: "var(--p-primary-color)",
      secondary: "var(--p-secondary-color)",
    },
  },
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
