import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import EmberObject, { action } from '@ember/object';
import { restartableTask, timeout } from 'ember-concurrency';

export default class UserController extends Controller {
  @service constants;
  @service actito;
  @service router;

  @tracked userDataFields;

  @action
  async unregisterDevice(e) {
    e.preventDefault();
    try {
      await this.actito.registerDevice(null, null);
      this.router.transitionTo('settings');
    } catch (e) {}
  }

  @action
  handleFieldsUpdate() {
    this.updateUserDataFields.perform();
  }

  @action
  handleToggleUpdate(field, state) {
    field.set('value', state);
    this.updateUserDataFields.perform();
  }

  onResetController() {
    this.userDataFields = [];
  }

  onControllerLoaded() {
    this.loadUserDataFields();
  }

  async loadUserDataFields() {
    try {
      let userData = await this.actito.fetchUserData();
      let result = await this.actito.fetchApplication();
      this.userDataFields = result?.userDataFields.map((f) => {
        f.value = this.sanitizeInputValues(f, userData);
        return EmberObject.create(f);
      });
    } catch (e) {
      this.userDataFields = [];
    }
  }

  @restartableTask
  *updateUserDataFields() {
    yield timeout(500);
    try {
      yield this.actito.updateUserData(this.sanitizeOutputValues());
    } catch (e) {}
  }

  sanitizeInputValues(field, userData) {
    let v = userData[field.key],
      output = v || null;
    if (field.type == 'boolean') {
      output = v === 'true' ? true : false;
    } else if (field.type == 'date') {
      output = v ? new Date(v).toISOString().slice(0, 10) : null;
    }
    return output;
  }

  sanitizeOutputValues() {
    let output = Object.fromEntries(
      this.userDataFields.map((obj) => {
        let value = obj.value;
        if (obj.type === 'boolean') {
          value = obj.value ? 'true' : false;
        }
        return [obj.key, value];
      })
    );
    return output;
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
