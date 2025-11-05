import { helper } from '@ember/component/helper';

export default helper(function lowercase([string]) {
  return string ? string.toLowerCase() : '';
});
