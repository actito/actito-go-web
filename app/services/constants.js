import Service, { service } from '@ember/service';

export default class ConstantsService extends Service {
  @service intl;

  get defaultErrorTimeout() {
    return 8000;
  }
}
