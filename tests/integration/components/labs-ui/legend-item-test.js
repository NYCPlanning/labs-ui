import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | labs-ui/legend-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a label', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('item', {
      "label":"Foo",
      "tooltip": "Bar",
      "icon": {
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
      }
    });

    await render(hbs`{{labs-ui/legend-item item=item}}`);

    assert.equal(this.element.textContent.trim(), "Foo");
  });
});
