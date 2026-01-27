import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SettingsRoute extends Route {
  @service actito;
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.onResetController();
    controller.onControllerLoaded();
  }

  afterModel(model, transition) {
    this.actito.logCustomEvent('page_viewed.settings');
  }
}
