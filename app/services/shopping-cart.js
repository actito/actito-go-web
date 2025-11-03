import { A } from '@ember/array';
import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ShoppingCartService extends Service {
  @service actito;
  @tracked items = A([]);

  async add(item) {
    this.items.pushObject(item);
    await this.actito.logCustomEvent('add_to_cart', {
      product: {
        id: item.id,
        name: item.title,
        price: item.price,
        price_formatted: `€ ${item.price}`,
      },
    });
    this.updateCart();
  }

  async remove(item) {
    await this.actito.logCustomEvent('remove_from_cart', {
      product: {
        id: item.id,
        name: item.title,
        price: item.price,
        price_formatted: `€ ${item.price}`,
      },
    });
    this.updateCart();
    this.items.removeObject(item);
  }

  async empty() {
    this.items.clear();
    await this.actito.logCustomEvent('cart_cleared');
    this.updateCart();
  }

  get total() {
    return this.items
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);
  }

  async purchase() {
    let products = this.items.map((item) => {
      return {
        id: item.id,
        name: item.title,
        price: item.price,
        price_formatted: `€ ${item.price}`,
      };
    });
    await this.actito.logCustomEvent('purchase', {
      total_price: this.total,
      total_price_formatted: `€ ${this.total}`,
      total_items: this.items.length,
      products: products,
    });
    this.items.clear();
  }

  async updateCart() {
    let products = this.items.map((item) => {
      return {
        id: item.id,
        name: item.title,
        price: item.price,
        price_formatted: `€ ${item.price}`,
      };
    });
    await this.actito.logCustomEvent('cart_updated', {
      total_price: this.total,
      total_price_formatted: `€ ${this.total}`,
      total_items: this.items.length,
      products: products,
    });
  }
}
