import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { string } from 'yup';

export default class UserRowComponent extends Component {
  @service constants;
  @service actito;
  @service router;
  @service validator;
  @service intl;

  @tracked userId;
  @tracked userName;
  @tracked modalUser;
  @tracked isProcessing;
  @tracked isSuccess;
  @tracked hasServerError;
  @tracked serverError;
  @tracked error;

  @action
  async registerDevice() {
    this.clearDismissAlert();

    this.validator.createSchema({
      userId: string()
        .nullable()
        .required(this.intl.t('components.user.modalUser.form.userId.error')),
      userName: string()
        .nullable()
        .required(this.intl.t('components.user.modalUser.form.userName.error')),
    });

    let isValid = await this.validator.validate({
      userId: this.userId,
      userName: this.userName,
    });

    if (!isValid) {
      this.error = this.validator.error;
      this.dismissAlert();
    } else {
      try {
        this.isProcessing = true;
        await this.actito.registerDevice(
          this.userId.trim(),
          this.userName.trim()
        );
        this.userId = null;
        this.userName = null;
        this.isProcessing = false;
        this.modalUser = false;
        this.router.transitionTo('user');
      } catch (e) {
        this.isProcessing = false;
        this.hasServerError = true;
        this.dismissAlert();
      }
    }
  }

  constructor(...args) {
    super(...args);
    this.modalUser = false;
  }

  dismissAlert() {
    this.dismissTimeout = setTimeout(
      this.dismiss.bind(this),
      this.constants.defaultErrorTimeout
    );
  }

  dismiss() {
    this.isSuccess = false;
    this.hasServerError = false;
    this.serverError = null;
    this.error = null;
  }

  clearDismissAlert() {
    clearTimeout(this.dismissTimeout);
    this.dismiss();
  }
}
