import { module, test } from 'qunit';
import { setupRenderingTest } from 'actito-go-web/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | strip-html', function (hooks) {
  setupRenderingTest(hooks);

  test('when a valid html string is provided, it removes its html tags as expected', async function (assert) {
    this.set('inputValue', '<p>Hello, <b>World!</b></p>');

    await render(hbs`{{strip-html this.inputValue}}`);

    assert.dom(this.element).hasText('Hello, World!');
  });
});
