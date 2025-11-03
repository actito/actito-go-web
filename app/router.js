import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('unknown', { path: '/*path' });
  this.route('restricted');
  this.route('settings');
  this.route('products', function () {
    this.route('detail', { path: '/detail/:product_id' });
  });
  this.route('events');
  this.route('cart');
  this.route('inbox');
  this.route('user');
  this.route('fail');
});
