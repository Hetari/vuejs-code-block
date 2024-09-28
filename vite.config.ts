import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Your library entry point
      name: 'VueJsCodeBlock',
      fileName: 'index', // Output file name
      formats: ['es', 'cjs'] // Output formats
    },
    rollupOptions: {
      external: ['vue'], // Externalize dependencies
      output: {
        globals: {
          vue: 'Vue' // Global variable for Vue
        },
        exports: 'named' // Control export style
      }
    }
  }
});
