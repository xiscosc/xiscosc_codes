import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
	lint: {
		options: { typeAware: true, typeCheck: true },
		ignorePatterns: [".agents/**", ".claude/**", ".svelte-kit/**"],
	},
	fmt: {
		ignorePatterns: [".agents/**", ".claude/**", ".svelte-kit/**"],
	},
	plugins: [enhancedImages(), sveltekit(), tailwindcss()],
});
