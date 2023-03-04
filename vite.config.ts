import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/foodberry/",
	server: {
		port: 3000,
		open: 'http://127.0.0.1:3000/foodberry/'
	},
	build: {
		outDir: "./build",
	},
	plugins: [react(), paths()],
});

