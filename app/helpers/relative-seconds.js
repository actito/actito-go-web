import { helper } from '@ember/component/helper';

export default helper(function relativeSeconds([seconds]) {
  let value = parseInt(seconds),
    output = 0,
    period = 'seconds';
  if (value % 86400 === 0) {
    output = value / 60 / 60 / 24;
    period = output === 1 ? 'day' : 'days';
  } else if (value % 3600 === 0) {
    output = value / 60 / 60;
    period = output === 1 ? 'hour' : 'hours';
  } else if (value % 60 === 0) {
    output = value / 60;
    period = output === 1 ? 'minute' : 'minutes';
  } else {
    output = value;
    period = output === 1 ? 'second' : 'seconds';
  }
  return `${output} ${period}`;
});
