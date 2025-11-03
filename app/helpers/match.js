import { helper } from '@ember/component/helper';

export default helper(function match([lhs, rhs]) {
  let reg = new RegExp(rhs),
    occurrences = [];
  if (lhs && lhs.match(reg)) {
    occurrences = lhs.match(reg);
  }
  return occurrences.length ? true : false;
});
