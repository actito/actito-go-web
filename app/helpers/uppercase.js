import { helper } from '@ember/component/helper';

export default helper(function uppercase([string]) {
  return string ? string.toUpperCase() : '';
});
