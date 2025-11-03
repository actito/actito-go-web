import { helper } from '@ember/component/helper';

export default helper(function percentage([a, b]) {
  let percentage = 0,
    display;
  if (a && b) {
    percentage = (a / b) * 100;
  }

  let format = percentage.toFixed(4).split('.');

  if (parseInt(format[1]) === 0) {
    display = percentage.toFixed(0);
  } else {
    if (parseInt(format[0]) === 0 && parseInt(format[1]) > 0) {
      display = percentage.toFixed(3);
    } else {
      display = percentage.toFixed(2);
    }
  }

  return display;
});
