import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import { loadTranslations } from '@ember-intl/vite';
import { VitePWA } from 'vite-plugin-pwa';

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
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'worker',
      filename: 'sw.js',
      injectRegister: false,
      injectManifest: {
        injectionPoint: undefined
      },
      devOptions: {
        enabled: true,
      }
    })
  ],
});
