import { paraglide } from "@inlang/paraglide-sveltekit/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: "./project.inlang",
			outdir: "./src/lib/libs/i18n",
		}),

		Icons({
			compiler: "svelte",
			defaultClass: "size-4 flex-shrink-0",
		}),
	],

	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
	server: {
		port: 3000,
		host: "0.0.0.0",
	},
	// esbuild: {
	//     drop: mode === "production" ? ["console", "debugger"] : [],
	// },
});
