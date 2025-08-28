import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import { compression } from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "thumb.png"],
      manifest: {
        name: "Leonardo Schwedler - Portfolio",
        short_name: "Leo Portfolio",
        description: "Portfolio de Leonardo Schwedler - Desenvolvedor Mobile",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "192x192",
            type: "image/x-icon",
          },
        ],
      },
    }),
    compression({
      algorithm: "gzip",
      exclude: [/\.(br)$ /, /\.(gz)$/],
    }),
    compression({
      algorithm: "brotliCompress",
      exclude: [/\.(br)$ /, /\.(gz)$/],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
}));
