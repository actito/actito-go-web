import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { object } from 'yup';

export default class ValidatorService extends Service {
  @tracked results;
  schema;

  get error() {
    let error = {};
    if (this.results?.errors && this.results.errors.length > 0) {
      error[this.results.path] = this.results.errors[0];
    }
    return error;
  }

  createSchema(shape) {
    if (!shape) {
      console.warn('You need to provide a shape object');
      return;
    }
    this.schema = object().shape(shape);
  }

  async validate(props) {
    this.results = null;
    if (!props) {
      console.warn('You need to provide an object to be validated');
      return false;
    }
    if (!this.schema) {
      console.warn(
        'No schema has been defined yet, invoke createSchema(...) first'
      );
      return false;
    }
    try {
      await this.schema.validate(props);
      this.results = null;
      return true;
    } catch (e) {
      this.results = e;
      return false;
    }
  }
}
