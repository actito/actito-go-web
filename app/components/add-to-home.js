import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class AddToHomeComponent extends Component {
  @service constants;

  @tracked showBanner;

  @action
  close(e) {
    e.preventDefault();
    this.showBanner = false;
  }

  get iOSVersion() {
    if (this.isPhoneOrTablet) {
      let match = navigator.userAgent.match(/OS (\d)?\d_\d(_\d)?/i),
        version = match.length ? match[0] : 'OS 1_0_0';
      let info = version.replace('_', '.').replace('_', '').replace('OS ', '');
      return info;
    }
  }

  get isPhoneOrTablet() {
    return typeof navigator !== 'undefined' &&
    navigator.userAgent.match(/ipad|iphone/i);
  }

  get isEligible() {
    return (
      typeof navigator !== 'undefined' &&
      this.isPhoneOrTablet &&
      this.iOSVersion >= 16.4 &&
      navigator.standalone === false
    );
  }

  constructor(...args) {
    super(...args);
    this.showBanner = this.isEligible;
  }
}
