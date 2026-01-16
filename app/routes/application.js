import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { formats } from '../ember-intl';
import translationsForEnUs from 'virtual:ember-intl/translations/en-us';

export default class ApplicationRoute extends Route {
  @service intl;
  @service actito;
  @service router;

  async beforeModel() {
    this.setupIntl();

    this.handleTheme();
    try {
      await this.actito.configure();
      await this.actito.launch();
    } catch (e) {
      this.router.transitionTo('fail');
    }
  }

  setupController(controller, model) {
    super.setupController(controller, model);
  }

  handleTheme() {
    let theme = window.localStorage.getItem('theme');
    if (!theme) {
      let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      window.localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-bs-theme', theme);
      document.documentElement.setAttribute('data-actito-theme', theme);
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
      document.documentElement.setAttribute('data-actito-theme', theme);
    }
  }

  setupIntl() {
    this.intl.addTranslations('en-us', translationsForEnUs)
    this.intl.setFormats(formats);
    this.intl.setLocale(['en-us']);
  }
}
