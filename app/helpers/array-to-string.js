import { helper } from '@ember/component/helper';

export default helper(function arrayToString([array]) {
  return array?.length ? array.toString() : '';
});
