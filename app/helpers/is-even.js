import { helper } from '@ember/component/helper';

export default helper(function isEven([params]) {
  return params % 2 == 0;
});
