import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | labs-ui/icon-tooltip', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an icon', async function(assert) {
    await render(hbs`{{labs-ui/icon-tooltip icon="map-marked-alt" tip="This is the tooltip text."}}`);

    const icon = find('.fa-map-marked-alt');
    assert.equal(!!icon, true);
  });
});
