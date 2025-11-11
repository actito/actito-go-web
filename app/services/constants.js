import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class ConstantsService extends Service {
  @service intl;

  get defaultErrorTimeout() {
    return 8000;
  }
}
