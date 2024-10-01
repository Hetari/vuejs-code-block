// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///run/media/brhoom/Brhoom/Vscode/CV/vuejs-code-block/node_modules/vite/dist/node/index.js";
import vue from "file:///run/media/brhoom/Brhoom/Vscode/CV/vuejs-code-block/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///run/media/brhoom/Brhoom/Vscode/CV/vuejs-code-block/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/run/media/brhoom/Brhoom/Vscode/CV/vuejs-code-block";
var __vite_injected_original_import_meta_url = "file:///run/media/brhoom/Brhoom/Vscode/CV/vuejs-code-block/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.json"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    target: "es2015",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      // Your library entry point
      name: "VueJsCodeBlock",
      fileName: "index",
      // Output file name
      formats: ["es", "cjs"]
      // Output formats
    },
    rollupOptions: {
      external: ["vue", "prismjs/themes/prism.css"],
      output: {
        globals: {
          vue: "Vue"
          // Global variable for Vue
        },
        exports: "named"
        // Control export style
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcnVuL21lZGlhL2JyaG9vbS9Ccmhvb20vVnNjb2RlL0NWL3Z1ZWpzLWNvZGUtYmxvY2tcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ydW4vbWVkaWEvYnJob29tL0JyaG9vbS9Wc2NvZGUvQ1YvdnVlanMtY29kZS1ibG9jay92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vcnVuL21lZGlhL2JyaG9vbS9Ccmhvb20vVnNjb2RlL0NWL3Z1ZWpzLWNvZGUtYmxvY2svdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGR0cyh7XG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgICAgdHNjb25maWdQYXRoOiAnLi90c2NvbmZpZy5qc29uJ1xuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXMyMDE1JyxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLCAvLyBZb3VyIGxpYnJhcnkgZW50cnkgcG9pbnRcbiAgICAgIG5hbWU6ICdWdWVKc0NvZGVCbG9jaycsXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JywgLy8gT3V0cHV0IGZpbGUgbmFtZVxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSAvLyBPdXRwdXQgZm9ybWF0c1xuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgJ3ByaXNtanMvdGhlbWVzL3ByaXNtLmNzcyddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnIC8vIEdsb2JhbCB2YXJpYWJsZSBmb3IgVnVlXG4gICAgICAgIH0sXG4gICAgICAgIGV4cG9ydHM6ICduYW1lZCcgLy8gQ29udHJvbCBleHBvcnQgc3R5bGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVSxTQUFTLGVBQWUsV0FBVztBQUM5VyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUpoQixJQUFNLG1DQUFtQztBQUFxSyxJQUFNLDJDQUEyQztBQU0vUCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxNQUNsQixjQUFjO0FBQUEsSUFDaEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUEsTUFDVixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUE7QUFBQSxJQUN2QjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLE9BQU8sMEJBQTBCO0FBQUEsTUFDNUMsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBO0FBQUEsUUFDUDtBQUFBLFFBQ0EsU0FBUztBQUFBO0FBQUEsTUFDWDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
