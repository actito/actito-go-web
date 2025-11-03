import { helper } from '@ember/component/helper';

export default helper(function isIn([a, p]) {
  let array = a || [],
    param = p || '';
  return array.includes(param);
});
