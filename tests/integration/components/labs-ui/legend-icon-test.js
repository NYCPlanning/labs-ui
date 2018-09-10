import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | legend-icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an icon with two stacked SVG lines', async function(assert) {

    this.set('icon', {
      "type": "line",
      "layers": [
        {
          "fill":"none",
          "stroke":"rgba(230, 50, 50, 0.3)",
          "stroke-width": 4
        },
        {
          "fill":"none",
          "stroke":"rgba(150, 50, 50, 1)"
        }
      ]
    });

    await render(hbs`{{labs-ui/legend-icon icon=icon}}`);
    const icon = await find('svg + svg');
    assert.equal(!!icon, true);
  });
});
