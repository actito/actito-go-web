import { helper } from '@ember/component/helper';

export default helper(function numberSum([a, b]) {
  return parseFloat(a) + parseFloat(b);
});
