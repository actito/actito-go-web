import { helper } from '@ember/component/helper';

export default helper(function or(params) {
  for (let i = 0, len = params.length; i < len; i++) {
    if (params[i] === true) {
      return params[i];
    }
  }
  return params[params.length - 1];
});
