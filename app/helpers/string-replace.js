import { helper } from '@ember/component/helper';

export default helper(function stringReplace([string, regex, replacement]) {
  let output = string;
  if (string && regex) {
    let r = new RegExp(regex, 'g');
    output = string.replace(r, replacement);
  }
  return output;
});
