import { module, test } from 'qunit';
import { setupTest } from 'actito-go-web/tests/helpers';

module('Unit | Controller | link/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:link/index');
    assert.ok(controller);
  });
});
