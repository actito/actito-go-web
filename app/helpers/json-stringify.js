import { helper } from '@ember/component/helper';

export default helper(function jsonStringify([data]) {
  return data ? JSON.stringify(data, null, '\t') : '';
});
