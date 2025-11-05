import { helper } from '@ember/component/helper';

export default helper(function nor(params) {
  let output = true;
  for (let i = 0, len = params.length; i < len; i++) {
    if (params[i] === true) {
      output = false;
    }
  }
  return output;
});
