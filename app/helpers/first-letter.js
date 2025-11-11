import { helper } from '@ember/component/helper';

export default helper(function firstLetter([string]) {
  return string ? string.substring(0, 1) : string;
});
