import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.json'
    }),
    libCss(),
    svgLoader({
      defaultImport: 'url'
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
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueJsCodeBlock',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue',
        'src/components/generate-prism-languages/**/*',
        'src/components/generate-prism-languages/node_modules/*'
      ],
      output: {
        globals: {
          vue: 'Vue' // Global variable for Vue
        },
        exports: 'named' // Control export style
      }
    }
  }
});
