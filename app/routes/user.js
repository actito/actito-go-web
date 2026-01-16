import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class UserRoute extends Route {
  @service actito;
  @service router;

  @action
  refreshModel() {
    this.refresh();
  }

  beforeModel() {
    let device = this.actito.getCurrentDevice();
    if (!device.userId) {
      this.router.transitionTo('restricted');
    }
  }

  async model() {
    return this.actito.getCurrentDevice();
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.onResetController();
    controller.onControllerLoaded();
  }

  afterModel(model, transition) {
    this.actito.logCustomEvent('page_viewed.user_profile');
  }
}
