import { helper } from '@ember/component/helper';

export default helper(function numberMultiplication([a, b]) {
  return parseFloat(a) * parseFloat(b);
});
