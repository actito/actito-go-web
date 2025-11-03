import { helper } from '@ember/component/helper';

export default helper(function timeDurationHumanize([value, unit]) {
  let v = 1,
    u = 'seconds';

  if (value) {
    v = value;
  }

  if (unit) {
    u = unit;
  }
  return window.moment.duration(v, u).humanize();
});
