import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HomeController extends Controller {
  @service constants;
  @service actito;

  @tracked slides;

  onResetController() {
    this.slides = [];
  }

  onControllerLoaded() {
    this.loadHero();
  }

  async loadHero() {
    try {
      let response = await this.actito.fetchAssets('hero');
      this.slides = response.map((a) => {
        return {
          src: a.url,
          alt: a.title,
        };
      });
    } catch (e) {
      this.slides = [];
    }
  }

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
