'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { compatBuild } = require('@embroider/compat');

module.exports = async function (defaults) {
  const { buildOnce } = await import('@embroider/vite');

  let app = new EmberApp(defaults, {
    fingerprint: {
      exclude: [
        'robots.txt',
        'assets/images/no-gravatar-blue.png',
        'assets/icons/android-icon-36x36.png',
        'assets/icons/android-icon-48x48.png',
        'assets/icons/android-icon-72x72.png',
        'assets/icons/android-icon-96x96.png',
        'assets/icons/android-icon-144x144.png',
        'assets/icons/android-icon-192x192.png',
      ],
    },
    'ember-bootstrap': {
      bootstrapVersion: 5,
      importBootstrapCSS: false,
    },
    babel: {
      plugins: [
        require.resolve('ember-concurrency/async-arrow-task-transform'),
      ],
    },
    emberData: {
      deprecations: {
        // New projects can safely leave this deprecation disabled.
        // If upgrading, to opt-into the deprecated behavior, set this to true and then follow:
        // https://deprecations.emberjs.com/id/ember-data-deprecate-store-extends-ember-object
        // before upgrading to Ember Data 6.0
        DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
      },
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import(
    'node_modules/@actito/web-in-app-messaging/dist/actito-in-app-messaging.css'
  );
  app.import('node_modules/@actito/web-push/dist/actito-push.css');
  app.import('node_modules/@actito/web-push-ui/dist/actito-push-ui.css');

  return compatBuild(app, buildOnce);
};
