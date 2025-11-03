import { module, test } from 'qunit';
import { setupTest } from 'actito-go-web/tests/helpers';

module('Unit | Route | products/detail', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:products/detail');
    assert.ok(route);
  });
});
