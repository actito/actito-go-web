import { helper } from '@ember/component/helper';

export default helper(function eq([l, r]) {
  return l === r;
});
