import { helper } from '@ember/component/helper';

export default helper(function isNull([value]) {
  return value === null || value === undefined || value === '';
});
