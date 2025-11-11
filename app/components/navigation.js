import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NavigationComponent extends Component {
  @service('shopping-cart') cart;
  @tracked theme;
  @action
  changeTheme(theme, e) {
    e.preventDefault();
    window.localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.setAttribute('data-actito-theme', theme);
    this.theme = theme;
  }

  constructor(...args) {
    super(...args);
    this.theme = window.localStorage.getItem('theme');
  }
}
