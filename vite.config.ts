import { enhancedImages } from "@sveltejs/enhanced-img";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    options: { typeAware: true, typeCheck: true },
    ignorePatterns: [".agents/**", ".claude/**"],
  },
  fmt: {
    ignorePatterns: [".agents/**", ".claude/**"],
  },
  plugins: [enhancedImages(), svelte(), tailwindcss()],
});
