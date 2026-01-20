import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import { loadTranslations } from '@ember-intl/vite';
import { build } from 'esbuild';

export default defineConfig({
  server: {
    port: 4303,
  },
  plugins: [
    classicEmberSupport(),
    ember(),
    // extra plugins here
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
    loadTranslations(),
    {
      name: 'compile-sw',
      async buildStart() {
        await build({
          entryPoints: ['worker/sw.js'],
          outfile: 'public/sw.js',
          bundle: true,
          minify: true,
        });
      },
    },
  ],
});
