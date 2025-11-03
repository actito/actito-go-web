import { helper } from '@ember/component/helper';

export default helper(function numberSubtraction([a, b]) {
  return parseFloat(a) - parseFloat(b);
});
