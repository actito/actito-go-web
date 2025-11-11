import { helper } from '@ember/component/helper';

export default helper(function jsonParse([data]) {
  return data ? JSON.parse(data) : '';
});
