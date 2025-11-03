import { helper } from '@ember/component/helper';

export default helper(function isEmptyCriteria([criteria]) {
  let output = true;
  if (
    criteria?.segments_criteria?.length ||
    criteria?.tags_criteria?.length ||
    criteria?.locations_criteria?.length ||
    criteria?.properties_criteria?.length ||
    criteria?.user_data_criteria?.length
  ) {
    output = false;
  }
  return output;
});
