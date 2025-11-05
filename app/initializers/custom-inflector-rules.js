import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  const inflector = Inflector.inflector;
  inflector.irregular('billing', 'billing');
}

export default {
  name: 'custom-inflector-rules',
  initialize,
};
