import { helper } from '@ember/component/helper';

export default helper(function prettyArray([array, prop]) {
  let output = array.map((item) => {
    return prop ? item[prop] : item;
  });
  return output && output.length > 0 ? output.join(', ') : '';
});
