import { helper } from '@ember/component/helper';

export default helper(function neq([l, r]) {
  return l !== r;
});
