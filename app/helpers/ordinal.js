import { helper } from '@ember/component/helper';

export default helper(function ordinal([number]) {
  let ords = ['', 'st', 'nd', 'rd'],
    m = number % 100;
  let ordinal = m > 10 && m < 14 ? 'th' : ords[m % 10] || 'th';
  return number + ordinal;
});
