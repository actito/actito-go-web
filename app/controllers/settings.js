import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import EmberObject, { action } from '@ember/object';
import { restartableTask, timeout } from 'ember-concurrency';
import { A } from '@ember/array';

export default class SettingsController extends Controller {
  @service constants;
  @service actito;

  @tracked tags;
  @tracked allowedUI;
  @tracked allowedLocation;
  @tracked allowedDnd;
  @tracked dnd;
  @tracked app;
  @tracked version;

  @action
  async changeTag(tag, state) {
    try {
      if (state) {
        await this.actito.addTags([tag.id]);
      } else {
        await this.actito.removeTag(tag.id);
      }

      tag.set('active', state);
    } catch (e) {}
  }

  @action
  async changeNotifications(state) {
    try {
      if (state) {
        await this.actito.enableRemoteNotifications();
      } else {
        await this.actito.disableRemoteNotifications();
      }
      this.allowedUI = state;
    } catch (e) {}
  }

  @action
  async changeDnd(state) {
    try {
      if (state) {
        await this.actito.updateDoNotDisturb({
          start: '23:00',
          end: '08:00',
        });
      } else {
        await this.actito.clearDoNotDisturb();
      }
      this.loadDnd();
    } catch (e) {}
  }

  @action
  handleDndUpdate() {
    this.updateDnd.perform();
  }

  @action
  async changeLocation(state) {
    try {
      if (state) {
        await this.actito.enableLocationUpdates();
      } else {
        await this.actito.disableLocationUpdates();
      }
      this.allowedLocation = state;
    } catch (e) {}
  }

  onResetController() {
    this.tags = A([
      EmberObject.create({ id: 'topic_announcements', active: false }),
      EmberObject.create({ id: 'topic_best_practices', active: false }),
      EmberObject.create({ id: 'topic_product_updates', active: false }),
      EmberObject.create({ id: 'topic_marketing', active: false }),
      EmberObject.create({ id: 'topic_engineering', active: false }),
      EmberObject.create({ id: 'topic_staff', active: false }),
    ]);
  }

  onControllerLoaded() {
    this.device = this.actito.getCurrentDevice();
    this.allowedUI = this.actito.getAllowedUI();
    this.allowedLocation = this.actito.hasLocationServicesEnabled();
    this.loadTags();
    this.loadDnd();
    this.loadApplication();
    this.loadVersion();
  }

  async loadTags() {
    try {
      let result = await this.actito.fetchTags();

      this.tags.forEach((tag) => {
        tag.set('active', result.includes(tag.id));
      });

    } catch (e) {}
  }

  async loadDnd() {
    try {
      let result = await this.actito.fetchDoNotDisturb();
      this.allowedDnd = result ? true : false;
      this.dnd = result
        ? EmberObject.create({ start: result.start, end: result.end })
        : null;
    } catch (e) {
      this.allowedDnd = false;
      this.dnd = null;
    }
  }

  async loadApplication() {
    try {
      let result = await this.actito.fetchApplication();
      this.app = result;
    } catch (e) {
      this.app = null;
    }
  }

  async loadVersion() {
    try {
      let result = await window.fetch('/status.json');
      let response = await result.json();
      this.version = `v${response?.version}`;
    } catch (e) {
      this.version = 'v1.0.0';
    }
  }

  updateDnd = restartableTask(async () => {
    if (this.dnd.get('start') && this.dnd.get('end')) {
      await timeout(500);
      try {
        await this.actito.updateDoNotDisturb({
          start: this.dnd.get('start'),
          end: this.dnd.get('end'),
        });
      } catch (e) {
        console.error(`It was not possible to update the "Do not disturb" status:\n\n${e}`);
      }
    }
  })

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
