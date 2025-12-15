import { helper } from '@ember/component/helper';

export default helper(function stripHtml([htmlString]) {
  if (!htmlString) return '';

  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  return doc.body.textContent || '';
});
