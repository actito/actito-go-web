import { helper } from '@ember/component/helper';

export default helper(function and(params) {
  for (let i = 0, len = params.length; i < len; i++) {
    if (params[i] === false) {
      return params[i];
    }
  }
  return params[params.length - 1];
});
