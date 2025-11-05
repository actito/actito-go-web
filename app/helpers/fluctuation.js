import { helper } from '@ember/component/helper';

export default helper(function fluctuation([a, b]) {
  let percentage = 0,
    display;
  if (a !== null && a !== undefined && b !== null && b !== undefined) {
    if (parseFloat(a) !== 0 && parseFloat(b) === 0) {
      percentage = -100;
    } else if (parseFloat(a) === parseFloat(b)) {
      percentage = 0;
    } else {
      percentage = (a / b) * 100;
    }
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
