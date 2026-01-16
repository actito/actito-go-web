import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SwitchComponent extends Component {
  get value() {
    return this.args.value;
  }

  @action
  onChange(e) {
    const onChange = this.args.onChange;

    if (typeof onChange === 'function') {
      onChange(e.target.checked);

      // The click on input/label will toggle the input unconditionally.
      // Input state has to be updated manually to prevent it going out of
      // sync in case the action didn't update value.
      const checkbox = e.target;

      if (checkbox.checked !== this.value) {
        checkbox.checked = this.value;
      }
    }
  }

  constructor() {
    super(...arguments);
  }
}
