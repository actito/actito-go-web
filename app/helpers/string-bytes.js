import { helper } from '@ember/component/helper';

export default helper(function stringBytes([s]) {
  let bytes = 0;
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    if (code <= 0x7f) {
      bytes += 1;
    } else if (code <= 0x7ff) {
      bytes += 2;
    } else if (code >= 0xd800 && code <= 0xdfff) {
      // Surrogate pair: These take 4 bytes in UTF-8 and 2 chars in UCS-2
      // (Assume next char is the other [valid] half and just skip it)
      bytes += 4;
      i++;
    } else if (code < 0xffff) {
      bytes += 3;
    } else {
      bytes += 4;
    }
  }
  return bytes;
});
