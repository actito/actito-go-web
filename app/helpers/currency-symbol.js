import { helper } from '@ember/component/helper';

export default helper(function currencySymbol([currency]) {
  switch (currency) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    default:
      return currency;
  }
});
