import { module, test } from 'qunit';
import { setupRenderingTest } from 'actito-go-web/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | inbox/no-data', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Inbox::NoData />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Inbox::NoData>
        template block text
      </Inbox::NoData>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
