import { helper } from '@ember/component/helper';

export default helper(function defaultValue([value, defaultValue]) {
  return value === null || value === undefined || value === ''
    ? defaultValue
    : value;
});
