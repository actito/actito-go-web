import { helper } from '@ember/component/helper';

export default helper(function isNin([a, p]) {
  let array = a || [],
    param = p || '';
  return !array.includes(param);
});
