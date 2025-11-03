import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service constants;
  @service actito;
  @service('shopping-cart') cart;

  @action
  async removeItem(item, e) {
    e.preventDefault();
    this.cart.remove(item);
  }

  @action
  async purchase() {
    this.cart.purchase();
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
