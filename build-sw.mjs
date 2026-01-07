import { build } from 'vite';

await build({
  configFile: false,
  publicDir: false,
  build: {
    outDir: 'public',
    rollupOptions: {
      input: 'worker/index.js',
      output: {
        entryFileNames: 'sw.js',
      },
    },
    emptyOutDir: false,
  },
});
