import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react' // or whatever plugin you already have
// import { visualizer } from 'rollup-plugin-visualizer'

// export default defineConfig({
//   plugins: [
//     react(), // keep your existing plugins here, just add visualizer alongside
//     visualizer({ open: true, gzipSize: true, filename: 'stats.html' })
//   ]
// })