import RESTAdapter from '@ember-data/adapter/rest';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends RESTAdapter {
  @service session;
  namespace = '/api/v2';
  get headers() {
    const headers = {};
    if (
      this.session &&
      this.session.data &&
      this.session.data.authenticated &&
      this.session.data.authenticated.auth_token
    ) {
      headers[
        'Authorization'
      ] = `Bearer ${this.session.data.authenticated.auth_token}`;
    }

    return headers;
  }

  handleResponse(status, headers, payload, requestData) {
    let response = super.handleResponse(...arguments);
    if (payload?.error) {
      response['status'] = status;
      let error = `${payload.error
        .charAt(0)
        .toUpperCase()}${payload.error.slice(1)}`;
      response['payload'] = { error: error };
    }
    return response;
  }

  urlForUpdateRecord(id, modelName, snapshot) {
    let url = super.urlForUpdateRecord(...arguments);
    let query = snapshot.include;
    if (query) {
      url += `?include=${query}`;
    }
    return url;
  }

  urlForCreateRecord(modelName, snapshot) {
    let url = super.urlForCreateRecord(...arguments);
    let query = snapshot.include;
    if (query) {
      url += `?include=${query}`;
    }
    return url;
  }

  urlForDeleteRecord(id, modelName, snapshot) {
    let url = super.urlForDeleteRecord(...arguments);
    let query = snapshot.include;
    if (query) {
      url += `?include=${query}`;
    }
    return url;
  }
}
