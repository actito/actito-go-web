import { helper } from '@ember/component/helper';

export default helper(function stripHtml([htmlString]) {
  if (!htmlString) return '';

  const doc = new DOMParser().parseFromString(htmlString, 'text/html');

  doc.querySelectorAll('br').forEach((br) => {
    br.replaceWith('\n');
  });

  return doc.body.textContent || '';
});
