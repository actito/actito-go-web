import { helper } from '@ember/component/helper';

export default helper(function isArray([param]) {
  return Array.isArray(param);
});
