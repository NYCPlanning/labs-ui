import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | layer-group-toggle', function(hooks) {
  setupRenderingTest(hooks);

  test('it opens and closes on click', async function(assert) {
    await render(hbs`<LabsUi::LayerGroupToggle @label="Foo" @active={{true}} >Bar</LabsUi::LayerGroupToggle>`);
    await click('.layer-group-toggle-label');
    const content = find('.layer-group-toggle-content');
    assert.equal(!!content, false);

    await click('.layer-group-toggle-label');
    const content2 = find('.layer-group-toggle-content');
    assert.equal(!!content2, true);
  });

  test('it yields content when open', async function(assert) {
    await render(hbs`<LabsUi::LayerGroupToggle @label="Foo" @active={{true}} >Bar</LabsUi::LayerGroupToggle>`);
    const content = find('.layer-group-toggle-content').textContent.trim();
    assert.equal(content, 'Bar');
  });

  test('it shows a title', async function(assert) {
    await render(hbs`{{labs-ui/layer-group-toggle label='Foo'}}`);
    const title = await find('.layer-group-toggle-header .layer-group-toggle-label').textContent.trim();
    assert.equal(title, 'Foo');
  });

  test('accepts a for property to lookup an object', async function(assert) {
    await render(hbs`{{labs-ui/layer-group-toggle label='Foo'}}`);
    const title = await find('.layer-group-toggle-header .layer-group-toggle-label').textContent.trim();
    assert.equal(title, 'Foo');
  });
});
