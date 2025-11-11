import { helper } from '@ember/component/helper';

export default helper(function numberDivision([a, b]) {
  return parseFloat(a) / parseFloat(b);
});
