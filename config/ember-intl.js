module.exports = function (/* environment */) {
  return {
    /**
     * Copy the fallback locale's translations to all other locales as a fallback strategy.
     *
     * @property fallbackLocale
     * @type {string|undefined}
     * @default undefined
     */
    fallbackLocale: undefined,

    /**
     * Path where translations are stored. This is relative to the project root.
     * For example, if your translations are a npm dependency, set this to:
     *`'./node_modules/path/to/translations'`
     *
     * @property inputPath
     * @type {string}
     * @default 'translations'
     */
    inputPath: 'translations',

    /**
     * Prevents the translations from being bundled with the application code.
     * This enables lazily loading the translations for the active locale
     * by fetching them from the asset folder of the build.
     *
     * See: https://ember-intl.github.io/ember-intl/docs/advanced/lazy-loading-translations
     *
     * @property publicOnly
     * @type {boolean}
     * @default false
     */
    publicOnly: false,

    /**
     * Add the subdirectories of the translations as a namespace for all keys.
     *
     * @property wrapTranslationsWithNamespace
     * @type {boolean}
     * @default false
     */
    wrapTranslationsWithNamespace: true,
  };
};
