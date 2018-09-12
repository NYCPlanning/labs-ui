import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | layer-groups-container', function(hooks) {
  setupRenderingTest(hooks);

  test('it toggles closed', async function(assert) {
    await render(hbs`{{labs-ui/layer-groups-container title='Foo'}}`);
    await click('.layer-groups-container-title');
    const layerGroupsContainerContent = await find('.layer-groups-container-content');

    assert.equal(!!layerGroupsContainerContent, false);
  });

  test('it toggles open', async function(assert) {
    await render(hbs`{{labs-ui/layer-groups-container title='Foo' open=false}}`);
    await click('.layer-groups-container-title');
    const layerGroupsContainerContent = await find('.layer-groups-container-content');

    assert.equal(!!layerGroupsContainerContent, true);
  });

  test('it renders the title', async function(assert) {
    await render(hbs`{{labs-ui/layer-groups-container open=false title='Foo'}}`);
    const title = await find('.layer-groups-container-title').textContent.trim();

    assert.equal(title, 'Foo');
  });

  test('it yields the block', async function(assert) {
    await render(hbs`{{#labs-ui/layer-groups-container title='Foo'}}Bar{{/labs-ui/layer-groups-container}}`);
    const layerGroupsContainerContent = await find('.layer-groups-container-content').textContent.trim();

    assert.equal(layerGroupsContainerContent, 'Bar');
  });

  skip('it shows a count of active children', async function() {

  });
});