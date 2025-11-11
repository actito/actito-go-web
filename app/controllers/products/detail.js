import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject, { action } from '@ember/object';

export default class ProductsDetailController extends Controller {
  @service constants;
  @service actito;
  @service('shopping-cart') cart;

  @action
  async addToCart() {
    this.cart.add(EmberObject.create(this.model));
  }

  onResetController() {}

  onControllerLoaded() {}

  dismissAlert() {
    this.dismissTimeout = setTimeout(
      this.dismiss.bind(this),
      this.constants.defaultErrorTimeout
    );
  }

  dismiss() {}

  clearDismissAlert() {
    clearTimeout(this.dismissTimeout);
    this.dismiss();
  }
}
