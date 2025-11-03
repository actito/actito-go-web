import { helper } from '@ember/component/helper';

export default helper(function lt([l, r]) {
  return parseInt(l) < parseInt(r);
});
