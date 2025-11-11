import Base from 'ember-simple-auth/authenticators/base';
import { Promise as EmberPromise } from 'rsvp';
import { inject as service } from '@ember/service';
import { run } from '@ember/runloop';

export default Base.extend({
  fetch: service(),

  async restore(data) {
    let now = new Date(),
      expires = new Date(data.expires);
    return data &&
      data.auth_token &&
      data.expires &&
      expires.getTime() > now.getTime()
      ? EmberPromise.resolve(data)
      : EmberPromise.reject();
  },

  async authenticate(options) {
    return await this.fetch.post('/sign-in', {
      data: JSON.stringify(options),
    });
  },

  invalidate() {
    return new EmberPromise((resolve) => {
      this.fetch
        .del('/sign-out')
        .then(() => {
          run(function (response) {
            resolve(response);
          });
        })
        .catch((error) => {
          run(function () {
            resolve(error.payload);
          });
        });
    });
  },
});
