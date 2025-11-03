import { module, test } from 'qunit';
import { setupTest } from 'actito-go-web/tests/helpers';

module('Unit | Controller | domain/edit', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:domain/edit');
    assert.ok(controller);
  });
});
