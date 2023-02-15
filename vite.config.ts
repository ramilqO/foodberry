import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/foodberry/",
	server: {
		port: 3000,
	},
	build: {
		outDir: "./build",
	},
	plugins: [react(), paths()],
});

