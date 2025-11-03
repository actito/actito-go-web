import { helper } from '@ember/component/helper';

export default helper(function numberAbbreviator([number]) {
  let display = 0;
  if (number && number > 0) {
    const nf = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
      maximumFractionDigits: 1,
    });
    display = nf.format(number);
    // let si = [
    //     { value: 1e18, symbol: 'E' },
    //     { value: 1e15, symbol: 'P' },
    //     { value: 1e12, symbol: 'T' },
    //     { value: 1e9, symbol: 'G' },
    //     { value: 1e6, symbol: 'M' },
    //     { value: 1e3, symbol: 'k' },
    //   ],
    //   i;
    //
    // for (i = 0; i < si.length; i++) {
    //   if (number >= si[i].value) {
    //     return (
    //       (number / si[i].value)
    //         .toFixed(1)
    //         .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    //     );
    //   }
    // }
    // display = number.toString();
  }

  return display;
});
