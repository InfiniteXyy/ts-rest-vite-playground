import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  build: {
    rollupOptions: { output: { preserveModules: true } }, // to output multiple modules instead of a single bundle
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: 'src/index.ts',
      exportName: 'default',
    }),
  ],
});
